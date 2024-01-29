import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';


export default function App() {

  // declaramos el hook de estado de componente "newGoal"
  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoal) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, {
      id: Date.now(),
      text: newGoal
    }]);
  }

  return (
    <View style={styles.container}>

      <GoalInput onNewGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <View style={styles.goalItem} key={dataItem.item.id}>
              <Text style={styles.goalText}>{dataItem.item.text}</Text>
            </View>
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
  },
  goalItem: {
    padding: 20,
    backgroundColor: "#0096f2",
    marginBottom: 10,
    borderRadius: 12,
  },
  goalText: {
    color: "white"
  }
})