import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Animated, ToastAndroid, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import { Item, Input, Label } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import { Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DialCode } from '../Components/country_DialCode'


// https://rush.aaratechnologies.in/web2/web/user/user_reg

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            password: '',
            errorField: '',
            isregister: false,
            code: '+91',
            ferror:'',
            lerror:'',
            emailerror:'',
            passworderror:'',
            mobileerror:'',
            icon1:'times',
            icon2:'check-circle'
        };
    }

    showToast = () => {
        ToastAndroid.show("Registered Successfully", ToastAndroid.SHORT);
    }


    email = (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === true) {
            this.setState({ email: text,emailerror:'' })
        }
        else {
            this.setState({emailerror:'hello'})
        }
    }

    fname = (text) => {
        const reg = /\s+/g;
        if (reg.test(text) === true) {
            console.log('incorrect')
            this.setState({ ferror:'hello'})
        }
        else {
            this.setState({ fname: text,ferror:'' })
        }
    }
    lname = (text) => {
        const reg = /\s+/g;
        if (reg.test(text) === true) {
            this.setState({ lerror:'hello'})
            console.log('incorrect')
        }
        else {
            this.setState({ lname: text ,lerror:''})
        }
    }
    PasswordValid = (text) => {
        const reg = /^[A-Za-z]\w{7,14}$/
       if(text.trim().length >= 8){    
        console.log('correct')
        if (reg.test(text) === true) {
            console.log('Invalid')
            this.setState({ passworderror:'hello'})
        } 
        else {
            this.setState({ password: text })
            console.log('valid')
            this.setState({ passworderror:''})
        }

       } else  {
           console.log('incorrect')
           this.setState({ passworderror:'hello'})
       }
    }
    mobileValidate=(text)=>{
        let number=this.state.code+text
        console.log(number)
        if(number.length != 13){
            this.setState({mobileerror:'hello'})
        } else {
            this.setState({mobile:number,mobileerror:''})
        }

    }

    handleRegister = () => {
       
        if (this.state.email.trim() === '' || this.state.fname.trim() === '' || this.state.lname.trim() === '' || this.state.mobile.trim() === '') {
            console.log('please enter')
            this.setState({ errorField: 'hello' })
        }
        else {
            return (

                fetch('https://rush.aaratechnologies.in/web2/web/user/user_reg', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'fname': this.state.fname,
                        'lname': this.state.lname,
                        'email': this.state.email,
                        'mobile': this.state.mobile,
                        'password': this.state.password
                    })
                })

                    .then(response => response.json())
                    .then(async (data) => {
                        console.log(data)
                        if (data.response_code =='200'){
                            this.showToast()
                        this.props.navigation.replace('Login')
                        } else{
                            Alert.alert(data.comments)
                        }

                    }))
                .catch(function (error) {
                    let edata = error.message;
                    console.log('Error:', edata)
                    // Alert.alert(
                    //     edata
                    // );
                }
                )
        }
    }
    render() {
        // console.log(this.state.mobile)
        return (
            <ScrollView>
                <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
                    <StatusBar barStyle='dark-content' backgroundColor='#fee' />
                    <View style={{ width: '90%', height: hp('25%'), alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: '#fff', elevation: 2, marginBottom: '8%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={20} color="#444" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20, color: '#333333', fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Create An Account</Text>
                        <Text style={{ fontSize: 13, color: '#333333', fontFamily: 'Poppins-Regular' }}>Enter Your Details to started with Rush</Text>
                       
                        
                    </View>
                    <View style={{ width: '100%', height: hp('70%'), alignSelf: 'center', }}>
                    {!!this.state.errorField && (
                                       <Text style={{color:"red",fontFamily:'Poppins-Regular',fontSize:12,marginLeft:'5%'}}>Please enter all required details</Text>
                                    )}
                        <View style={{ width: '95%', height: '90%', alignSelf: 'center', borderRadius: 10, paddingTop: 10, }}>
                            <View style={styles.inptBox}>

                                <Item style={styles.inptItem}>
                                    <Input
                                        onChangeText={(text) => this.fname(text)}
                                        type="text"
                                        placeholder='First name*'
                                        style={[styles.inptText,{borderColor:this.state.ferror == 'hello' ? 'red':'#fff',borderWidth:1}]} />
                                   
                                   
                                </Item>
                            </View>
                            <View style={styles.inptBox}>

                                <Item style={styles.inptItem}>
                                    <Input
                                        placeholder='Last name*'
                                        type="text"
                                        onChangeText={(text) => this.lname(text)}
                                        style={[styles.inptText,{borderColor:this.state.lerror == 'hello' ? 'red':'#fff',borderWidth:1}]} />
                                    
                                </Item>
                            </View>
                            <View style={styles.inptBox}>

                                <Item style={styles.inptItem}>
                                    <Input
                                        type="text"
                                        onChangeText={(text) => this.email(text)}
                                        placeholder='Email Address*'
                                        style={[styles.inptText,{borderColor:this.state.emailerror == 'hello' ? 'red':'#fff',borderWidth:1}]} />
                                    
                                </Item>
                            </View>
                            <View style={[styles.inptBox, { flexDirection: 'row', width: '95%', overflow: 'visible' }]}>

                                {/* <Item style={[styles.inptItem, { width: 80, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}> */}
                                    <DropDownPicker
                                        items={DialCode}
                                        defaultValue={this.state.code}
                                        containerStyle={{width:'30%'}}
                                        style={{ backgroundColor: '#fff', borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                        }}
                                        dropDownStyle={{ backgroundColor: '#fff' }}
                                        onChangeItem={item => this.setState({
                                            code: item.value
                                        })}
                                    />

                                {/* </Item> */}
                                <Item style={[styles.inptItem, { width: '70%', borderRadius: 0,borderTopRightRadius:25,borderBottomRightRadius:25 }]}>
                                    <Input
                                        placeholder='Enter Phone Number*'
                                        type="text"
                                        keyboardType='decimal-pad'
                                        onChangeText={(text) => this.mobileValidate(text)}
                                        style={[styles.inptText,{borderColor:this.state.mobileerror == 'hello' ? 'red':'#fff',borderWidth:1,borderTopLeftRadius:0,borderBottomLeftRadius:0}]} />
                                   

                                </Item>
                            </View>
                            <View style={[styles.inptBox,{height:'18%'}]}>

                                <Item style={[styles.inptItem,{height:'78%'}]}>
                                    <Input
                                        placeholder="Password must be 8 character long"
                                        style={styles.input}
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.PasswordValid(text)}
                                        style={[styles.inptText,{borderColor:this.state.passworderror == 'hello' ? 'red':'#fff',borderWidth:1}]} />
                                    
                                </Item>
                                <Text style={{fontSize:9, paddingLeft:'5%',paddingVertical:'2%',color:'#008844',fontFamily:'Poppins-Regular'}}>Include uppercase,lowercase,special character and number</Text>
                            </View>


                            <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity
                                    onPress={() => this.handleRegister()}
                                >
                                    <Text style={styles.btnText}>Done</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </SafeAreaView>
                <Modal isVisible={this.state.isregister}>
                    <View style={{ backgroundColor: '#fff', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '90%', fontSize: 12, fontFamily: 'Poppins-Regular', color: '#0b8c16', textAlign: 'center' }}>Registered Succesfully, Please Login with your phone number</Text>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}

export default Register
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    btnText: {
        paddingHorizontal: 15,
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
        marginTop: '15%'
    },
    inptBox: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '2%',
        height: '14%',
        overflow: 'hidden',
        borderRadius: 25
    },
    inptText: {
        paddingLeft:10,
        borderRadius:25,
        width:'100%',
        height:'100%',
        fontSize: 13,
        fontFamily: 'Poppins-Light'
    },
    inptItem: {
        elevation: 0.5,
        backgroundColor: 'white',
        borderRadius: 25,
        height: '100%'
    }
})