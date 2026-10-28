import { Formik, FormikConfig } from "formik";
import { ObjectSchema } from "yup";

interface AppFormProps {
  initialValues: object;
  onSubmit: any;
  validationSchema: ObjectSchema<{}>;
  children: any;
}

function AppForm<initialValuesType>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: {
  initialValues: FormikConfig<initialValuesType>["initialValues"];
  onSubmit: ({}) => void | Promise<any>;
  validationSchema: ObjectSchema<{}>;
  children: any;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
