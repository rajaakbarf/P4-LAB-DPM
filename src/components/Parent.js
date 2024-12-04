// Parent.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Child from "./Child";
import teamALogo from "../assets/teamA.png"; // Logo Tim A
import teamBLogo from "../assets/teamB.png"; // Logo Tim B

const Parent = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleIncrement = (score, setScore, teamName) => {
    if (!winner) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore === 10) {
        setWinner(teamName);
      }
    }
  };

  const handleDecrement = (score, setScore) => {
    if (score > 0 && !winner) setScore(score - 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Papan Skor Futsal</Text>

      {/* Komponen Child untuk Tim A */}
      <Child
        teamName="Tim A"
        score={scoreA}
        logo={teamALogo}
        onIncrement={() => handleIncrement(scoreA, setScoreA, "Tim A")}
        onDecrement={() => handleDecrement(scoreA, setScoreA)}
      />

      {/* Komponen Child untuk Tim B */}
      <Child
        teamName="Tim B"
        score={scoreB}
        logo={teamBLogo}
        onIncrement={() => handleIncrement(scoreB, setScoreB, "Tim B")}
        onDecrement={() => handleDecrement(scoreB, setScoreB)}
      />

      {/* Menampilkan pesan pemenang */}
      {winner && <Text style={styles.winnerText}>{winner} menang!</Text>}

      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#264653", 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f4a261",
    marginBottom: 30,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 2,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f4a261",
    borderRadius: 10,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#e63946", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f4f4f4",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Parent;
