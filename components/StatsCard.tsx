import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { error800, success800 } from '@/utils/colors';

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
  change: string;
}

export default function StatsCard({ title, value, icon, color, change }: StatsCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[color + '15', color + '05']}
        style={styles.gradient}
      >
        <View style={styles.header}>
           <Icon name={icon} size={28} color={color} />
          <View style={[styles.changeContainer, { backgroundColor: isPositive ? success800 : error800 }]}>
            <Text style={styles.changeText}>{change}</Text>
          </View>
        </View>
        
        <Text style={[styles.value, { color }]}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginHorizontal: 4,
    flex: 1,
    minWidth: 150,
  },
  gradient: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  changeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  changeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
});