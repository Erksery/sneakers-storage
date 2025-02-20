import { useEffect } from "react";

export default function useScrollToElement({
  id,
  products,
  scrollViewRef,
  miniCardsRef,
}) {
  useEffect(() => {
    if (scrollViewRef.current && miniCardsRef.current.length > 0) {
      const activeIndex = products.findIndex((product) => product.id === id);
      if (activeIndex !== -1) {
        miniCardsRef.current[activeIndex]?.measure((x) => {
          scrollViewRef.current.scrollTo({ x, animated: true });
        });
      }
    }
  }, [id, products]);
}
