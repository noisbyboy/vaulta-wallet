import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, StatusBar, Dimensions } from "react-native";
import { palette } from '../theme/colors';
import { useRouter } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const { width, height } = Dimensions.get('window');

const getResponsiveSize = (baseSize: number, screenWidth: number) => {
  const scale = Math.max(0.8, Math.min(1.2, screenWidth / 375)); // 375 is the base width for iPhone 11
  return Math.max(baseSize * 0.8, baseSize * scale);
};

export default function SplashScreen() {  
  const router = useRouter(); 
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;
  const dotAnim1 = useRef(new Animated.Value(0)).current;
  const dotAnim2 = useRef(new Animated.Value(0)).current;
  const dotAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Text animation (delayed)
    setTimeout(() => {
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 500);

    // Loading dots animation
    const animateDots = () => {
      const createDotAnimation = (dotAnim: Animated.Value, delay: number) => {
        return Animated.loop(
          Animated.sequence([
            Animated.delay(delay),
            Animated.timing(dotAnim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(dotAnim, {
              toValue: 0.3,
              duration: 400,
              useNativeDriver: true,
            }),
          ])
        );
      };

      Animated.parallel([
        createDotAnimation(dotAnim1, 0),
        createDotAnimation(dotAnim2, 200),
        createDotAnimation(dotAnim3, 400),
      ]).start();
    };

    setTimeout(animateDots, 1000);

    // Navigate to welcome
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, fadeAnim, scaleAnim, textFadeAnim, dotAnim1, dotAnim2, dotAnim3]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.purpleBackground} />
      
      {/* Background decorative elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.decorativeCircle3} />
      
      {/* Main content */}
      <View style={styles.content}>
        {/* Logo */}
        <Animated.Image
          source={require('../assets/images/vaulta-wallet-logo.png')}
          style={[
            styles.logo, 
            { 
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
          resizeMode="contain"
        />
        
        {/* App name */}
        <Animated.Text style={[styles.appName, { opacity: textFadeAnim }]}>
          Vaulta Wallet
        </Animated.Text>
        
        {/* Tagline */}
        <Animated.Text style={[styles.tagline, { opacity: textFadeAnim }]}>
          The Future of Digital Assets
        </Animated.Text>
        
        {/* Loading dots */}
        <View style={styles.loadingContainer}>
          <Animated.View style={[styles.dot, { opacity: dotAnim1 }]} />
          <Animated.View style={[styles.dot, { opacity: dotAnim2 }]} />
          <Animated.View style={[styles.dot, { opacity: dotAnim3 }]} />
        </View>
      </View>
      
      {/* Version */}
      <Animated.Text style={[styles.version, { opacity: textFadeAnim }]}>
        v1.0.0
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.purpleBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: getResponsiveSize(300, width),
    height: getResponsiveSize(300, width),
    borderRadius: getResponsiveSize(150, width),
    backgroundColor: palette.tealMain,
    opacity: 0.05,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -80,
    left: -80,
    width: getResponsiveSize(250, width),
    height: getResponsiveSize(250, width),
    borderRadius: getResponsiveSize(125, width),
    backgroundColor: palette.tealMain,
    opacity: 0.08,
  },
  decorativeCircle3: {
    position: 'absolute',
    top: '50%',
    left: -50,
    width: getResponsiveSize(150, width),
    height: getResponsiveSize(150, width),
    borderRadius: getResponsiveSize(75, width),
    backgroundColor: palette.tealMain,
    opacity: 0.03,
  },
  content: {
    alignItems: 'center',
  },  logo: {
    width: getResponsiveSize(280, width),
    height: getResponsiveSize(280, width),
    marginBottom: height * 0.04, // Increased spacing from logo to app name
  },
  appName: {
    fontSize: getResponsiveSize(32, width),
    fontWeight: 'bold',
    color: palette.textMain,
    marginBottom: height * 0.01, // Reduced spacing between app name and tagline
    letterSpacing: 1,
  },
  tagline: {
    fontSize: getResponsiveSize(16, width),
    color: palette.tealMain,
    marginBottom: height * 0.06, // Increased spacing from tagline to loading dots
    fontWeight: '500',
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: getResponsiveSize(10, width),
    height: getResponsiveSize(10, width),
    borderRadius: getResponsiveSize(5, width),
    backgroundColor: palette.tealMain,
    marginHorizontal: 4,
  },
  version: {
    position: 'absolute',
    bottom: 50,
    fontSize: getResponsiveSize(14, width),
    color: palette.textSecondary,
    opacity: 0.6,
  },
});