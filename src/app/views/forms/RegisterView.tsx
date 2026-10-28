import AppForm from "@/app/components/forms/AppForm";
import AppFormField from "@/app/components/forms/AppFormField";
import SubmitButton from "@/app/components/forms/SubmitButton";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import FormScreen from "../../components/forms/FormScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

export default function RegisterView() {
  return (
    <FormScreen>
      <View style={styles.formContainer}>
        <AppForm<RegisterValues>
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField<RegisterValues>
            icon="account"
            placeholder="Name"
            name="name"
            textContentType="name"
          />
          <AppFormField<RegisterValues>
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="email"
            placeholder="Email"
            name="email"
            textContentType="emailAddress"
          />
          <AppFormField<RegisterValues>
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
