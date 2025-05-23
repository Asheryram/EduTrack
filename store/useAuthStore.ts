import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  isOnBoarded: boolean;
  isReady: boolean;
  logIn: () => void;
  logOut: () => void;
  completeOnboarding: () => void;
  initialize: () => Promise<void>;
  // Add debug method to reset everything
  resetAll: () => void;
};

const authStorageKey = "auth-key";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      isOnBoarded: false,
      isReady: false,

      logIn: () => {
        console.log("Logging in user");
        set({ isLoggedIn: true });
      },

      logOut: () => {
        console.log("Logging out user");
        set({ isLoggedIn: false });
      },

      completeOnboarding: () => {
        console.log("Completing onboarding");
        set({ isOnBoarded: true });
      },

      initialize: async () => {
        console.log("Initializing auth store...");
        // Simulate a delay for API request or initialization
        await new Promise((res) => setTimeout(() => res(null), 1000));
        
        const state = get();
        console.log("Auth state after initialization:", {
          isLoggedIn: state.isLoggedIn,
          isOnBoarded: state.isOnBoarded,
        });
        
        set({ isReady: true });
      },

      // Debug method - remove in production
      resetAll: () => {
        console.log("Resetting all auth state");
        set({ 
          isLoggedIn: false, 
          isOnBoarded: false,
          isReady: false 
        });
      },
    }),
    {
      name: authStorageKey,
      storage: createJSONStorage(() => AsyncStorage),
      // Persist both authentication and onboarding state
      partialize: (state) => ({ 
        isLoggedIn: state.isLoggedIn,
        isOnBoarded: state.isOnBoarded,
      }),
      // Add some debugging
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrated auth state:", state);
      },
    }
  )
);