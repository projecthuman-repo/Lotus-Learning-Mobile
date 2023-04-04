import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// The CustomDrawer component is the drawer that will be used for the app.
// The WordMatch and FillInTheBlank screens are just placeholders for now. Replace them with the library and games catalog screens.
// They will be replaced with the actual screens when they are implemented.
import CourseCatalog from '../courses/course-catalog/CourseCatalog';
import CustomDrawer from '../common/CustomDrawer';
import WordMatch from '../games/wordmatching/WordMatch';
import FillInTheBlank from '../games/fill-in-the-blank/FillInTheBlank';

// Import the icons that will be used in the drawer.
// These icons are from the uikit folder.
// The uikit folder contains all the icons that are used in the app.
// The icons are stored as SVG files.
import BookIcon from '../uikit/book';
import CatalogueIcon from '../uikit/catalogue';

// Create the drawer navigator.
const Drawer = createDrawerNavigator();

// The AppStack is wrapped in the CustomDrawer component. The CustomDrawer component is the drawer that will be used for the app.
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
                component={WordMatch}
                options={{ headerTitle: 'GAMES', drawerIcon:({color})=>(<CatalogueIcon color={color}/>) }}
            />
            <Drawer.Screen
                name="Library"
                component={FillInTheBlank}
                options={{ headerTitle: 'LIBRARY', drawerIcon:({color})=>(<CatalogueIcon color={color}/>) }}
            />
        </Drawer.Navigator>
    );
}

export default AppStack;
