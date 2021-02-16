
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, LogBox,ToastAndroid,Alert, PermissionsAndroid, ScrollView, StatusBar, Image, FlatList, ImageBackground } from 'react-native'
import { Label, Header, Left, Right, Input, Item } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import { TextInput } from 'react-native-gesture-handler';
import { height } from './login';
import Geocoder from 'react-native-geocoding';
import Geolocation from "react-native-geolocation-service";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";
Geocoder.init("AIzaSyC5m-C32piW2yiT3kevVbvLfHXsLsPTWik");


const DATA = [
    {
        id: '1',
        title: 'Home',
        icon: 'home'
    },
    {
        id: '2',
        title: 'Work',
        icon: 'briefcase'
    },
    {
        id: '3',
        title: 'Gym',
        icon: 'cog'
    },
    {
        id: '4',
        title: 'Other',
        icon: 'square'
    },


];



class AddPlaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            loading: true,
            Address: '',
            flatNo: '',
            tmpArr: { },
            isSelected:false

        }
    }

    showToast = () => {
        ToastAndroid.show("OTP verified Successfully", ToastAndroid.SHORT);
    }
    addPlace = () => {
        console.log(JSON.stringify({
            "user_id":userId[0],
            "shipping_cat_id":this.state.tmpArr.id,
            "flat":this.state.flatNo,
            "adress":this.state.Address,
            "latitude":this.state.latitude,
            "longitude":this.state.longitude  
        }))

        fetch('https://rush.aaratechnologies.in/web2/web/user/address_book', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                    "user_id":'6',
                    "shipping_cat_id":this.state.tmpArr.id,
                    "flat":this.state.flatNo,
                    "adress":this.state.Address,
                    "latitude":this.state.latitude,
                    "longitude":this.state.longitude       
                    
            })
        })

            .then(response => response.json())
            .then(async (data) => {
                console.log(data)
                this.showToast()
                this.props.navigation.replace('AddressBook')
              
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)
                // Alert.alert(
                //     edata
                // );
            }
            )
    }
    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.setState({ tmpArr: DATA[index] })} >
             <View style={{ width: 50, height: 60, alignItems: 'center', marginLeft: 20 }}>
        <View style={{ width: '90%', height: '100%', elevation: 2, justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={[styles.socialIcons,{backgroundColor:this.state.tmpArr?.id == item.id ? '#BE1F24' :'#707070'}]}>
                <Icon name={item.icon} size={24} color='#FFF' />
            </View>
            <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 12 }}>{item.title}</Text>
        </View>
    </View>
        </TouchableOpacity>
    );


    onDragEnd = (e) => {
        console.log(userId[0])
        this.setState({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
        Geocoder.from(this.state.latitude, this.state.longitude)
            .then(json => {

                console.log(json.results[0])
                var addressComponent = json.results[0].formatted_address;
                this.setState({
                    Address: addressComponent
                })
                console.log(this.state.Address)

            })
    }

    async componentDidMount() {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'ReactNativeCode Location Permission',
                    'message': 'ReactNativeCode App needs access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {


                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position)
                        this.setState({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        Geocoder.from(position.coords.latitude, position.coords.longitude)
                            .then(json => {

                                var addressComponent = json.results[0].formatted_address;
                                this.setState({
                                    Address: addressComponent
                                })

                            })
                            .catch(error => console.warn(error));
                    },
                    error => {
                        Alert.alert(error.message.toString());
                    },
                    {
                        showLocationDialog: true,
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 0
                    }
                );

            }
            else {
                Alert.alert("Location Permission Not Granted");
            }
        } catch (err) {
            console.warn(err)
        }

    }
    seperatorComponent = () => {
        return (
            <View style={{ width: '5%', height: 2, marginTop: 7 }}>
            </View>
        )
    }

    componentWillUnmount() {

    }

    render() {
        console.log(this.state.tmpArr)
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%'), backgroundColor: '#fff' }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0, height: hp('10%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Add Saved Places</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>

                <View style={{ flex: 1 }}>
                    <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 2, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, zIndex: 99999 }}>
                        <View style={{ width: '90%', height: '90%', }}>
                            <View style={styles.box}>

                                <Item floatingLabel style={{ height: '100%', marginLeft: 10, width: '90%' }}>
                                    <Label style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>Flat No.</Label>
                                    <Input
                                        onChangeText={(text) => this.setState({ flatNo: text })}
                                        style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13 }} />
                                </Item>
                            </View>
                            <View style={styles.box}>
                                <Item style={{ height: '100%', marginLeft: 10, width: '90%' }}>
                                    <Label style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textTransform: 'uppercase' }}>{this.state.Address}</Label>
                                </Item>
                            </View>
                            <View style={[styles.box, { elevation: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '80%', alignSelf: 'center' }]}>
                                <FlatList
                                    data={DATA}
                                    horizontal
                                    renderItem={this.renderItem}
                                    keyExtractor={item => item.id}
                                // ItemSeparatorComponent={this.seperatorComponent}
                                />

                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '75%', marginTop: '-10%' }}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.011
                            }}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 2,
                                longitudeDelta: 2
                            }}
                            showsUserLocation={true}
                            onMapReady={this.onMapReady}
                            onRegionChangeComplete={this.onRegionChange}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude
                                }}
                                title={"Your Location"}
                                draggable={true}
                                onDragEnd={this.onDragEnd}
                            />

                        </MapView>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity onPress={() => this.addPlace()}>
                                <Text style={styles.btnText}>Done</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

export default AddPlaces
const styles = StyleSheet.create({
    socialIcons: {
        width: 40,
        height: 40,
        // backgroundColor: '#CCC',
        borderRadius: 31 / 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    circleBox: {
        width: 50,
        height: 50,
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
    box: {
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        marginTop: '2%',
        borderRadius: 10,
        elevation: 2,
        justifyContent: 'center'
    },
    categoryTxt: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
        color: '#A5A5A5'
    },
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
        marginTop: '-20%',
        marginBottom: '10%'
        // position:'absolute',
        // height:'10%'
    },
})