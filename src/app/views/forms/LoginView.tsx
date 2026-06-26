import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import defaultStyles from "@/app/config/defaultStyles";
import { Image, StyleSheet, View } from "react-native";
import FormScreen from "../../components/FormScreen";

export default function Login() {
  return (
    <FormScreen>
      <View style={styles.logoContainer}>
        <Image
          style={defaultStyles.logoSize}
          source={require("@/assets/logo-red.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
        <AppButton title="Login" />
      </View>
    </FormScreen>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
  },
  formContainer: {
    marginVertical: 20,
  },
});
