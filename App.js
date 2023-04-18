import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your task' style={styles.input} />
        <Button title='Add' color="#52528C"/>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.taskList}>Tarea 1</Text>
        <Text style={styles.taskList}>Tarea 2</Text>
        <Text style={styles.taskList}>Tarea 3</Text>
        <Text style={styles.taskList}>Tarea 4</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: "#52528C",
    marginRight: 15,
    color: "#212121"
  },
  secondContainer: {
    borderWidth: 2,
    borderColor: '#52528C',
    marginTop: 20,
  },
  taskList: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#52528C',
    margin: 10
  }
});
