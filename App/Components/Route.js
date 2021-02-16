import React from 'react'
import {Image,LogBox} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, CardStyleInterpolators, TransitionPresets} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Splash from '../Components/splash'
import Home from '../Screens/Home'
import Register from '../Screens/register'
import Login from '../Screens/login'
import Main from '../Screens/main'
import VerifyScreen from '../Screens/varify'
import Search from '../Screens/search'
import Discount from '../Screens/discount'
import Door from '../Screens/door'
import Orders from '../Screens/order'
import Filter from '../Screens/filter'
import DrawerScreen from '../Components/customDrawer'
import Favorite from '../Screens/favorite'
import AddressBook from '../Screens/addressBook'
import AddPlaces from '../Screens/addPlaces'
import Setting from '../Screens/setting'
import About from '../Screens/about'
import Terms from '../Screens/termsconditions'
import Privacy from '../Screens/privacypolicy'
import Cart from '../Screens/cart'
import CancelOrder from '../Screens/confirmOrder'
import Arriving from '../Screens/arriveOrder'
import Prepairing from '../Screens/prepaireOrder'
import Delivering from '../Screens/deliverOrder'
import RDetails from '../Screens/restaurantDetails'
import PDetails from '../Screens/ProductDetails'
import Payment from '../Screens/paymentMethods'
import AddCard from '../Screens/addCard'
import PlaceOrder from '../Screens/placeOrder'

// import Status from '../Screens/status'
LogBox.ignoreAllLogs();
const primary='#BE1F24'
const secondary = '#333'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation =()=>{
  return(
      <Drawer.Navigator 
      screenOptions={{
        // headerShown: false,
        gestureEnabled:true,
        gestureDirection:'horizontal',
      }}
      drawerType='slide'
      drawerPosition='left'
      drawerContent={props => <DrawerScreen {...props} />}>
        {/* <Drawer.Screen name='Home' component={Home}/> */}
        <Stack.Screen name="MyTabs" component={MyTabs} />
        
    </Drawer.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={
      {
        keyboardHidesTabBar: true,
        // showLabel:false
        activeTintColor:primary,
        inactiveTintColor:secondary,
        style:{
          backgroundColor:'transparent',
          elevation:0,
          borderTopWidth:0
        }
      }
    }
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/home.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Search" component={Search} 
       options={{
        tabBarIcon:({focused})=>(<Image source={require('../Assets/search.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Discount" component={Discount}
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/tag.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}} />)
      }}
      />
      <Tab.Screen name="At Your Door" component={Door} 
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/door.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Orders" component={Orders} 
       options={{
         
        tabBarIcon:({focused})=>(  <Image source={require('../Assets/check-list.png')}  style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
    </Tab.Navigator>
  );
}
const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }

  export default function Nav() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator:
              CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: config,
              close: config
            }
          }}
          headerMode='float'
          animation='fade'
        >
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
          
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="AddressBook" component={AddressBook} />
          <Stack.Screen name="AddPlaces" component={AddPlaces} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="CancelOrder" component={CancelOrder} />
          <Stack.Screen name="Arriving" component={Arriving} />
          <Stack.Screen name="Prepairing" component={Prepairing} />
          <Stack.Screen name="Delivering" component={Delivering} />
          <Stack.Screen name="RDetails" component={RDetails} />
          <Stack.Screen name="PDetails" component={PDetails} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }