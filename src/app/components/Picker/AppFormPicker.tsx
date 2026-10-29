import { useFormikContext } from "formik";
import ErrorMessage from "../forms/ErrorMessage";
import AppPicker, { AppPickerInputProps } from "./AppPicker";

export default function AppFormPicker<initialType>({
  name,
  ...otherProps
}: {
  name: keyof initialType & string;
} & AppPickerInputProps) {
  const { setFieldValue, handleChange, errors, touched } =
    useFormikContext<initialType>();
  return (
    <>
      <AppPicker onSelectItem={setFieldValue} {...otherProps} />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}
