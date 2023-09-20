import { StatusBar } from "expo-status-bar";
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

import GoalItems from "./Goalitem";
import GoalInput from "./Goalinput";

export default function App() {
  const [goalslist, setgoalslist] = useState([]);

  function addgoalHandler(goalText) {
    setgoalslist((currentGoals) => [...currentGoals, goalText]);
  }

  const deleteGoalItem = (index) => {
    console.log("deleteItem " + index);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addgoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalslist}
          renderItem={(itemData) => {
            return <GoalItems text={itemData.item} deleteGoalItem={() => deleteGoalItem(itemData.index)} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
});
