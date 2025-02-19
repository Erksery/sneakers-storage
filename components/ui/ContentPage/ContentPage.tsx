import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleProp } from "react-native";

interface ContentPageProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function ContentPage({ children, style }: ContentPageProps) {
  return (
    <SafeAreaView style={[styles.contentPage, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,
    paddingHorizontal: 20,

    backgroundColor: "#F7F7F9",
  },
});
