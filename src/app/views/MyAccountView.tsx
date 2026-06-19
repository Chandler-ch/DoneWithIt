import { StyleSheet, View } from "react-native";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/listItem/ListItem";
import colors from "../config/colors";

export default function MyAccountView() {
  return (
    <View style={styles.container}>
      <ListItem
        style={styles.profile}
        title="Amelia Chandler"
        subtitle="achandler@mail.ch"
        image={require("@/assets/AmeliaPB.jpg")}
      />

      <View>
        <ListItem
          title="My Listings"
          LeftSymbol={<AppIcon icon="format-list-bulleted" />}
        />
        <ListItem
          title="My Messages"
          LeftSymbol={<AppIcon icon="email" backgroundColor="secondary" />}
        />
      </View>

      <ListItem
        style={styles.logout}
        title="Logout"
        LeftSymbol={<AppIcon icon="logout" backgroundColor="warning" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  profile: {
    backgroundColor: colors.white,
    marginTop: 25,
    marginBottom: 50,
  },
  logout: {
    marginTop: 25,
  },
});
