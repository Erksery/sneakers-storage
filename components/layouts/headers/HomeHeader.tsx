import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";
import MenuSvg from "@/components/svg/MenuSvg";
import CartSvg from "@/components/svg/CartSvg";

export default function HomeHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.openDrawer()}
          mode="contained"
          compact
          style={styles.menu}
          contentStyle={{ borderRadius: 10 }}
        >
          <MenuSvg />
        </Button>
        <ThemedText type="title">Главная</ThemedText>
        <Button
          mode="contained"
          compact
          style={[styles.menu, { backgroundColor: "white" }]}
          contentStyle={{ borderRadius: 40 }}
        >
          <CartSvg color="black" />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 80,
    justifyContent: "flex-end",
    backgroundColor: "#F7F7F9",
  },
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    backgroundColor: "#F7F7F9",
  },
});
