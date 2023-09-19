import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ToDoPage from './page/toDoPage';


export default function App() {
  return (
    <ToDoPage />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
