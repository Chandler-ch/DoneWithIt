import AppForm from "@/app/components/forms/AppForm";
import AppFormField from "@/app/components/forms/AppFormField";
import SubmitButton from "@/app/components/forms/SubmitButton";
import defaultStyles from "@/app/config/defaultStyles";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import FormScreen from "../../components/forms/FormScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

interface LoginValues {
  email: string;
  password: string;
}

export default function LoginView() {
  return (
    <FormScreen>
      <View style={styles.logoContainer}>
        <Image
          style={defaultStyles.logoSize}
          source={require("@/assets/logo-red.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AppForm<LoginValues>
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField<LoginValues>
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="email"
            placeholder="Email"
            name="email"
            textContentType="emailAddress"
          />
          <AppFormField<LoginValues>
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="login" />
        </AppForm>
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
