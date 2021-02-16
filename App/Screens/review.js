import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Animated, Image, Dimensions, ImageBackground } from 'react-native'
import { View, Header, Left, Right ,Item,Input} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driverId: '',
            name: '',
        };
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('10%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Review</Text>

                    </View>
                    <Right>

                    </Right>
                </Header>
                <View style={{ borderWidth: 0.5, marginBottom: height * 0.03, borderColor: '#c6d6c3', width: '80%', alignSelf: 'center' }}></View>
                <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold',paddingHorizontal:15 }}>What could be improved ?</Text>
                <View style={styles.details}>
                    <Icon name="chevron-left" size={24} color="#444" />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}
                        style={styles.btn} >
                        <Text style={styles.detailsTxt}>Missing Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <Icon name="chevron-left" size={24} color="#444" />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}
                        style={styles.btn} >

                        <Text style={styles.detailsTxt}>Packaging</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <Icon name="chevron-left" size={24} color="#444" />
                    <TouchableOpacity style={styles.btn} >

                        <Text style={styles.detailsTxt}>Item Quality</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <Icon name="chevron-left" size={24} color="#444" />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}
                        style={styles.btn} >

                        <Text style={styles.detailsTxt}>Others</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.details,{width:'100%',height:150,justifyContent:'center'}]}>
                    <Item style={{backgroundColor:'#fff',width:'90%',borderRadius:25,alignItems:'flex-end',height:'90%',marginTop:'8%'}}>
                        <Input
                            placeholder='What you like to tell more to us ?'
                            type="text"

                            style={{width:'100%',height:'100%',fontFamily:'Poppins-Regular',fontSize:12,paddingLeft:10}} />

                    </Item>
                </View>
                
                <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity >
                                    <Text style={styles.btnText}>Done</Text>
                                </TouchableOpacity>
                            </LinearGradient>



            </SafeAreaView>
        )
    }
}

export default DrawerScreen
export const { width, height } = Dimensions.get('window');
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
    details: {
        // justifyContent: 'space-around',
        paddingLeft: 15,
        paddingVertical: 8,
        flexDirection: 'row'
    },
    detailsTxt: {
        fontSize: 15,
        width: '75%',
        textTransform: 'capitalize',
        fontFamily: 'Poppins-Regular'

    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width * 0.8
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
        marginTop: '15%'
    },


})