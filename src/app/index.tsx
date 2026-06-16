import { StyleSheet } from "react-native";
import MyAccountView from "./views/MyAccountView";

export default function Index() {
  return <MyAccountView />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
