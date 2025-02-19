import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default function Favorite() {
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Значение: {value}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value}
        onValueChange={(val) => setValue(val)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
  },
});
