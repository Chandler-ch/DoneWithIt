import { Platform, StyleSheet, Text } from "react-native";

type AppTextProps = {
  children?: any;
};

export default function AppText({ children }: AppTextProps) {
  return <Text style={styles.text}>{children}</Text>;
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
