import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

type ProfileProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

export default function Profile({ image, title, subtitle }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: 500,
  },
  image: {
    borderRadius: 100,
    width: 70,
    height: 70,
    marginRight: 10,
  },
});
