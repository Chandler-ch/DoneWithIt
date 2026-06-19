import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import defaultStyles from "@/app/config/defaultStyles";
import { Image, StyleSheet, View } from "react-native";

export default function Login() {
  return (
    <>
      <View style={styles.logoContainer}>
        <Image
          style={defaultStyles.logoSize}
          source={require("@/assets/logo-red.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AppTextInput icon="email" placeholder="Email" />
        <AppTextInput icon="lock" placeholder="Password" />
      </View>
      <AppButton title="Login" />
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  formContainer: {
    margin: 5,
    marginVertical: 20,
  },
});
