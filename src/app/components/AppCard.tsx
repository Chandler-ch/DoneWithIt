import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

type AppCardProps = {
  title: string;
  subTitle?: string;
  image: ImageSourcePropType;
  style?: any;
};

export default function AppCard({
  title,
  subTitle,
  image,
  style,
}: AppCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
