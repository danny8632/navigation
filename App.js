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
		// Fetch token using AsyncStorage. currently not used 
		const bootstrapAsync = async () => {
		  let storedToken;
		  console.log('token');
		  try {
			storedToken = await AsyncStorage.getItem('userToken');
			console.log(storedToken);
		  } catch (e) {
			// error handling
		  }
	
		  dispatch({ type: 'RESTORE_TOKEN', token: storedToken });
		};
	
		bootstrapAsync();
	  },
	  []
	);

	const authContext = React.useMemo(
		() => ({
		signIn: async (user, pass) => {
			if (user == 'Admin' && pass == '123')
			{
				try {
					await AsyncStorage.setItem(
					  'userToken',
					  'enbettegemme'
					);
				  } catch (error) {
					// Error saving data
				  }
				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			}
		},
		signOut: () => dispatch({ type: 'SIGN_OUT' }),
		signUp: async data => {

			dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
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
