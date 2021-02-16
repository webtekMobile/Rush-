
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import { TextInput } from 'react-native-gesture-handler';



class Home extends Component {

   
    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('15%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity >
                                <Icon name="times" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Your order has arrived</Text>
                        <Text style={{ fontSize: 11, color: '#444',  fontFamily: 'Poppins-Medium' }}>Your order from Famous Restaurant</Text>
                        <Text style={{ fontSize: 11, color: '#444', fontFamily: 'Poppins-Regular' }}>Date and time</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
               
                    <View style={{ flex: 1, }}>
                    <View style={{ flex: 0.6,justifyContent:'center',alignItems:'center' }}>
                        <Text style={{ fontSize: 15, color: '#444', fontFamily: 'Poppins-SemiBold',textTransform:'uppercase' }}>How was Your order</Text>
                        <Rating
              type='custom'
              ratingColor='#db091a'
              ratingTextColor='#BE1F24'
              startingValue={2}
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={30}
              style={{ paddingVertical: 5 }}
          />
                        </View>
                        <View style={{ flex: 0.7 ,justifyContent:'space-around',alignItems:'center'}}>
                        <View style={styles.socialIcons}>
                            <Image source={require('../Assets/prfl_pic.jpg')} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
                        </View>
                        <Text style={{ fontSize: 15, color: '#444', fontFamily: 'Poppins-SemiBold',textTransform:'uppercase' }}>How did driver do ?</Text>
                        <View style={{width:'50%',height:'20%',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <Icon name="thumbs-up" size={24} color="#444" />
                        <Icon name="thumbs-down" size={24} color="#444" />
                        </View>
                    </View>
                    <View style={{ flex: 1,justifyContent:'flex-start',alignItems:'center',marginTop:'5%'}}>
                    <Text style={{ fontSize: 13, color: '#444', fontFamily: 'Poppins-Medium' }}>Please do not call me regarding this order</Text>
                    </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity >
                                <Text style={styles.btnText}>Done</Text>
                            </TouchableOpacity>
                        </LinearGradient>
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
        // borderWidth: 1,
        // borderColor: '#fe3'
    },
    socialIcons: {
        width: 40,
        height: 40,
        backgroundColor: '#E84144',
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
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
})