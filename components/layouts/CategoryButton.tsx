import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { ThemedText } from "../ThemedText";

interface CategoryButtonProps {
  name: string;
}

export default function CategoryButton({ name }: CategoryButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <ThemedText type="default" style={{ fontSize: 13 }}>
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
