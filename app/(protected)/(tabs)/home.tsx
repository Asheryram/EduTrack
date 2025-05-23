import HeaderWithMenu from "@/components/Header";
import { ParentGreeting } from "@/components/ParentGreeting";
import { useRouter } from 'expo-router';
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ActivityItem = {
  label: string;
  route: string; // This matches your Expo Router file-based routes
};

const ActivitiesGrid = () => {
  const router = useRouter();

  const activities: ActivityItem[] = [
    { label: "Attendance", route: "/attendance" },
    { label: "Assignments", route: "/assignment" },
    { label: "Time Table", route: "/" },
    { label: "Chats", route: "/" },
  ];

  return (
    <View className="flex-row flex-wrap justify-between">
      {activities.map((activity, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white w-[48%] mb-4 p-4 rounded-2xl shadow"
          onPress={() => router.push(activity.route as any)}
        >
          <Text className="text-black font-medium text-center">
            {activity.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function HomeScreen() {
    const router = useRouter();
    const handleChildView = () => {
        router.push('/child-profile');
    };
  return (
    <SafeAreaView className="flex-1 ">
      {/* Header is now absolutely positioned */}
      <HeaderWithMenu  />
      
      {/* Main Content */}
      <ScrollView className="flex-1 pt-16"> 
        {/* Greeting */}
        <ParentGreeting/>

        {/* Rest of your content remains the same */}
        {/* Child Info */}
        <View className="bg-blue-600 rounded-2xl p-4 mb-6 mx-4">
          <Text className="text-white text-lg font-semibold mb-1">
            Child's Name
          </Text>
          <Text className="text-white text-base">Osei Koomson Ajei</Text>
          <Text className="text-white text-sm mb-3">Class 5</Text>
          <TouchableOpacity onPress={ handleChildView} className="bg-white px-4 py-2 rounded-md self-start">
            <Text className="text-blue-600 font-semibold">
              Child's Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Activities */}
        <View className="px-4 mb-6">
          <Text className="text-black text-lg font-semibold mb-4">
            Activities
          </Text>
          <ActivitiesGrid />
         
        </View>

        {/* Info Cards */}
        <View className="px-4 space-y-4 mb-10">
          <View className="bg-indigo-600 mb-4 rounded-2xl py-4 px-6">
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
    </SafeAreaView>
  );
}