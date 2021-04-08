import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  
  // console.log(Dimensions.get("screen"));
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "purple",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap',
          alignContent: 'center'
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "gray",
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "lime",
            width: 100,
            height: 100,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
});
