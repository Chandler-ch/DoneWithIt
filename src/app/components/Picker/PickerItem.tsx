import { Pressable, StyleSheet } from "react-native";
import AppText from "../AppText";

type PickerItemProps = {
  label: string;
  onPress: any;
};

export default function PickerItem({ label, onPress }: PickerItemProps) {
  return (
    <Pressable onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
