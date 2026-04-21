import AppButton from '@/src/components/ui/app-button';
import { Colors } from '@/src/constants/theme';
import { supabase } from '@/src/utils/supabase';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

export default function UserProfileScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    async function signOut() {
        await supabase.auth.signOut();
    }

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.title, { color: themeColors.text }]}>Profil</Text>
            <AppButton label="Logg ut" onPress={signOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});
