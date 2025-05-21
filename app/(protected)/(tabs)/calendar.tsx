import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { AuthContext } from "@/store/authContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";

export default function FourthScreen() {
  const router = useRouter();
  const authState = useContext(AuthContext);

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Calenar Screen</AppText>
      <Button
        title="Back"
        theme="secondary"
        onPress={() => {
          router.back();
        }}
      />
      <Button title="Log out!" onPress={authState.logOut} />
    </View>
  );
}