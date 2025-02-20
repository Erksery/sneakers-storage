import React from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";

// Данные для галереи (каждый элемент - это блок на экране)
const DATA = [
  {
    title: "Фрукты",
    description: "Яблоки, бананы, апельсины.",
  },
  {
    title: "Овощи",
    description: "Морковь, огурцы, помидоры.",
  },
  {
    title: "Ягоды",
    description: "Клубника, малина, черника.",
  },
];

const { width, height } = Dimensions.get("window");

export default function Favorite() {
  // Метод рендера для каждого элемента
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true} // Горизонтальная прокрутка
      pagingEnabled={true} // Страничный режим: прокручиваем по экрану
      showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
      snapToInterval={width} // Срабатывает на ширину экрана
      decelerationRate="fast" // Быстрое замедление прокрутки
      bounces={false} // Отключаем эффект отскока
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width, // Делаем контейнер шириной в экран
    height, // Делаем контейнер высотой в экран
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#777",
    marginTop: 10,
    textAlign: "center",
  },
});
