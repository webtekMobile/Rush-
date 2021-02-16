import React, { Component } from 'react'
import { Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ScrollView, ImageBackground,Image } from 'react-native'
import { View } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ScrollView,} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA1 = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
];

const Item = ({ item }) => (
    <View style={{ backgroundColor: '#fff', width: wp('50%'), elevation: 3, marginBottom: 5, marginLeft: wp('5%'), height: 100, justifyContent: 'center', borderRadius: 25 }}>
        <View style={{ width: '90%', alignSelf: 'center', height: '80%' }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{item.fname}</Text>
            <Text style={{ fontSize: 9, fontFamily: 'Poppins-Regular' }}>{item.review_message}</Text>
            <Rating
                type='custom'
                ratingColor='#db091a'
                ratingTextColor='#BE1F24'
                startingValue={parseFloat(item.review_rate)}
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={15}
                style={{ paddingVertical: 5 ,justifyContent:'flex-end'}}
            />
        </View>
    </View>
);
const OrderItem = ({ item }) => (
    <View style={{ width: wp('70%'), marginLeft: wp('5%'), height: 160, justifyContent: 'center', overflow: 'hidden' }}>
        <View style={{ width: '90%', alignSelf: 'center', height: '80%', backgroundColor: '#fff', elevation: 2, borderRadius: 25, justifyContent: 'center', }}>
            <ImageBackground imageStyle={{ borderRadius: 20 }}
                source={{uri:item.product_featured_photo}} style={{ width: '100%', height: '100%' }}>
                <View style={{ width: '80%',margin:'3%',padding:'5%', backgroundColor: '#fff', elevation: 2, marginTop: '35%', borderRadius: 15, marginLeft: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 11 ,width:'95%',textAlign:'center'}}>{item.product_name}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: '#BE1F24' }}>LBP 23,000</Text>
                </View>
            </ImageBackground>
        </View>

    </View>
);
const OrderCategory = ({ item }) => (
    <View style={{ width: wp('100%'), justifyContent: 'center', overflow: 'hidden',flexDirection:'row',height:120, }}>
        <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:80,borderRadius:80/2,backgroundColor:'red',overflow:'hidden'}}>
                <Image  source={require('../Assets/banner1.jpg')} style={{ width: '100%', height: '100%',resizeMode:'cover' }} />
            </View>
        </View>
        <View style={{width:'70%',height:'100%',justifyContent:'center'}}>
            <Text style={{fontFamily:'Poppins-SemiBold',textTransform:'uppercase'}}>Spaghetti promodoe</Text>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:9}}>Pasta, olive oil, fresh tomatoes, basil and
various other fresh ingredients.</Text>
            <Text style={{fontSize:10,fontFamily:'Poppins-SemiBold',color:'#BE1F24'}}>LBP 23,000</Text>
        </View>

    </View>
);

class RDetails extends Component {

    constructor (props){
        super(props)
        this.state={
            shop : this.props.route.params.shop,
            // shop:'1',
            Data:[],
            orderData:[],
            reviewData:[],
            shopDetails:[]
        }
    }

