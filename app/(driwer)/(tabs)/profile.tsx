import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/context/UserData";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/supabase";
import { useRouter } from "expo-router";
import BottomMenuSvg from "@/components/svg/BottomSvg";
import { ThemedText } from "@/components/ThemedText";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user, updateUser } = useUser();

  const singOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert(error?.message || "Unknown error");
      } else {
        router.push("/auth");
      }
    } catch (err) {
      Alert.alert(err?.message || "Error while signing out");
    }
  };

  useEffect(() => {
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
  }, [updateUser, router]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.contentPage}>
      {user ? (
        <>
          <Text>Email: {user?.email}</Text>
          <TouchableOpacity onPress={singOut}>
            <ThemedText>Exit</ThemedText>
          </TouchableOpacity>
        </>
      ) : (
        <Text>No user found</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
  },
});
