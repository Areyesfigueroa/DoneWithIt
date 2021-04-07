import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title={"Click me"}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
});
