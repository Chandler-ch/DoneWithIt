import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/listItem/ListItem";
import colors from "../config/colors";

type ListingsProps = {
  title: string;
  price?: string;
  image: ImageSourcePropType;
};

export default function Listings({ title, price, image }: ListingsProps) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
      <View style={styles.userContainer}></View>
      <ListItem
        title="Amelia Chandler"
        subtitle="Entwicklerin"
        image={require("@/assets/AmeliaPB.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
