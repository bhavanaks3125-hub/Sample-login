import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="dashboard" />
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
  },
});