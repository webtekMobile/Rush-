import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';



export class StatusActive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginPassive:{
                marginBottom:10,
                marginRight:10
            },
            marginActive:{
                marginTop:10,
                marginLeft:10
            },
            isactive:false
        };
    }
componentDidMount(){
    if(this.state.isactive){
        this.setState({marginPassive:{marginTop:10,marginLeft:10}})
    } else{
        this.setState({marginPassive:{marginBottom:10,marginRight:10}})
    }
}

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={[styles.circleBox,{backgroundColor:'tomato'}]}>
                    <View style={[styles.circleBox,this.state.marginPassive]}> 
                    <Icon name="map-marker" size={60} color="#444" />
                    <Text style={styles.title}>Door to door</Text>
                    <Text style={styles.txt}>ratio means the width and height are the same.for mobile screens</Text>

                    </View>
                </View>
            </View>
        )
    }
}
export class StatusPassive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginPassive:{
                marginBottom:10,
                marginRight:10
            },
            marginActive:{
                marginTop:10,
                marginLeft:10
            },
            isactive:true
        };
    }

    componentDidMount(){
        if(this.state.isactive){
            this.setState({marginPassive:{marginTop:10,marginLeft:10}})
        } else{
            this.setState({marginPassive:{marginBottom:10,marginRight:10}})
        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={[styles.circleBox,{backgroundColor:'tomato'}]}>
                <View style={[styles.circleBox,this.state.marginPassive]}> 
                    <Icon name="map-marker" size={60} color="#444" />
                    <Text style={styles.title}>Store to door</Text>
                    <Text style={styles.txt}>ratio means the width and height are the same.for mobile screens</Text>
                    </View>
                </View>
            </View>
        )
    }
}


export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    circleBox: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    typeBtn: {
        width: '30%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    title:{fontSize:15,
        textTransform:'uppercase',
        color:'#FF4747',
        fontFamily:'Poppins-SemiBold'
    },
    txt:{fontSize:9,
        textTransform:'uppercase',
    color:'#444',
    textAlign:'justify',
    width:'60%',
    fontFamily:'Poppins-Medium'}
})