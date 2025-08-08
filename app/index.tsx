import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { logo } from '@/utils/images';

// Keep splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function SplashScreenPage() {
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen & navigate to login
        await SplashScreen.hideAsync();
        router.replace('/login');
      }
    }

    prepare();
  }, [router]);

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo}  />
        </View>
        <Text style={styles.title}>My Project</Text>
        <Text style={styles.subtitle}>Professional Analytics Platform</Text>
        
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBar}>
            <View style={styles.loadingProgress} />
          </View>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    height:80,
    width: 80,
    borderRadius: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8E8E8',
    marginBottom: 60,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    marginBottom: 15,
  },
  loadingProgress: {
    width: '60%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  loadingText: {
    color: '#E8E8E8',
    fontSize: 14,
  },
});