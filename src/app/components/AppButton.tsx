import colors from "@/app/config/colors";
import {
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type AppButtonProps = {
  title?: string;
  onPress?: any;
  color?: keyof typeof colors;
  style?: any;
} & ButtonProps;

export default function AppButton({
  title,
  onPress,
  color = "primary",
  style,
  ...otherProps
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
      {...otherProps}
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  button: {
    margin: 5,
    marginVertical: 10,
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
