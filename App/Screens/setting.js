import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Animated, Image, Dimensions, ImageBackground } from 'react-native'
import { View, Header, Left, Right } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    //   retrieveData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('resdata');
    //       let resObject = JSON.parse(value);
    //     //  console.log(resObject)
    //     this.setState({driverId:resObject['0']['driver_id'],
    //     name:resObject['0']['name'],
    // })
    //     } catch (error) {

    //     }
    //   };

    // logout= async()=>{
    //     try {
    //       const value = await AsyncStorage.removeItem('resdata');
    //     } catch (error) {
    //       // Error retrieving data
    //     }
    //     this.props.navigation.navigate('Login')
    //   }
    //   componentDidMount(){
    //     this.retrieveData()
    //   }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <Header style={{ backgroundColor: 'transparent', elevation: 0, height: hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Settings</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
                <View style={{ borderWidth: 0.5, marginBottom: height * 0.03, marginTop: height * 0.02, borderColor: '#c6d6c3', width: '90%', alignSelf: 'center' }}></View>
                <View style={styles.details}>
                    <View style={{ width: '60%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon name="edit" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>Languages</Text>
                    </View>
                    <TouchableOpacity 
                    // onPress={() => this.props.navigation.navigate('Favorite')}
                        style={[styles.btn,{backgroundColor:'#fff',marginRight:'5%',borderRadius:20,elevation:2}]} >
                     <Text style={{fontFamily:'Poppins-Regular',fontSize:13}}>English</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 0.5, marginBottom: height * 0.03, marginTop: height * 0.02, borderColor: '#c6d6c3', width: '90%', alignSelf: 'center' }}></View>
                <View style={styles.details}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon name="mic" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>About Us</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}
                        style={styles.btn} >
                     <Icon name="chevron-right" size={15} color="#444" />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon name="file-text" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>Terms & Conditions</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Terms')}
                        style={styles.btn} >
                       <Icon name="chevron-right" size={15} color="#444" />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                        <Icon name="lock" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>Privacy Policy</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Privacy')}
                        style={styles.btn} >
                        <Icon name="chevron-right" size={15} color="#444" />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon name="star" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>Rate Us</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')}
                        style={styles.btn} >
                        <Icon name="chevron-right" size={15} color="#444" />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon name="phone" size={20} color="#444" />
                        <Text style={styles.detailsTxt}>Contact Us</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')}
                        style={styles.btn} >
                         <Icon name="chevron-right" size={15} color="#444" />
                    </TouchableOpacity>
                </View>
              
                <View style={[styles.prfl, { flexDirection: 'column', marginTop: height * 0.32 }]}>
                    <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '100%', height: 27.5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Light', color: '#444' }}>Rush Version 1.1</Text>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

export default DrawerScreen
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    prfl: {
        width: '100%',
        height: height * 0.15,
        // backgroundColor:'#008844',
        marginBottom: height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    details: {
        justifyContent: 'space-around',
        paddingVertical: 8,
        flexDirection: 'row'
    },
    detailsTxt: {
        fontSize: 14,
        width: '75%',
        textTransform: 'capitalize',
        fontFamily: 'Poppins-Medium'

    },
    circleBox: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#fe3'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width * 0.3,

    },
    icn: {
        width: 22,
        height: 22,
        tintColor: '#008844'
    },
    socialIcons: {
        width: 32,
        height: 32,
        backgroundColor: '#E84144',
        borderRadius: 32 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})