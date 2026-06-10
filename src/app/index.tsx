import { StyleSheet } from "react-native";
import Start from "./views/Start";

export default function Index() {
  return <Start />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
