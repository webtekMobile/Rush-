import React from 'react'
import { Component } from 'react'
import {View,Text} from 'react-native'
import CancelOrder from '../Screens/confirmOrder'

class Status extends Component{
    constructor(props){
        super(props)
        this.state={
            isConfirm:false,
            isPrepared:false,
            isDelivered:false,
            isArrived:false
        }
    }
    render(){
        return(
            <>
            <CancelOrder/>
            <>
            
            </>
            </>
            // <View>
            //     <Text>Helo</Text>
            // </View>
        )
    }
}

export default Status