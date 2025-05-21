import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 ">
      <View className=" flex-1 relative">
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Header onMenuPress={() => setDrawerOpen(true)} />
        {/* Drawer */}

        {/* Main Content */}
        <ScrollView className="flex-1 ">

          {/* Greeting */}
          <View className="px-4 mb-6">
            <Text className="text-xl font-semibold text-black">
              Hi Mrs, Osei
            </Text>
            <Text className="text-gray-500">Parent</Text>
          </View>

          {/* Child Info */}
          <View className="bg-blue-600 rounded-2xl p-4 mb-6 mx-4">
            <Text className="text-white text-lg font-semibold mb-1">
              Child’s Name
            </Text>
            <Text className="text-white text-base">Osei Koomson Ajei</Text>
            <Text className="text-white text-sm mb-3">Class 5</Text>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-md self-start">
              <Text className="text-blue-600 font-semibold">
                Child’s Profile
              </Text>
            </TouchableOpacity>
          </View>

          {/* Activities */}
          <View className="px-4 mb-6">
            <Text className="text-black text-lg font-semibold mb-4">
              Activities
            </Text>
            <View className="flex-row flex-wrap justify-between">
              {["Attendance", "Assignments", "Time Table", "Chats"].map(
                (label, index) => (
                  <TouchableOpacity
                    key={index}
                    className="bg-white w-[48%] mb-4 p-4 rounded-2xl shadow"
                  >
                    <Text className="text-black font-medium text-center">
                      {label}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* Info Cards */}
          <View className="px-4 space-y-4 mb-10">
            <View className="bg-indigo-600 rounded-2xl py-4 px-6">
              <Text className="text-white font-semibold text-center">
                Fees Status
              </Text>
            </View>

            <View className="flex-row justify-between">
              <View className="bg-pink-600 rounded-2xl py-4 px-6 w-[48%]">
                <Text className="text-white font-semibold text-center">
                  Announcement
                </Text>
              </View>

              <View className="bg-yellow-500 rounded-2xl py-4 px-6 w-[48%]">
                <Text className="text-white font-semibold text-center">
                  Results
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
