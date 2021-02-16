
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
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height:hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="align-left" size={20} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 18, color: '#444' }}>Discount</Text>
                    </View>
                    <Right>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Filter')}>
                                <Icon name="bars" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Right>
                </Header>

                <View style={{ flex: 1, }}>

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
    }
})