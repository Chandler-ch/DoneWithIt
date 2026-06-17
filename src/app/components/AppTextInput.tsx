import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import AppIcon from "./AppIcon";

type AppTextInputProps = {
  placeholder?: string;
  icon?: string;
};

export default function AppTextInput({ placeholder, icon }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <AppIcon style={styles.icon} icon={icon} backgroundColor="light" />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.medium}
        style={[styles.input, defaultStyles.text]}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.light,
    borderRadius: 100,
    height: 50,
    flexDirection: "row",
  },
  icon: {
    margin: 5,
  },
  input: {
    color: colors.dark,
    outlineStyle: "none",
    fontSize: 18,
    width: "100%",
    marginLeft: 10,
  },
});
