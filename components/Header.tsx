import { Bell, Menu } from "lucide-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  onMenuPress: () => void;
};

export default function Header({ onMenuPress }: HeaderProps) {
  return (
    <View className="flex-row justify-between items-center mb-6 px-4 pt-6">
      <TouchableOpacity className="p-2" onPress={onMenuPress}>
        <Menu size={24} color="black" />
      </TouchableOpacity>

      <View className="flex-row items-center space-x-4">
        <TouchableOpacity className="p-2">
          <Bell size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/79.jpg" }}
          className="w-10 h-10 rounded-full"
        />
      </View>
    </View>
  );
}
