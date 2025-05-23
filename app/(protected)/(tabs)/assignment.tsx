import HeaderWithMenu from '@/components/Header';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AssignmentScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">

      <HeaderWithMenu  />

            <ScrollView className="flex-1 pt-16"> 



      
      {/* Header Section */}
      <Text className="text-2xl font-bold text-gray-900">Assignment</Text>
      <Text className="text-base text-gray-500 mb-8">Osei Koomson Ajei</Text>
      
      {/* No Assignments Card */}
      <View className="bg-gray-50 rounded-xl p-5 mb-8">
        <Text className="text-lg font-bold text-gray-800 text-center mb-4">
          NO ASSIGNMENTS AVAILABLE
        </Text>
        <View className="flex-row justify-between border-t border-gray-200 pt-4">
          <Text className="text-base text-gray-600">Status</Text>
          <Text className="text-base font-semibold text-gray-600">No assignments</Text>
        </View>
      </View>

      {/* Divider */}
      <View className="h-px bg-gray-200 my-5" />

      {/* Weekly Comment Section */}
      <Text className="text-lg font-bold text-gray-900">Weekly Comment</Text>
                  </ScrollView>

    </SafeAreaView>
  );
};

export default AssignmentScreen;