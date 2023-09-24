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

  const [isModalVisible, setModalVisible] = useState(false);

  function addgoalHandler(goalText) {
    setgoalslist((currentGoals) => [...currentGoals, goalText]);
    closeGoalHandler();
  }

  const deleteGoalItem = (index) => {
    const newGoals = goalslist.filter((el, i) => i != index);
    setgoalslist(newGoals);
  };

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function closeGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={startAddGoalHandler}
          title="Add New Goal"
          color="#D80032"
        />
        <GoalInput
          onCloseGoal={closeGoalHandler}
          onAddGoal={addgoalHandler}
          visible={isModalVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalslist}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  text={itemData.item}
                  deleteGoalItem={() => deleteGoalItem(itemData.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#F78CA2",
  },

  goalsContainer: {
    flex: 4,
  },
});
