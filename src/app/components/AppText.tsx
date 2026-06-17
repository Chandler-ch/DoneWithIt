import { Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

type AppTextProps = {
  children?: any;
  style?: object;
};

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
