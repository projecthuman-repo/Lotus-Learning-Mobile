import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

// Get the logout function from the AuthContext.
import { AuthContext } from '../context/AuthContext';

// Import the icons.
import ProfileDefault from '../uikit/profile_default';
import QuestionIcon from '../uikit/question';
import LockIcon from '../uikit/lock';
import BellIcon from '../uikit/bell';

// This is the custom drawer component that we will use to customize the drawer.
const CustomDrawer = props => {

    // Get the logout function from the AuthContext.
    const { logout } = useContext(AuthContext);

    return (
        <View style={{flex: 1}}>

            {/* This is the styling for the header of the drawer. */}
            <View style={{height: 35, backgroundColor: '#F1F9FF', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, fontWeight:700, color: '#2699FB', top:4}}>BLACK LILY LEARNING</Text>
            </View>

            {/* This is the styling for the body of the drawer. */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#F1F9FF'}}>

                {/*  This is the styling for the profile picture/banner section of the drawer. */}
                <View style={{height: 136, backgroundColor:'#BCE0FD', alignItems: 'center', justifyContent: 'center'}}>
                    <ProfileDefault/>
                </View>

                {/* This is the styling for the profile information section of the drawer. */}
                <View style={{height: 106, flexDirection:'row',alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{marginRight: 50}}>
                        <Text style={{fontSize: 20, fontWeight:700, color: '#2699FB'}}>John Doe</Text>
                        <Text style={{fontSize: 14, fontWeight:300, color: '#2699FB'}}>Toronto, ON</Text>
                    </View>  
                    <TouchableOpacity style={{width: 96, borderRadius: 5, height:40, backgroundColor: '#2699FB',alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color:'#FDFDFD', fontSize:12, fontWeight:700}}>EDIT</Text>
                    </TouchableOpacity>
                </View>

                {/* This is the styling for the list of items in the drawer. */}
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10, height:223}}>
                    <DrawerItemList {...props} />
                </View>

                {/* This is the section for the bottom of the drawer that includes secondary options. */}
                <View style={{flex: 1, backgroundColor: '#F1F9FF', height:125, padding:10}}>
                    <TouchableOpacity style={{flexDirection:'row', paddingLeft:12}}>
                        <BellIcon/>
                        <Text style={{fontWeight: 500, color: '#2699FB', fontSize:15,marginLeft:30}}>Notficiations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row', paddingLeft:12, marginTop:8}}>
                        <ProfileDefault height='16' width='16' color='#2699FB'/>
                        <Text style={{fontWeight: 500, color: '#2699FB', fontSize:15, marginLeft:30}}>Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row', paddingLeft:12, marginTop:8}}>
                        <LockIcon height='16' width='16'/>
                        <Text style={{fontWeight: 500, color: '#2699FB', fontSize:15, marginLeft:30}}>Privacy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row', paddingLeft:12, marginTop:8}}>
                        <QuestionIcon height='16' width='16'/>
                        <Text style={{fontWeight: 500, color: '#2699FB', fontSize:15, marginLeft:30}}>Help</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>

            {/* This is the styling for the sign out button at the bottom of the drawer.
            This button will call the logout function from the AuthContext.
            This will clear the user's token and navigate them to the login screen. */}
            <View style={{height:40}}>
                <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 5}}>
                    <View style={{flexDirection: 'row', padding: 5,alignItems: 'center'}}>
                        <Text
                        style={{
                            fontSize: 16,
                            marginLeft: 5,
                            fontWeight: 600,
                            color: '#2699FB'
                        }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  );
};

export default CustomDrawer;