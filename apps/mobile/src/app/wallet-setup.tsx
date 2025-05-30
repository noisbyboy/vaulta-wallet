import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { palette } from '../theme/colors';

export default function WalletSetupScreen() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.replace('/import-wallet') 
    }
    }
