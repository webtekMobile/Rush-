
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList, ImageBackground } from 'react-native'
import { Label, Header, Left, Right, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Dash from 'react-native-dash';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    
    


];

const Item = ({ title }) => (
    <View style={{ width: '100%', flexDirection: 'row', marginLeft: '5%', marginBottom: '3%' }}>
        <View style={{ width: '50%', height: '100%' }}>
            <Text style={{ width: '70%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Itmes</Text>
            <Text style={{ width: '70%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Itmes</Text>
            <Text style={{ width: '70%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Itmes</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '50%', height: '100%' }}>
            <Text style={{ fontSize: 13, fontFamily: 'Poppins-SemiBold' }}>1500.00</Text>
        </View>
    </View>
);

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,
            
        }
    }


    renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    listFooter = () => {
        return (
            <View style={{marginLeft:'5%',marginBottom:'5%',marginTop:'5%'}}>
                <View style={{ width: '95%', height: 20, flexDirection: 'row',justifyContent:'space-around' }}>
                    <Text style={{width:'55%',fontSize:12,fontFamily:'Poppins-Regular'}}>Sub-Total</Text>
                    <Text style={{width:'45%',fontFamily:'Poppins-Regular',fontSize:13,textTransform:'uppercase'}}>4500.00 Rs</Text>
                </View>
                <View style={{ width: '95%', height: 20, flexDirection: 'row',justifyContent:'space-around' }}>
                    <Text style={{width:'55%',fontSize:12,fontFamily:'Poppins-Regular'}}>Delivery Charge</Text>
                    <Text style={{width:'45%',fontFamily:'Poppins-Regular',fontSize:13,textTransform:'uppercase'}}>4500.00 Rs</Text>
                </View>
                <View style={{ width: '95%', height: 30, flexDirection: 'row',justifyContent:'space-around' }}>
                    <Text style={{width:'55%',fontSize:12,fontFamily:'Poppins-SemiBold',textTransform:'uppercase'}}>Total Estimate</Text>
                    <Text style={{width:'45%',fontFamily:'Poppins-SemiBold',fontSize:15,textTransform:'uppercase',color:'#BE1F24'}}>4500.00 Rs</Text>
                </View>
                <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                    <TouchableOpacity >
                        <Text style={styles.btnText}>ReOrder</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }


    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <StatusBar hidden={true} />

                <ScrollView >
                    <View style={{ height: hp('28%'), justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <ImageBackground source={require('../Assets/banner1.jpg')} style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ overflow: 'hidden', backgroundColor: '#fff', marginTop: hp('-5%'), borderTopRightRadius: 25, borderTopLeftRadius: 25, overflow: 'hidden' }}>
                        <View style={{ justifyContent: 'space-around', height: hp('8%') }}>
                            <Text style={{ paddingLeft: '10%', color: '#2F3438', fontSize: 13, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Famous Restaurant</Text>
                            <View style={{ width: '90%', height: '1%', backgroundColor: '#666', alignSelf: 'flex-end', }} />
                        </View>
                        <View style={{ width: '100%', height: hp('12%') }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: '10%' }}>
                                <View style={{ width: '30%', justifyContent: 'center', }}>
                                    <Text style={{ width: '100%', fontFamily: 'Poppins-Medium', fontSize: 12, textTransform: 'uppercase' }}>Driver</Text>
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ width: '100%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Driver Name</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: '10%' }}>
                                <View style={{ width: '30%', justifyContent: 'center', }}>
                                    <Text style={{ width: '100%', fontFamily: 'Poppins-Medium', fontSize: 12, textTransform: 'uppercase' }}>Time</Text>
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ width: '100%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Driver Name</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: '10%' }}>
                                <View style={{ width: '30%', justifyContent: 'center', }}>
                                    <Text style={{ width: '100%', fontFamily: 'Poppins-Medium', fontSize: 12, textTransform: 'uppercase' }}>Address</Text>
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ width: '100%', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Driver Name</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: hp('7%') }}>
                            <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Rating
                                    type='custom'
                                    ratingColor='#db091a'
                                    ratingTextColor='#BE1F24'
                                    startingValue={2}
                                    ratingBackgroundColor='#c8c7c8'
                                    ratingCount={5}
                                    imageSize={20}
                                    style={{ paddingVertical: 5 }}
                                />
                            </View>
                            <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ textTransform: 'uppercase', color: '#BE1F24', fontSize: 13, fontFamily: 'Poppins-Bold' }}>Leave FeedBack</Text>
                            </View>

                        </View>
                        <View style={{ width: '80%', height: '0.5%', backgroundColor: '#666', alignSelf: 'flex-end', }} />



                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#BE1F24', textTransform: 'uppercase', paddingLeft:'10%', marginTop: '5%', marginBottom: '5%' }}>Your Order</Text>

                        <View>
                            <FlatList
                            style={{alignSelf:'center',marginLeft:'5%'}}
                                key={'#'}
                                data={DATA}
                                numColumns={1}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.cat_id}
                                ListFooterComponent={this.listFooter}

                            />
                        </View>
                        <View>

                        </View>

                    </View>
                </ScrollView>
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
        marginTop:'10%',
        marginLeft:'-10%'
    },

})