import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listStyle}>
      <Pressable
        android_ripple={"#7e00ff"}
        style={({ pressed }) => {
          return pressed && styles.pressedItem;
        }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listStyle: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#7e00aa",
    // color: "white",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.6,
    color: "offwhite",
  },
});
