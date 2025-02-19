import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Product() {
  const router = useRouter();
  const { product } = router.query;
  return (
    <View>
      <Text>{product}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
