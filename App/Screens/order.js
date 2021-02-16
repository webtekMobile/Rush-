
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, Image, FlatList } from 'react-native'
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
        title: 'Second Item',
    },
    {
        id: '4',
        title: 'Second Item',
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
        title: 'First Item',
    },
    {
        id: '4',
        title: 'Second Item',
    },
];

const Item = ({ title }) => (
    <View style={{ width: '95%', height: 110, margin: '1%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, elevation: 1 ,justifyContent:'space-around'}}>
        <View style={{ width: '60%', height: '100%',justifyContent:'center',paddingLeft:10}}>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:11}}>Famous Restaurant</Text>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:10}}>Les suites de Saifi, Block B,
            Second floor, Beirut Disritct,
            H7S1E6
</Text>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,marginTop:'5%'}}>Total: LBP 23,000</Text>
        </View>
        <View style={{ width: '25%', height: '100%',paddingTop:'5%' ,alignItems:'flex-end'}}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:12,color:'#BE1F24'}}>0:3:38 PM</Text>
            <Text style={{fontFamily:'Poppins-Medium',fontSize:9}}>ESTIMATED ARRIVAL</Text>
        </View>
    </View>
);

class Home extends Component {

    renderItem = ({ item }) => (
        <TouchableOpacity style={{ flex: 1 }}>
            <Item title={item.title} />
        </TouchableOpacity>
    );
    separaterItem = () => {
        return (
            <View style={{ height:'3%' }}></View>
        )
    }
    listHeaderOGoing = () => {
        return (
            <View>
                <Text style={styles.listHeaderTxt}>ongoing Orders </Text>
            </View>
        )
    }
    listHeaderPrevious = () => {
        return (
            <View>
                <Text style={styles.listHeaderTxt}>Previous Orders </Text>
            </View>
        )
    }

    listFooter=()=>{
        return(
            <View style={{height:'5%'}}></View>
        )
    }

    render() {
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%')}}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height:hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="times" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Orders</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
                <ScrollView 
                
                >
                    <View style={{ flex: 1 , marginBottom:'20%',alignItems:'center'}}>
                        <View style={{width:'95%'}}>
                        <Text style={styles.listHeaderTxt}>ongoing Orders </Text>
                        {
                            DATA.map(Item)
                        }
                        </View>
                        <View style={{width:'95%'}}>
                        <Text style={styles.listHeaderTxt}>Previous Orders </Text>
                        {
                            DATA1.map(Item)
                        }
                        </View>
                        
                        {/* <FlatList
                            style={{ marginLeft: '5%' }}
                            data={DATA}
                            ListHeaderComponent={this.listHeaderOGoing}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.separaterItem}
                            ListFooterComponent={this.listFooter}
                            keyExtractor={item => item.id}
                        /> */}
                        {/* <FlatList
                            style={{ marginLeft: '5%' }}
                            data={DATA1}
                            ListHeaderComponent={this.listHeaderPrevious}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.separaterItem}
                            ListFooterComponent={this.listFooter}
                            keyExtractor={item => item.id}
                        /> */}

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