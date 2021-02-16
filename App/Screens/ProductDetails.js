import React, { Component } from 'react'
import { Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ScrollView, ImageBackground,Image ,StyleSheet} from 'react-native'
import { View ,Item,Input} from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ScrollView,} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Rating, AirbnbRating } from 'react-native-ratings';




class RDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            product:this.props.route.params.product,
            productPrice:0,
            numOfproduct:1,
            totalPrice:0
        }
    }
    componentDidMount(){
        console.log(this.state.product)
        this.setState({totalPrice:this.state.product.product_current_price,productPrice:this.state.product.product_current_price})

    }
 
addProduct=()=>{

 const   product=this.state.numOfproduct+1
const total = this.state.productPrice*product
this.setState({totalPrice:total,numOfproduct:product})
}

removeProduct=()=>{
if(this.state.numOfproduct >= 1){
const product=this.state.numOfproduct-1
const total = this.state.totalPrice-this.state.productPrice
this.setState({totalPrice:total,numOfproduct:product}) 
}
}

adToCart=()=>{
    if (this.state.numOfproduct>='0')
    {
        return (
                
            fetch('https://rush.aaratechnologies.in/web2/web/user/add_cart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                        "user_id":this.state.product.user_id,
                        "p_id":this.state.product.product_id,
                        "p_qty":this.state.numOfproduct
                        
                })
            })

                .then(response => response.json())
                .then(async (data) => {
                    console.log('added successfully',data)

                })
                .catch(function (error) {
                    let edata = error.message;
                    console.log('Error:', edata)
                    
                }
                )
        )
    }
}
    render() {
        return (
            <SafeAreaView style={{ width: wp('100%'), height: hp('100%') }}>
                <StatusBar hidden={true} />
                <ScrollView >
                    <View style={{ width: wp('100%'), height: hp('28%'), backgroundColor: 'green' }}>
                        <Image source={require('../Assets/banner2.png')} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
                    </View>
                    <View style={{ backgroundColor: '#fff', width: wp('100%') ,borderRadius:25,overflow:'hidden',marginTop:'-5%'}}>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13 ,paddingVertical:'3%'}}>{this.state.product.product_name}</Text>
                            <View style={{ paddingBottom:'1.5%', width: '40%',  justifyContent:'center'}}>
                                
                                <View style={{ flexDirection: 'row', width: '55%', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Icon name="phone" size={10} color="#444" />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium' }}>20-25</Text>
                                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 9 }}>mins</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:'90%',height:0.5,backgroundColor:'#444',marginVertical:5,alignSelf:'center'}}></View>
                        <View style={{ width: '90%', alignSelf: 'center',paddingVertical:'2%' }}>
                            <Text style={{ width: '100%', textAlign: 'justify', fontSize: 10, fontFamily: 'Poppins-Regular' }}>
                              {this.state.product.product_description}
               </Text>
                        </View>
                        {/* <View style={{width:'80%',height:'50%',alignSelf:'center',backgroundColor:'red'}}>
                  
                </View> */}
                    </View>
                    <View style={{ width: wp('100%') ,borderRadius:25,overflow:'hidden',alignItems:'center',alignSelf:'center',marginTop:'3%'}}>
                    <Item style={[styles.inptItem]}>
                                    <Input
                                        placeholder='Any Special Instruction'
                                        type="text"
                                       
                                        // onChangeText={(text) => this.mobileValidate(text)}
                                        style={[styles.inptText]} />
                                   
                                </Item>
                                <View style={{width:'100%',backgroundColor:'#fff',paddingVertical:'5%',marginTop:'8%',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{width:'30%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>this.addProduct()}>
                                    <Icon name="plus" size={15} color="#444" />
                                    </TouchableOpacity>
                                    <Text>{this.state.numOfproduct}</Text>
                                    <TouchableOpacity onPress={()=>this.removeProduct()}>
                                    <Icon name="minus" size={15} color="#444" />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{width:'100%',paddingVertical:'4%',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                    <Text>Sub Total</Text>
                                    <Text>{this.state.totalPrice}</Text>
                                    </View>
                                </View>
                                <View style={{width:'100%',paddingVertical:'3%',justifyContent:'center',alignItems:'center'}}>
                                <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity
                                    onPress={() => { this.adToCart() }}
                                // onPress={()=>this.props.navigation.navigate('Cart')} 
                                >
                                    <Text style={styles.btnText}>Add To Cart</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                                </View>
                    </View>
                  
                   
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RDetails

const styles = StyleSheet.create({
    inptText: {
        height:'100%',
        width:'100%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingLeft: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Light'
    },
    inptItem: {
        elevation: 0.5,
        backgroundColor: '#fff',
        borderRadius: 10,
        height:100,
        width:'90%'
    },
    btnText: {
        paddingHorizontal: 5,
        paddingVertical: 12,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium',

    },
    btnStyle: {
        width: '50%',
        elevation: 3,
        borderRadius: 20,
        alignSelf: 'center',
        // marginTop: '2%'
    },
})