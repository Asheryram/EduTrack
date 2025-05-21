import { useRegister } from "@/hooks/useRegister";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
export default function RegisterScreen() {
    
  const router = useRouter();

  const {
    username,
    email,
    dob,
    age,
    password,
    role,
    setUsername,
    setEmail,
    setDob,
    setAge,
    setPassword,
    setRole,
    handleRegister,
  } = useRegister();

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
          <View className="flex-1 justify-center items-center px-6 py-10">
            <View className="w-full max-w-md bg-gray-800 rounded-3xl p-8 shadow-lg">
              <Text className="text-white text-xl font-semibold mb-6">
                Register Account
              </Text>

              <TextInput
                placeholder="Username"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4"
              />

              <TextInput
                placeholder="Email"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4"
              />

              <TextInput
                placeholder="Date of Birth (YYYY-MM-DD)"
                placeholderTextColor="#ccc"
                value={dob}
                onChangeText={setDob}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4"
              />

              <TextInput
                placeholder="Age"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4"
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-4"
              />

              <View className="bg-gray-700 rounded-xl mb-6">
                <Picker
                  selectedValue={role}
                  onValueChange={setRole}
                  style={{ color: "white" }}
                  dropdownIconColor="white"
                >
                  <Picker.Item label="Select Role" value="" />
                  <Picker.Item label="Student" value="student" />
                  <Picker.Item label="Teacher" value="teacher" />
                  <Picker.Item label="Admin" value="admin" />
                </Picker>
              </View>

              <TouchableOpacity
                onPress={handleRegister}
                className="bg-blue-600 py-3 rounded-xl"
              >
                <Text className="text-center text-white text-lg font-semibold">
                  Register
                </Text>
              </TouchableOpacity>
              <View className="flex-row items-center justify-center mt-6">
                <Text className="text-center text-gray-400 text-sm mr-2">
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.replace("/sign-in")}>
                  <Text className="text-blue-400 font-medium">
                    {" "}
                    Log In here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
