// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './src/Navigation'; // Import the main navigation component

// const App = () => {
//   return (
    
//       <Navigation />
   
//   );
// };

// export default App;


// import React from 'react';
// import Navigation from './src/Navigation';


// const App = () => {
//   const userRole = ''; 
//   return <Navigation userRole={userRole} /> 
//   ;
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; 
import Navigation from './src/Navigation'; // Import your Navigation component

const App = () => {
  const [isReady, setIsReady] = useState(false); // Track if the app is ready
  const userRole = ''; // Placeholder for user role
  
  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
        // Simulate asset loading or initialization
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay (e.g., 3 seconds)
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true); // Mark the app as ready
        await SplashScreen.hideAsync(); // Hide the splash screen
      }
    };

    prepareApp();
  }, []);

  if (!isReady) {
    // Optional: Render nothing or a placeholder while the splash screen is visible
    return null;
  }

  return <Navigation userRole={userRole} />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
