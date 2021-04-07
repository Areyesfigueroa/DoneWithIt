import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {
  

  const handlePressed = () => {
    console.log("Pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePressed}>Yo boy finally starting dog LOL.</Text>
      <TouchableHighlight onPress={() => console.log("Imaged Tapped")}>
        <Image 
          source={{
            width:200,
            height:200, 
            uri: "https://picsum.photos/200/300" 
          }} 
        />
      </TouchableHighlight>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
