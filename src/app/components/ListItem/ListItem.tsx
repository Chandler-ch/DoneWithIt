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
  leftSymbol?: any;
};

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  swipeRight,
  style,
  leftSymbol,
}: ListItemProps) {
  return (
    <Swipeable renderRightActions={swipeRight}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressable : "")}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {leftSymbol ? (
            <View style={styles.symbol}>{leftSymbol}</View>
          ) : (
            <Image style={styles.image} source={image}></Image>
          )}
          <View>
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
  symbol: {
    marginRight: 10,
  },
  pressable: {
    backgroundColor: colors.light,
  },
});
