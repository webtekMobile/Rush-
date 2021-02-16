
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, LogBox, Image, FlatList,ScrollView } from 'react-native'
import { Label, Header, Left, Right, Item, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Dash from 'react-native-dash';
import { height } from './varify';
import { ceil } from 'react-native-reanimated';
// import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    // {
    //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //     title: 'Second Item',
    // },
    
]


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,
            isSelected: false,
            qtyColour: '#BE1F24',
            cardNum: '1234567891234567'
        }
    }

    renderItem = () => (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlaceOrder')}>
            <View style={{ width: '90%', paddingVertical: '4%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../Assets/m.png')} style={{ width: 24, height: 24 }} />
                {this.state.cardNum > 12 ? (
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, paddingHorizontal: '3%' }}>

                        {this.state.cardNum.substring(0, 12)} XXXX

                    </Text>
                ) : (
                        <Text></Text>
                    )}
            </View>
            <View>
                <Image source={require('../Assets/tick.png')} style={{ width: 16, height: 12 }} />
            </View>
        </View>
        </TouchableOpacity>
    );
    itemSeparator = () => {
        return (
            <View style={{ width: '90%', height: 0.5, backgroundColor: '#707070' }} />
        )
    }

    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Payment Methods</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
                <ScrollView contentContainerStyle={{flex:1}}>
                <View style={{ width: '90%', height: '10%', alignSelf: 'center', marginTop: '5%' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Online Payments</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>After your first payment, we will save your details for future use.</Text>
                </View>
                {DATA.length > 0 ? (
                    <View style={{ width: '90%', height: '10%', flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ width: '80%', height: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../Assets/creditcard.png')} style={{ width: 24, height: 24 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, paddingHorizontal: '3%' }}>Credit & Debit Cards</Text>
                        </View>

                        <View style={{ width: '50%', height: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                           <TouchableOpacity onPress={this.props.navigation.navigate('AddCard')}>
                           <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 9, paddingHorizontal: '3%', textTransform: 'uppercase' }}>+ Add Card</Text>
                           </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                        <View style={{ width: '100%', height: '13%', justifyContent: 'space-around' }}>
                            <View style={{ width: '90%', height: '50%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../Assets/creditcard.png')} style={{ width: 24, height: 24 }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, paddingHorizontal: '3%' }}>Credit & Debit Cards</Text>
                            </View>
                            <View style={{ width: '90%', height: 0.6, alignSelf: 'center', backgroundColor: '#707070' }}>

                            </View>
                            <View style={{ width: '90%', height: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, paddingHorizontal: '3%', textTransform: 'uppercase' }}>+ Add Card</Text>
                            </View>
                        </View>
                    )}


                <View style={{ width: '90%', height: 1, alignSelf: 'center', backgroundColor: '#707070' }}>
                </View>
                {DATA.map((data) => {
                    return (
                        this.renderItem()
                    )
                })}
                <View style={{ width: '90%', height: '8%', alignSelf: 'center', marginTop: '5%' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Cash</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>Pay us instantly after arriving to your destination </Text>
                </View>
                <View style={{ width: '90%', height: 0.6, alignSelf: 'center', backgroundColor: '#707070' }}>

                </View>
                <View style={{ width: '90%', height: '10%', flexDirection: 'row', alignSelf: 'center' }}>
                   
                   <View style={{ width: '90%', height: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Assets/cash.png')} style={{ width: 24, height: 24 }} />
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlaceOrder')}>
                       <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, paddingHorizontal: '3%' }}>Cash on Delivery</Text>
                       </TouchableOpacity>
                    </View>
                  

                    <View style={{ width: '10%', height: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Image source={require('../Assets/tick.png')} style={{ width: 16, height: 12 }} />
                    </View>
                    
                </View>
                <View style={{ width: '90%', height: 0.6, alignSelf: 'center', backgroundColor: '#707070' }}>

                </View>
                <View style={{ width: '90%', height: '8%', alignSelf: 'center', marginTop: '5%' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Rush Wallet</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>Pay us by your credit points</Text>
                </View>
                <View style={{ width: '90%', height: 0.6, alignSelf: 'center', backgroundColor: '#707070' }}>

                </View>
                <View style={{ width: '90%', height: '10%', flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ width: '90%', height: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Assets/wallet.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, paddingHorizontal: '3%' }}>12.000 LBP</Text>
                    </View>

                    <View style={{ width: '10%', height: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Image source={require('../Assets/tick.png')} style={{ width: 16, height: 12 }} />
                    </View>
                </View>
                <View style={{ width: '90%', height: 0.6, alignSelf: 'center', backgroundColor: '#707070' }}>

                </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

export default Home
const styles = StyleSheet.create({
    circleBox: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnText: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium',

    },
    btnStyle: {
        width: '70%',
        elevation: 3,
        borderRadius: 25,
        alignSelf: 'center',
    },
    noofPeople: {
        width: 65,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    peopleTxt: {
        fontSize: 30,
        fontFamily: 'Poppins-Medium',
        color: '#333',

    }
})

// import React from 'react'
// import { Component } from 'react'
// import {View,Text,TextInput,Image,StyleSheet} from 'react-native'

// class Home extends Component{
//     render(){
//         return(
//             <View style ={styles.container} >
//             <Text style={{color:'#fff',fontSize:18}}>Hello World</Text>
//             </View>
//         )
//     }
// }

// export default Home

// const styles = StyleSheet.create({
//     container:{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}
// })