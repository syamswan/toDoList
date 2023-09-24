import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState();

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/Goals.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInputStyle}
          placeholder="Type your Goal"
        />
        <View style={styles.actionBtnsContainer}>
          <View style={styles.actionBtns}>
            <Button
              color="#D80032"
              onPress={props.onCloseGoal}
              title="Cancel"
            />
          </View>

          <View style={styles.actionBtns}>
            <Button color="#FF2171" onPress={addGoalHandler} title="Add goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flex: 1,
    padding: 16,
    backgroundColor: "#F78CA2",
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    padding: 5,
    borderRadius: 6,
    backgroundColor: "white",
  },

  actionBtnsContainer: {
    flexDirection: "row",
  },

  actionBtns: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },

  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

module.exports = GoalInput;
