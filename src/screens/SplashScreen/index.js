import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from '../../components';

export const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Logo/>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1180',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });
  