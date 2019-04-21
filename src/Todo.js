import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';


const Todo = ({todo, toggleComplete, deleteTodo }) => (
    <View style={style.todoContainer}>
        <Text style={style.todoText}>
            {todo.title}
        </Text>
        <View style={style.button}>
            <TodoButton
                name='Done'
                complete={todo.complete} 
                onPress={() => toggleComplete(todo.todoIndex)}
                deleteTodo={deleteTodo}
            />
            <TodoButton
                name='Delete'
                complete={todo.complete} 
                onPress={() => deleteTodo(todo.todoIndex)}
            />
        </View>

    </View>
)


const style = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft:1,
        paddingBottom:1,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowColor: '#000000',
        shadowOffset: { width:2, height:2},
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 17
    },
    button:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default Todo;