import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Todo from '../component/Todo';

const ToDoPage = () => {
    const [toDoNum, setToDoNum] = useState(0);
    const [toDo, setToDo] = useState(" ");
    const [listToDo, setListToDo] = useState([]);


    const changeToDoNum = () => {
        setToDoNum(toDoNum + 1);
        setListToDo([...listToDo, { text: toDo, key: Date.now() }]);
        setToDo("Yapılacaklar...")

    }

    const deleteToDo = (key) => {
        const updatedList = listToDo.filter(item => item.key !== key);
        setListToDo(updatedList);
        setToDoNum(updatedList.length);
    }


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Yapılacaklar:</Text>
                    <Text style={styles.textStyle}>{toDoNum.toString()}</Text>
                </View>
                <View style={styles.inputAddContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={text => setToDo(text)}
                        value={toDo}
                        placeholder='Yapılacaklar...'
                    />
                    <TouchableOpacity onPress={changeToDoNum} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={listToDo}
                    keyExtractor={(item) => item.key.toString()}
                    renderItem={({ item, index }) => (
                        <Todo
                            title={item.text}
                            index={index}
                            onDelete={deleteToDo}
                            itemKey={item.key}
                        />
                    )} />
            </View>
        </SafeAreaView>
    )
}

export default ToDoPage

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#ececec',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ececec',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 36,
        fontWeight: '500',
        margin: 20,
    },
    inputAddContainer: {
        flexDirection: 'row',
        padding: 15,

    },
    textInputStyle: {
        borderColor: '#58585852',
        borderWidth: 1,
        borderRadius: 50,
        padding: 30,
        flex: 1,
        backgroundColor: 'white',
        color: '#585858',
        margin: 5,

    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#58585852',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 20,
        margin: 10,
        width: 65,
        height: 65,
    },
    buttonText: {
        color: '#585858',
        fontWeight: '400',
        fontSize: 17
    }
})