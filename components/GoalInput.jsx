import React from 'react'
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

export default function GoalInput({ onNewGoal, visible, onCancel }) {

    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText) {
        setNewGoal(enteredText);
    }
    function onPressHandler() {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("")
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require("../assets/img/goal.png")} style={styles.goalImg} />
                <TextInput
                    onChangeText={textChangeHandler}
                    style={styles.textInput}
                    value={newGoal}
                    placeholder='Input your goal...'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Back'
                            onPress={onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={onPressHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = new StyleSheet.create({
    modal: {

    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: "80%",
        borderBottomWidth: 1,
        padding: 15,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '80%'
    },
    button: {
        width: '40%',
        margin: 10
    },
    goalImg: {
        width: 120,
        height: 100,
        marginBottom: 50
    }
})