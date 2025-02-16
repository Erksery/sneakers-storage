import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Button } from "react-native-paper";
import { useEffect, useState } from "react";

import { supabase } from "@/supabase";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { useUser } from "@/components/context/UserData";

export default function Auth() {
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({ email: "", password: "" });

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          updateUser(data.user);
          router.push("/(tabs)");
        }
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: value.email,
      password: value.password,
    });

    if (error) {
      Alert.alert("Ошибка", error.message);
    } else {
      const user = await supabase.auth.getUser();
      updateUser(user.data.user);
      router.replace("/(tabs)");
    }
  };

  if (loading) {
    return (
      <ThemedView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedText>LOADING</ThemedText>
      </ThemedView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.authContainer}>
          <ThemedText style={styles.headerText}>Привет!</ThemedText>
          <ThemedText style={styles.subText}>
            Заполните свои данные или продолжите через социальные медиа
          </ThemedText>

          <View style={styles.inputsContainer}>
            <View style={{ gap: 10 }}>
              <ThemedText style={{ fontSize: 16 }}>Email</ThemedText>
              <TextInput
                value={value.email}
                style={styles.input}
                onChangeText={(text) =>
                  setValue((prev) => ({ ...prev, email: text }))
                }
                placeholder="xyz@gmail.com"
              />
            </View>

            <View style={{ gap: 10 }}>
              <ThemedText style={{ fontSize: 16 }}>Пароль</ThemedText>
              <TextInput
                value={value.password}
                style={styles.input}
                onChangeText={(text) =>
                  setValue((prev) => ({ ...prev, password: text }))
                }
                secureTextEntry={true}
                placeholder="*********"
              />
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => router.push("/forgot")}>
                <ThemedText style={{ fontSize: 12, color: "#707B81" }}>
                  Восстановить
                </ThemedText>
              </TouchableOpacity>
            </View>

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
              contentStyle={{ borderRadius: 14 }}
              loading={loading}
            >
              Войти
            </Button>
          </View>
        </View>
        <View style={styles.regContainer}>
          <ThemedText style={[styles.regText, { color: "#6A6A6A" }]}>
            Вы впервые?
          </ThemedText>
          <TouchableOpacity onPress={() => router.push("/registration")}>
            <ThemedText style={styles.regText}>Создать пользователя</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    width: "100%",
    height: 50,
    fontSize: 32,
    fontWeight: "400",
    fontFamily: "NunitoBold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  subText: {
    textAlign: "center",
    color: "#707B81",
    fontSize: 16,
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  inputsContainer: {
    gap: 20,
    marginTop: 30,
  },
  input: {
    paddingStart: 15,
    height: 50,
    borderRadius: 14,
    fontSize: 12,
    color: "#6A6A6A",
    backgroundColor: "#F7F7F9",
  },
  button: {
    justifyContent: "center",
    height: 50,
  },
  regContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  regText: {
    fontFamily: "Peninim",
    textAlignVertical: "bottom",
  },
});
