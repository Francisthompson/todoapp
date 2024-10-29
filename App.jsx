import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Task List</Text>
      <ToDoList tasks={tasks} />
    </View>
  );
};

export default App;
