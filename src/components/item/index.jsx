import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";

const Item = ({functionRender, data, keyExtFunction, bounceValue}) => {

    return (
        <View style={styles.secondContainer}>
            <FlatList 
                renderItem={functionRender}
                data={data}
                keyExtractor={keyExtFunction}
                alwaysBounceVertical={bounceValue}
                />
      </View>
    )

}

export default Item;