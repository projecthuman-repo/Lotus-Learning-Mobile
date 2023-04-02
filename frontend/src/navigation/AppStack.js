import React from 'react';
import CourseCatalog from '../courses/course-catalog/CourseCatalog';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../common/CustomDrawer';

import BookIcon from '../uikit/book';
import CatalogueIcon from '../uikit/catalogue';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#2699FB',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#2699FB',
                headerStyle: {
                    backgroundColor: '#FDFDFD',
                    height: 47
                },
                headerTitleStyle: {
                    fontWeight: 700,
                    color: '#2699FB',
                    fontSize: 14
                  }
            }}
            >
            <Drawer.Screen
                name="Open Courses"
                component={CourseCatalog}
                options={{ headerTitle: 'OPEN COURSES', drawerIcon:({color})=>(<BookIcon color={color}/>) }}
            />
            <Drawer.Screen
                name="Course Catalogue"
                component={CourseCatalog}
                options={{ headerTitle: 'COURSE CATALOGUE', drawerIcon:({color})=>(<CatalogueIcon color={color}/>) }}
            />
            <Drawer.Screen
                name="Games"
                component={CourseCatalog}
                options={{ headerTitle: 'GAMES', drawerIcon:({color})=>(<CatalogueIcon color={color}/>) }}
            />
            <Drawer.Screen
                name="Library"
                component={CourseCatalog}
                options={{ headerTitle: 'LIBRARY', drawerIcon:({color})=>(<CatalogueIcon color={color}/>) }}
            />
            
        </Drawer.Navigator>
    );
}

export default AppStack;
