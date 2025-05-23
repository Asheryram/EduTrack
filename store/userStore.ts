import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type User = {
  id?: string;
  name: string;
  email?: string;
  avatar?: string;
  // Add other user fields as needed
};

type UserState = {
  user: User ;
  
  // Actions - pure state management only
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
};

const userStorageKey = "user-data";

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: {
        email:"",
        id:"",
        name: "",
        avatar: ""
      },

      setUser: (user: User) => {
        console.log("Setting user:", user);
        set({ user });
      },

      updateUser: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          const updatedUser = { ...currentUser, ...updates };
          console.log("Updating user:", updatedUser);
          set({ user: updatedUser });
        }
      },

      clearUser: () => {
        console.log("Clearing user data");
        set({ user: {
        email:"",
        id:"",
        name: "",
        avatar: ""
      } });
      },
    }),
    {
      name: userStorageKey,
      storage: createJSONStorage(() => AsyncStorage),
      // Persist the user data
      partialize: (state) => ({ 
        user: state.user,
      }),
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrated user state:", state?.user);
      },
    }
  )
);



