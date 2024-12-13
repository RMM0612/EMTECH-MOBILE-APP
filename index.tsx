import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image, Alert, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const LuminaFloraApp = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
  });
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isDashboardPage, setIsDashboardPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation value for text

  useEffect(() => {
    // Fade-in animation for the text when the app is opened
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  if (!fontsLoaded) {
    return null;
  }

  const handleGetStarted = () => {
    setIsLoginPage(true);
  };

  const handleSignIn = () => {
    const correctUsername = 'team45cpe41s6@gmail.com';
    const correctPassword = 'team45PD1';

    if (username === correctUsername && password === correctPassword) {
      setIsDashboardPage(true);
    } else {
      Alert.alert('Error', 'Incorrect username or password.');
    }
  };

  if (isDashboardPage) {
    return (
      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardTitle}>USER DASHBOARD</Text>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search plants..." 
            placeholderTextColor="#666666"
          />
        </View>
        {/* Dashboard content, replicating the image provided */}
        <View style={styles.dashboardContent}>
          <View style={styles.card}><Image source={require('@/assets/images/plant1.png')} style={styles.cardImage}/><Text style={styles.cardText}>This plant needs water</Text></View>
          <View style={styles.card}><Image source={require('@/assets/images/plant2.png')} style={styles.cardImage}/><Text style={styles.cardText}>This plant needs light</Text></View>
          <View style={styles.card}><Image source={require('@/assets/images/plant1.png')} style={styles.cardImage}/><Text style={styles.cardText}>This plant needs water</Text></View>
          <View style={styles.cardDay}><Text style={styles.cardDayText}>DAY 35 - 5 WEEKS</Text></View>
          <View style={styles.tipBox}><Text style={styles.tipText}>WATER CHECK: Soil moisture low? Water your plant to maintain hydration levels.</Text></View>
        </View>
        {/* Percentage indicators */}
        <View style={styles.percentagesContainer}>
  <View style={styles.percentageBox}><Text style={styles.percentageText}>50%{''}Humidity</Text></View>
  <View style={styles.percentageBox}><Text style={styles.percentageText}>50%{''}Temperature</Text></View>
  <View style={styles.percentageBox}><Text style={styles.percentageText}>100%{''}Water Level</Text></View>
  <View style={styles.percentageBox}><Text style={styles.percentageText}>70%{''}Soil Moisture</Text></View>
  <View style={styles.percentageBox}><Text style={styles.percentageText}>60%{''}Light Intensity</Text></View>
</View>


        
        {/* Navigation buttons as shown in the example */}
        <View style={styles.navigationBar}>
          <TouchableOpacity style={styles.navButton}><Ionicons name="leaf" size={24} color="green" /><Text style={styles.navText}>Environment</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><MaterialIcons name="nature" size={24} color="green" /><Text style={styles.navText}>Plants</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Ionicons name="home" size={24} color="green" /><Text style={styles.navText}>Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Ionicons name="settings" size={24} color="green" /><Text style={styles.navText}>Configuration</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Ionicons name="cog" size={24} color="green" /><Text style={styles.navText}>Settings</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

  if (isLoginPage) {
    return (
      <View style={styles.loginContainer}>
        <Image source={require('@/assets/images/icon.png')} style={styles.icon} />
        <Text style={styles.loginTitle}>Unlock Growth Potential</Text>
        <Text style={styles.loginSubtitle}>Sign In to Get Started.</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Username" 
            placeholderTextColor="#FFFFFF" 
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#FFFFFF" 
            secureTextEntry 
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ImageBackground source={require('@/assets/images/BGimage.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Animated.Text style={{ ...styles.title, opacity: fadeAnim }}>Lumina Flora</Animated.Text>
        <View style={styles.textContainer}>
          <Animated.Text style={{ ...styles.subtitle, opacity: fadeAnim }}>Empowering Your Plants, One Tap at a Time.</Animated.Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A6636',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#4A6636',
    color: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4A6636',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  loginButtonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  dashboardContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  dashboardTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  dashboardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  cardDay: {
    backgroundColor: '#C4E1A7',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  cardDayText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  tipBox: {
    backgroundColor: '#4A6636',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: '90%',
  },
  tipText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  percentagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  percentageBox: {
    backgroundColor: '#173518',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  percentageText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    textAlign: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: 5,
  },
});

export default LuminaFloraApp;
