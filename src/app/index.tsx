import { StyleSheet } from "react-native";
import MessagesView from "./views/MessagesView";

export default function Index() {
  return <MessagesView />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
