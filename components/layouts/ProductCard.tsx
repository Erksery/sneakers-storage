import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function ProductCard({ product }) {
  return (
    <TouchableOpacity style={styles.card}>
      <TouchableOpacity style={styles.likeButton}>
        <FontAwesome6 name="heart" size={14} color="#2B2B2B" />
      </TouchableOpacity>
      <Image source={{ uri: product.image_url }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <ThemedText style={{ color: "#48B2E7", fontSize: 12 }}>
          BEST SELLER
        </ThemedText>
        <ThemedText
          style={{ color: "#6A6A6A", fontSize: 16 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {product.name}
        </ThemedText>
      </View>
      <View style={styles.bottomContainer}>
        <ThemedText style={{ fontSize: 14 }}>₽{product.price}</ThemedText>
        <TouchableOpacity style={styles.plusButton}>
          <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 30,
    width: 160,
    minHeight: 170,
    backgroundColor: "white",
    borderRadius: 16,
    gap: 8,
    alignItems: "center",
  },
  likeButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 10,
    top: 10,
    width: 30,
    height: 30,
    backgroundColor: "#F7F7F9",
    borderRadius: 40,
  },
  productImage: {
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "75%",
    height: 70,
    resizeMode: "cover",
  },
  infoContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    width: "100%",
  },
  bottomContainer: {
    paddingLeft: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderTopStartRadius: 16,
    borderBottomEndRadius: 16,
    backgroundColor: "#48B2E7",
  },
});
