import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); // Adds new task to the existing list
  };

  return (
    <View>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
};

export default App;
