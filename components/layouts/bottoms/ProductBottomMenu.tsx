import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import FavoriteSvg from "@/components/svg/FavoriteSvg";
import CartSvg from "@/components/svg/CartSvg";

export default function ProductBottomMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.like}>
        <FavoriteSvg color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addCart}>
        <CartSvg color="white" />
        <ThemedText style={{ color: "white" }}>В корзину</ThemedText>
        <View />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addCart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.light.theme,
  },
  like: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "#D9D9D966",
  },
  container: {
    gap: 20,
    flexDirection: "row",
    minHeight: 80,
  },
});
