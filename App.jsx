/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './ToDoList'; // Import ToDoList
import ToDoForm from './ToDoForm'; // Import ToDoForm

function App() {
  return (
    <SafeAreaView>
      <ToDoList /> {/* Use ToDoList component */}
      <ToDoForm /> {/* Use ToDoForm component */}
    </SafeAreaView>
  );
}

export default App;