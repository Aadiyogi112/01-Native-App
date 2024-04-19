import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goals here"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.listStyle}>
                <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index)=>{return item.id}}
        />

        {/* <ScrollView>
          {goals.map((goal, index) => {
            return (
              <View style={styles.listStyle} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
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
