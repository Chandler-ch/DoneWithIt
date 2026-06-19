import { StyleSheet, View } from "react-native";
import Login from "./views/forms/LoginView";

export default function Index() {
  return (
    <View>
      <Login />
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
