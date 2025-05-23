import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const logIn = useAuthStore((state) => state.logIn);
  const USER_STORE_setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const handleLogin = () => {
    setError("");

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulated login logic
    Alert.alert("Login Successful", `Welcome, ${username}!`);
    console.log({ username, password, rememberMe });
    USER_STORE_setUser({ name: username });
    logIn();
    // Reset fields after login
    setUsername("");
    setPassword("");
    setRememberMe(false);
    // Navigate to the home screen or perform any other action
    router.replace("/home");
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Google Sign-In pressed");
    logIn();
  };

  return {
    username,
    password,
    rememberMe,
    error,
    setUsername,
    setPassword,
    setRememberMe,
    handleLogin,
    handleGoogleLogin,
  };
}
