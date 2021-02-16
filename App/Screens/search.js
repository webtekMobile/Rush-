
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
    <View style={{ width: '23%', height: 120, marginLeft: 6, marginTop: 5, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ width: '100%', height: '70%', alignItems: 'center', overflow: 'hidden' }}>
            <Image source={require('../Assets/path.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            <View style={{ width: 60, height: 40, position: 'absolute', marginTop: '35%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Image source={require('../Assets/flower.png')} style={{ width: '70%', height: '70%', resizeMode: 'contain' }} />
            </View>
        </View>
        <Text style={{ fontSize: 11, color: '#555', textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Groceries</Text>
    </View>
);
const Item2 = ({ title }) => (
    <View style={{ width: 120, alignSelf: 'center', justifyContent: 'center',marginRight:5, alignItems: 'center',backgroundColor:'#fff',paddingTop:10,paddingBottom:10,elevation:1,borderRadius:10 }}>
        <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:85,height:85,borderRadius:100/2,alignSelf:'center',overflow:'hidden'}}>
                <Image source={require('../Assets/banner1.jpg')}b style={{width:'100%',height:'100%',resizeMode:'cover'}}/>
            </View>
        </View>
        <View style={{width:'100%'}}>
            <Text style={{fontSize:11,fontFamily:'Poppins-Medium',textAlign:'center'}}>Famous Restaurant</Text>
            <Text style={{fontFamily:'Poppins-Light',fontSize:10,textAlign:'center'}}>Famous Restaurant</Text>
           <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingBottom:'5%'}}>
           <Icon name="times" size={15} color="#C41F24" />
           <Text style={{fontFamily:'Poppins-Light',fontSize:10}}>25-30 min</Text>
           </View>
        </View>
    </View>
);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serachItem: '',
            isSearch: false,
            newData:[],
            masterDataSource:[]
        };
    }



      componentDidMount(){
        fetch('https://project252.aaratechnologies.in/web/common/category', {
            method: 'GET',
          })
            .then(res => res.json())
            .then(data => {
              this.setState({
                masterDataSource: data.response_data.data,
              })
            //   console.log(data.response_data.data)
            }).catch(function (error) {
              let edata = error.message;
            //   console.log('Error:', edata)
              this.setState({loading: false,})
            })
      }

    // searchItem = (text) => {
    //     this.setState({ searchItem: text, isSearch: true })
    //     console.log(this.state.searchItem)
    // }

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    renderItem2 = ({ item }) => (
        <Item2 title={item.title} />
    );
    render() {
        // console.log(this.state.masterDataSource)
        return (
            
            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>


                <Header style={{ backgroundColor: 'transparent', elevation: 0.5, height: hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="align-left" size={20} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', textTransform: 'uppercase', fontFamily: 'Poppins-SemiBold' }}>Search</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
               
                <View style={{ flex: 1, }}>
                    <View style={{ width: '90%', paddingLeft: 10, height: '8%', elevation: 4, overflow: 'hidden', alignItems: 'center', backgroundColor: '#fff', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%', borderRadius: 25 }}>
                        <Icon name="search" size={24} color="#444" />
                        <TextInput
                            onChangeText={(text) => this.searchFilterFunction(text)}
                            placeholder='Search for a store or item'
                            style={{ width: '90%', height: '100%', backgroundColor: '#fff' }}
                        />
                    </View>
                    {this.state.isSearch ? (
                        <View style={{marginLeft:'3%'}}>
                           <Text style={{marginTop:'5%',fontSize:15,fontFamily:'Poppins-SemiBold'}}>Stores</Text>
                            <FlatList
                             style={{marginTop:'1%'}}
                                key={'_'}
                                horizontal
                                data={DATA}
                                renderItem={this.renderItem2}
                                keyExtractor={item => item.cat_id}
                               
                            />
                             <Text style={{marginTop:'5%',fontSize:15,fontFamily:'Poppins-SemiBold'}}>Items</Text>
                            <FlatList
                            style={{marginTop:'1%'}}
                                key={'__'}
                                horizontal
                                data={DATA}
                                renderItem={this.renderItem2}
                                keyExtractor={item => item.cat_id}
                               
                            />
                        </View>
                    ) : (
                            <View>
                                <FlatList
                                    style={{ alignSelf: 'center', marginTop: '10%' }}
                                    key={'#'}
                                    data={DATA}
                                    numColumns={4}
                                    renderItem={this.renderItem}
                                    keyExtractor={item => item.cat_id}
                                   
                                />
                            </View>
                        )}
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