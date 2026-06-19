import colors from "@/app/config/colors";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";

type ListIconPictureProps = {
  icon: string;
  size?: number;
  backgroundColor?: keyof typeof colors;
  style?: any;
  iconColor?: string;
};

export default function AppIcon({
  icon,
  size = 20,
  backgroundColor = "primary",
  style,
  iconColor = "#000",
}: ListIconPictureProps) {
  return (
    <View
      style={[
        styles.image,
        style,
        { backgroundColor: colors[backgroundColor] },
      ]}
    >
      <Icon color={iconColor} size={size} source={icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
