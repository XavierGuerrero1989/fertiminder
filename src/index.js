import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input, Item, ModelModal } from './components/index';

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
        <Input
            placeholder={'Enter your task'}
            value={text}
            OnchangeText={(text) => setText(text)}
            ButtonColor={"#52528C"}
            ButtonTitle={'Add'}
            OnHandlerButton={onAddEvents}
        />
        <Item 
            functionRender={renderItem}
            data={events}
            keyExtFunction={(item) => item.id}
            bounceValue={false}
        />

        <ModelModal 
            ModalVisibility={modalVisible}
            ModalAnimation={'fade'}
            ModalText={'Are you sure to delete this item?'}
            EventValue={selectedEvent?.value}
            OnHandCancelFcn={() => onHandlerCancelModal()}
            OnHandDeleteFcn={() => onHandlerDeleteEvent(selectedEvent.id)}
        />
    </View>
  );
}




