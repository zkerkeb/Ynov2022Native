import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, {label: input, id: `${Math.random()}`}]);
    setInput('');
  };

  const deleteTodo = id => {
    const newTodos = [...todos];
    const indexOfTodo = newTodos.findIndex(todo => todo.id === id);
    newTodos.splice(indexOfTodo, 1);
    setTodos(newTodos);
  };

  return (
    <View>
      <Text>TodoList</Text>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder="Add a todo"
      />
      <TouchableOpacity onPress={addTodo}>
        <Text>Add TODOS</Text>
      </TouchableOpacity>
      {todos.map((todo, index) => (
        <View key={todo.id}>
          <Text>{todo.label}</Text>
          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
