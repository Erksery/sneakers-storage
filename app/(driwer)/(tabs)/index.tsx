import { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import ContentPage from "@/components/ui/ContentPage/ContentPage";
import Feather from "@expo/vector-icons/Feather";
import CategoryButton from "@/components/layouts/CategoryButton";
import ProductCard from "@/components/layouts/ProductCard";
import SettingSvg from "@/components/svg/SettingSvg";
import { useSelector } from "react-redux";

import useGetProducts from "@/hooks/products/useGetProducts";
import useGetCategories from "@/hooks/categories/useGetCategories";
import useGetPromotions from "@/hooks/promotions/useGetPromotions";
import { Redirect } from "expo-router";

export default function TabHomeScreen() {
  useGetProducts();

  const products = useSelector((state) => state.products.products);

  const { categories } = useGetCategories();
  const { promotions } = useGetPromotions();

  if (true) {
    return <Redirect href="/onboard" />;
  }
  console.log(products);

  return (
    <ContentPage>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View style={{ gap: 20, paddingBottom: 100 }}>
          {/* Поиск и фильтр */}
          <View style={{ flexDirection: "row", width: "100%", gap: 10 }}>
            <TouchableOpacity style={styles.searchContainer}>
              <Feather name="search" size={18} color="#6A6A6A" />
              <ThemedText style={{ color: "#6A6A6A", fontSize: 15 }}>
                Поиск
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <SettingSvg color="white" />
            </TouchableOpacity>
          </View>

          {/* Категории */}
          <View style={styles.block}>
            <ThemedText type="default">Категории</ThemedText>
            <ScrollView
              horizontal={true}
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.categoryContainer}>
                <CategoryButton name={"Все"} />
                {categories &&
                  categories.map((category) => (
                    <CategoryButton key={category.id} name={category.name} />
                  ))}
              </View>
            </ScrollView>
          </View>

          {/* Популярные продукты */}
          <View style={styles.block}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ThemedText type="default">Популярное</ThemedText>
              <TouchableOpacity>
                <ThemedText
                  style={{ fontSize: 12, color: "#48B2E7" }}
                  type="default"
                >
                  Все
                </ThemedText>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal={true}
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.categoryContainer}>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </View>
            </ScrollView>
          </View>

          {/* Акции */}
          <View style={styles.block}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ThemedText type="default">Акции</ThemedText>
              <TouchableOpacity>
                <ThemedText
                  style={{ fontSize: 12, color: "#48B2E7" }}
                  type="default"
                >
                  Все
                </ThemedText>
              </TouchableOpacity>
            </View>

            {promotions && (
              <TouchableOpacity key={promotions[0]?.id}>
                <Image
                  style={{ height: 100, borderRadius: 16 }}
                  source={{ uri: promotions[0]?.image_url }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </ContentPage>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    gap: 8,
    backgroundColor: "white",
    flex: 1,
    height: 50,
    borderRadius: 14,
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#48B2E7",
    borderRadius: 40,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
  },
  block: {
    gap: 20,
  },
});
