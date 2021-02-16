
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList, ImageBackground } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
import { TextInput } from 'react-native-gesture-handler';

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
    <View style={{ width: '100%', height: 200, marginTop: 10, marginLeft:'5%' }}>
      
        <View style={{ width: 335, height: 155, marginTop: '3%',elevation:1}}>
        <ImageBackground source={require('../Assets/banner.jpg')} 
         imageStyle={{ borderRadius: 25}}
        style={{width:'100%',height:'100%',resizeMode:'cover',flexDirection:'row'}}>
            <View style={{ width: 230, height: 56, backgroundColor: '#fff',borderRadius:10,justifyContent:'space-around', marginTop: '38%', marginLeft: '10%',elevation:2 }}>
               <Text style={{marginLeft:10,fontSize:11,fontFamily:'Poppins-Medium',marginTop:10}}>Famous Restaurant</Text>
               <View style={{width:'100%',flexDirection:'row',height:'70%',justifyContent:'space-around',alignItems:'center'}}>
                   <View style={{width:'60%', flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                   <Rating
              type='custom'
              ratingColor='#db091a'
              ratingTextColor='#2319d4'
              readonly={true}
              startingValue={3}
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={9}
              style={{ paddingVertical: 5 }}
          />
                       <Text style={{marginLeft:10,fontSize:9,fontFamily:'Poppins-Light'}}>1000 Reviews</Text>
                   </View>
                   <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                   <Icon name="map-marker" size={9} color="#999" /> 
                       <Text  style={{marginLeft:10,fontSize:9,fontFamily:'Poppins-Light'}}>1.2 Km</Text>
                   </View>
               </View>
               
                
            </View>
            <View style={{width:100,height:20,marginTop:'-15%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Icon name="map-marker" size={9} color="#999" /> 
                       <Text  style={{marginLeft:10,fontSize:9,fontFamily:'Poppins-Light'}}>25-30 min</Text>
                   
               </View>
            <View style={{width:14,height:12,position:'absolute',alignSelf:'flex-end',marginTop:'5%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
            <Icon name="heart" size={12} color="#fff" /> 
            </View>
            </ImageBackground>
        </View>
        
    </View>
);

class Home extends Component {

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%'), backgroundColor: '#fff' }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0, height: 80 }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity  >
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444',fontFamily:'Poppins-SemiBold' }}>Favorite</Text>
                    </View>
                    <Right>
                        
                    </Right>
                </Header>

                <View style={{ flex: 1, marginBottom:50}}>

                    <FlatList
                        data={DATA}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />

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
    }
})