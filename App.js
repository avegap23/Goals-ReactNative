import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {

  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoal) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, {
      id: Date.now(),
      text: newGoal
    }]);
  }

  function onDeleteGoalHandler(id) {
    setMyGoals((myCurrentGoals) => {
      return myCurrentGoals.filter((goal) => goal.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <GoalInput onNewGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <GoalItem
              key={dataItem.item.id}
              goal={dataItem.item}
              onDeleteGoal={onDeleteGoalHandler}
            />
          )}
        />
      </View>

    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20
  },
  goalsContainer: {
    flex: 5
  }
})