    componentDidMount(){
        // console.log(this.state.shop)
        fetch('https://rush.aaratechnologies.in/web2/web/user/shop_to_product/vendor_id/'+this.state.shop, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                // console.log(data.response_data.data)
                this.setState({ Data: data.response_data.data,orderData:data.status[1].order,reviewData:data.status[1].review ,shopDetails:data.status[0]})
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)
            }
            )


    }
    renderItem = ({ item }) => (
        <TouchableOpacity >
            <Item item={item} />
        </TouchableOpacity>
    );
    renderItemOrder = ({ item,index }) => (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PDetails',{product:this.state.orderData[index]})}>
            <OrderItem item={item} />
        </TouchableOpacity>
    );
    renderItemCategory = ({ item }) => (
        <TouchableOpacity >
            <OrderCategory item={item} />
        </TouchableOpacity>
    );
    listHeader = () => {
        return (
            <View style={{ width: 45, borderRadius: 25, height: 100, elevation: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="plus" size={15} color="#444" />
            </View>
        )
    }
    listFooter = () => {
        return (
            <View style={{ width: 10, borderRadius: 25, height: 100, justifyContent: 'center', alignItems: 'center' }}>

            </View>
        )
    }
itemSeparator=()=>{
    return(
        <View style={{width:'100%',height:0.5,backgroundColor:'#444'}}></View>
    )
}

equipementListHeader=()=>{
    return(
        <View>
            <Text>hello</Text>
        </View>
    )
}
    render() {
        console.log(this.state.orderData)
        return (
            <SafeAreaView style={{ width: wp('100%'), height: hp('100%') }}>
                <StatusBar hidden={true} />
                <ScrollView >
                    <View style={{ width: wp('100%'), height: hp('28%'), backgroundColor: 'green' }}>
                        <Image source={{uri:this.state.shopDetails.shop_banner}} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
                    </View>
                    <View style={{ backgroundColor: '#fff', width: wp('100%') ,borderRadius:25,overflow:'hidden',marginTop:'-5%'}}>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13 ,paddingVertical:'3%'}}>{this.state.shopDetails.shop_name}</Text>
                            <View style={{ flexDirection: 'row',paddingBottom:'1.5%', width: '40%', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Icon name="phone" size={10} color="#444" />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium' }}>1.2</Text>
                                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 9 }}>Km</Text>
                                </View>
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
                                Baking artisanal French bread and pastries. The finest ingredients, traditional techniques and original recipes come together in the hands of our expert chefs to deliver the most authentic flavors and experiences.
               </Text>
                        </View>
                        {/* <View style={{width:'80%',height:'50%',alignSelf:'center',backgroundColor:'red'}}>
                  
                </View> */}
                    </View>
                    <View style={{ width: wp('100%'), height: hp('25%'), alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%' }}>
                            <View style={{ width: '50%', height: '50%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 30, fontFamily: 'Poppins-Bold' }}>{this.state.shopDetails.review_rate}</Text>
                                </View>
                                <View>
                                    <Rating
                                        type='custom'
                                        ratingColor='#db091a'
                                        ratingTextColor='#BE1F24'
                                        startingValue={this.state.shopDetails.review_rate}
                                        ratingBackgroundColor='#c8c7c8'
                                        ratingCount={5}
                                        imageSize={15}
                                        style={{ paddingVertical: 5 }}
                                    />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>581</Text>
                                        <Text>Reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '50%', height: '50%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Text>See All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: wp('100%'), }}>

                            <FlatList
                                key={'#'}

                                data={this.state.reviewData}
                                horizontal
                                ListHeaderComponent={this.listHeader}
                                ListFooterComponent={this.listFooter}
                                numColumns={1}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.review_id}

                            />
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('27%'), alignItems: 'center', justifyContent: 'space-around', marginTop: '5%', paddingBottom: '3%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%' }}>
                            <Rating
                                type='custom'
                                ratingColor='#db091a'
                                ratingTextColor='#BE1F24'
                                startingValue={2}
                                ratingBackgroundColor='#c8c7c8'
                                ratingCount={5}
                                imageSize={25}
                                style={{ paddingVertical: 5 }}
                            />
                        </View>

                        <View style={{ width: wp('100%'), alignSelf: 'center', marginTop: '5%' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', marginLeft: '5%', fontSize: 17 }}>Order Again</Text>
                            <FlatList
                                key={'#'}

                                data={this.state.orderData}
                                horizontal
                                ListFooterComponent={this.listFooter}
                                numColumns={1}
                                renderItem={this.renderItemOrder}
                                keyExtractor={item => item.order_id}

                            />
                        </View>
                    </View>
                   
                <FlatList
                key={'#'}
                data={DATA1}
                ListFooterComponent={this.listFooter}
                ListHeaderComponent={this.equipementListHeader}
                numColumns={1}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItemCategory}
                keyExtractor={item => item.id}
            />
        
                   

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RDetails