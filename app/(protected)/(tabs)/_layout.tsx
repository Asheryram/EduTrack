import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function BottomTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarStyle: {
          right: 20,
          left: 20,
          borderRadius: 30,
          marginHorizontal: 30,
          marginVertical: 10,
          position: "absolute",
        },
      }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-account"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="assignment"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="school-fees"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(teachers)"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="child-profile"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="time-table"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-account"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tools" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
