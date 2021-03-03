import React from 'react'
import { StyleSheet, View } from 'react-native'
import Player from '../src/Player';
import { COLORS } from '../constants';

const PlayerScreen = () =>{
  return (
    <View style={styles.container}>
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