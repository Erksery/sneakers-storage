import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleLine from "@/components/svg/TitleLine";

export default function Welcome() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: 30,
      }}
    >
      <View style={{ alignItems: "center", gap: 10 }}>
        <ThemedText
          type="titleBlack"
          style={{ color: "white", textAlign: "center" }}
        >
          ДОБРО{"\n"}ПОЖАЛОВАТЬ
        </ThemedText>
        <TitleLine />
      </View>
      <View style={{ height: 300 }}>
        <Image
          style={styles.banner}
          source={require("../../../assets/images/c3387d6b3835b00415a8581a1bb55007.png")}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <ThemedText type="defaultSemiBold">Начать</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  banner: {
    position: "absolute",
    width: "100%",
    top: "-150%",

    resizeMode: "contain",

    transform: [{ rotate: "-20deg" }, { scale: 1.3 }],
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 12,
    backgroundColor: "white",
  },
});
