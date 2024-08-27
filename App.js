import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Home from "./screens/Home";  // Home bileşeni doğru şekilde içe aktarılıyor
import ExpensesScreen from './screens/ExpensesScreen';  // ExpensesScreen bileşenini içe aktarın
import NewScreen from './NewScreen'; // Yeni ekranı import edin

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
};

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Expenses" component={ExpensesScreen} />
                <Stack.Screen name="NewScreen" component={NewScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
