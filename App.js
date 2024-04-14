import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.dummyText}
        >
          Another Text
        </Text>
      </View>
      <Text
        style={styles.dummyText}
      >
        Hello World!!!!!!
      </Text>
      <Button title="Hey there" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText:{ margin: 16, borderColor: "red", borderWidth: 2, padding: 16 }
});
