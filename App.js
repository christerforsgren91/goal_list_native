import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const clearGoalModal = () => {
    setAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='ADD NEW GOAL' onPress={() => setAddMode(true)} />
      <GoalInput
        visible={addMode}
        onAddGoal={addGoalHandler}
        onClear={clearGoalModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})

export default App
