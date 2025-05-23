import { useAuthStore } from "@/store/useAuthStore";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { isReady, isLoggedIn, isOnBoarded, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  // Navigation guard - runs whenever route changes or auth state changes
  useEffect(() => {
    if (!isReady) return; // Don't navigate until ready

    const currentRoute = segments.join('/') || '';
    console.log("Current route:", currentRoute, { isOnBoarded, isLoggedIn });
    
    // Define public routes that don't require auth
    const publicRoutes = ['onboarding', 'sign-in', 'register', 'teacher-details', 'child-details'];
    const isPublicRoute = publicRoutes.some(route => currentRoute.includes(route));
    
    // Define your route logic
    if (!isOnBoarded) {
      if (!currentRoute.includes('onboarding')) {
        router.replace("/onboarding");
      }
    } else if (!isLoggedIn) {
      if (!isPublicRoute) {
        router.replace("/sign-in");
      }
    } else {
      // User is logged in and onboarded - only redirect if they're on auth pages
      if (isPublicRoute) {
        router.replace("/home");
      }
      // Don't redirect for protected routes - let them navigate freely
    }
  }, [isReady, isLoggedIn, isOnBoarded, segments]);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="onboarding"
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
    </>
  );
}