// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Dashboard from '../screens/Patient/Dashboard';
// import ManageHospitals from '../screens/Admin/ManageHospital';
// import ManageDoctors from '../screens/Admin/ManageDoctors';
// import Appointments from '../screens/Doctor/Appointments';
// import Profile from '../components/Profile';
// import CustomSidebar from '../components/CustomSidebar'; 
// import Login from '../screens/Auth/Login';
// import SignUp from '../screens/Auth/SignUp';
// import ForgotPassword from '../screens/Auth/ForgotPassword';
// import OTP from "../screens/Auth/OtpPage";
// import ManagePatients from '../screens/Admin/ManagePatients'

// const Drawer = createDrawerNavigator();

// const AppNavigator = ({ role }) => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomSidebar {...props} role={role} />}
//     >
//       {/* Common Screens */}
//       <Drawer.Screen name="Dashboard" component={Dashboard} />

//       {/* Admin Screens */}
//       {role === 'admin' && (
//         <>
//         <Drawer.Screen name="Login" component={Login} />
//           <Drawer.Screen name="ManageHospitals" component={ManageHospitals} />
//           <Drawer.Screen name="ManageDoctors" component={ManageDoctors} />
//           <Drawer.Screen name="ManagePatients" component={ManagePatients} />
//         </>
//       )}

//       {/* Doctor Screens */}
//       {role === 'doctor' && (
//         <>
//         <Drawer.Screen name="Login" component={Login} />
//           <Drawer.Screen name="Appointments" component={Appointments} />
//           <Drawer.Screen name="Profile" component={Profile} />
//         </>
//       )}

//       {/* Patient Screens */}
//       {role === 'patient' && (
//         <>
//         <Drawer.Screen name="Login" component={Login} />
//           <Drawer.Screen name="Appointments" component={Appointments} />
//           <Drawer.Screen name="Profile" component={Profile} />
//         </>
//       )}
//     </Drawer.Navigator>
//   );
// };

// export default AppNavigator;


// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import AdminDashboard from '../screens/Admin/Dashboard';
// import DoctorDashboard from '../screens/Doctor/Dashboard';
// import PatientDashboard from '../screens/Patient/Dashboard';
// import ManageHospitals from '../screens/Admin/ManageHospital';
// import ManageDoctors from '../screens/Admin/ManageDoctors';
// import Appointments from '../screens/Doctor/Appointments';
// import Profile from '../components/Profile';
// import CustomSidebar from '../components/CustomSidebar';
// import Login from '../screens/Auth/Login';
// import SignUp from '../screens/Auth/SignUp';
// import ForgotPassword from '../screens/Auth/ForgotPassword';
// import OTP from "../screens/Auth/OtpPage";
// import ManagePatients from '../screens/Admin/ManagePatients';


// const Drawer = createDrawerNavigator();

// const AppNavigator = ({ role = 'patient' }) => {
//   // Determine the default dashboard based on the role
//   const getDashboardComponent = () => {
//     switch (role) {
//       case 'admin':
//         return AdminDashboard;
//       case 'doctor':
//         return DoctorDashboard;
//       case 'patient':
//       default:
//         return PatientDashboard;
//     }
//   };

//   return (
//     <Drawer.Navigator
//       initialRouteName="Dashboard"
//       drawerContent={(props) => <CustomSidebar {...props} role={role} />}
//     >
//       {/* Role-Specific Dashboard */}
//       <Drawer.Screen
//         name="Dashboard"
//         component={getDashboardComponent()}
//       />

//       {/* Admin Screens */}
//       {role === 'admin' && (
//         <>
//           <Drawer.Screen name="ManageHospitals" component={ManageHospitals} />
//           <Drawer.Screen name="ManageDoctors" component={ManageDoctors} />
//           <Drawer.Screen name="ManagePatients" component={ManagePatients} />
//         </>
//       )}

//       {/* Doctor Screens */}
//       {role === 'doctor' && (
//         <>
//           <Drawer.Screen name="Appointments" component={Appointments} />
//           <Drawer.Screen name="Profile" component={Profile} />
//         </>
//       )}

//       {/* Patient Screens */}
//       {role === 'patient' && (
//         <>
//           <Drawer.Screen name="Appointments" component={Appointments} />
//           <Drawer.Screen name="Profile" component={Profile} />
//         </>
//       )}

