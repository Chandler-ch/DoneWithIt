import { StyleSheet, View } from "react-native";
import ListIconPicture from "../components/ListItem/ListIconPicture";
import ListItem from "../components/ListItem/ListItem";
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
          leftSymbol={<ListIconPicture icon="format-list-bulleted" />}
        />
        <ListItem
          title="My Messages"
          leftSymbol={
            <ListIconPicture icon="email" backgroundColor="secondary" />
          }
        />
      </View>

      <ListItem
        style={styles.logout}
        title="Logout"
        leftSymbol={<ListIconPicture icon="logout" backgroundColor="warning" />}
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
