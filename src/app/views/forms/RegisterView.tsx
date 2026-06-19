import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import { StyleSheet, View } from "react-native";

export default function RegisterView() {
  return (
    <View style={styles.container}>
      <AppTextInput icon="account" placeholder="Name" />
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" />
      <AppButton title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
