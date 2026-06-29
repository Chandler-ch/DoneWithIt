import { StyleSheet } from "react-native";
import AppText from "./AppText";

interface ErrorMessageProps {
  error?: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});
