import React from "react";
import { View, Modal, Button, Text } from "react-native";
import { styles } from "./styles";

const ModelModal = ({ ModalVisibility, ModalAnimation, ModalText, EventValue, OnHandCancelFcn, OnHandDeleteFcn}) => {
    return (
        <Modal visible={ModalVisibility} animationType={ModalAnimation}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Event Detail</Text>
                    <View style={styles.modalDetailContainer}>
                        <Text style={styles.modalDetailMessage}>{ModalText}</Text>
                        <Text style={styles.selectedEvent}>{EventValue}</Text>
                    </View>
                <View style={styles.buttonContainer}>
                    <Button 
                    title='Cancel'
                    color='#52528C'
                    onPress={OnHandCancelFcn}
                    />
                    <Button 
                    title='Delete'
                    color='#52528C'
                    onPress={OnHandDeleteFcn}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModelModal