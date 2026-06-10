import { Platform, StyleSheet, Text } from "react-native";

type AppTextProps = {
  children?: any;
  style?: object;
};

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamliy: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamliy: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
