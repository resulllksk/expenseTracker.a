import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import ExpensesScreen from './screens/ExpensesScreen';
import NewScreen from './NewScreen';
import SignUp from './screens/SignUp';
import SelectionScreen from './screens/SelectionScreen';
import Remander from './screens/Remander';
import SalesTracking from './SalesTracking';
import UserHome from './UserHome';
import AdminHome from './AdminHome';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="SignUp"
            >
                {/* <Stack.Screen name="SalesTracking" component={SalesTracking} />
                <Stack.Screen name="UserHome" component={UserHome} />
                <Stack.Screen name="AdminHome" component={AdminHome} />  */}
                <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Expenses" component={ExpensesScreen} />
                <Stack.Screen name="NewScreen" component={NewScreen} />
                <Stack.Screen name="Remander" component={Remander} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
