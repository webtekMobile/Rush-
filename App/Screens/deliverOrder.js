
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions,PermissionsAndroid, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Dash from 'react-native-dash';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,

            latitude: 26.8,
            longitude: 80.4,
            lat: 0,
            long: 0,
            ltDelta: 0.09,
            lgDelta: 0.19,
            coords: [],
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: 26.8,
                longitude: 80.4,
                latitudeDelta: 0,
                longitudeDelta: 0
            }),
        }
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
            const { coordinate } = this.state;
            this.watchID = Geolocation.watchPosition(
              position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  });
                // coordinate.timing(newCoordinate, 500).start();
              },
              error => console.log(error),
              {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
              }
            )
          }
          else {
    
            Alert.alert("Location Permission Not Granted");
    
          }
        } catch (err) {
          console.warn(err)
        }
        
      
      } 

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
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

                    <Right>

                    </Right>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MapView
                        style={{ width: '100%', height: '100%' }}
                        provider={PROVIDER_GOOGLE}
                        liteMode={true}
                        showsUserLocation={true}

                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.2,
                            longitudeDelta: 0.212,
                        }}
                    >
                        <Marker.Animated
                            coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                        />
                    </MapView>

                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', elevation: 5, marginTop: '-10%', borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>
                    <View style={{ flex: 0.7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '90%' }}>
                            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 25 }}>22:56</Text>
                            </View>
                            <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 10 }}>Estimated Arival</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '10%' }}>
                            <View style={{ width: '22%', height: '60%', backgroundColor: 'tomato' }}></View>
                            <View style={{ width: '22%', height: '60%', backgroundColor: 'tomato' }}></View>
                            <View style={{ width: '22%', height: '60%', backgroundColor: 'tomato' }}></View>
                            <View style={{ width: '22%', height: '60%', backgroundColor: 'tomato' }}></View>
                        </View>
                    </View>
                    <View style={{ flex: 0.9, justifyContent: 'center', paddingLeft: 15 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textTransform: 'uppercase' }}>Delivering</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, width: '60%' }}>We are confirming your order with Famous Restaurant</Text>
                        <View style={{ width: '90%', height: '1%', backgroundColor: '#555', marginTop: '5%', alignSelf: 'center' }}></View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#444', borderRadius: 10 / 2 }}></View>
                            <Dash style={{ width: 1, height: '50%', flexDirection: 'column', marginTop: '5%', marginBottom: '5%', backgroundColor: '#444' }} />
                            <View style={{ width: 10, height: 10, backgroundColor: '#444', borderRadius: 10 / 2 }}></View>
                        </View>
                        <View style={{ width: '90%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{ height: '40%', width: '90%', justifyContent: 'center', }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>Your Delivery Time</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 11 }}>25 mins</Text>
                            </View>
                            <View style={{ height: '40%', width: '90%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>Delivery Address</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 11 }}>Vikas nagar Lucknow uttar pradesh</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.9 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity >
                                <Text style={styles.btnText}>Order History</Text>
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
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnText: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium',

    },
    btnStyle: {
        width: '65%',
        elevation: 3,
        borderRadius: 25,
        alignSelf: 'center',
    },

})