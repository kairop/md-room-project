import React, {  useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrackPlayer, {usePlaybackState} from 'react-native-track-player'

export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState("paused")

  useEffect(() => {
    if (playbackState === "playing" || playbackState === 3){
      setIsPlaying("playing") 
    }else if (playbackState === "paused" || playbackState === 2){
      setIsPlaying("paused")     
    }else{
      setIsPlaying("loading") 
    }
    //console.log(playbackState);

  }, [playbackState])

const renderPlayPauseBtn = ()=>{
  //console.log(isPlaying);
  switch (isPlaying) {
    case "playing":
      return <MaterialIcons name="pause" color="#fff" size={45} />
  
      case "paused":
      return <MaterialIcons name="play-arrow" color="#fff" size={45} />

    default:
      return <ActivityIndicator size ={45} color="#fff" />
  }
}

const onPlayPause = ()=>{
  //console.log(playbackState);
  if (playbackState === "playing" || playbackState === 3){
    TrackPlayer.pause()
  }else if (playbackState === "paused" || playbackState === 2){
    TrackPlayer.play()
  }
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <MaterialIcons name="skip-previous" size={45} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> onPlayPause()}>
        {renderPlayPauseBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <MaterialIcons name="skip-next" size={45} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width:300
  },
});