import AppButton from '@/src/components/ui/app-button';
import HomeButton from '@/src/components/Home-screen/button';
import { SettingsButton } from '@/src/components/Home-screen/button';
import { Colors } from '@/src/constants/theme';
import { useAuthContext } from '@/src/hooks/use-auth-context';
import * as expo from 'expo-router';
import { useWindowDimensions, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];
    const { claims } = useAuthContext();

    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const isPortrait = height > width;

    if (isPortrait) {
        return (
            <View style={[styles.container, {backgroundColor: themeColors.background}]}>
                <AppButton label='Ny ordre' onPress={() => expo.router.push('/screens/new-order')} />
                <AppButton label='Registrer kunde' onPress={() => expo.router.push('/screens/register-customer')} />
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: themeColors.background}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 16, marginBottom: 16,}}>
                <Text style={{ color: themeColors.primary, fontSize: 28, fontWeight: 'bold' }}>
                    Velkommen tilbake - {claims?.user?.user_metadata?.display_name
                    ?? 'Ukjent bruker'}
                </Text>
                <SettingsButton icon="settings" onPress={() => expo.router.push('/screens/user-profile')} />
            </View>

            <View style={{flexDirection: 'row', gap: 16, marginTop: 24}}>
                <HomeButton icon="add-shopping-cart" label='Ny ordre' onPress={() => expo.router.push('/screens/new-order')} />
                <HomeButton icon="person-add" label='Registrer kunde' onPress={() => expo.router.push('/screens/register-customer')} />
                <HomeButton icon="search" label='Søk etter kunde' onPress={() => false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 16,
        marginBottom: 28,
    }
});