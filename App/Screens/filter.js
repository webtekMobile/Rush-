
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusActive } from '../Screens/status'
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
    
];
const DATA1 = [
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
  
];

const Item = ({ title }) => (
    <View style={{ width: '48%', height: 25,margin:'1%',flexDirection:'row',alignItems:'center',}}>
<Icon name="map-marker" size={15} color="#444" />
<Text style={{fontSize:12,color:'#555',textAlign:'center',paddingLeft:15,fontFamily:'Poppins-Regular'}}>Groceries</Text>
    </View>
);

class Home extends Component {

    renderItem = ({ item }) => (
       <TouchableOpacity style={{width:'50%',height:'100%'}}>
            <Item title={item.title} />
       </TouchableOpacity>
    );
    separaterItem=()=>{
       return(
        <View style={{borderWidth:5,borderColor:'#fff'}}></View>
       )
    }
    listHeaderType=()=>{
       return(
        <View>
        <Text style={styles.listHeaderTxt}>Type </Text>
    </View>
       )
    }
    listHeaderPrice=()=>{
       return(
        <View>
        <Text style={styles.listHeaderTxt}>short by </Text>
    </View>
       )
    }
    listHeaderTime=()=>{
       return(
        <View>
        <Text style={styles.listHeaderTxt}>Price </Text>
    </View>
       )
    }
    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') ,backgroundColor:'#fff'}}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: 80 }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity >
                                <Icon name="times" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Filter</Text>
                    </View>
                    <Right>
                    <View style={[styles.circleBox,{elevation:0}]}>
                            <TouchableOpacity >
                            <Text style={{ fontSize: 11, color: '#444' ,textTransform:'uppercase',fontFamily:'Poppins-Light'}}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{ flex: 1,marginBottom:50 }}>
                            <FlatList
                           style={{marginLeft:'5%'}}
                                data={DATA}
                                numColumns={2}
                                ListHeaderComponent={this.listHeaderType}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.separaterItem}
                                keyExtractor={item => item.id}
                            />
                            <FlatList
                          style={{marginLeft:'5%'}}
                                data={DATA1}
                                numColumns={2}
                                ListHeaderComponent={this.listHeaderTime}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.separaterItem}
                                keyExtractor={item => item.id}
                            />
                            <FlatList
                           style={{marginLeft:'5%'}}
                                data={DATA1}
                                numColumns={2}
                                ListHeaderComponent={this.listHeaderPrice}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.separaterItem}
                                keyExtractor={item => item.id}
                            />
                    
                    <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity >
                                    <Text style={styles.btnText}>Done</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                    </View>
                    </ScrollView>
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
        marginTop: '15%'
    },
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
    },
    listHeaderTxt: {
        fontSize: 14,
        textTransform: 'uppercase',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: 'Poppins-SemiBold'
    }
})