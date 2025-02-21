import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ContentPage from "@/components/ui/ContentPage/ContentPage";
import { ThemedText } from "@/components/ThemedText";
import { useSelector } from "react-redux";
import ProductCard from "@/components/layouts/ProductCard";

export default function Favorite() {
  const products = useSelector((state) => state.products.products);

  // Рендерим каждый продукт, передавая item как product
  const renderProduct = ({ item }) => (
    <ProductCard product={item} width={185} height={210} />
  );

  return (
    <ContentPage>
      {products && (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Два столбца
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      )}
    </ContentPage>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 50,
  },

  columnWrapper: {
    gap: 10,
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
