import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState(''); // Change state variable name

  return (
    <View>
      <TextInput
        style={styles.input} // Add the style to the input
        placeholder="Add a new task..." // Update the placeholder
        onChangeText={(text) => setTaskText(text)} // Handle input change
        value={taskText} // Bind the input value to taskText
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} /> {/* Use taskText in onPress */}
    </View>
  );
}

// Styles for the input field (for future styling)
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ToDoForm;
