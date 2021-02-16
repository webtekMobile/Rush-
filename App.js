import React from 'react'
import {LogBox} from 'react-native'
import Login from './App/Screens/orderStatus'
import Nav from './App/Components/Route'

global.root_url = 'https://rush.aaratechnologies.in/web2/web/';
global.userId=['0']
global.userMobile=['9793081102']
global.userLocation = ['hello']
LogBox.ignoreAllLogs();
const App=()=>{
  return(
    // <Login></Login>
    <Nav/>
  )
}

export default App
