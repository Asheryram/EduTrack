// import { Button } from "@/components/Button";
// import { AuthContext } from "@/store/authContext";
// import { useContext } from "react";
// import { View } from "react-native";

// export default function LoginScreen() {
//   const authContext = useContext(AuthContext);

//   return (
//     <View className="flex-1 justify-center p-4">
//       <AppText size="heading" center>
//         Login Screen
//       </AppText>
//       <Button title="Log in!" onPress={authContext.logIn} />
//     </View>
//   );
// }

import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  


  const {
    username,
    password,
    rememberMe,
    error,
    setUsername,
    setPassword,
    setRememberMe,
    handleLogin,
    handleGoogleLogin,
  } = useLogin();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center items-center px-6 py-8">
            <View className="w-full max-w-md bg-gray-800 rounded-3xl p-8 shadow-lg">
              {/* Google Login Button */}
              <TouchableOpacity
                onPress={handleGoogleLogin}
                className="bg-gray-700 py-3 rounded-xl mb-6"
              >
                <Text className="text-white text-center font-semibold text-base">
                  Log In with Google
                </Text>
              </TouchableOpacity>

              <Text className="text-center text-white mb-6">
                ──────── or ────────
              </Text>

              {/* Username Input */}
              <TextInput
                placeholder="Username"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4 text-base"
              />

              {/* Password Input */}
              <TextInput
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-2 text-base"
              />

              <Text className="text-right text-xs text-gray-400 mb-6">
                Forgot password?
              </Text>

              {/* Remember Me */}
              <View className="flex-row items-center mb-6">
                <Switch value={rememberMe} onValueChange={setRememberMe} />
                <Text className="text-white ml-3 text-sm">Remember me</Text>
              </View>

              {/* Error Message */}
              {error ? (
                <Text className="text-red-400 text-sm mb-6 text-center">
                  {error}
                </Text>
              ) : null}

              {/* Login Button */}
              <TouchableOpacity
                onPress={handleLogin}
                className="bg-blue-600 py-3 rounded-xl"
              >
                <Text className="text-center text-white text-lg font-semibold">
                  Log In
                </Text>
              </TouchableOpacity>

              {/* Footer */}

              <View className="flex-row items-center justify-center mt-6">
                <Text className="text-center text-gray-400 text-sm mr-2">
                Don’t have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.replace("/register")}
                  
                >
                 <Text className="text-blue-400 font-medium"> Register here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
