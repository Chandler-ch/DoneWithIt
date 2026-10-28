import { useFormikContext } from "formik";
import AppButton, { AppButtonProps } from "./AppButton";

function SubmitButton({ title }: AppButtonProps) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
