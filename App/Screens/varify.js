import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image, StatusBar, TextComponent, ToastAndroid } from 'react-native'
import { Item, Input, Label } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Grid, Col } from 'react-native-easy-grid';
import AsyncStorage from '@react-native-community/async-storage'




class Register extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            otp: [],
            timer: 60,
            fotp: '',
            circleBorderColor: '#fff',

        };
    }

    resendOtp = () => {
        this.setState({timer:30,fotp:''})

        fetch('https://rush.aaratechnologies.in/web2/web/twilio/user_login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'mobile': userMobile[0],
            })
        })

            .then(response => response.json())
            .then(async (data) => {
                console.log(data)
                global.userId[0] = data.response_data.data
                global.userMobile[0] = this.state.mobile
                if (data.response_code == '200') {
                    this.showToast1()
                    this.interval = setInterval(
                        () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
                        1000
                    );
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
    }


    otpTextInput = []
    showToast = () => {
        ToastAndroid.show("OTP verified Successfully", ToastAndroid.SHORT);
    }
    showToast1 = () => {
        ToastAndroid.show("OTP resend Successfully", ToastAndroid.SHORT);
    }
    handleLogin = () => {

        this.setState({ otp: this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 })
        return (
            fetch('https://rush.aaratechnologies.in/web2/web/user/otp_verify', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'user_id': userId[0],
                    'otp': this.state.fotp,
                })
            })

                .then(response => response.json())
                .then(async (data) => {
                    if (data.response_code == '200') {
                        console.log(data.comments, data.response_data.data)
                        try {
                            await AsyncStorage.setItem(
                                'userData',
                                JSON.stringify(data.response_data.data)
                            );
                        } catch (error) {
                            // Error saving data
                        }
                        this.showToast()
                        this.props.navigation.replace('DrawerNavigation', { screen: 'MyTabs' })
                    }
                    else {
                        this.setState({ circleBorderColor: '#BE1F24' })
                        console.log(data)
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
    componentDidMount() {
        this.otpTextInput[0]._root.focus();
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderInputs() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) =>
                <Col key={j}>

                    <View style={[styles.circleBox, { borderColor: this.state.circleBorderColor }]}>
                        <Input
                            keyboardType='decimal-pad'
                            type="text"
                            keyboardType="numeric"
                            onChangeText={v => this.focusNext(j, v)}
                            onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                            ref={ref => this.otpTextInput[j] = ref}
                            style={[styles.inptText]} />
                    </View>
                </Col>
        );
        return txt;
    }
    
    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
        this.setState({
            fotp: parseInt(this.state.otp.join().replace(/,/g, ''))
        })
    }

    render() {
        // console.log(this.state.otp.join())
        console.log(this.state.fotp)
        console.log('user Id ', userId[0])

        return (
            <ScrollView>
                <SafeAreaView style={{ height: hp('100%'), width: wp('100%'), }}>
                    <StatusBar barStyle='dark-content' backgroundColor='#fee' />
                    <View style={{ flex: 0.5, justifyContent: 'center', }}>
                        <View style={{ marginLeft: 15, width: 60, height: 60, borderRadius: 100 / 2, backgroundColor: '#fff', elevation: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="chevron-left" size={24} color="#444" />
                        </View>
                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 120, height: 120, borderRadius: 120 / 2, backgroundColor: '#fff', elevation: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Assets/phone-call.png')} style={{ width: '40%', height: '40%', resizeMode: 'contain', tintColor: 'tomato' }}></Image>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#BE1F24', textTransform: 'uppercase', fontFamily: 'Poppins-Bold' }}>Verify Mobile Number</Text>
                            <Text style={{ fontSize: 14, color: '#444', fontFamily: 'Poppins-Regular' }}>A verification code has been sent to </Text>
                            <Text style={{ fontSize: 14, color: '#444', fontFamily: 'Poppins-SemiBold' }}> {userMobile} </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '70%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                                <Grid style={styles.gridPad}>
                                    {this.renderInputs()}
                                </Grid>

                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                                <TouchableOpacity
                                    onPress={() => this.handleLogin()}
                                // onPress={() => this.props.navigation.replace('DrawerNavigation', { screen: 'MyTabs' })}
                                >
                                    <Text style={styles.btnText}>Verify Code </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={{ flexDirection: 'row' }}>
                                {this.state.timer === 0 ? (
                                    <TouchableOpacity onPress={()=>this.resendOtp()}>
                                        <Text style={[styles.btnText, { color: '#ddd', fontSize: 12, color: '#444' }]}>Resend Code ? </Text>
                                    </TouchableOpacity>
                                ) : (
                                        <Text style={[styles.btnText, { color: '#444', fontSize: 12 }]}> </Text>
                                    )}

                                <Text style={[styles.btnText, { color: '#BE1F24', fontSize: 12, fontFamily: 'Poppins-SemiBold' }]}> 00:{this.state.timer} </Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.5 }}></View>
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
        paddingHorizontal: 15,
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontWeight: 'bold'

    },
    btnStyle: {
        width: '70%',
        elevation: 3,
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent: 'flex-start'
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
        // marginLeft: 10,
        textAlign: 'center',
        fontSize: 20
    },
    inptItem: {
        elevation: 0.5,
        backgroundColor: 'white',
        borderRadius: 25,
        height: '100%'
    },
    circleBox: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,

    },
    gridPad: { padding: 30 },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' }
})