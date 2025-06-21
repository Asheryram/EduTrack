import { Stack } from "expo-router";
import React from "react";


export default function ProtectedLayout() {
  

  return (
  <Stack>
    <Stack.Screen
      name="home"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="teachers-attendance"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="teachers-assignment"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="examinations"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="teachers-class"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);
}