import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalinputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.inputText}
          onChangeText={goalinputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <Button title='CANCEL' color='white' onPress={props.onClear} />
          </View>
          <View style={styles.addButton}>
            <Button title='ADD' color='white' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  cancelButton: {
    width: '40%',
    backgroundColor: 'red',
  },
  addButton: {
    width: '40%',
    backgroundColor: '#147EFB',
  },
})
