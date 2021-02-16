import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Dimensions,LogBox } from 'react-native'
import { View, Header, Left, Right } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


class DrawerScreen extends Component {

 
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <Header style={{ backgroundColor: 'transparent', elevation: 0, height: hp('10%') }}>
                    <Left>
                        <View style={styles.circleBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                <Icon name="times" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                    </Left>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 15, color: '#444', fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>About Us</Text>
                    </View>
                    <Right>

                    </Right>
                </Header>
               <ScrollView>
               <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
                   <Text style={{fontSize:14,fontFamily:'Poppins-Regular',textAlign:'justify',width:'90%'}}>
                   Rush is an application that connects people with their favorite stores to provide their daily wants and needs through simple steps done on their smart device.

{'\n'}Rush is a third party mobile app that connects the costumers  with their favorite stores (restaurants, grocery stores, retail, florists..etc) and delivers your order to your doorstep within 30-50 minutes. 

{'\n'}Not only does Rush connect you with your favorite stores, yet Rush will give you to opportunity to be introduced to stores that you may have not come across before, and give them the chance to be your new favorite.  

{'\n'}Costumers: Rush will provide the costumers with an easy access to
satisfy their cravings and enjoy the variety of choices at their fingertips at any time or any place.

{'\n'}As a target, the target is Rush aiming to reach is a huge one because Rush can serve basically anyone with an access to a smart device, could be phone, tablet, laptop, or PC…and they all need food don’t they?

{'\n'}So we are really ambitious to reach the majority of the target we have in mind to help make their lives easier.
                   </Text>
               </View>
               </ScrollView>

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
        // borderWidth: 1,
        // borderColor: '#fe3'
    },
   
})