
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";

import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Or use @react-native-community/checkbox or custom

const studentsList = new Array(13).fill('Jaden Brown');

export default function Attendance() {
  const [attendance, setAttendance] = useState<boolean[]>(Array(studentsList.length).fill(false));
  const [markAll, setMarkAll] = useState(false);

  const toggleStudent = (index: number) => {
    const updated = [...attendance];
    updated[index] = !updated[index];
    setAttendance(updated);
  };

  const toggleMarkAll = () => {
    const newValue = !markAll;
    setMarkAll(newValue);
    setAttendance(Array(studentsList.length).fill(newValue));
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 px-4 py-6">
      <Text className="text-3xl font-bold text-black">Attendance</Text>
      <Text className="text-xl font-semibold text-black mt-1">Class 5</Text>
      <Text className="text-center text-sm font-semibold text-purple-800 mt-2">
        Week 12 - Friday, 28th June 2025
      </Text>

      <View className="mt-4 border border-red-500 rounded-xl p-3">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-bold">Students</Text>
          <Pressable onPress={toggleMarkAll} className="flex-row items-center">
            <Text className="mr-2 font-medium">Mark all</Text>
            <CheckBox
              checked={markAll}
              onPress={toggleMarkAll}
              checkedColor="#6b46c1"
              containerStyle={{ padding: 0 }}
            />
          </Pressable>
        </View>

        {studentsList.map((student, index) => (
          <View key={index} className="flex-row justify-between items-center py-1">
            <Text>{student}</Text>
            <CheckBox
              checked={attendance[index]}
              onPress={() => toggleStudent(index)}
              checkedColor="#6b46c1"
              containerStyle={{ padding: 0 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
