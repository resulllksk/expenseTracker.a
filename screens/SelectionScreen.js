// SelectionScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ionicons kullanarak geri dönme oku ekleyebilirsiniz

const { width, height } = Dimensions.get('window');

const SelectionScreen = () => {
  const navigation = useNavigation();

  // Create animated values for sway
  const swayAnim1 = useRef(new Animated.Value(0)).current;
  const swayAnim2 = useRef(new Animated.Value(0)).current;
  const swayAnim3 = useRef(new Animated.Value(0)).current;

  // Function to create a sway animation
  const startSwayAnimation = (swayAnim) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(swayAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(swayAnim, {
          toValue: -1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(swayAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startSwayAnimation(swayAnim1);
    startSwayAnimation(swayAnim2);
    startSwayAnimation(swayAnim3);
  }, [swayAnim1, swayAnim2, swayAnim3]);

  const swayInterpolate = (swayAnim) =>
    swayAnim.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: ['-10deg', '0deg', '10deg'],
    });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ rotateZ: swayInterpolate(swayAnim1) }] },
          { top: height * 0.2, left: width * 0.1 }, // Adjust position
        ]}
      >
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Cüzdan</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ rotateZ: swayInterpolate(swayAnim2) }] },
          { top: height * 0.5, left: width * 0.4 }, // Adjust position
        ]}
      >
        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate('Remander')}
        >
          <Text style={styles.buttonText}>Hatırlatıcı</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ rotateZ: swayInterpolate(swayAnim3) }] },
          { top: height * 0.8, left: width * 0.2 }, // Adjust position
        ]}
      >
        <TouchableOpacity
          style={[styles.button, styles.button3]}
          onPress={() => navigation.navigate('AccountsReceivable')}
        >
          <Text style={styles.buttonText}>Accounts Receivable</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    position: 'absolute', // Position buttons at absolute positions
  },
  button: {
    width: 180, // Larger button width
    height: 180, // Larger button height
    borderRadius: 90, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  button1: {
    backgroundColor: '#FF6F61', // Example color
  },
  button2: {
    backgroundColor: '#6B5B95', // Example color
  },
  button3: {
    backgroundColor: '#88B04B', // Example color
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18, // Larger font size
  },
  backButton: {
    position: 'absolute',
    top: 80, // Increase to move the button down
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 30,
  },
});

export default SelectionScreen;
