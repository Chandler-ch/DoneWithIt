import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import defaultStyles from "@/app/config/defaultStyles";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import FormScreen from "../../components/FormScreen";

export default function Login() {
  const [email, setEmail] = useState(String);
  const [password, setPasstword] = useState(String);

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
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          icon="lock"
          onChangeText={(text) => setPasstword(text)}
          placeholder="Password"
          secureTextEntry
        />
        <AppButton title="Login" onPress={() => console.log(email, password)} />
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
