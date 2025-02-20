import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface BottomMenuProps {
  element?: ReactNode;
}

export default function BottomMenu({ element }: BottomMenuProps) {
  return <View style={styles.container}>{element}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    width: "100%",
    minHeight: 60,
    bottom: 0,
  },
});
