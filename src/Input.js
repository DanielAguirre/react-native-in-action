import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({inputValue, inputChange}) => (
    <View style={style.inputContainer}>
        <TextInput
            style={style.input}
            value={inputValue}
            onChangeText={inputChange}
            placeholder="What need to be done!"
            placeholderTextColor="#CACACA"
            selectionColor="#666666"
        />
    </View>
)


const style = StyleSheet.create({
    inputContainer:{
        marginLeft: 20,
        marginRight:20,
        shadowOpacity: 0.2,
        shadowRadius:1,
        shadowColor: '#000000',
        shadowOffset:  { width:2, height:2}
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input;