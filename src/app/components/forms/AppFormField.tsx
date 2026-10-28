import { useFormikContext } from "formik";
import { LoginValues } from "../../views/forms/LoginView";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";

type AppFormFieldProps = {
  name: keyof LoginValues & string;
} & AppTextInputProps;
export default function AppFormField({
  name,
  ...otherProps
}: AppFormFieldProps) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<LoginValues>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}
