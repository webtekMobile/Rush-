import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { } from 'native-base'

export function TextComponent() {
    return (
        <View style={styles.inptbox}>
            <TextInput
                style={styles.inptText}
            />
        </View>
    )
}
// export class ButtonComponent extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>Button</Text>
//             </View>
//         )
//     }
// } 

const styles = StyleSheet.create({
    inptbox: {
        width: '95%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        elevation: 5,
        overflow: 'hidden',
        borderWidth: 0.3,
        shadowOpacity: 0.5,
        opacity: 0.9

    },
    inptText: {
        width: '100%',
        height: '100%',
        fontSize: 20,
        paddingLeft: 10,
        color: '#555'
    }
})