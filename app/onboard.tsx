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

  // Метод рендера для каждого экрана
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
        keyExtractor={(item) => item.key} // Используем key для уникальности
        horizontal={true} // Горизонтальная прокрутка
        pagingEnabled={true} // Страничный режим: прокручиваем по экрану
        showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
        snapToInterval={width} // Срабатывает на ширину экрана
        decelerationRate="fast" // Быстрое замедление прокрутки
        bounces={false} // Отключаем эффект отскока
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
