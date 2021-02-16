
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, LogBox, Image, FlatList, ScrollView } from 'react-native'
import { Label, Header, Left, Right, Item, Input, Form } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Modal from 'react-native-modal'
const DATA1 = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
];

const Items = ({ item }) => (
    <View style={{ backgroundColor: '#fff', width: wp('50%'), elevation: 3, marginBottom: 5, marginLeft: wp('5%'), height: 100, justifyContent: 'center', borderRadius: 25 }}>
        <View style={{ width: '90%', alignSelf: 'center', height: '80%' }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{item.title}</Text>
            <Text style={{ fontSize: 9, fontFamily: 'Poppins-Regular' }}>{item.review_message}</Text>

        </View>
    </View>
);


class PlaceOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isApply: false

        }
    }
    renderItem = ({ item }) => (
        <TouchableOpacity >
            <Items item={item} />
        </TouchableOpacity>
    );
    listHeader = ({}) => {
        return (
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddPlaces')}>
                <View style={{ width: 45, borderRadius: 25, height: 100, elevation: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="plus" size={15} color="#444" />
            </View>
           </TouchableOpacity>
        )
    }
    listFooter = () => {
        return (
            <View style={{ width: 10, borderRadius: 25, height: 100, justifyContent: 'center', alignItems: 'center' }}>

            </View>
        )
    }

    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ elevation: 0, borderWidth: 0, backgroundColor: 'transparent', height: hp('3%') }} />
                <View style={{ paddingHorizontal: '5%', paddingVertical: '3%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>DELIVERING to</Text>
                    <View style={{ width: 60, height: 3, backgroundColor: '#BE1F24', }}></View>
                </View>
                <View style={{ height: 120 }}>
                    <FlatList
                        data={DATA1}
                        horizontal
                        ListHeaderComponent={this.listHeader}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id}
                    >

                    </FlatList>
                </View>

                <View style={{ width: '90%', height: '10%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', paddingLeft: '5%', textTransform: 'uppercase' }}>Driver instruction</Text>
                    <View style={{ width: 60, height: 3, backgroundColor: '#BE1F24', marginLeft: '6%', marginBottom: '2%' }}></View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', paddingLeft: '5%', color: '#BE1F24' }}>+ Add driver instruction</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', height: '10%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', paddingLeft: '5%' }}>Your order</Text>
                    <View style={{ width: 60, height: 3, backgroundColor: '#BE1F24', marginLeft: '6%', marginBottom: '2%' }}></View>

                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', paddingLeft: '5%' }}>What do you want to send ?</Text>

                </View>
                <View style={{ flex: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25, overflow: 'hidden', backgroundColor: '#fff', elevation: 2 }}>
                    <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '7%' }}>
                        <View style={{ width: '35%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                            <View>
                                <Image source={require('../Assets/clock.png')} style={{ width: 20, height: 15 }} />
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Semibold', fontSize: 14 }}>Delivery Time</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 10 }}>Now in 12-23 min</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10 }}>Schedule</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '60%' }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'Poppins-SemiBold' }}>Pay using</Text>
                                    <Icon name='chevron-down' size={10} />
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>VISA ****6723</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>this.setState({isApply:true})}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '60%' }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'Poppins-SemiBold' }}>Offers</Text>
                                    <Icon name='chevron-down' size={10} />
                                </View>
                                <Text style={{ fontSize: 11, fontFamily: 'Poppins-Regular' }}>Add Promo Code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <View style={{ width: '90%', height: '30%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', textAlign: 'left', width: '40%' }}>Subtotal</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>12.000 LBP</Text>
                        </View>
                        <View style={{ width: '90%', height: '30%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', textAlign: 'left', width: '40%' }}>SDelivery Charge</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>3.000 LBP</Text>
                        </View>
                        <View style={{ width: '90%', height: '30%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', textAlign: 'left', width: '40%' }}>Total Estimate</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, color: '#BE1F24' }}>15.000 LBP</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('CancelOrder')}>
                                <Text style={styles.btnText}>Place Order</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
                <Modal isVisible={this.state.isApply}
                    backdropColor='#666'
                    backdropOpacity={0.3}
                    style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isLocationSelect: false })}>
                    <View style={{ width: '112%', height: '30%', backgroundColor: '#fff', marginLeft: '-6%', marginBottom: '-8%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ height: '90%', width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center', textTransform: 'uppercase', paddingVertical: '5%' }}>promo code</Text>
                            <Item style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Input />
                                <TouchableOpacity onPress={()=>this.setState({isApply:false})}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 10, textTransform: 'uppercase', color: '#BE1F24' }}>Apply</Text>
                                </TouchableOpacity>
                            </Item>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>

        )
    }
}

export default PlaceOrder
const styles = StyleSheet.create({
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

