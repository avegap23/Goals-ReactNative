import { View, StyleSheet, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [myGoals, setMyGoals] = useState([]); // State of goals
  const [modalVisible, setModalVisible] = useState(false) // State of GoalInput

  // Input new goal function
  function addGoalHandler(newGoal) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, {
      id: Date.now(),
      text: newGoal
    }]);
  }

  // Delete goal function
  function onDeleteGoalHandler(id) {
    setMyGoals((myCurrentGoals) => {
      return myCurrentGoals.filter((goal) => goal.id != id)
    })
  }

  // The layout is similar to HTML
  // Tags are imported as React Native classes
  return (
    <>
      {/* Sets the theme of the status bar */}
      <StatusBar style='light' />

      <View style={styles.container}>

        {/* Clicking on the button makes the GoalInput component visible */}
        <View style={styles.addNewGoal}>
          <Button
            title='Add New Goal'
            onPress={() => setModalVisible(true)}
          />
        </View>

        <GoalInput
          onNewGoal={addGoalHandler}
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />

        {/* Goals we input through GoalInput will appear here */}
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
    </>
  );
}

// Stylesheet with clases, similar to CSS
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#311b6b'
  },
  addNewGoal: {
    marginHorizontal: 80,
    marginTop: 40
  },
  goalsContainer: {
    flex: 5,
    marginTop: 20
  }
})