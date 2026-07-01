import AppFormField from "@/app/components/AppFormField";
import SubmitButton from "@/app/components/SubmitButton";
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
          {() => (
            <>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email"
                placeholder="Email"
                name="email"
                textContentType="emailAddress"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <SubmitButton title="login" />
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
