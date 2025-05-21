import { useTeacherDetails } from "@/hooks/useTeacherDetails";
import { Picker } from "@react-native-picker/picker";
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

export default function TeacherDetailsScreen() {
  const {
    fullName,
    dob,
    age,
    school,
    idNumber,
    setFullName,
    setDob,
    setAge,
    setSchool,
    setIdNumber,
    handleProceed,
  } = useTeacherDetails();

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
                Teachers Details
              </Text>

              <TextInput
                placeholder="Fullname"
                placeholderTextColor="#ccc"
                value={fullName}
                onChangeText={setFullName}
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

              <View className="bg-gray-700 rounded-xl mb-4">
                <Picker
                  selectedValue={school}
                  onValueChange={setSchool}
                  style={{ color: "white" }}
                  dropdownIconColor="white"
                >
                  <Picker.Item label="Select School" value="" />
                  <Picker.Item label="Greenwood High" value="greenwood" />
                  <Picker.Item label="Maplewood Academy" value="maplewood" />
                  <Picker.Item label="Riverdale School" value="riverdale" />
                </Picker>
              </View>

              <TextInput
                placeholder="Identification Number"
                placeholderTextColor="#ccc"
                value={idNumber}
                onChangeText={setIdNumber}
                className="bg-gray-700 text-white px-4 py-3 rounded-xl mb-6"
              />

              <TouchableOpacity
                onPress={handleProceed}
                className="bg-black py-3 rounded-xl"
              >
                <Text className="text-center text-white text-lg font-semibold">
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
