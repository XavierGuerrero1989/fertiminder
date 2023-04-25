import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export default function App() {

  const [text, setText] = useState ('');
  const [events, setEvents] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvents = () => {
    
    if (text.length === 0 ) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  };

  const onHandlerEvent = (id) => {
    
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.secondContainer} onPress={() => onHandlerEvent(item.id)}>
      <Text style={styles.taskList}>{item.value}</Text>
    </TouchableOpacity>
  )

  


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Enter your task' 
        style={styles.input} 
        value={text}
        onChangeText={(text) => setText(text)}
        />
        <Button title='Add' color="#52528C" onPress={onAddEvents}/>
      </View>
      <View style={styles.secondContainer}>
      <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Event Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancel'
              color='#52528C'
              onPress={() => onHandlerCancelModal()}
            />
            <Button 
            title='Delete'
            color='#52528C'
            onPress={() => onHandlerDeleteEvent(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}




