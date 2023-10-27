// App.js
import React, { useReducer, useEffect, useMemo,useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from './utils/authContext';
import SplashScreen from './screens/SplashScreen'; // Adjust the path based on your folder structure
import LoginScreen from './screens/LoginScreen';
import Welcome from './screens/Welcome';
import { icons,COLORS,  images, SIZES } from "./constants";
import ScreenHeaderBtn from './components/common/header/ScreenHeaderBtn';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';
import EmptyScreen from './screens/EmptyScreen';
import Signout from './screens/Signout';
import { Image } from 'react-native';
import CreativeCard from './screens/CreativeCard';
import ItemDisplay from './components/menu/ItemDisplay';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Root() {
  

  return (


    <Drawer.Navigator  initialRouteName='Welcome'  screenOptions={{
      drawerStyle: {
        backgroundColor: 'black', // Background color of the drawer screens
      },
      drawerActiveBackgroundColor: 'blue', // Background color for the active screen
      drawerInactiveBackgroundColor: '#495E57', // Background color for the inactive screens
      drawerLabelStyle: {
        color: 'white', // Text color for drawer items
      },
    }}>
      <Drawer.Screen
        name="ProfileDraw"
        component={MenuScreen}
        options={{
          title:'',
          drawerLabel: '',
          drawerIcon: () => (
            // Use an icon for the menu button
            <Image
              source={images.profile} // Replace with the actual path to your profile picture
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent the default behavior to navigate to the screen
            e.preventDefault();
            // Navigate to the MenuScreen when the menu button is pressed
            navigation.navigate('ProfileDraw');
          },
        })}
      />

      
      <Drawer.Screen name="Welcome" component={Welcome} 
        options={{
          title:'Mene List',
          headerStyle: {backgroundColor:'#495E57',},
          headerTitleStyle: {
            color: 'white', // Change the header text color
          },
          
          
          headerShown: true ,
          gestureEnabled: true,
          //headerStatusBarHeight:100
        }}  
        />
        <Drawer.Screen name="CreativeCard" component={CreativeCard} 
        options={{
          title:'ImageTest',
          headerStyle: {backgroundColor:'#495E57',},
          headerTitleStyle: {
            color: 'white', // Change the header text color
          },
          //headerStatusBarHeight:100
        }}  
        />
      <Drawer.Screen 
        name="MenuScreen" 
        component={MenuScreen} 
        options={{
          drawerLabel: 'Menu',
          drawerIcon: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
        }

        }
        />
      <Drawer.Screen name="Signout"  component={Signout} />
     
    </Drawer.Navigator>
  );
}

export default function App({ navigation }) {


  const [state, dispatch] = useReducer(
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

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to the server and get a token
        // We will also need to handle errors if sign-in fails
        // After getting a token, we need to persist it using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        console.log("Inside app function", data.token)
        
        dispatch({ type: 'SIGN_IN', token: "Token" });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to the server and get a token
        // We will also need to handle errors if sign-up fails
        // After getting a token, we need to persist it using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          { 
          
          state.isLoading ? ( <Stack.Screen name="Splash" component={SplashScreen} />) : state.userToken == null ? (
            // No token found, the user isn't signed in
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerStyle: {backgroundColor:'#495E57'},
                title: '',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            
          ) : (
            <Stack.Group>
               <Stack.Screen 
               
            name="Root" component={Root}
            options={{ headerShown: false }} />
           
            <Stack.Screen options={{
              title: 'EmptyScreen'
            }} name="EmptyScreen" component={EmptyScreen} />



            </Stack.Group>
           
          
          )}
          <Stack.Screen name="ItemDisplay" component={ItemDisplay} />
            
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}



/*

  <Stack.Screen
            initialRouteName="Welcome"
            screenOptions={{
              cardStyle: { backgroundColor: 'lightblue' }, // Apply a background color to all screens
            }}
              name="Welcome" 
              component={Welcome}
              options={{
                title:'',
                headerStyle: {backgroundColor:'#495E57'},
                headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                ),
                headerRight: () => (
                  <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                ),
                headerShown: true ,
                gestureEnabled: true,
                headerStatusBarHeight:'200'
              }}
              />  
         

  {state.isLoading ? ( <Stack.Screen name="Splash" component={SplashScreen} />) : state.userToken == null ? (
            // No token found, the user isn't signed in
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // The user is signed in
            <Stack.Screen name="Welcom" component={Welcome1} />
          )}

*/