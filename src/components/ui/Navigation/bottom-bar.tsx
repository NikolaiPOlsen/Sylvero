import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Skjermer
import HomeScreen from '@/app/(tabs)/home';
import NewOrderScreen from '@/app/screens/new-order';
import RegisterCustomerScreen from '@/app/screens/register-customer';
import UserProfileScreen from '@/app/screens/user-profile';

export default function SidebarNav() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashbord" component={HomeScreen} />
            <Drawer.Screen name="Ny ordre" component={NewOrderScreen} />
            <Drawer.Screen name="Registrer kunde" component={RegisterCustomerScreen} />
            <Drawer.Screen name="Profil" component={UserProfileScreen} />
        </Drawer.Navigator>
    );
}