import AppButton from "@/app/components/AppButton";
import AppTextInput from "@/app/components/AppTextInput";
import AppPicker from "@/app/components/picker/AppPicker";
import FormScreen from "../../components/FormScreen";

export default function AddItem(props) {
  return (
    <FormScreen>
      <AppTextInput icon="email" placeholder="Title" />
      <AppTextInput placeholder="Price" />
      <AppPicker placeholder="Category" />
      <AppTextInput placeholder="Description" />
      <AppButton title="POST" />
    </FormScreen>
  );
}
