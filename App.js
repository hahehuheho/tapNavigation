import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Home!</Text>
      <Button title="Go to Settings" onPress={()=>this.props.navigation.navigate('Settings')}/>
      <Button title="Go to Details" onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
} 

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Settings" onPress={()=>this.props.navigation.navigate('Home')}/>
      <Button title="Go to Details" onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Details!</Text>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home:{
    screen : HomeScreen
  },
  Details : {
    screen : DetailsScreen
  }
});

const SettingsStack = createStackNavigator({
  Settings:{
    screen : SettingsScreen
  },
  Details:{
    screen : DetailsScreen
  }
})


const TabNavigator = createBottomTabNavigator(
  {Home : {
    screen : HomeStack
    }, 
  Settings : {
    screen : SettingsStack
    } 
  },

  {defaultNavigationOptions : ({navigation}) => ({
    tapBarIcon:({focused,horizontal,tintColor}) => {
      const {routName} = navigation.state;

      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);

