import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

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
    <>
      <StatusBar style='light' />
      <View style={styles.container}>

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

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#311b6b'
  },
  goalsContainer: {
    flex: 5,
    marginTop: 20
  },
  addNewGoal: {
    marginHorizontal: 80,
    marginTop: 15
  }
})