//       {/* Common Authentication Screens */}
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="SignUp" component={SignUp} />
//       <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
//       <Drawer.Screen name="OTP" component={OTP} />
//     </Drawer.Navigator>
//   );
// };

// export default AppNavigator;


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminDashboard from '../screens/Admin/Dashboard';
import DoctorDashboard from '../screens/Doctor/Dashboard';
import Dashboard from '../screens/Dashboard';
import PatientDashboard from '../screens/Patient/Dashboard';
import ManageHospitals from '../screens/Admin/ManageHospital';
import ManageDoctors from '../screens/Admin/ManageDoctors';
import ManageStates from '../screens/Admin/ManageState';
import ManageDistricts from '../screens/Admin/ManageDistricts';
import Appointments from '../screens/Doctor/Appointments';
import Profile from '../screens/Doctor/Profile';
import CustomSidebar from '../components/CustomSidebar';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import OTP from "../screens/Auth/OtpPage";
import NewPasswordPage from '../screens/Auth/NewPasswordPage';
import ManagePatients from '../screens/Admin/ManagePatients';
import PatientsScreen from '../screens/Doctor/PatientsScreen';
import AppointmentsScreen from '../screens/Doctor/AppointmentsScreen';
import TasksScreen from '../screens/Doctor/TasksScreen';
import HospitalsScreen from '../screens/Doctor/HospitalsScreen';
import ProfileManagement from '../screens/Admin/ProfileManagement';
import EmergencyOPScreen from '../screens/Admin/Emergency';
import ManageDepartments from '../screens/Admin/ManageDepartments';
import ChangePassword from '../screens/Doctor/ChangePassword';
import ManageSlots from '../screens/Doctor/ManageSlots';
import MyAppointments from '../screens/Patient/MyAppointments';
import BookAppointments from '../screens/Patient/BookAppointments';
import PatientProfile from '../screens/Patient/Profile';
import SupportHelpCenter from '../screens/Patient/SupportHelpCenter';
import PrivacyPolicy from '../screens/Patient/PrivacyPolicy';
import ReferFriend from '../screens/Patient/ReferFriend';
import HealthRecords from '../screens/Patient/HealthRecords';

const Drawer = createDrawerNavigator();
const AppNavigator = ({ role }) => {
  const dashboards = {
    admin: AdminDashboard,
    doctor: DoctorDashboard,
    patient: PatientDashboard,
  };

  const roleScreens = {
    admin: [
      { name: "ManageHospitals", component: ManageHospitals },
      { name: "ManageDoctors", component: ManageDoctors },
      { name: "ManagePatients", component: ManagePatients },
      { name: "ManageStates", component: ManageStates },
      { name: "ManageDistricts", component: ManageDistricts },
      { name: "EmergencyOPdata", component: EmergencyOPScreen },
      { name: "Departments", component: ManageDepartments },
      { name: "Profile", component: ProfileManagement },
    ],
    doctor: [
      { name: "Appointments", component: Appointments },
      // { name: "PatientsScreen", component: PatientsScreen },
      { name: "AppointmentsScreen", component: AppointmentsScreen },
      {name:"ChangePassword",component:ChangePassword},
      { name: "ManageSlots", component: ManageSlots },
      // { name: "HospitalsScreen", component: HospitalsScreen },
      { name: "Profile", component: Profile },
    ],
    patient: [
      { name: "MyAppointments", component: MyAppointments },
      { name: "PatientProfile", component: PatientProfile },
      { name: "BookAppointments", component: BookAppointments },
      {name:"SupportHelpCenter", component:SupportHelpCenter},
      {name:"PrivacyPolicy",component:PrivacyPolicy},
      {name:"ReferFriend",component:ReferFriend},
      {name:"HealthRecords",component:HealthRecords},

    ],
  };

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomSidebar {...props} role={role} />}
    >
      {/* Role-Specific Dashboard */}
      <Drawer.Screen
        name="Dashboard"
        component={dashboards[role] || Dashboard}
      />

      {/* Role-Specific Screens */}
      {roleScreens[role]?.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}

      {/* Common Authentication Screens */}
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      <Drawer.Screen name="OTP" component={OTP} />
      <Drawer.Screen name="NewPasswordPage" component={NewPasswordPage} />

    </Drawer.Navigator>
  );
};
export default AppNavigator;