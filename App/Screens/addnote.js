
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,LogBox } from 'react-native'
import { Label, Header, Left, Right,Item,Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import Dash from 'react-native-dash';



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isonGoing: false,
            isDone: false,
            isRemaining: false,
            isSelected:false,
            qtyColour:'#BE1F24'
        }
    }


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
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Add Note</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
                
                <View style={{ flex: 1,alignItems:'center',marginTop:'5%' }}>
                <View style={[styles.details,{width:'100%',height:60,justifyContent:'center',alignItems:'center'}]}>
                    <Item style={{backgroundColor:'#fff',width:'90%',borderRadius:25,alignItems:'flex-end',height:'90%',marginTop:'8%'}}>
                        <Input
                            placeholder='Beneficery Name'
                            type="text"

                            style={{width:'100%',height:'100%',fontFamily:'Poppins-Regular',fontSize:12,paddingLeft:10}} />

                    </Item>
                </View>
                <View style={[styles.details,{width:'100%',height:150,justifyContent:'center',alignItems:'center'}]}>
                    <Item style={{backgroundColor:'#fff',width:'90%',borderRadius:25,alignItems:'flex-end',height:'90%',marginTop:'8%'}}>
                        <Input
                            placeholder='Message'
                            type="text"

                            style={{width:'100%',height:'100%',fontFamily:'Poppins-Regular',fontSize:12,paddingLeft:10}} />

                    </Item>
                </View>
                   
                   


                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 0.7, }}>

                    </View>
                    <View style={{ flex: 0.9, justifyContent: 'center', paddingLeft: 15 }}>

                    </View>
                    
                    <View style={{ flex: 1.2 }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity >
                                <Text style={styles.btnText}>Done</Text>
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
    },
noofPeople:{
    width:65,
    height:80,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:1
},
peopleTxt:{
    fontSize:30,
    fontFamily:'Poppins-Medium',
    color:'#333',

}
})