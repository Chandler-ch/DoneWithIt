import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import colors from "../../config/colors";
import AppText from "../AppText";

type ListItemProps = {
  image?: ImageSourcePropType;
  title: string;
  subtitle?: string;
  onPress?: any;
  swipeRight?: any;
  style?: any;
  LeftSymbol?: any;
};

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  swipeRight,
  style,
  LeftSymbol,
}: ListItemProps) {
  return (
    <Swipeable renderRightActions={swipeRight}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressable : "")}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {LeftSymbol ? (
            <View>{LeftSymbol}</View>
          ) : (
            <Image style={styles.image} source={image}></Image>
          )}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    marginTop: 1,
  },
  textContainer: {
    marginLeft: 10,
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
  },
  pressable: {
    backgroundColor: colors.light,
  },
});
