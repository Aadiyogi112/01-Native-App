import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
