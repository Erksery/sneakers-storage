import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/context/UserData";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/supabase";
import { useRouter } from "expo-router";
import BottomMenuSvg from "@/components/svg/BottomSvg";

export default function profile() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user, updateUser } = useUser();

  useEffect(() => {
    setLoading(true);
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          updateUser(data.user);
        } else {
          router.push("/auth");
        }
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  console.log(user);
  return (
    <SafeAreaView style={styles.contentPage}>
      <Text>email: {user?.email}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,

    backgroundColor: "#F7F7F9",
  },
});
