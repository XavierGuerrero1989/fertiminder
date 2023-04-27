import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from "./styles";

const Input = ({ placeholder, value, OnchangeText, ButtonColor, ButtonTitle, OnHandlerButton }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder={placeholder} 
            style={styles.input} 
            value={value}
            onChangeText={(text) => OnchangeText(text)}
            />
            <Button title={ButtonTitle} color={ButtonColor} onPress={OnHandlerButton}/>
      </View>
    )

}

export default Input;