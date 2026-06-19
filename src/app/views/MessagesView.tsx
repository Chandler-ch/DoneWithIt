import { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/listItem/ListItem";
import ListItemDeleteAction from "../components/listItem/ListItemDeleteAction";
import Seperator from "../components/Seperator";

const initialMessages = [
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
  const [messages, setMessages] = useState<Array<any>>(initialMessages);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => {
            console.log("selected", item.title);
          }}
          swipeRight={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={Seperator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages(initialMessages);
      }}
    ></FlatList>
  );
}
