import colors from "@/app/config/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AppButtonProps = {
  title?: string;
  onPress?: any;
  color?: keyof typeof colors;
};

export default function AppButton({
  title,
  onPress,
  color = "primary",
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
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
    marginVertical: 10,
    borderRadius: 25,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
