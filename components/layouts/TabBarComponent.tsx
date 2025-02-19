import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomMenu from "../svg/BottomSvg";
import HomeSvg from "../svg/HomeSvg";
import FavoriteSvg from "../svg/FavoriteSvg";
import NotificationSvg from "../svg/NotificationSvg";
import ProfileSvg from "../svg/ProfileSvg";
import CartSvg from "../svg/CartSvg";

interface TabButton {
  name: string;
  route: string;
  icon: (isActive: boolean) => JSX.Element; // Icon is now a function that takes isActive
  justify: "center" | "flex-start" | "flex-end";
}

type TabBarComponentProps = BottomTabBarProps;

export default function TabBarComponent({
  state,
  ...props
}: TabBarComponentProps) {
  const router = useRouter();

  // Define the buttons for the bottom menu
  const buttons: TabButton[] = [
    {
      name: "home",
      route: "/",
      icon: (isActive) => <HomeSvg color={isActive ? "#48B2E7" : "#A0A0A0"} />, // Pass color based on isActive
      justify: "center",
    },
    {
      name: "favorite",
      route: "/favorite",
      icon: (isActive) => (
        <FavoriteSvg color={isActive ? "#48B2E7" : "#A0A0A0"} />
      ),
      justify: "flex-start",
    },
    {
      name: "cart",
      route: "/cart",
      icon: (isActive) => <CartSvg color="white" />,
      justify: "center",
    },
    {
      name: "notification",
      route: "/notification",
      icon: (isActive) => (
        <NotificationSvg color={isActive ? "#48B2E7" : "#A0A0A0"} />
      ),
      justify: "flex-end",
    },
    {
      name: "profile",
      route: "/profile",
      icon: (isActive) => (
        <ProfileSvg color={isActive ? "#48B2E7" : "#A0A0A0"} />
      ),
      justify: "center",
    },
  ];

  const activeIndex = state.index;

  return (
    <View style={styles.bottomContainer}>
      {state.routes.map((route, index) => (
        <TouchableOpacity
          key={route.key}
          onPress={() => router.push(buttons[index].route)}
          style={[
            styles.tabButton,
            route.name === "cart" && styles.cart,
            { alignItems: buttons[index].justify },
          ]}
        >
          {buttons[index].icon(activeIndex === index)}
        </TouchableOpacity>
      ))}
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    gap: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
  },
  tabButton: {
    flex: 1,
    zIndex: 20,
    width: 60,
    height: "100%",
  },
  cart: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [{ translateX: -30 }],
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#48B2E7",

    shadowColor: "#5B9EE1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 12,

    elevation: 8,
  },
});
