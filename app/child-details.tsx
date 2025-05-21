import { Child, useChildForm } from "@/hooks/useChildDetails";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ChildDetailsScreen() {
  const {
    childName,
    dob,
    age,
    school,
    children,
    isEditing,
    setChildName,
    setDob,
    setAge,
    setSchool,
    handleAddChild,
    handleEditChild,
    handleDeleteChild,
    handleProceed,
  } = useChildForm();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-gray-800"
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
        className="flex-1 px-6 pt-12 "
      >
        <Text className=" text-3xl font-bold text-center mb-8">
          Child’s Details
        </Text>

        {/* Input Card */}
        <View className=" rounded-2xl shadow-md p-6 space-y-10 ">
          <TextInput
            placeholder="Full Name"
            value={childName}
            onChangeText={setChildName}
            className="bg-gray-700 text-black px-4 py-3 rounded-lg"
          />

          <TextInput
            placeholder="Date of Birth (YYYY-MM-DD)"
            value={dob}
                        keyboardType="default"
                        

            onChangeText={setDob}
            className="bg-gray-700 text-black px-4 py-3 rounded-lg"
          />

          <TextInput
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            className="bg-gray-700 text-black px-4 py-3 rounded-lg"
          />

          <View className="bg-gray-700 rounded-lg overflow-hidden">
            <Picker
              selectedValue={school}
              onValueChange={setSchool}
              style={{
                height: Platform.OS === "ios" ? 180 : 50,
                color: "black",
              }}
              dropdownIconColor="gray"
            >
              <Picker.Item label="Select School" value="" />
              <Picker.Item label="Greenfield Primary" value="greenfield" />
              <Picker.Item label="Sunrise Academy" value="sunrise" />
              <Picker.Item label="Blue River School" value="blueriver" />
            </Picker>
          </View>
        </View>

        {/* Buttons */}
        <View className="flex-row justify-center space-x-4 mb-10">
          <TouchableOpacity
            onPress={handleAddChild}
            className="bg-blue-500 px-6 py-3 rounded-xl shadow"
          >
            <Text className="text-white font-semibold text-base">
              {isEditing ? "Update Child" : "Add Child"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleProceed}
            className="bg-green-500 px-6 py-3 rounded-xl shadow"
          >
            <Text className="text-white font-semibold text-base">Proceed</Text>
          </TouchableOpacity>
        </View>

        {/* Children List */}
        {children.length > 0 && (
          <View className="space-y-4">
            <Text className="text-gray-800 font-semibold text-lg mb-1">
              {children.length} {children.length === 1 ? "Child" : "Children"} Added:
            </Text>

            {children.map((child: Child, index: number) => (
              <View
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 space-y-1"
              >
                <Text className="text-gray-800">
                  <Text className="font-medium">Name:</Text> {child.childName}
                </Text>
                <Text className="text-gray-800">
                  <Text className="font-medium">DOB:</Text> {child.dob}
                </Text>
                <Text className="text-gray-800">
                  <Text className="font-medium">Age:</Text> {child.age}
                </Text>
                <Text className="text-gray-800">
                  <Text className="font-medium">School:</Text> {child.school}
                </Text>

                <View className="flex-row justify-end space-x-3 mt-3">
                  <TouchableOpacity
                    onPress={() => handleEditChild(index)}
                    className="bg-blue-500 px-4 py-2 rounded-xl"
                  >
                    <Text className="text-white text-sm font-medium">Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeleteChild(index)}
                    className="bg-red-500 px-4 py-2 rounded-xl"
                  >
                    <Text className="text-white text-sm font-medium">Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
