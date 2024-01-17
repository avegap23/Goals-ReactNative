import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  //declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Input your goal'
          style={styles.textInput}
          onChangeText={textChangeHandler} />
        <Button title='Add goal'
          onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {myGoals.map((goal, i) => {
            return (
              <View style={styles.goalItem}
                key={i}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            )
          })}</ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: "70%",
    borderBottomWidth: 1,
    padding: 7
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