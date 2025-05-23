import { Text, View } from 'react-native';

interface DayAttendance {
  day: string;
  status: 'present' | 'absent' | 'no-school';
}

interface WeekAttendance {
  week: number;
  days: DayAttendance[];
}

interface AttendanceReportProps {
  attendanceData: WeekAttendance[];
}

const AttendanceReport = ({ attendanceData }: AttendanceReportProps) => {
  return (
    <View className="flex-1 p-4 bg-gray-50">
      <Text className="text-2xl font-bold text-center mb-6 text-gray-900">
        Student Attendance Report
      </Text>

      <View className="gap-y-4">
        {attendanceData.map((week) => (
          <View 
            key={`week-${week.week}`}
            className="bg-white rounded-lg shadow p-4"
          >
            <Text className="text-lg font-semibold mb-3 text-gray-900">
              Week {week.week}
            </Text>
            
            <View className="flex flex-row justify-between mb-3 gap-x-2">
              {week.days.map((day: { day: string; status: 'present' | 'absent' | 'no-school' }) => {
                const statusStylesMap: Record<'present' | 'absent' | 'no-school', string> = {
                  present: 'bg-green-100 border-green-300 text-green-800',
                  absent: 'bg-red-100 border-red-300 text-red-800',
                  'no-school': 'bg-gray-100 border-gray-300 text-gray-800'
                };
                const statusIconMap: Record<'present' | 'absent' | 'no-school', string> = {
                  present: '✓',
                  absent: '✗',
                  'no-school': '–'
                };
              
                const statusStyles = statusStylesMap[day.status] || 'bg-blue-100 border-blue-300 text-blue-800';
                const statusIcon = statusIconMap[day.status] || '?';
              
                return (
                  <View 
                    key={`week-${week.week}-${day.day}`}
                    className={`flex-col items-center justify-center p-2 rounded border ${statusStyles}`}
                  >
                    <Text className="text-xs font-medium">
                      {day.day.substring(0, 3)}
                    </Text>
                    <Text className="text-lg font-bold">
                      {statusIcon}
                    </Text>
                  </View>
                );
              })}
            </View>
            
            <Text className="text-sm text-gray-600">
              <Text className="font-medium">Summary:</Text> {week.days.filter(d => d.status === 'present').length} present, 
              {' '}{week.days.filter(d => d.status === 'absent').length} absent, 
              {' '}{week.days.filter(d => d.status === 'no-school').length} no school
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AttendanceReport;