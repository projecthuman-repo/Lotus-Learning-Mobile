import React from 'react';

import CourseCatalog from '../courses/course-catalog/CourseCatalog';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawer from '../common/CustomDrawer';

// const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        // <Drawer.Navigator
        //     drawerContent={props => <CustomDrawer {...props} />}
        //     screenOptions={{
        //         headerShown: false,
        //         drawerActiveBackgroundColor: '#aa18ea',
        //         drawerActiveTintColor: '#fff',
        //         drawerInactiveTintColor: '#333',
        //     }}>
        //     <Drawer.Screen
        //         name="Courses"
        //         component={CourseCatalog}
        //     />
        // </Drawer.Navigator>
        <CourseCatalog/>
    );
}

export default AppStack;


{/* <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Course Catalog" 
                component={CourseCatalog} />
</Stack.Navigator> */}