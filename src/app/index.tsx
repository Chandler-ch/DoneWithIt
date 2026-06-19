import { StyleSheet, View } from "react-native";
import AddItem from "./views/forms/AddItem";

export default function Index() {
  return (
    <View>
      <AddItem />
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
