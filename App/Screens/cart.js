
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,LogBox, Dimensions, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import { TextInput } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

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
        title: 'Second Item',
    },
    {
        id: '4',
        title: 'Second Item',
    },
];

var swipeoutBtns = [
    {
        text: 'Delete',
        // type: 'delete',
        component:<View style={{justifyContent:'center',alignItems:'flex-start',backgroundColor:'#CF7E7E',width:'100%',height:'100%',paddingHorizontal:10}}>
            <View style={{ width: 40,
        height: 40,
        backgroundColor: '#E84144',
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'}}>
            <Icon name="times" size={24} color="#fff" />
            </View>
        </View>
    }
]

const Item = ({ title }) => (
    <Swipeout right={swipeoutBtns} autoClose={true} backgroundColor='transparent' style={{ borderRadius: 10 ,height:110}} >
        <View style={{ width: '95%', height: '99%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, elevation: 2, justifyContent: 'space-around' }}>
            <View style={{ width: '60%', height: '100%', justifyContent: 'center', }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>Famous Restaurant</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>Les suites de Saifi, Block B,
                Second floor, Beirut Disritct,
                H7S1E6
</Text>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, marginTop: '5%' }}>Total: LBP 23,000</Text>
            </View>
            <View style={{ width: '25%', height: '100%', paddingTop: '5%', alignItems: 'flex-end' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#BE1F24' }}>0:3:38 PM</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 9 }}>ESTIMATED ARRIVAL</Text>
            </View>
        </View>
    </Swipeout>
);

class Home extends Component {



    renderItem = ({ item }) => (
        <TouchableOpacity>
            <Item title={item.title} />
        </TouchableOpacity>
    );
    separaterItem = () => {
        return (
            <View style={{ height: 10 }}></View>
        )
    }
    listHeaderOGoing = () => {
        return (
            <View style={{ width: '100%', height: 100, flexDirection: 'row', alignItems: 'center', borderRadius: 10, elevation: 1, justifyContent: 'space-around' }}>
                <View style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>Famous Restaurant</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>Les suites de Saifi, Block B,
                    Second floor, Beirut Disritct,
                    H7S1E6
    </Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, marginTop: '5%' }}>Total: LBP 23,000</Text>
                </View>
                <View style={{ width: '25%', height: '100%', paddingTop: '5%', alignItems: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#BE1F24' }}>0:3:38 PM</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 9 }}>ESTIMATED ARRIVAL</Text>
                </View>
            </View>
        )
    }

    listFooter=()=>{
        return(
            <View style={{width:'90%',marginTop:10,alignSelf:'center',marginBottom:50}}>
                <View style={{flex:0.5,justifyContent:'center',marginBottom:'10%'}}>
                <Text style={{fontSize:13,fontFamily:'Poppins-Medium'}}>Please do not send cutlery</Text>
                </View>
                <View style={{flex:1,}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:12,fontFamily:'Poppins-Regular',width:'40%'}}>SubTotal</Text>
                <Text style={{fontSize:13,fontFamily:'Poppins-Regular',width:'50%',textAlign:'right'}}>2 rs</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:12,fontFamily:'Poppins-Regular',width:'40%'}}>Delivery Charges</Text>
                <Text style={{fontSize:12,fontFamily:'Poppins-Regular',width:'50%',textAlign:'right'}}>2 rs</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:5}}>
                <Text style={{fontSize:12,fontFamily:'Poppins-SemiBold',textTransform:'uppercase',width:'40%'}}>Total Estimate</Text>
                <Text style={{fontSize:13,textAlign:'right',width:'50%',fontFamily:'Poppins-SemiBold'}}>2 rs</Text>
                </View>
                </View>
                <View style={{ flex: 1 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddressBook')}>
                                <Text style={styles.btnText}>Proceed To Checkout</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View> 

        </View>
        )
    }

    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity >
                                <Icon name="times" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>My Cart</Text>
                    </View>
                    <Right>
                        <View style={[styles.circleBox, { elevation: 0,backgroundColor:'transparent' }]}>
                            <TouchableOpacity 
                            // onPress={() => this.props.navigation.navigate('')}
                            >
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </Right>
                </Header>
                <TouchableOpacity>
                    <View style={{ width: '100%', height: 65, flexDirection: 'row', alignItems: 'center',backgroundColor:'#FF5D5E', elevation: 1, justifyContent: 'space-around', marginBottom: '5%' }}>
                        <View style={{ width: '20%', height: '100%', justifyContent: 'center', paddingLeft: 10,}}>
                            <View style={styles.socialIcons}>
                             <Image source={require('../Assets/prfl_pic.jpg')} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
                            </View>
                        </View>
                        <View style={{ width: '50%', height: '100%',justifyContent:'center' }}>

                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 ,color:'#fff'}}>Go Back to Restaurant</Text>
                        </View>
                        <View style={{ width: '10%', height: '100%', justifyContent:'center'}}>
                        <Icon name="chevron-right" size={15} color="#fff" />
                        </View>
                    </View>
                </TouchableOpacity>

                <FlatList
                    style={{ paddingHorizontal:10}}
                    data={DATA}

                    // ListHeaderComponent={this.listHeaderOGoing}
                    ListFooterComponent={this.listFooter}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.separaterItem}
                    keyExtractor={item => item.id}
                />
   
            </SafeAreaView>

        )
    }
}

export default Home
const styles = StyleSheet.create({
    btnText: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontFamily: 'Gill Sans',

    },
    btnStyle: {
        width: '70%',
        elevation: 3,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: '5%'
    },
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
    typeBtn: {
        width: '30%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    listHeaderTxt: {
        fontSize: 14,
        textTransform: 'uppercase',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: 'Poppins-SemiBold'
    },
    socialIcons: {
        width: 40,
        height: 40,
        // backgroundColor: '#E84144',
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
    }
})