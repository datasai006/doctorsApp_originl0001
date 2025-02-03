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


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen'; 
// import Navigation from './src/Navigation'; // Import your Navigation component

// const App = () => {
//   const [isReady, setIsReady] = useState(false); // Track if the app is ready
//   const userRole = 'doctor'; // Placeholder for user role
  
//   useEffect(() => {
//     const prepareApp = async () => {
//       try {
//         await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
//         // Simulate asset loading or initialization
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay (e.g., 3 seconds)
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setIsReady(true); // Mark the app as ready
//         await SplashScreen.hideAsync(); // Hide the splash screen
//       }
//     };

//     prepareApp();
//   }, []);

//   if (!isReady) {
//     // Optional: Render nothing or a placeholder while the splash screen is visible
//     return null;
//   }

//   return <Navigation userRole={userRole} />;
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   text: {
//     fontSize: 16,
//     color: '#000',
//   },
// });


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import Navigation from './src/Navigation'; // Import your Navigation component

// const App = () => {
//   const [isReady, setIsReady] = useState(false); // Track if the app is ready
//   const userRole = 'patient'; //  admin ,  doctor ,  patient ,

//   useEffect(() => {
//     const prepareApp = async () => {
//       try {
//         await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setIsReady(true); // Mark the app as ready
//         await SplashScreen.hideAsync(); // Hide the splash screen
//       }
//     };

//     prepareApp();
//   }, []);

//   if (!isReady) {
//     return null;
//   }

//   return <Navigation userRole={userRole} />;
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, StatusBar } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import { SafeAreaView } from 'react-native';
// import Navigation from './src/Navigation'; // Import your Navigation component

// const App = () => {
//   const [isReady, setIsReady] = useState(false); // Track if the app is ready
//   const userRole = 'patient'; // admin, doctor, patient

//   useEffect(() => {
//     const prepareApp = async () => {
//       try {
//         await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setIsReady(true); // Mark the app as ready
//         await SplashScreen.hideAsync(); // Hide the splash screen
//       }
//     };

//     prepareApp();
//   }, []);

//   if (!isReady) {
//     return null; // Prevent rendering until the app is ready
//   }

//   // return (
//   //   <View style={styles.container}>
//   //     {/* StatusBar Configuration */}
//   //     <StatusBar 
//   //       barStyle="dark-content" // Use 'light-content' for dark backgrounds
//   //       backgroundColor="transparent"
//   //       translucent={true} // Makes the status bar overlay the app content
//   //     />
//   //     <Navigation userRole={userRole} />
//   //   </View>
//   // );
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="transparent"
//         translucent={true}
//       />
//       <Navigation userRole={userRole} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white', // Background color of your app
//      // Padding to avoid overlapping with the status bar
//   },
// });

// export default App;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './src/Navigation'; // Import your Navigation component

const App = () => {
  const [isReady, setIsReady] = useState(false); // Track if the app is ready
  const userRole = 'admin'; // admin, doctor, patient

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
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
    return null; // Prevent rendering until the app is ready
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Use 'light-content' for dark backgrounds
        backgroundColor="transparent"
        translucent={false} // Makes it overlay the app content
      />
      <Navigation userRole={userRole} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: 'white', // App's main background color
    ...Platform.select({
      android: {
        // paddingTop: StatusBar.currentHeight || 0, // Handle Android status bar height'
        paddingTop: 0
      },
      ios: {
        paddingTop: 0, 
      },
    }),
  },
});

export default App;
