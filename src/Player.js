import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import SliderComp from './SliderComp'
import TrackPlayer, {Capability, Event} from 'react-native-track-player'
import songs from "./data.json";
import Controller from "./Controller";
import { COLORS } from "../constants";

const { width, height } = Dimensions.get("window");

export default function Player() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const isPlayerReady = useRef(false)

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {

    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);

      setSongIndex(val);

    });

    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (e)=>{
      console.log(e);
    });

    TrackPlayer.setupPlayer().then(async()=>{
      console.log('Player Ready');
      await TrackPlayer.reset()
      await TrackPlayer.add(songs)
      isPlayerReady.current = true;
      TrackPlayer.play()

      await TrackPlayer.updateOptions({
        stopWithApp: false,
        alwaysPauseOnInterruption: true,
        capabilities:[
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious
        ],
      })
      TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (e) => {
        console.log('song ended', e);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id

        console.log('track id', trackId, 'index', index.current);

        if (trackId !== index.current) {
          setSongIndex(trackId);
          isItFromUser.current = false;

          if (trackId > index.current) {
            goNext();
          } else {
            goPrv();
          }
          setTimeout(() => {
            isItFromUser.current = true;
          }, 200);
        }

         //isPlayerReady.current = true;
      });

      //monitor intterupt when other apps start playing music
      TrackPlayer.addEventListener(Event.RemoteDuck, (e) => {
         console.log(e);
        if (e.paused) {
          // if pause true we need to pause the music
          TrackPlayer.pause();
        } else {
          TrackPlayer.play();
        }
      })
    });

    return () => {
      scrollX.removeAllListeners();
    };

    
  }, []);

  useEffect(() => {
    if(isPlayerReady.current){
      TrackPlayer.skip(songs[songIndex].id)
    }
  }, [songIndex])

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: "center",
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100
              ),
            },
          ],
        }}
      >
        <Animated.Image
          source={{uri: item.artwork}}
          style={{ width: 320, height: 320, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ height: 320 }}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </SafeAreaView>
      <View>
        <Text style={styles.title}>{songs[songIndex].title}</Text>
        <Text style={styles.artist}>{songs[songIndex].artist}</Text>
      </View>
            <SliderComp/>
      <Controller onNext={goNext} onPrv={goPrv} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
    color: COLORS.white
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
    color: COLORS.white
  },
  container: {
    justifyContent: "space-evenly",
    alignItems:'center',
    height: height,
    maxHeight: 500,
  },
});