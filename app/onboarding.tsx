import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-300  ">
      <View className="flex-1   justify-center items-center  ">
        <View className="h-3/5 bg-white w-full">
            
        <Image
          source={{
            uri: "https://via.placeholder.com/300x200.png?text=Education+App",
          }}
          className="w-full h-48 mb-8 rounded-lg"
          resizeMode="contain"
        />
            
        </View>
        <View className="h-2/5 bg-blue-300 w-full rounded-t-3xl p-8 justify-center items-center">
            

            <View className="mb-8">
          <Text className="text-2xl text-white text-center mb-2">
            Get Involved, Get Informed!
          </Text>
          <Text className="text-2xl text-white text-center">
            Know your ward's progress,
          </Text>
          <Text className="text-2xl text-white text-center">
            & Interact with your ward's school!
          </Text>
        </View>

        <TouchableOpacity className="bg-blue-500 py-4 px-8 rounded-full w-full max-w-xs mb-4">
          <Text className=" text-white text-lg font-bold text-center">
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Register Link */}
        <TouchableOpacity>
          <Text className="text-white text-center">
            Don't have an account?{" "}
            <Text className="font-bold text-blue-500">register here</Text>
          </Text>
        </TouchableOpacity>
        </View>
        

     
        
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
