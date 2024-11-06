import React from 'react';
import { View, Text } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={{ fontSize: 18 }}>
          {task}
        </Text>
      ))}
    </View>
  );
}

export default ToDoList;0
