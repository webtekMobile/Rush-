
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,LogBox, Dimensions, ScrollView, StatusBar,RefreshControl, Image, FlatList, ImageBackground } from 'react-native'
import { Label, Header, Left, Right } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swipeout from 'react-native-swipeout';

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
  
    
];


var swipeoutBtns = [
    {
        text: 'Delete',
        type: 'delete',
       
    }
]

const Item = ({ item ,index,title}) => (
   
    <View style={{ width: '100%', height: 50,alignItems:'center'}}>
        {/* <View style={{ width: '80%',borderWidth:0.5,backgroundColor:'#555', alignSelf:'flex-end',marginBottom:'1.5%'}}>
       </View> */}
       <View style={{ width: '90%', height: '100%',elevation:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center' }}>
       <View style={{width:'10%',height:'100%',justifyContent:'center'}}>
       <View style={styles.socialIcons}>
              
                <Icon name="facebook" size={20} color="#fff" />
              
            </View>
       </View>
       <View style={{width:'75%',height:'100%',justifyContent:'center'}}>
           <Text style={{fontFamily:'Poppins-SemiBold',fontSize:11,textTransform:'capitalize'}}>{item.shipping_cat}</Text>
           <Text style={{fontFamily:'Poppins-Regular',fontSize:10,textTransform:'capitalize'}}>{item.adress}</Text>
       </View>
       </View>
       
    </View>
    
);

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            allAddress:[],
        refreshing:false,
        }
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.addressBook()
      }

    seperatorComponent=()=>{
        return(
            <View style={{ width: '80%',height:2,marginTop:7}}>
        </View>
        )
    }

    refreshOnBack=()=>{
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.addressBook()
          });
          return unsubscribe;
    }

    addressSelected=(index)=>{
        global.userLocation[0]=DATA[index]
        console.log(userLocation)
        this.props.navigation.navigate('Payment')
    }

    componentDidMount(){
        this.refreshOnBack()
        this.addressBook()
        
    }

    addressBook=()=>{
        fetch("https://rush.aaratechnologies.in/web2/web/user/address_book/"+"6", {
                    method: 'GET',
                   
                })

                    .then(response => response.json())
                    .then(async (data) => {
                        console.log(data.response_data.data)
                        this.setState({allAddress:data.response_data.data,refreshing:false})
                           
                    })
                    .catch(function (error) {
                        let edata = error.message;
                        console.log('Error:', edata)
                       
                    }
                    )
    }
    
    renderItem = ({ item,index }) => (
        
        <Swipeout right={swipeoutBtns} autoClose={true} backgroundColor='#fff' style={{ borderRadius: 10 }} > 
        <TouchableOpacity onPress={() => this.addressSelected(index)}>
          <Item
            item={item}
          />
        </TouchableOpacity>
        </Swipeout>
    )
 
    
    render() {
        console.log(userLocation)
        return (

            <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                <Header style={{ backgroundColor: 'transparent', elevation: 0, height:hp('8%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444',fontFamily:'Poppins-SemiBold' }}>Address Book</Text>
                    </View>
                    <Right>
                 <View style={[styles.circleBox,{elevation:0,width:100,backgroundColor:'transparent'}]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPlaces')}>
                                <Text style={{ fontSize: 10, color: '#231F20',fontFamily:'Poppins-Regular' }}>Add Place</Text>
                            </TouchableOpacity>
                        </View>
                    </Right>
                </Header>

                <View style={{ flex: 1, marginBottom:50}}>

                    <FlatList
                    style={{width:'90%',alignSelf:'center'}}
                        data={this.state.allAddress}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.address_book_id}
                        ItemSeparatorComponent={this.seperatorComponent}
                        refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
                        // ListFooterComponent={this.footerComponent}
                    />
        
                </View>

            </SafeAreaView>

        )
    }
}

export default Home
const styles = StyleSheet.create({
    socialIcons: {
        width: 31,
        height: 31,
        backgroundColor: '#E84144',
        borderRadius: 31 / 2,
        justifyContent: 'center',
        alignItems: 'center'
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
    }
})