import { StyleSheet, View, Text, Alert } from "react-native";
import { Icon } from "@rneui/themed";

function GoalItems(props) {
  const deleteGoalAlert = () => {

    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          props.deleteGoalItem(); 
        },
      },
     
    ],
    { cancelable: false }
    );
  };

  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalItemText}>{props.text}</Text>

      <Icon
        name="trash"
        type="font-awesome"
        color="white"
        size={17}
        onPress={deleteGoalAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    borderRadius: 5,
    backgroundColor: "#603fef",
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  goalItemText: {
    color: "white",
  },
});

module.exports = GoalItems;
