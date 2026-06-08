import { type ComponentProps } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/src/constants/theme';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type Props = {
    onPress: () => void;
    label?: string;
    icon?: MaterialIconName;
    disabled?: boolean;
}

export default function HomeButton({ onPress, label, icon, disabled }: Props) {
        const colorScheme = useColorScheme();
        const themeColors = Colors[colorScheme ?? 'light'];
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"
            style={({ pressed }) => [
                styles.homeButton,
                {backgroundColor: themeColors.primary},
                (pressed || disabled) && {opacity: 0.5}
            ]}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                <MaterialIcons name={icon} size={42} color={themeColors.background} />
                <Text style={[styles.buttonText, { color: themeColors.background }]}>{label}</Text>
            </View>
        </Pressable>
    )
}

export function SettingsButton({ onPress, label, icon, disabled }: Props) {
        const colorScheme = useColorScheme();
        const themeColors = Colors[colorScheme ?? 'light'];
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"
            style={({ pressed }) => [
                (pressed || disabled) && {opacity: 0.5}
            ]}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                <MaterialIcons name={icon} size={36} color={themeColors.primary} />
            </View>
        </Pressable>
    )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    homeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.2,
        height: height * 0.25,
        gap: 10,
        marginBottom: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
});