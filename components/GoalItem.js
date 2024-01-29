import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GoalItem({ goal }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.text}</Text>
        </View>
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
    }
})