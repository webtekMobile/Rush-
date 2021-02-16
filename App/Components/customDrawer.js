import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Animated, Image, Dimensions, ImageBackground } from 'react-native'
import { View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      fname: '',
      lname:''
    };
  }


    retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('userData');
        let resObject = JSON.parse(value);
        this.setState({mobile:resObject[0]['mobile'],fname:resObject[0]['fname'],lname:resObject[0]['lname']})
      //  console.log('user data =======',resObject[0]['mobile'])
      } catch (error) {

      }
    };

  logout= async()=>{
      try {
        const value = await AsyncStorage.removeItem('userData');
      } catch (error) {
        // Error retrieving data
      }
      this.props.navigation.navigate('Main')
    }

    componentDidMount(){
      this.retrieveData()
    }
  render() {
    console.log(this.state.fname,this.state.lname,this.state.mobile)
    return (
      <SafeAreaView style={{ flex: 1 }}>
<ScrollView>
        <View style={styles.prfl}>
          <View style={{
            width: 60,
            height: 60,
            alignItems: 'center',
            //   marginTop:'15%',
            //   marginLeft:width*0.25,
            borderRadius: 140 / 2,
            overflow: 'hidden',
            backgroundColor: 'red'

          }}>
            <Image source={require('../Assets/prfl_pic.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
          </View>
          <View style={{ width: '60%', height: '50%' }}>
            <Text style={{ fontSize: 14, color: 'gray', fontFamily: 'Poppins-Bold' }}>Hello  {this.state.fname+' '+this.state.lname}  </Text>
            <Text style={{ fontSize: 13, color: 'gray', fontFamily: 'Poppins-Regular' }}>
            +91  {this.state.mobile}</Text>
          </View>

        </View>
        <View style={{ borderWidth: 0.5, marginBottom: height * 0.03, borderColor: '#c6d6c3', width: '80%', alignSelf: 'center' }}></View>
        <View style={styles.details}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')}
            style={styles.btn} >

            <Text style={styles.detailsTxt}>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddressBook')}
            style={styles.btn} >

            <Text style={styles.detailsTxt}>Address Book</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <TouchableOpacity style={styles.btn} >

            <Text style={styles.detailsTxt}>Invite Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}
          style={styles.btn} >

            <Text style={styles.detailsTxt}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <TouchableOpacity style={styles.btn} >

            <Text style={styles.detailsTxt}>Legal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <TouchableOpacity style={styles.btn} >

            <Text style={[styles.detailsTxt, { textTransform: 'uppercase' }]}>FAQ</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.details}>
          <TouchableOpacity onPress={()=>this.logout()}
          style={styles.btn} >

            <Text style={styles.detailsTxt}>Log out</Text>
          </TouchableOpacity>

        </View>
        <View style={{ borderWidth: 0.5, marginTop: height * 0.15, marginBottom: height * 0.03, borderColor: '#c6d6c3', width: '80%', alignSelf: 'center' }}></View>
        <View style={[styles.prfl, { flexDirection: 'column' }]}>
          <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 72, height: 27.5 }}>
              <Image source={require('../Assets/RedRush_Logos2.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
          </View>
          <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <Icon name="facebook" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <Icon name="instagram" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <Icon name="twitter" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default DrawerScreen
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  prfl: {
    width: '100%',
    height: height * 0.15,
    // backgroundColor:'#008844',
    marginBottom: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  details: {
    justifyContent: 'space-around',
    paddingVertical: 8
  },
  detailsTxt: {
    fontSize: 15,
    width: '75%',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular'

  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.8
  },
  icn: {
    width: 22,
    height: 22,
    tintColor: '#008844'
  },
  socialIcons: {
    width: 32,
    height: 32,
    backgroundColor: '#E84144',
    borderRadius: 32 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})