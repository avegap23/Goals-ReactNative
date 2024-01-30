import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem({ goal, onDeleteGoal }) {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.pressedItem}
            onPress={() => {
                onDeleteGoal(goal.id)
            }}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = new StyleSheet.create({
    goalItem: {
        padding: 20,
        backgroundColor: "#0096f2",
        marginBottom: 10,
        borderRadius: 12,
    },
    goalText: {
        color: "white"
    },
    pressedItem: {
        opacity: 0.5
    }
})