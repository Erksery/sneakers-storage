import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ContentPage from "@/components/ui/ContentPage/ContentPage";
import { ThemedText } from "@/components/ThemedText";
import SliderSvg from "@/components/svg/Slider";
import { useSelector } from "react-redux";
import { Colors } from "@/constants/Colors";
import ProductBottomMenu from "@/components/layouts/bottoms/ProductBottomMenu";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function Product() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useLocalSearchParams();
  const products = useSelector((state) => state.products.products);
  const router = useRouter();

  const scrollViewRef = useRef(null);
  const miniCardsRef = useRef([]);

  const toggleShowDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const activeProduct = products.find((product) => product.id === id);

  useScrollToElement({
    id: id,
    products: products,
    scrollViewRef: scrollViewRef,
    miniCardsRef: miniCardsRef,
  });

  return (
    <ContentPage bottomMenu={<ProductBottomMenu />}>
      <ScrollView>
        <View>
          <ThemedText type="title" style={{ fontSize: 26 }}>
            {activeProduct.name}
          </ThemedText>
          <ThemedText type="default" style={{ color: "#6A6A6A" }}>
            {activeProduct.category_name}
          </ThemedText>
          <ThemedText type="titleBlack" style={{ fontSize: 24 }}>
            ₽{activeProduct.price}
          </ThemedText>
        </View>
        <View style={{ gap: 20 }}>
          <View style={{ alignItems: "center", height: 250 }}>
            <Image
              source={{ uri: activeProduct.image_url }}
              style={styles.imageCard}
            />
            <View style={{ position: "absolute", bottom: 0 }}>
              <SliderSvg />
            </View>
          </View>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.miniList}>
              {products &&
                products.map((product, index) => (
                  <TouchableOpacity
                    key={product.id}
                    onPress={() =>
                      router.push({
                        pathname: `/product/${product.id}`,
                        params: { id: product.id },
                      })
                    }
                    style={[
                      styles.miniCard,
                      product.id === id && styles.active,
                    ]}
                    ref={(el) => (miniCardsRef.current[index] = el)}
                  >
                    <Image
                      source={{ uri: product.image_url }}
                      style={styles.minImageCard}
                    />
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>

          <View style={{ gap: 10 }}>
            <ThemedText
              style={{ color: Colors.light.subText }}
              numberOfLines={showFullDescription ? 10 : 3}
              ellipsizeMode="tail"
            >
              {activeProduct.description}
            </ThemedText>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity onPress={toggleShowDescription}>
                <ThemedText style={{ color: Colors.light.theme }}>
                  {showFullDescription ? "Скрыть" : "Подробнее"}
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ContentPage>
  );
}
const styles = StyleSheet.create({
  imageCard: {
    width: "80%",
    height: 200,
    resizeMode: "cover",
  },
  miniCard: {
    padding: 2,
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "white",
  },
  minImageCard: {
    flex: 1,
    resizeMode: "contain",
  },
  active: {
    borderWidth: 3,
    borderColor: Colors.light.theme,
  },
  miniList: {
    flexDirection: "row",
    gap: 15,
  },
});
