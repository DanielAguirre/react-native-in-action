import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './src/Heading';
import Input from './src/Input';
import Button from './src/Button';
import TodoList from './src/TodoList';
import TabBar from './src/TabBar';
import getStyleSheet from './src/styles';

let todoIndex = 0;

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
            darkTheme: false
        }
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setType = this.setType.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }


    toggleTheme() {
      console.log('change theme')
      this.setState({darkTheme: !this.state.darkTheme})
    }

    deleteTodo(todoIndex) {
      let { todos } = this.state;
      todos = todos.filter(todo => todo.todoIndex !== todoIndex )
      this.setState({ todos }); 
    }

    toggleComplete(todoIndex) {
      let { todos } = this.state;
      todos.forEach(todo => {
        if(todo.todoIndex === todoIndex) {
          todo.complete = !todo.complete;
        }
      })
      this.setState({ todos});
    }

    setType(type) {
      this.setState({type})
    }

    submitTodo() {
      if(this.state.inputValue.match(/^\s*$/)) {
        return 
      }

      const todo = {
        title: this.state.inputValue,
        todoIndex,
        complete:false
      };

      todoIndex++;
      const todos = [...this.state.todos, todo];
      this.setState({
        todos,
        inputValue: ''
      }, () => {console.log(`State: ${this.state}`)});
    }
    inputChange(inputValue){
      console.log(`Input Value: ${inputValue}`);
      this.setState({inputValue})
    }

    render() {
      const { inputValue, todos, type, darkTheme } = this.state
      const styles = getStyleSheet(darkTheme);
      const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor
      console.log(styles)
      return (
          // <View style={style.container} >
            <View styles={styles.container}>
              <View styles={styles.box}>
                <Button title={backgroundColor} submitTodo={this.toggleTheme} />
              </View>
            </View>
          //     {/* <ScrollView keyboardShouldPersistTaps="always" style={style.content} >
          //         <Heading />
          //         <Input 
          //           inputValue={inputValue}
          //           inputChange={(text) => this.inputChange(text)}
          //         />
          //         <TodoList
          //           toggleComplete={this.toggleComplete}
          //           deleteTodo={this.deleteTodo}
          //           todos={todos}/>
          //         <Button submitTodo={this.submitTodo}/>
          //     </ScrollView>
          //     <TabBar setType={this.setType} type={type}/> */}
          // // </View>
      );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex:1,
        paddingTop: 60
    }
});