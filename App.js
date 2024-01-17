import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  // declaramos el hook de estado de componente "newGoal"
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
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          placeholder='Input your Goal!!'
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>

        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <View style={styles.goalItem} key={dataItem.item}>
              <Text style={styles.goalText}>{dataItem.item}</Text>
            </View>
          )
          }
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