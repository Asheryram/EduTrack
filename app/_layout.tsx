import { Stack } from "expo-router";
import "../global.css";

import { AuthProvider } from "@/store/authContext";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
             headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="register"
          options={{
             headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="teacher-details"
          options={{
             headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="child-details"
          options={{
             headerShown: false,
            animation: "none",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}

