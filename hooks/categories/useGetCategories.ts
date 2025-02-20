import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export default function useGetCategories() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data: categoriesData, error } = await supabase
        .from("categories")
        .select("*");

      if (error) throw error;
      setCategories(categoriesData);
    } catch (err) {
      console.error("Ошибка при получении данных категорий:", error.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return { categories };
}
