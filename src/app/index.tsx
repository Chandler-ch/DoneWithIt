import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/Picker/AppPicker";

const initialCategories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function Index() {
  const [category, setCategory] = useState<object>(initialCategories[0]);
  return (
    <View>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item: any) => setCategory(item)}
        items={initialCategories}
        icon="email"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
