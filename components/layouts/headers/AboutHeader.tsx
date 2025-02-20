import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import BackSvg from "@/components/svg/BackSvg";
import CartSvg from "@/components/svg/CartSvg";
import { useRouter } from "expo-router";

export default function AboutHeader({ title = "About" }) {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <BackSvg />
        </TouchableOpacity>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <TouchableOpacity style={styles.button}>
          <CartSvg color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    alignItems: "flex-end",
    maxHeight: 60,
    backgroundColor: "#F7F7F9",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: "white",
  },
});
