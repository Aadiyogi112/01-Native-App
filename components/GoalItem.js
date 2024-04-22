import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.listStyle}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listStyle: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#7e00aa",
    // color: "white",
  },
  goalText: {
    color: "white",
  },
});
