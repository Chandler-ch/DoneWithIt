import colors from "@/app/config/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AppButtonProps = {
  title?: string;
  onPress?: any;
  color?: keyof typeof colors;
  style?: any;
};

export default function AppButton({
  title,
  onPress,
  color = "primary",
  style,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
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
