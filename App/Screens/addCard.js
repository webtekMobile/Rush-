
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, LogBox, Image, FlatList, ScrollView } from 'react-native'
import { Label, Header, Left, Right, Item, Input, Form } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { height } from './varify';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,
            isSelected: false,
            qtyColour: '#BE1F24',
            cardNum: '1234567891234567',
            cardName: '',
            expiryDate: '',
            cvv: '',
        }
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
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flex: 0.2, marginTop: '5%', paddingHorizontal: '5%' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Add a card</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>We accept Credit and Debit Cards from Visa,{'\n'}
Mastercard and American Express</Text>
                    </View>

                    {/* <CreditCardInput onChange={this._onChange}/> */}
                    <Form style={{ width: '95%', flex: 1 }}>
                        <Item floatingLabel style={styles.itmStyle}>
                            <Label style={styles.itmTxt}>Name on Card</Label>
                            <Input
                                style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#fff' }}
                                onChangeText={(text) => this.setState({ cardName: text })}
                            />
                        </Item>
                        <Item floatingLabel style={styles.itmStyle}>
                            <Label style={styles.itmTxt}>Card Number</Label>
                            <Input
                                style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#fff' }}
                                onChangeText={(text) => this.setState({ cardNum: text })}
                            />
                        </Item>

                        <View style={{ flexDirection: 'row', width: '90%' }}>
                            <Item floatingLabel style={[styles.itmStyle, { width: '60%' }]}>
                                <Label style={styles.itmTxt}>Expiration Date (MM/YY)</Label>
                                <Input
                                    style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#fff' }}
                                    onChangeText={(text) => this.setState({ expiryDate: text })}
                                />
                            </Item>
                            <Item floatingLabel style={[styles.itmStyle, { width: '40%' }]}>
                                <Label style={styles.itmTxt}>CVV</Label>
                                <Input
                                    style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#fff' }}
                                />
                            </Item>
                        </View>
                    </Form>
                    <View style={{ flex: 0.3 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity
                            onPress={this.props.navigation.navigate('Payment')}
                            >
                                <Text style={styles.btnText}>Add Card</Text>
                            </TouchableOpacity>
                        </LinearGradient>
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
    itmStyle: { backgroundColor: '#333333', borderRadius: 10, height: 65, },
    itmTxt: { color: '#fff', paddingHorizontal: '5%', fontSize: 9, fontFamily: 'Poppins-Regular' }

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