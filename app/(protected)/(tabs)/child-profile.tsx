import HeaderWithMenu from "@/components/Header";
import { ParentGreeting } from "@/components/ParentGreeting";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChildProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <HeaderWithMenu />
      <ScrollView className="flex-1 pt-16">
        <ParentGreeting />

        {/* Child Info Section */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Child's Info.
          </Text>

          <View className="space-y-3">
            <View className="flex-row">
              <Text className="w-32 text-gray-600">Full Name:</Text>
              <Text className="flex-1 font-medium">Osei Koomson Ajei</Text>
            </View>
            <View className="flex-row">
              <Text className="w-32 text-gray-600">Class:</Text>
              <Text className="flex-1 font-medium">Class 5</Text>
            </View>
            <View className="flex-row">
              <Text className="w-32 text-gray-600">School Name:</Text>
              <Text className="flex-1 font-medium">
                Learning Field International School
              </Text>
            </View>
            <View className="flex-row">
              <Text className="w-32 text-gray-600">Class Teacher:</Text>
              <Text className="flex-1 font-medium">Wilson Adams</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-gray-200 my-4" />

        {/* Edit Section */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-3">Edit</Text>

          {/* Edit Table */}
          <View className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <View className="flex-row bg-gray-100 border-b border-gray-200">
              <View className="flex-1 p-3">
                <Text className="font-semibold">Full Name</Text>
              </View>
              <View className="flex-1 p-3 border-l border-gray-200">
                <Text className="font-semibold">Class / Stage</Text>
              </View>
            </View>

            {/* Table Row */}
            <View className="flex-row">
              <View className="flex-1 p-3">
                <Text className="text-gray-600">School</Text>
              </View>
              <View className="flex-1 p-3 border-l border-gray-200">
                <Text className="text-gray-600">Teacher</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity className="bg-blue-500 py-3 px-6 rounded-lg self-start flex-row items-center">
          <Feather name="edit" size={18} color="white" />
          <Text className="text-white font-medium ml-2">Edit Information</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChildProfileScreen;
