import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Count =", count + 1);
  };

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.heading}>Hello, world!</Text>

        {/* Counter Value */}
        <Text style={styles.counterText}>Count = {count}</Text>

        {/* Custom Button */}
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-gradient(to bottom, #ffcccc, #ffe6e6)", // fallback
    backgroundColor: "#ffe6e6",   // soft pinkish bg
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6a0dad", // purple
    marginBottom: 20,
  },
  counterText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#6a0dad",  // purple button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
