import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import Player from '../src/Player';
import { COLORS,SIZES,icons } from '../constants';

const PlayerScreen = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:COLORS.white,
              }}
            />
          </TouchableOpacity>
      <Player/>
    </View>
  );
}


export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: 'center',
  },
});