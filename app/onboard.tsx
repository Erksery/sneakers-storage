import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "@/components/layouts/onboards/Welcome"; // Убедись, что путь верный

export default function Onboard() {
  const screens = [
    { key: "1", component: <Welcome /> },
    { key: "2", component: <Welcome /> },
    { key: "3", component: <Welcome /> },
  ];

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item }) => (
    <View style={[styles.screen, { width }]}>{item.component}</View>
  );

  return (
    <LinearGradient
      colors={["#48B2E7", "#0076B1"]}
      style={styles.splashContainer}
    >
      <StatusBar style="light" />
      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
