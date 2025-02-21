import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export default function useGetPromotions() {
  const [promotions, setPromotions] = useState([]);
  const getPromotions = async () => {
    try {
      const { data, error } = await supabase.from("promotions").select("*");
      if (error) throw error;
      setPromotions(data);
      console.log(data);
    } catch (err) {
      console.log("Ошибка при получении акций:", err);
    }
  };
  useEffect(() => {
    getPromotions();
  }, []);
  return {
    promotions,
  };
}
