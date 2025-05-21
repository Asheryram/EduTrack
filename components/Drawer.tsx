import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const slideAnim = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="absolute inset-0 bg-black/30 z-20" />
      </TouchableWithoutFeedback>

      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
          width: SCREEN_WIDTH * 0.5,
        }}
        className="absolute top-0 left-0 bottom-0 bg-white z-30 p-6"
      >
        <Text className="text-lg font-bold mb-6">Menu</Text>

        <TouchableOpacity onPress={onClose} className="mb-4">
          <Text className="text-blue-600">Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose} className="mb-4">
          <Text className="text-blue-600">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose} className="mb-4">
          <Text className="text-red-600">Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
