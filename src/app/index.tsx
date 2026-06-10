import { StyleSheet } from "react-native";
import Listings from "./views/Listings";

export default function Index() {
  return (
    <Listings
      title="Red jacket for sale"
      price="100€"
      image={require("@/assets/jacket.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
