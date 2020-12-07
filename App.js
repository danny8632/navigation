import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/homeScreen';
import SearchScreen from './components/screens/searchScreen';
import PostScreen from './components/screens/postScreen';
import LoginScreen from './components/screens/loginScreen';
import CreatepostScreen from './components/screens/createpostScreen';
import AuthContext from './components/authContext';

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
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
		  switch (action.type) {
			case 'RESTORE_TOKEN':
			  return {
				...prevState,
				userToken: action.token,
				isLoading: false,
			  };
			case 'SIGN_IN':
			  return {
				...prevState,
				isSignout: false,
				userToken: action.token,
			  };
			case 'SIGN_OUT':
			  return {
				...prevState,
				isSignout: true,
				userToken: null,
			  };
		  }
		},
		{
		  isLoading: true,
		  isSignout: false,
		  userToken: null,
		}
	);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
		  let storedToken;
	
		  try {
			storedToken = await AsyncStorage.getItem('userToken');
		  } catch (e) {
			// Restoring token failed
		  }
	
		  // After restoring token, we may need to validate it in production apps
	
		  // This will switch to the App screen or Auth screen and this loading
		  // screen will be unmounted and thrown away.
		  dispatch({ type: 'RESTORE_TOKEN', userToken: storedToken });
		};
	
		bootstrapAsync();
	  },
	  []
	);

	const authContext = React.useMemo(
		() => ({
		signIn: async data => {
			// In a production app, we need to send some data (usually username, password) to server and get a token
			// We will also need to handle errors if sign in failed
			// After getting token, we need to persist the token using `AsyncStorage`
			// In the example, we'll use a dummy token
			dispatch({ type: 'SIGN_IN', userToken: 'dummy-auth-token' });
		},
		signOut: () => dispatch({ type: 'SIGN_OUT' }),
		signUp: async data => {
			// In a production app, we need to send user data to server and get a token
			// We will also need to handle errors if sign up failed
			// After getting token, we need to persist the token using `AsyncStorage`
			// In the example, we'll use a dummy token

			dispatch({ type: 'SIGN_IN', userToken: 'dummy-auth-token' });
		},
		}),
		[]
	);

	return (
	<AuthContext.Provider value={authContext}>
	  <NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Search" component={SearchScreen} />
				
				{state.userToken == null ? (
          			<Tab.Screen name="Login" component={LoginScreen} />
        		) : (
					<Tab.Screen name="Create post" component={CreatepostScreen} />
        		)}
			</Tab.Navigator>
		</NavigationContainer>
    </AuthContext.Provider>
	);
}

const styles = StyleSheet.create({

});
