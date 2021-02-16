import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar ,ToastAndroid} from 'react-native'
import { Item, Input, Label, Picker } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DialCode } from '../Components/country_DialCode'
import DropDownPicker from 'react-native-dropdown-picker'
import Modal from 'react-native-modal';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            code: '+91',
            mobileerror:''
            // isCorrect:false
        }
    }
    mobileValidate=(text)=>{
        let number=this.state.code+text
        console.log(number)
        if(number.length != 13){
            console.log('wrong')
            this.setState({mobileerror:'hello'})
        } else {
            this.setState({mobile:number,mobileerror:''})
        }

    }

    showToast = () => {
        ToastAndroid.show("OTP sent Successfully", ToastAndroid.SHORT);
    }
    handleLogin = () => {

        if (this.state.mobile.trim() === "") {
            console.log('Please Enter correct mobile number')
            this.setState(() => ({ errorField: "Please Enter correct mobile number" }));
        } else {
            
            return (
                
                fetch('https://rush.aaratechnologies.in/web2/web/twilio/user_login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'mobile': this.state.mobile,
                    })
                })

                    .then(response => response.json())
                    .then(async (data) => {
                        console.log(data)
                        global.userId[0] = data.response_data.data
                        global.userMobile[0]=this.state.mobile
                        if (data.response_code == '200') {
                            this.showToast()
                            this.props.navigation.navigate('VerifyScreen')
                        }
                        else {
                            alert(data.comments)
                        }

                    })
                    .catch(function (error) {
                        let edata = error.message;
                        console.log('Error:', edata)
                        // Alert.alert(
                        //     edata
                        // );
                    }
                    )
            )
        }

    }


    render() {
        console.log( userId[0])
        // console.log(DialCode.length)
        return (
            <ScrollView>
                <SafeAreaView style={{ height: hp('100%'), width: wp('100%'), }}>
                    <StatusBar barStyle='dark-content' backgroundColor='#fee' />
                    <View style={{ width: '90%', height: hp('25%'), alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: '#fff', elevation: 2, marginBottom: '8%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={24} color="#444" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20, color: '#333', fontFamily: 'Poppins-SemiBold',textTransform:'uppercase' }}>Welcome Back</Text>
                        <Text style={{ fontSize: 13, color: '#333', fontFamily: 'Poppins-Regular' }}>Please enter your phone number{'\n'} in order to proceed</Text>
                    </View>
                    <View style={{ width: '100%', height: hp('70%'), alignSelf: 'center', }}>
                        <View style={{ width: '100%', height: '90%', alignSelf: 'center', borderRadius: 10, paddingTop: 20, }}>
                            <View style={[styles.inptBox, { flexDirection: 'row', width: '95%',overflow:'visible' }]}>
                            <DropDownPicker
                                        items={DialCode}
                                        defaultValue={this.state.code}
                                        containerStyle={{width:'30%'}}
                                        style={{ backgroundColor: '#fff', borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            color:'#444'
                                        }}
                                        dropDownStyle={{ backgroundColor: '#fff' }}
                                        onChangeItem={item => this.setState({
                                            code: item.value
                                        })}
                                    />
                                <Item style={[styles.inptItem, { width: '70%', borderRadius: 0,borderBottomRightRadius:25,borderTopRightRadius:25 }]}>
                                    <Input
                                        placeholder='Enter Phone Number'
                                        type="text"
                                        keyboardType='decimal-pad'
                                        onChangeText={(text) => this.mobileValidate(text)}
                                        style={[styles.inptText,{borderColor:this.state.mobileerror == 'hello' ? 'red':'#fff',borderWidth:1}]} />
                                   
                                </Item>
                            </View>
                            <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity
                                    onPress={() => { this.handleLogin() }}
                                // onPress={()=>this.props.navigation.navigate('VerifyScreen')} 
                                >
                                    <Text style={styles.btnText}>Send Verification Code</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default Register
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    btnText: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium',

    },
    btnStyle: {
        width: '70%',
        elevation: 3,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: '25%'
    },
    inptBox: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '2%',
        height: '14%',
        overflow: 'hidden',
        borderRadius: 25
    },
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
        backgroundColor: 'white',
        borderRadius: 25,
        height: '100%'
    }
})