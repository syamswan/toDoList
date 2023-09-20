import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState();

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInputStyle}
        placeholder="Type your Goal"
      />
      <Button onPress={addGoalHandler} title="Add your goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flex: 1,
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "70%",
  },
});

module.exports = GoalInput;
