import colors from "@/app/config/colors";
import { Pressable, StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";

type ListItemDeleteActionProps = {
  onPress: any;
};

export default function ListItemDeleteAction({
  onPress,
}: ListItemDeleteActionProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Icon color={colors.white} size={35} source="trash-can"></Icon>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
