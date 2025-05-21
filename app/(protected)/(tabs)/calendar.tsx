import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { AuthContext } from "@/store/authContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FourthScreen() {
  const router = useRouter();
  const authState = useContext(AuthContext);

  return (
    <SafeAreaView className=" flex-1 p-4">
      <AppText center>Calenar Screen</AppText>
      <Button
        title="Back"
        theme="secondary"
        onPress={() => {
          router.back();
        }}
      />
      <Button title="Log out!" onPress={authState.logOut} />
    </SafeAreaView>
  );
}