
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Dash from 'react-native-dash';



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,
            isSelected:false,
            qtyColour:'#BE1F24'
        }
    }


    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('10%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Fine Dining</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                        <View style={{ width: '20%', height: '80%', alignItems: 'center' }}>
                            <Icon name="map-marker" size={40} color="#444" />
                        </View>
                        <View style={{ width: '80%', height: '90%', }}>
                            <Text style={{ fontSize: 13, fontFamily: 'Poppins-SemiBold' }}>Basic Service</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'Poppins-SemiBoldItalic', color: '#BE1F24' }}>+ 3.000 LBP ( Per Person )</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 8, height: 8, backgroundColor: '#333' }}></View>
                                <Text style={{ fontFamily: 'oppins-Light', fontSize: 9, paddingHorizontal: 5 }}>Ut enim ad minim veniam, quis nostrud</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 8, height: 8, backgroundColor: '#333' }}></View>
                                <Text style={{ fontFamily: 'oppins-Light', fontSize: 9, paddingHorizontal: 5 }}>Lamco laboris nisi ut aliquip ex</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 8, height: 8, backgroundColor: '#333' }}></View>
                                <Text style={{ fontFamily: 'oppins-Light', fontSize: 9, paddingHorizontal: 5 }}>Uonsequat</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, textTransform: 'uppercase' }}>Total Estimate</Text>
                    <View style={{ flex: 0.9, justifyContent: 'center', paddingLeft: 15, justifyContent:'space-around',alignItems:'flex-start',flexDirection:'row'}}>
                       <TouchableOpacity>
                       <View style={styles.noofPeople}>
                            <Text style={styles.peopleTxt}>2</Text>
                        </View>
                       </TouchableOpacity>
                       <TouchableOpacity>
                       <View style={[styles.noofPeople,{backgroundColor:'#BE1F24'}]}>
                            <Text style={[styles.peopleTxt,{color:'#fff'}]}>4</Text>
                        </View>
                       </TouchableOpacity>
                       <TouchableOpacity>
                       <View style={styles.noofPeople}>
                            <Text style={styles.peopleTxt}>8</Text>
                        </View>
                       </TouchableOpacity>
                       <TouchableOpacity>
                       <View style={styles.noofPeople}>
                            <Text style={styles.peopleTxt}>12</Text>
                        </View>
                       </TouchableOpacity>
                      
                    </View>


                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 0.7, }}>

                    </View>
                    <View style={{ flex: 0.9, justifyContent: 'center', paddingLeft: 15 }}>

                    </View>
                    <View style={{ marginBottom: '10%', width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, textTransform: 'uppercase' }}>Total Estimate</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-SemiBold', color: '#BE1F24' }}>500.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1.2 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity >
                                <Text style={styles.btnText}>Done</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>
            </SafeAreaView>

        )
    }
}

export default Home
const styles = StyleSheet.create({
    circleBox: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
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
noofPeople:{
    width:65,
    height:80,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:1
},
peopleTxt:{
    fontSize:30,
    fontFamily:'Poppins-Medium',
    color:'#333',

}
})