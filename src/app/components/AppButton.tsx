import colors from "@/app/config/colors";
import { StyleSheet, View } from "react-native";

type AppButtonProps = {
  title?: string;
};

export default function AppButton({ title }: AppButtonProps) {
  return <View style={styles.button2}>{title}</View>;
}

const styles = StyleSheet.create({
  button2: {
    marginTop: 20,
    right: 30,
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
