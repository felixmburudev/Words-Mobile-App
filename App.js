import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from './components/SideMenu';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const App = () => {

  const openDrawer = ({navigation}) => (
    <Ionicons
      name="menu"
      size={24}
      color="black"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.openDrawer()}
    />
  );

  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => openDrawer(props),
          }}
        />
        {/* Define your other screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
