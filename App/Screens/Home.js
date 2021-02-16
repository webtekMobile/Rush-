
import React, { Component, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, PermissionsAndroid, Alert, ScrollView, StatusBar, Image, FlatList, ImageBackground } from 'react-native'
import { Input, Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Modal from 'react-native-modal';
import Geolocation from 'react-native-geolocation-service';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Geocoder from 'react-native-geocoding';
import Icon1 from 'react-native-vector-icons/Feather';
Geocoder.init("AIzaSyC5m-C32piW2yiT3kevVbvLfHXsLsPTWik");

const DATA = [
    {
        id: '1',
        title: 'Confirm',
    },
    {
        id: '2',
        title: 'Pickup',
    },
    {
        id: '3',
        title: 'Deliver',
    },


];




const Item = ({ item }) => (
    <View style={{ width: 90, alignSelf: 'center', justifyContent: 'center', marginRight: 5, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
        <View style={{ width: '100%', height: '70%', alignItems: 'center', overflow: 'hidden' }}>
            <Image source={require('../Assets/path.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            <View style={{ width: 60, height: 40, position: 'absolute', marginTop: '35%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Image source={require('../Assets/flower.png')} style={{ width: '70%', height: '70%', resizeMode: 'contain' }} />
            </View>
        </View>
        <Text style={{ fontSize: 11, color: '#555', textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Groceries</Text>
    </View>
);
const BannerItem = ({ item }) => (
    <View style={{ width: wp('70%'), height: '70%', borderRadius: 25, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginLeft: wp('5%') }}>
        <Image source={{ uri: item.banner_resource }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </View>
);
const SpecialItem = ({ item }) => (
    <View style={{ width: 125, alignSelf: 'center', marginRight: 5, alignItems: 'center', backgroundColor: '#fff', paddingTop: 15, paddingBottom: 10, elevation: 1, borderRadius: 10 }}>
        <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: 85, height: 85, borderRadius: 100 / 2, alignSelf: 'center', overflow: 'hidden' }}>
                <Image source={{ uri: item.shop_banner }} b style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
        </View>
        <View style={{ width: '100%', paddingLeft: 5 }}>
            <Text style={{ fontSize: 11, fontFamily: 'Poppins-Medium', color: '#BE1F24' }}>20 % Off</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{item.shop_name}</Text>
            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11 }}>All Branches</Text>
            <Rating
                type='custom'
                ratingColor='#db091a'
                ratingTextColor='#BE1F24'
                startingValue={2}
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={10}
                style={{ paddingVertical: 5 }} />
        </View>
    </View>
);
const FavItem = ({ item }) => (
    <View style={{ width: 125, alignSelf: 'center', marginRight: 5, alignItems: 'center', backgroundColor: '#fff', paddingTop: 15, paddingBottom: 10, elevation: 1, borderRadius: 10 }}>
        <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: 85, height: 85, borderRadius: 100 / 2, alignSelf: 'center', overflow: 'hidden' }}>
                <Image source={require('../Assets/banner1.jpg')} b style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
        </View>
        <View style={{ width: '100%', paddingLeft: 5 }}>
            <Text style={{ fontSize: 11, fontFamily: 'Poppins-Medium', color: '#BE1F24' }}>20 % Off</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>Famous Restaurant</Text>
            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11 }}>All Branches</Text>
            <Rating
                type='custom'
                ratingColor='#db091a'
                ratingTextColor='#BE1F24'
                startingValue={2}
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={10}
                style={{ paddingVertical: 5 }} />
        </View>
    </View>
);
const NewItem = ({ item }) => (
    <View style={{ width: 125, alignSelf: 'center', marginRight: 5, alignItems: 'center', overflow: 'hidden', backgroundColor: '#fff', paddingBottom: 10, elevation: 1, borderRadius: 35 }}>
        <View style={{ width: '100%', alignItems: 'center', overflow: 'hidden', height: '60%' }}>
            <Image source={{ uri: item.shop_banner }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        <View style={{ width: '100%', paddingLeft: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontFamily: 'Poppins-Medium', color: '#BE1F24' }}>20 % Off</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{item.shop_name}</Text>
            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11 }}>All Branches</Text>
            <Rating
                type='custom'
                ratingColor='#db091a'
                ratingTextColor='#BE1F24'
                startingValue={2}
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={10}
                style={{ paddingVertical: 5 }} />
        </View>
    </View>
);
const NearByItem = ({ item }) => (
    <View style={{ width: 125, alignSelf: 'center', marginRight: 5, alignItems: 'center', overflow: 'hidden', backgroundColor: '#fff', paddingBottom: 10, elevation: 1, borderRadius: 35 }}>
        <View style={{ width: '100%', alignItems: 'center', overflow: 'hidden', height: '60%' }}>
            <Image source={{ uri: item.shop_banner }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        <View style={{ width: '100%', paddingLeft: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontFamily: 'Poppins-Medium', color: '#BE1F24' }}>20 % Off</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{item.shop_name}</Text>
            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11 }}>All Branches</Text>
            <Rating
                type='custom'
                ratingColor='#db091a'
                ratingTextColor='#BE1F24'
                startingValue={2}
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={10}
                style={{ paddingVertical: 5 }} />
        </View>
    </View>
);
const ElectronicsItem = ({ item }) => (
    <View style={{ width: '100%', marginTop: 10, marginLeft: '5%', backgroundColor: 'red', height: 100 }}>
        {/*       
    <View style={{ width: '80%', height: '80%', marginTop: '3%',elevation:1}}>
    <ImageBackground source={require('../Assets/banner.jpg')} 
     imageStyle={{ borderRadius: 25}}
    style={{width:'100%',height:'100%',resizeMode:'cover'}}>
        <View style={{ width: '75%', height: '75%', backgroundColor: '#db091a',borderRadius:25, marginTop: '20%', marginLeft: '30%',elevation:2 }}>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#fff',borderRadius:25, marginTop: '1%', marginLeft: '1%',elevation:3,overflow:'hidden' }}>
                <View style={{width:'100%',height:'28%',flexDirection:'row',alignItems:'center',marginLeft:20}}>
                <Icon name="map-marker" size={12} color="#444" />
                <Text style={{fontSize:12,color:'#db091a',fontFamily:'Poppins-SemiBold',paddingLeft:10}}>50 % OFF</Text>
                </View>
                <Text style={{fontSize:11,color:'#111',fontFamily:'Poppins-SemiBold',paddingLeft:10,textTransform:'uppercase'}}>Famous Restaurant</Text>
                <View style={{width:'100%',height:'28%',flexDirection:'row',alignItems:'center',marginLeft:20}}>
                <Rating
          type='custom'
          ratingColor='#db091a'
          ratingTextColor='#2319d4'
          readonly={true}
          startingValue={3}
          ratingBackgroundColor='#c8c7c8'
          ratingCount={5}
          imageSize={12}
          style={{ paddingVertical: 5 }}
      />
                <Text style={{fontSize:9,color:'#444',fontFamily:'Poppins-Light',paddingLeft:10}}>1000 Reviews</Text>
                </View>
                <View style={{width:'100%',height:'28%',flexDirection:'row',alignItems:'center',marginLeft:10}}>
               <View style={{width:'50%',height:'100%',flexDirection:'row',alignItems:'flex-start'}}>
               <Icon name="map-marker" size={15} color="#444" />
               <Text style={{fontSize:10,color:'#444',fontFamily:'Poppins-Medium',paddingLeft:10}}>20-25 mins</Text>
               </View>
               <View style={{width:'50%',height:'100%',flexDirection:'row',alignItems:'flex-start'}}>
               <Icon name="map-marker" size={15} color="#444" />
               <Text style={{fontSize:10,color:'#444',fontFamily:'Poppins-SemiBold',paddingLeft:10}}>2.5 Km.</Text>
               </View>
              
                </View>
            </View>
        </View>
        <View style={{width:40,height:40,position:'absolute',alignSelf:'flex-end',marginTop:'3%',marginRight:'3%',justifyContent:'center',alignItems:'center'}}>
        <Icon name="heart" size={32} color="#fff" /> 
        </View>
        </ImageBackground>
    </View> */}

    </View>
);
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: false,
            isModalVisible: false,
            isLocationSelect: false,
            latitude: 0,
            longitude: 0,
            AllBanner: [],
            trendingData: [],
            nearBydata: [],
            specialOffer: [],
            newData: [],
            shopData:[],
            isnear: false,
            tmpArr:[{
                id: '1',
                title: 'Confirm',
            }]
        };
    }

    flatList = createRef();

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
        this.getBanner()
        this.getTrandingData()
        this.nearBYSData()
        this.getSpecialOffer()
        this.getnewData()
        this.refreshOnBack()


    }

    onCurrentLocation = async () => {

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
                                global.userLocation[0] = 'Default'
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

    refreshOnBack = () => {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.getBanner()
            this.getTrandingData()
            this.nearBYSData()
            this.getSpecialOffer()
            this.getnewData()
            // this.onCurrentLocation()
        });
        return unsubscribe;
    }

    getBanner = () => {
        fetch('https://rush.aaratechnologies.in/web2/web/user/banner', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                // console.log(data.response_data.data)
                this.setState({ AllBanner: data.response_data.data })
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)

            }
            )
    }
    getTrandingData = () => {
        fetch('https://rush.aaratechnologies.in/web2/web/user/megameta_shop/trending', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                // console.log(data.response_data.data)
                this.setState({ trendingData: data.response_data.data })
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)
            }
            )
    }
    getnewData = () => {
        fetch('https://rush.aaratechnologies.in/web2/web/user/megameta_shop/is_new', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                // console.log(data.response_data.data)
                this.setState({ newData: data.response_data.data })
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)
            }
            )
    }
    getSpecialOffer = () => {
        fetch('https://rush.aaratechnologies.in/web2/web/user/megameta_shop/is_offer', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                // console.log(data.response_data.data)
                this.setState({ specialOffer: data.response_data.data })
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)
            }
            )
    }

    nearBYSData = () => {

        fetch('https://rush.aaratechnologies.in/web2/web/user/findshop', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'shop_latitude': 26.8976619,
                'shop_longitude': 80.9555682
            })
        })

            .then(response => response.json())
            .then(async (data) => {
                console.log('near data ========',data.response_data.data)
                if (data.response_code == '200') {
                    this.setState({ nearBydata: data.response_data.data })
                }
                else {
                    this.setState({ isnear: true })
                }
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
   
    renderItemBtn = ({ item ,index }) => (
        <TouchableOpacity onPress={()=>this.setState({tmpArr:DATA[index]})}>
        <View style={[styles.typeBtn,{backgroundColor:this.state.tmpArr?.id == item.id ? '#BE1F24':'#fff',elevation:2}]}>
                <Text style={[styles.typeBtnTxt,{color:this.state.tmpArr?.id == item.id ? '#fff':'#222'}]}>{item.title}</Text> 
        </View>
        </TouchableOpacity>
    );
    renderItem = ({ item }) => (
        <TouchableOpacity>
            <Item item={item} />
        </TouchableOpacity>
    );
    renderItemBanner = ({ item }) => (
        <BannerItem item={item} />
    );
    renderItemSpecial = ({ item }) => (
        <TouchableOpacity >
            <SpecialItem item={item} />
        </TouchableOpacity>
    );
    renderItemNearBy = ({ item,index }) => (
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RDetails',{shop:this.state.nearBydata[index].vendor_id})}}>
            <NearByItem item={item} />
        </TouchableOpacity>
    );
    renderItemNew = ({ item }) => (
        <NewItem item={item} />
    );
    renderItemFav = ({ item }) => (
        <NewItem item={item} />
    );
    renderItemElectronics = ({ item }) => (
        <ElectronicsItem item={item} />
    );

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }

    render() {
        console.log(this.state.Address)
        return (


            <SafeAreaView style={{ height: hp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="align-left" size={20} color="#444" />
                                {/* <Image source={require('../Assets/bar.png')} /> */}
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'tomato' }}>Delivering To</Text>
                        <TouchableOpacity onPress={() => this.setState({ isLocationSelect: true })}
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '30%' }}>
                            {userLocation[0]['title'] ? (
                                <Text style={{ fontSize: 18, color: '#444' }}>{userLocation[0]['title']}</Text>
                            ) : (
                                    <Text numberOfLines={1} style={{ fontSize: 12, color: '#444', fontFamily: 'Poppins' }}>{this.state.Address}</Text>
                                )}

                            <Icon name='chevron-down' size={12} color="#444" />
                        </TouchableOpacity>
                    </View>
                    <Right>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                                <Icon name="cart-plus" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Right>
                </Header>
                <ScrollView >
                    <View style={{ width: wp('100%'), height: hp('30%'), justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ width: '100%', marginTop: '3%', height: '20%' }}>


                            <FlatList
                                key={'#'}
                                data={DATA}
                                horizontal
                                numColumns={1}
                                renderItem={this.renderItemBtn}
                                keyExtractor={item => item.id}

                            />


                        </View>
                        <SwiperFlatList
                            autoplay
                            autoplayDelay={3}
                            autoplayLoop
                            index={0}
                            showPagination
                            data={this.state.AllBanner}
                            renderItem={this.renderItemBanner}
                        />


                    </View>
                    <View style={{ width: '100%', height: hp('20%'), marginTop: '2%' }}>
                        <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', paddingLeft: 10 }}>Trending</Text>
                        <FlatList
                            key={'#'}
                            data={this.state.trendingData}
                            horizontal
                            numColumns={1}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.shop_meta_id}

                        />
                    </View>

                    <View style={{ height: hp('30%'), width: '100%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', width: '85%' }}>Special Offers</Text>
                            <TouchableOpacity >
                                <Icon name="chevron-right" size={15} color="#444" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            style={{ width: '95%', alignSelf: 'center' }}
                            key={'#'}
                            data={this.state.specialOffer}
                            horizontal
                            numColumns={1}
                            renderItem={this.renderItemSpecial}
                            keyExtractor={item => item.shop_meta_id}

                        />
                    </View>
                    {this.state.isFav ? (
                        <View style={{ height: hp('30%'), width: '100%' }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', width: '85%' }}>Your Favoirites</Text>
                                <Icon name="chevron-right" size={15} color="#444" />
                            </View>
                            <FlatList
                                style={{ width: '95%', alignSelf: 'center' }}
                                key={'#'}
                                data={DATA}
                                horizontal
                                numColumns={1}
                                renderItem={this.renderItemFav}
                                keyExtractor={item => item.id}

                            />
                        </View>
                    ) : (
                            <View></View>
                        )}
                    <View style={{ height: hp('30%'), width: '100%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', width: '85%' }}>New</Text>
                            <TouchableOpacity >
                                <Icon name="chevron-right" size={15} color="#444" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            style={{ width: '95%', alignSelf: 'center' }}
                            key={'#'}
                            data={this.state.newData}
                            horizontal
                            numColumns={1}
                            renderItem={this.renderItemNew}
                            keyExtractor={item => item.shop_meta_id}

                        />
                    </View>
                    <View style={{ height: hp('30%'), width: '100%', }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', width: '85%' }}>Electronics</Text>
                            <Icon name="chevron-right" size={15} color="#444" />
                        </View>
                        <View style={{ width: '90%', height: '70%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text> Under development </Text>
                        </View>
                        {/* <FlatList
                            style={{ width: '95%', alignSelf: 'center' }}
                            key={'#'}
                            data={DATA}
                            horizontal
                            numColumns={1}
                            renderItem={this.renderItemElectronics}
                            keyExtractor={item => item.id}

                        /> */}
                    </View>
                    <View style={{ height: hp('30%'), width: '100%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 17, fontFamily: 'Poppins-SemiBold', width: '85%' }}>Near By</Text>
                            <TouchableOpacity >
                                <Icon name="chevron-right" size={15} color="#444" />
                            </TouchableOpacity>
                        </View>
                        {this.state.isnear ? (
                            <View style={{ width: '90%', height: '90%', alignSelf: 'center', justifyContent: 'center', marginRight: 5, alignItems: 'center', overflow: 'hidden', backgroundColor: '#fff', paddingBottom: 10, elevation: 1, borderRadius: 35 }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 15, color: '#BE1F24' }}>Opps! {'\n'}No show available near by you </Text>
                            </View>
                        ) : (
                                <FlatList
                                    style={{ width: '95%', alignSelf: 'center' }}
                                    key={'#'}
                                    data={this.state.nearBydata}
                                    horizontal
                                    numColumns={1}
                                    renderItem={this.renderItemNearBy}
                                    keyExtractor={item => item.shop_meta_id}

                                />
                            )}

                    </View>
                    <View style={{ height: hp('12%'), width: '100%' }}>
                        {/* <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
                          <Text style={{fontSize:17,fontFamily:'Poppins-SemiBold',width:'85%'}}>Trial</Text>
                          <Icon name="chevron-right" size={15} color="#444" />
                          </View>
                           <FlatList
                           style={{width:'95%',alignSelf:'center'}}
                                   key={'#'}
                                   data={DATA}
                                   horizontal
                                   numColumns={1}
                                   renderItem={this.renderItemNew}
                                   keyExtractor={item => item.id}
       
                               /> */}
                    </View>
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible}
                    backdropColor='#fff'
                    backdropOpacity={0.6}
                    style={{ width: '100%' }}
                >
                    <StatusActive />
                </Modal>
                <Modal isVisible={this.state.isLocationSelect}
                    backdropColor='#fff'
                    backdropOpacity={0.3}
                    style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isLocationSelect: false })}
                >
                    <View style={{ width: '112%', height: '30%', backgroundColor: '#fff', marginLeft: '-6%', marginBottom: '-8%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ height: '90%', width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, paddingHorizontal: 15, paddingVertical: 10 }}>Change Location</Text>
                            <TouchableOpacity onPress={() => { this.setState({ isLocationSelect: false }), this.onCurrentLocation() }}
                                style={{ width: '50%', height: '20%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Icon name="map-marker" size={15} color="#B20920" />
                                <Text style={{ width: '90%', fontSize: 14, fontFamily: 'Poppins-Medium' }}>My Current Location</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ isLocationSelect: false }), this.props.navigation.navigate('AddressBook') }}
                                style={{ width: '50%', height: '25%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Icon name="map-marker" size={15} color="#444" />
                                <Text style={{ width: '90%', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Address Book</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ isLocationSelect: false }), this.props.navigation.navigate('AddPlaces') }}
                                style={{ width: '50%', height: '25%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Icon name="plus" size={15} color="#444" />
                                <Text style={{ width: '90%', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Add a new Address</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>

        )
    }
}

export default Home
const styles = StyleSheet.create({
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
    typeBtnTxt: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: '#333',
    },
    typeBtn: {
        width: wp('30%'),
        height: '95%',
        backgroundColor: '#BE1F24',
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})