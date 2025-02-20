import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleProp } from "react-native";
import BottomMenu from "../BottomMenu";

interface ContentPageProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  bottomMenu?: ReactNode;
}

export default function ContentPage({
  children,
  bottomMenu,
  style,
}: ContentPageProps) {
  return (
    <SafeAreaView style={[styles.contentPage, style]}>
      {children}
      {bottomMenu && <BottomMenu element={bottomMenu} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F9",
  },
});
