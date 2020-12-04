
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/homeScreen';
import SearchScreen from './components/screens/searchScreen';
import PostScreen from './components/screens/postScreen';
import LoginScreen from './components/screens/loginScreen';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="POST" component={PostScreen} options={({ route }) => ({ title: route.params.post.title })} />
		</HomeStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Search" component={SearchScreen} />
				<Tab.Screen name="Login" component={LoginScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({

});
