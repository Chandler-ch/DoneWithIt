import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

type ProfileProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  onPress: any;
};

export default function Profile({
  image,
  title,
  subtitle,
  onPress,
}: ProfileProps) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressable : "")}
      onPress={() => console.log("hello")}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image}></Image>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </Pressable>
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
  pressable: {
    backgroundColor: colors.light,
  },
});
