import { StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <AppCard
        title="Red Jacket for sale"
        subTitle="100€"
        image={require("@/assets/jacket.jpg")}
        style={styles.card}
      />
      <AppCard
        title="Couch in great condition"
        subTitle="1000€"
        image={require("@/assets/couch.jpg")}
        style={styles.card}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  card: {
    margin: 20,
    marginBottom: 0,
  },
});
