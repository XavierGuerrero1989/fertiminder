import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
      marginTop: 20,
    },
    taskList: {
      padding: 20,
      backgroundColor: "#CB410B",
      margin: 10, 
      color: "#FFFFFF",
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalDetailContainer: {
        paddingVertical: 20,
      },
      modalDetailMessage: {
        fontSize: 14,
        color: '#212121',
      },
      selectedEvent: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
  });