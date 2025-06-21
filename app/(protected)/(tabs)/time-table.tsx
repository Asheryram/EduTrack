import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";

const TimeTableComponent = ({ 
subjects = [
    'Mathematics',
    'Int. Science',
    'English Language',
    'Religious and Moral Studies',
    'Environmental Studies'
],
weeklySchedule = {
    '7:30 - 8:30': ['Mathematics', 'English Language', 'Mathematics', 'Mathematics', 'Mathematics'],
    '8:30 - 9:30': ['English Language', 'Mathematics', 'English Language', 'English Language', 'English Language'],
    '9:30 - 10:00': ['BREAK', 'BREAK', 'BREAK', 'BREAK', 'BREAK'],
    '10:00 - 10:30': ['English', 'English', 'English', 'English', 'English'],
    '10:30 - 11:30': ['English', 'English', 'English', 'English', 'English'],
    '11:30 - 12:30': ['Int. Science', 'Int. Science', 'Int. Science', 'Int. Science', 'Int. Science'],
    '12:30 - 1:30': ['Mathematics', 'R.E', 'English', 'Music', 'Environmental Studies'],
    '1:30 - 2:30': ['Environmental Studies', 'Environmental Studies', 'Environmental Studies', 'Environmental Studies', 'Environmental Studies']
}
}) => {

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const getSubjectStyle = (subject: string) => {
    if (subject === 'BREAK') return 'bg-orange-100 border-orange-200';
    if (subject.includes('Mathematics')) return 'bg-blue-100 border-blue-200';
    if (subject.includes('Science')) return 'bg-green-100 border-green-200';
    if (subject.includes('English')) return 'bg-yellow-100 border-yellow-200';
    if (subject.includes('Religious') || subject === 'R.E') return 'bg-purple-100 border-purple-200';
    if (subject.includes('Environmental')) return 'bg-teal-100 border-teal-200';
    if (subject.includes('Music')) return 'bg-pink-100 border-pink-200';
    return 'bg-gray-50 border-gray-200';
};


const TableRow = ({ time, daySubjects }: { time: string; daySubjects: string[] }) => (
    <View className="flex-row border-b border-gray-200">
      <View className="w-20 bg-gray-50 border-r border-gray-300 p-2 justify-center">
        <Text className="text-xs text-gray-700 font-medium text-center">{time}</Text>
      </View>
      {daySubjects.map((subject, index) => (
        <View 
          key={index} 
          className={`flex-1 border-r border-gray-300 p-2 min-h-[50px] justify-center ${getSubjectStyle(subject)}`}
        >
          <Text className={`text-xs text-center ${getSubjectStyle(subject)}`}>
            {subject}
          </Text>
        </View>
      ))}
    </View>
  );

  const TableHeader = () => (
    <View className="flex-row bg-gray-100 border-b-2 border-gray-300">
      <View className="w-20 border-r border-gray-300 p-3 justify-center">
        <Text className="text-sm font-bold text-gray-700 text-center">Time</Text>
      </View>
      {days.map((day) => (
        <View key={day} className="flex-1 border-r border-gray-300 p-3 justify-center">
          <Text className="text-sm font-bold text-gray-700 text-center">{day}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-gradient-to-br from-purple-100 via-pink-50 to-red-100">
      <View className="p-4">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-black mb-6">Time Table</Text>
        </View>

        {/* Subjects List */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-black mb-4">Subjects</Text>
          <View className="bg-white rounded-lg shadow-md p-4">
            {subjects.map((subject, index) => (
              <Text key={index} className="text-gray-700 text-base py-1">
                {subject}
              </Text>
            ))}
          </View>
        </View>

        {/* Weekly Timetable */}
        <View className="bg-white rounded-lg shadow-lg p-6">
          <Text className="text-2xl font-bold text-center text-black mb-6">
            Weekly Timetable
          </Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="border border-gray-300 rounded-lg overflow-hidden min-w-[600px]">
              <TableHeader />
              {Object.entries(weeklySchedule).map(([time, daySubjects]) => (
                <TableRow key={time} time={time} daySubjects={daySubjects} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default TimeTableComponent;

