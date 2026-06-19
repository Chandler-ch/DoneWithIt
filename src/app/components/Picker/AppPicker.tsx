import { useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";
import AppIcon from "../AppIcon";
import AppText from "../AppText";
import PickerItem from "./PickerItem";

type AppPickerInputProps = {
  placeholder?: string;
  icon?: string;
  items: any;
  onSelectItem: any;
  selectedItem: any;
};

export default function AppPicker({
  placeholder,
  icon,
  items,
  onSelectItem,
  selectedItem,
}: AppPickerInputProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <AppIcon style={styles.icon} icon={icon} backgroundColor="light" />
          )}
          <AppText style={[defaultStyles.text, styles.text]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <AppIcon
            backgroundColor="light"
            iconColor={colors.medium}
            icon="chevron-down"
            style={styles.iconOpening}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible}>
        <FlatList
          data={items}
          keyExtractor={(items) => items.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                (setModalVisible(false), onSelectItem(item));
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 100,
    height: 60,
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    margin: 5,
  },
  text: {
    margin: 10,
    marginTop: 17,
    flex: 1,
    color: colors.medium,
  },
  iconOpening: {
    marginTop: 5,
  },
});
