import HeaderWithMenu from "@/components/Header";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AttendanceScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <HeaderWithMenu />
      <ScrollView className="flex-1 pt-16">

        <Text className="text-2xl font-bold text-gray-900">Attendance</Text>
      <Text className="text-base text-gray-500 mb-6">Osei Koomson Ajei</Text>
      
      {/* Week Navigation */}
      <View className="flex-row justify-between mb-6">
        <Text className="text-lg font-semibold text-blue-600">Week 12</Text>
        <View className="flex-row space-x-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
            <Text key={day} className="text-sm text-gray-600">{day}</Text>
          ))}
        </View>
        <Text className="text-lg font-semibold text-gray-500">Week 13</Text>
      </View>

      {/* Status Card */}
      <View className="bg-gray-50 rounded-xl p-5 mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">Status</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-600">Today, Friday 28th June 2025</Text>
          <View className="flex-row items-center">
            <Feather name="x" size={20} color="#ef4444" />
            <Text className="text-base font-semibold text-red-500 ml-1">Absent</Text>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View className="h-px bg-gray-200 my-5" />

      {/* Weekly Comment Section */}
      <Text className="text-lg font-bold text-gray-900 mb-4">Weekly Comment</Text>


      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceScreen;
