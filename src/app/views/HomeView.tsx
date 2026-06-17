import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

export default function HomeView() {
  const initialListings = [
    {
      id: 1,
      title: "Red Jacket for sale",
      subTitle: "100€",
      image: require("@/assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      subTitle: "1000€",
      image: require("@/assets/couch.jpg"),
    },
  ];

  return (
    <FlatList
      style={styles.container}
      data={initialListings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <AppCard
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          style={styles.card}
        />
      )}
    />
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
