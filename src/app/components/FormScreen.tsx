import { StyleSheet, View } from "react-native";

type FormScreenProps = {
  children: any;
};

export default function FormScreen({ children }: FormScreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
