import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { palette } from '../theme/colors';

const { width, height } = Dimensions.get('window');

const getResponsiveSize = (baseSize: number, screenWidth: number) => {
    const scale = Math.max(0.8, Math.min(1.2, screenWidth) / 375);
    return Math.max(baseSize * 0.8, baseSize * scale);
};

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace('/wallet-setup');
  };

  return (
    <View style={styles.container}>
      {/* Center Section - All main content */}
      <View style={styles.centerSection}>
        <Image
          source={require('../assets/images/vaulta-wallet-logo.png')}
          style={styles.smallLogo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to Vaulta</Text>
        <Text style={styles.subtitle}>
          Your Secure Gateway to DeFi
        </Text>
        <View style={styles.featuresRow}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>🛡️</Text>
            </View>
            <Text style={styles.featureText}>Bank-Grade{'\n'}Security</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>⚡</Text>
            </View>
            <Text style={styles.featureText}>Lightning{'\n'}Fast</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>🌍</Text>
            </View>
            <Text style={styles.featureText}>Global{'\n'}Access</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Your crypto, your control. Start in 30 seconds.
        </Text>
      </View>
      {/* Bottom Section - Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.purpleBackground,
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getResponsiveSize(30, width),
  },
  bottomSection: {
    paddingHorizontal: getResponsiveSize(30, width),
    paddingBottom: height * 0.06,
    alignItems: 'center',
  },
  smallLogo: {
    width: getResponsiveSize(100, width),
    height: getResponsiveSize(100, width),
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: getResponsiveSize(32, width),
    fontWeight: 'bold',
    color: palette.textMain,
    textAlign: 'center',
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: getResponsiveSize(16, width),
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: getResponsiveSize(22, width),
    marginBottom: height * 0.03,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: height * 0.04,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    width: getResponsiveSize(70, width),
    height: getResponsiveSize(70, width),
    borderRadius: getResponsiveSize(35, width),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  featureEmoji: {
    fontSize: getResponsiveSize(32, width),
  },
  featureText: {
    fontSize: getResponsiveSize(12, width),
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: getResponsiveSize(16, width),
  },
  description: {
    fontSize: getResponsiveSize(16, width),
    color: palette.textMain,
    textAlign: 'center',
    paddingHorizontal: getResponsiveSize(20, width),
    lineHeight: getResponsiveSize(22, width),
  },
  getStartedButton: {
    backgroundColor: palette.tealMain,
    borderRadius: getResponsiveSize(12, width),
    paddingVertical: height * 0.02,
    paddingHorizontal: getResponsiveSize(40, width),
    minHeight: getResponsiveSize(50, width),
    width: '100%',
    maxWidth: getResponsiveSize(280, width),
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: palette.textMain,
    fontSize: getResponsiveSize(18, width),
    fontWeight: 'bold',
  },
});