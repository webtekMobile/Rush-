import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, StyleSheet,Image } from 'react-native'
import { } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
class Main extends Component {
    componentWillUnmount(){
        abort()
    }
    render() {
        return (
            <LinearGradient colors={['#FF7B7B', '#FF5355', '#BE1F24']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{flex:1}}>
               <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                   <View style={{width:200,height:100,justifyContent:'center',alignItems:'center',}}>
                   <Image source={require('../Assets/Group.png')} style={{width:'100%',height:'100%'}} />
                   </View>
               </View>
                <View style={{ flex: 2 ,justifyContent:'flex-end'}}>
                    <StatusBar backgroundColor='#FF7B7B' />
                    <View style={{width:'100%',height:'50%',justifyContent:'flex-start',alignItems:'center',}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}
                         style={[styles.btnStyle,{backgroundColor:'#fff'}]}>
                            <Text style={[styles.btnText,{color:'#DE383C'}]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}
                        style={[styles.btnStyle,{borderWidth:1,borderColor:'#fff'}]}>
                            <Text style={[styles.btnText,{color:'#fff', fontFamily:'Poppins-Medium'}]}>Login</Text>
                        </TouchableOpacity>
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
        fontSize:16,
        fontFamily:'Poppins-SemiBold'
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