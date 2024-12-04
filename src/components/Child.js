import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Child = ({ teamName, score, onIncrement, onDecrement, logo }) => {
  return (
    <View style={styles.container}>
      {/* Logo Tim */}
      <Image source={logo} style={styles.logo} />
      <View style={styles.details}>
        {/* Nama Tim */}
        <Text style={styles.teamName}>{teamName}</Text>
        {/* Skor */}
        <Text style={styles.score}>{score}</Text>
        {/* Tombol */}
        <View style={styles.buttonRow}>
          {/* Tombol "+" */}
          <TouchableOpacity style={styles.button} onPress={onIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          {/* Tombol "-" */}
          <TouchableOpacity style={styles.button} onPress={onDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#202833", 
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 35, 
    borderWidth: 3,
    borderColor: "#f4a261",
  },
  details: {
    flex: 1,
    alignItems: "center",
  },
  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f4f4f4",
    marginBottom: 10,
    textShadowColor: "#f4a261", 
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  score: {
    fontSize: 48,
    fontWeight: "900",
    color: "#e76f51", 
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
  },
  button: {
    backgroundColor: "#2a9d8f", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f4f4f4",
    textAlign: "center",
  },
});

export default Child;
