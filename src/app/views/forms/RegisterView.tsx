import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import FormScreen from "../../components/FormScreen";

export default function RegisterView() {
  return (
    <FormScreen>
      <AppTextInput icon="account" placeholder="Name" />
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" />
      <AppButton title="Register" />
    </FormScreen>
  );
}
