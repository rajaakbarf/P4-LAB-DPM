import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Parent from "./src/components/Parent";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Parent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d3557", 
    padding: 10,
  },
});


export default App;
