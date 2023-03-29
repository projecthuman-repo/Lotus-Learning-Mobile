// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   useContext
// } from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';
// import { AuthContext } from '../context/AuthContext';

// const CustomDrawer = props => {

//     const {logout} = useContext(AuthContext);
//     return (
//         <View style={{flex: 1}}>
//         <DrawerContentScrollView
//             {...props}
//             contentContainerStyle={{backgroundColor: '#8200d6'}}>

//             <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
//             <DrawerItemList {...props} />
//             </View>
//         </DrawerContentScrollView>

//         <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
//             <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Text
//                 style={{
//                     fontSize: 15,
//                     fontFamily: 'Roboto-Medium',
//                     marginLeft: 5,
//                 }}>
//                 Tell a Friend
//                 </Text>
//             </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Text
//                 style={{
//                     fontSize: 15,
//                     fontFamily: 'Roboto-Medium',
//                     marginLeft: 5,
//                 }}>
//                 Sign Out
//                 </Text>
//             </View>
//             </TouchableOpacity>
//         </View>
//         </View>
//   );
// };

// export default CustomDrawer;