import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, StyleSheet,Image } from 'react-native'
import { } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
class Main extends Component {

    componentDidMount(){
        
        setTimeout(()=>{
            this.retrieveData()
            // this.props.navigation.replace('Main')
          }, 5000);
    }
    
    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('userData');
          let resObject = JSON.parse(value);  
         console.log('user data =======',resObject)
         if(resObject!=null){
            this.props.navigation.replace('DrawerNavigation',{screen:'MyTabs'}) 
         }
         else{
              this.props.navigation.replace('Main')
         }
        } catch (error) {
  
        }
      };
    render() {
        return (
            <LinearGradient colors={['#FF7B7B', '#FF5355', '#BE1F24']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{flex:1}}>
              
                <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
                    <StatusBar backgroundColor='#FF7B7B' />
                    <View style={{width:100,height:132,justifyContent:'center',alignItems:'center'}}>
                     <Image source={require('../Assets/RedRush_Logos-03.png')} style={{width:'100%',height:'100%'}} />
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default Main


const styles = StyleSheet.create({

    btnText:{
        paddingHorizontal:15,
        paddingVertical:15,
        fontSize:20,
        fontWeight:'bold'
    },
    btnStyle:{
        width:'90%',
        height:'28%',
        // backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})