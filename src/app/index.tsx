import { StyleSheet } from "react-native";
import HomeView from "./views/ImageView";

export default function Index() {
  return <HomeView />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
