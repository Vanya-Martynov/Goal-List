import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalList from "./components/goalsList/goalsList"
import ControlGoal from "./components/goalControl/goalControl"
interface IGoulList {
  key: string;
  id: string;
  item: string;
}

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [listOfGoals, setListOfGoals] = useState([] as IGoulList[]);

  const showModal = () => {
    setModalVisibility(true);
  }

  const hideModal = () => {
    setModalVisibility(false);
  }

  const saveMyGoal = (enteredGoal) => {
    let id = Math.random().toString();
    setListOfGoals(currList => [...currList, {item: enteredGoal, key: id, id}])
    hideModal();
  }

  const deleteGoalHandler = (id) => {
    setListOfGoals(prevList => prevList.filter(el => el.id !== id));
  };
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.goals}>
        <Button title='Add new goal' color={"#a065ec"} onPress={showModal}></Button>
        <ControlGoal visible={ modalVisibility } saveMyGoal={ saveMyGoal } onCancel={hideModal}></ControlGoal>
        <GoalList listOfGoals={listOfGoals} onDelete={ deleteGoalHandler }></GoalList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goals: {
    backgroundColor: "#1e085a",
    height: "100%",
    padding: 50
  }
});
