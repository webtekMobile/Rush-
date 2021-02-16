
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView,StatusBar,Image} from 'react-native'
import { Item, Input, Label ,Header,Left,Right} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {StatusActive,StatusPassive} from '../Screens/status'

class Door extends Component{
    render(){
        return(
            
            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') ,backgroundColor:'#fff'}}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height:hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="bars" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>At Your Door</Text>
                    </View>
                    <Right></Right>
                    </Header>
            <View style={{flex:0.85,justifyContent:'center'}}>
                <StatusActive/>
                <StatusPassive/>
              
            </View>
        </SafeAreaView>
        )
    }
}

export default Door
const styles = StyleSheet.create({
    circleBox: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#fe3'
    },
    typeBtn:{width:'30%',
    height:'70%',
    backgroundColor:'#fff',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    elevation:2
}
})