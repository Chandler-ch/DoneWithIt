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
        <AppIcon
          style={styles.icon}
          icon={icon}
          size={25}
          backgroundColor="light"
          iconColor={colors.medium}
        />
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
    margin: 5,
    marginVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 100,
    height: 60,
    flexDirection: "row",
  },
  icon: {
    marginTop: 10,
    margin: 5,
  },
  input: {
    color: colors.dark,
    outlineStyle: "none",
    fontSize: 18,
    width: "100%",
  },
});
