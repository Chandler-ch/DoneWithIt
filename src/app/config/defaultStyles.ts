import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  logoSize: {
    width: 100,
    height: 100,
  },
};
