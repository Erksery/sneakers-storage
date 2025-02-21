import { Tabs } from "expo-router";
import React from "react";
import HomeHeader from "@/components/layouts/headers/HomeHeader";
import TabBarComponent from "@/components/layouts/TabBarComponent";
import AboutHeader from "@/components/layouts/headers/AboutHeader";
import FavoriteSvg from "@/components/svg/FavoriteSvg";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBarComponent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "favorite",
          headerShown: true,
          header: () => (
            <AboutHeader
              title="Избранное"
              buttonIcon={<FavoriteSvg color="black" />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          headerShown: true,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
