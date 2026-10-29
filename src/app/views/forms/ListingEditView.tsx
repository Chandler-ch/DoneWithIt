import AppForm from "@/app/components/forms/AppForm";
import AppFormField from "@/app/components/forms/AppFormField";
import SubmitButton from "@/app/components/forms/SubmitButton";
import AppFormPicker from "@/app/components/picker/AppFormPicker";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import FormScreen from "../../components/forms/FormScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

interface ListingEditValues {
  title: string;
  price: number;
  category: object;
  description?: string;
}

export default function RegisterView() {
  return (
    <FormScreen>
      <View style={styles.formContainer}>
        <AppForm<ListingEditValues>
          initialValues={{ title: "", price: 1, category: {} }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField<ListingEditValues>
            autoCapitalize="words"
            placeholder="Title"
            name="title"
            textContentType="name"
          />
          <AppFormField<ListingEditValues>
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            placeholder="Price"
            name="price"
          />
          <AppFormPicker<ListingEditValues>
            name="category"
            placeholder="Category"
            onSelectItem={(value: string) => console.log(value)}
            items={null}
            selectedItem={null}
          />
          <AppFormField<ListingEditValues>
            autoCapitalize="none"
            autoCorrect={false}
            name="description"
            placeholder="Description"
          />
          <SubmitButton title="Post" />
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
