import { useFormikContext } from "formik";
import AppButton, { AppButtonProps } from "./AppButton";

type SubmitButtonProps = {
  title: string;
} & AppButtonProps;

function SubmitButton({ title }: SubmitButtonProps) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
