import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import ErrorMessage from "@/app/components/ErrorMessage";
import defaultStyles from "@/app/config/defaultStyles";
import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import FormScreen from "../../components/FormScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <ErrorMessage error={errors.email} />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
              />
              <ErrorMessage error={errors.password} />
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
