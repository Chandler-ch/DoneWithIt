import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import AppIcon from "./AppIcon";

type AppTextInputProps = {
  placeholder?: string;
  icon?: string;
} & TextInputProps;

export default function AppTextInput({
  placeholder,
  icon,
  ...otherProps
}: AppTextInputProps) {
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
        {...otherProps}
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
    marginLeft: 5,
    marginRight: -10,
  },
  input: {
    color: colors.dark,
    outlineStyle: "none",
    fontSize: 18,
    width: "100%",
    marginLeft: 10,
  },
});
