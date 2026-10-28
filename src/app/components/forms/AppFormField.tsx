import { useFormikContext } from "formik";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";

export default function AppFormField<initialType>({
  name,
  ...otherProps
}: {
  name: keyof initialType & string;
} & AppTextInputProps) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<initialType>();
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
