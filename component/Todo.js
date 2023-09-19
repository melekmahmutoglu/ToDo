import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Done from '../icon/Done'

const Todo = ({ title, index, onDelete, itemKey }) => {
  const [completed, setCompleted] = useState(false);

  const completedTodo = () => {
    setCompleted(!completed);
    onDelete(itemKey);
  }

  return (
    <View style={styles.background} >
      <TouchableOpacity onPress={completedTodo}>
        {
          completed == true ?
            <View style={styles.done}>
              <Done />
            </View> :
            <View style={styles.done}></View>
        }
      </TouchableOpacity>
      <Text key={index} style={styles.textalign}>{title}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    borderColor: '#fc9403',
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start'

  },
  done: {
    width: 24,
    height: 24,
    backgroundColor: '#fc9403',
    borderRadius: 10,
    opacity: 0.3,
    marginRight: 20
  },
  textalign: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#585858',


  }
})