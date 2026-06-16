import { FlatList } from "react-native";
import Profile from "../components/Profile";
import Seperator from "../components/Seperator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("@/assets/AmeliaPB.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("@/assets/AmeliaPB.jpg"),
  },
];

export default function MessagesView() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <Profile
          title={item.title}
          subtitle={item.description}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={Seperator}
    ></FlatList>
  );
}
