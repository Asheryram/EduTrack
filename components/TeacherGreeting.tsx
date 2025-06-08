import { useUserStore } from "@/store/userStore";
import { Text, View } from "react-native";

export function TeacherGreeting() {
    const USER_STORE_userInfo = useUserStore((state) => state.user);
  
  return (
    <View className=" mb-6 px-6">
      <Text className="text-2xl font-bold text-gray-900">Hi {USER_STORE_userInfo.name ?? "USER"}</Text>
      <Text className="text-base text-gray-500">Teacher</Text>
    </View>
  );
}
