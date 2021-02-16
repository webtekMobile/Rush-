
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
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
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
    },
    {
        id: '5',
        title: 'Second Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
    {
        id: '7',
        title: 'First Item',
    },
    {
        id: '8',
        title: 'Second Item',
    },
    {
        id: '9',
        title: 'Third Item',
    },
    {
        id: '10',
        title: 'Second Item',
    },
    {
        id: '11',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={{ width: '23%', height: 120, marginLeft: 6, marginTop: 5, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="map-marker" size={60} color="#444" />
        <Text style={{ fontSize: 11, color: '#555', textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Groceries</Text>
    </View>
);

class Home extends Component {

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
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

                    <Right>

                    </Right>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Map View</Text>
                    <Text>Under Development.....</Text>
                   
                    
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', elevation: 5, marginTop: '-10%', borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>
                    <View style={{ flex: 0.7}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'90%'}}>
                        <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:25}}>22:56</Text>
                        </View>
                        <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:10}}>Estimated Arival</Text>
                        </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',height:'10%'}}>
                            <View style={{width:'22%',height:'60%',backgroundColor:'tomato'}}></View>
                            <View style={{width:'22%',height:'60%',backgroundColor:'tomato'}}></View>
                            <View style={{width:'22%',height:'60%',backgroundColor:'tomato'}}></View>
                            <View style={{width:'22%',height:'60%',backgroundColor:'tomato'}}></View>
                        </View>
                    </View>
                    <View style={{ flex: 0.9 ,justifyContent:'center',paddingLeft:15}}>
                    <View style={{width:'90%',height:'80%',justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:'90%',height:'100%',justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:13,textTransform:'uppercase'}}>Delivering</Text>
                    <Text style={{fontFamily:'Poppins-Regular',fontSize:10,width:'60%'}}> your order just left Famous Restaurant</Text>
                        </View>
                        
                    </View>
                    <View style={{width:'90%',height:'1%',backgroundColor:'#555',marginTop:'2%',alignSelf:'center'}}></View>
                    </View>
                    <View style={{ flex: 1,flexDirection:'row' }}>
                        <View style={{width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:10,height:10,backgroundColor:'#444',borderRadius:10/2}}></View>
                            <Dash style={{width:1, height:'50%', flexDirection:'column',marginTop:'5%',marginBottom:'5%',backgroundColor:'#444'}}/>
                            <View style={{width:10,height:10,backgroundColor:'#444',borderRadius:10/2}}></View>
                        </View>
                        <View style={{width:'90%',height:'100%',justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{height:'40%',width:'90%',justifyContent:'center',}}>
                        <Text style={{fontFamily:'Poppins-Regular',fontSize:11}}>Your Delivery Time</Text>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:11}}>25 mins</Text>
                        </View>
                        <View style={{height:'40%',width:'90%',justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins-Regular',fontSize:11}}>Delivery Address</Text>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:11}}>Vikas nagar Lucknow uttar pradesh</Text>
                        </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.9,paddingLeft:'5%' }}>
                    <View style={{width:'90%',height:'80%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{width:'80%',height:'100%',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <View style={[styles.socialIcons,{overflow:'hidden'}]}>
                                <Image source={require('../Assets/prfl_pic.jpg')} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
                         </View>
                         <View style={{width:'60%',justifyContent:'center',paddingLeft:'5%'}}>
                         <Text style={{fontFamily:'Poppins-SemiBold',fontSize:13}}>Driver Name </Text>
                         <Text style={{fontFamily:'Poppins-SemiBold',fontSize:16,color:'#BE1F24'}}>4.4</Text>
                         </View>
                        </View>
                        <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',}}>
                            <View style={styles.socialIcons}>
                                <Image source={require('../Assets/phone-call.png')} style={{width:'60%',height:'60%',resizeMode:'cover'}} />
                            </View>
                        </View>
                    </View>
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
    socialIcons: {
        width: 32,
        height: 32,
        // backgroundColor: '#E84144',
        borderRadius: 32 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
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