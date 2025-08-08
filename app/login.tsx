import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import React from 'react';
import { login } from '@/utils/images';

const { width, height } = Dimensions.get('window');
const isTablet = width > 768;

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both Username and Password');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo credentials: admin/password or demo/demo123
      if (
        (username === 'admin' && password === 'password') ||
        (username === 'demo' && password === 'demo123')
      ) {
        setIsLoading(false);
        router.replace('/(home)/dashboard');
      } else {
        setIsLoading(false);
        Alert.alert(
          'Login Failed',
          'Invalid User credentials. Try:\nUsername: admin, Password: password\nOR\nUsername: demo, Password: demo123'
        );
      }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Welcome Img */}
          <View style={styles.leftSection}>
            <View style={styles.welcomeCard}>
              <View style={styles.logoContainer}>
                <View style={styles.logoBox}>
                   <Image style={styles.loginImg} source={login} resizeMode='contain' />
                </View>
              </View>
              <Text style={styles.welcomeTitle}>Welcome to MY APP</Text>
              <Text style={styles.welcomeSubtitle}>
                You’ve arrived! Let’s create something amazing together.
              </Text>
            </View>
          </View>

           {/* Login page  */}
          <View style={styles.rightSection}>
            <View style={styles.loginContainer}>
              <View style={styles.brandHeader}>
                <Text style={styles.brandName}>Login</Text>
                <Text style={styles.loginTitle}>Hello! Let's Get Started</Text>
              </View>

              <View style={styles.formSection}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Username</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your username"
                    placeholderTextColor="#9CA3AF"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={[styles.textInput, styles.passwordInput]}
                      placeholder="Enter your password"
                      placeholderTextColor="#9CA3AF"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff color="#9CA3AF" size={20} />
                      ) : (
                        <Eye color="#9CA3AF" size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.loginButton, isLoading && styles.disabledButton]}
                  onPress={validateLogin}
                  disabled={isLoading}
                >
                  <Text style={styles.loginButtonText}>
                    {isLoading ? 'Signing In...' : 'Log In'}
                  </Text>
                </TouchableOpacity>

                <Text style={styles.signupPrompt}>
                  Don't have an account?{' '}
                  <Text style={styles.signupLink}>Sign up here</Text>
                </Text>
              </View>

              {/* <View style={styles.demoCredentials}>
                <Text style={styles.demoTitle}>Demo Credentials:</Text>
                <Text style={styles.demoText}>Username: admin | Password: password</Text>
                <Text style={styles.demoText}>Username: demo | Password: demo123</Text>
              </View> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: isTablet ? 'row' : 'column',
    minHeight: height,
  },
  leftSection: {
    flex: isTablet ? 1 : 0.4,
    backgroundColor: '#2125c4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  welcomeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    maxWidth: 400,
    backdropFilter: 'blur(20px)',
  },
  logoContainer: {
    marginBottom: 30,
  },
  loginImg:{
     width: 200,
    height: 200,
    borderRadius: 20
  },
  logoBox: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  logoIcon: {
    fontSize: 48,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#E8E8E8',
    textAlign: 'center',
    lineHeight: 24,
  },
  rightSection: {
    flex: isTablet ? 1 : 0.6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 40,
  },
  loginContainer: {
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  brandHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2125c4',
    marginBottom: 8,
    letterSpacing: 2,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  formSection: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    height: 50,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#374151',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 15,
    padding: 4,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#2125c4',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#2125c4',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#2125c4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
    shadowOpacity: 0,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupPrompt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    color: '#2125c4',
    fontWeight: '500',
  },
  demoCredentials: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FCD34D',
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 8,
    textAlign: 'center',
  },
  demoText: {
    fontSize: 12,
    color: '#92400E',
    marginBottom: 4,
    textAlign: 'center',
  },
});