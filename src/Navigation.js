// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../src/screens/Auth/Login';
// import SignUp from '../src/screens/Auth/SignUp';
// import ForgotPassword from '../src/screens/Auth/ForgotPassword';

// const Stack = createStackNavigator();

// const Navigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//     </Stack.Navigator>
//   );
// };

// export default Navigation;


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Login from '../src/screens/Auth/Login';
// import SignUp from '../src/screens/Auth/SignUp';
// import ForgotPassword from '../src/screens/Auth/ForgotPassword';
// import OTP from "../src/screens/Auth/OtpPage";
// import Dashboard from "../src/screens/Patient/Dashboard";
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const Navigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//       <Stack.Screen name="OtpPage" component={OTP} />
//       <Drawer.Screen name="Dashboard" component={Dashboard}/>
//     </Stack.Navigator>
//   );
// };

// export default Navigation;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../src/screens/Auth/Login';
import SignUp from '../src/screens/Auth/SignUp';
import ForgotPassword from '../src/screens/Auth/ForgotPassword';
import OTP from "../src/screens/Auth/OtpPage";
import Dashboard from "../src/screens/Patient/Dashboard";
import AppNavigator from './navigation/AppNavigator';

// Create the navigator instances
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpPage" component={OTP} />
    </Stack.Navigator>
  );
};

// const AppNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Dashboard" component={Dashboard} />
//       <Drawer.Screen name="Login" component={AuthNavigator} />
//     </Drawer.Navigator>
//   );
// };

// const Navigation = () => {
//   return (
//     <AppNavigator />
//   );
// };

const Navigation = ({ userRole }) => {

  const isAuthenticated = true; 
  return isAuthenticated ? <AppNavigator role={userRole} /> : <AuthNavigator />;
};
export default Navigation;
