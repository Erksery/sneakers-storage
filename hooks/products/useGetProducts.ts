import { addProducts } from "@/store/slices/products";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";

export default function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("*");

      if (productsError) throw productsError;

      const categoryIds = productsData.map((product) => product.category_id);
      const { data: categoriesData, error: categoriesError } = await supabase
        .from("categories")
        .select("id, name")
        .in("id", categoryIds);

      if (categoriesError) throw categoriesError;

      const productsWithCategory = productsData.map((product) => {
        const category = categoriesData.find(
          (cat) => cat.id === product.category_id
        );
        return {
          ...product,
          category_name: category ? category.name : "Неизвестно",
        };
      });
      dispatch(addProducts(productsWithCategory));
      setProducts(productsWithCategory);
    } catch (err) {
      Alert.alert(err.message);
      console.error("Ошибка при получении данных продуктов:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    loading,
  };
}
