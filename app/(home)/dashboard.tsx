import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import StatsCard from '@/components/StatsCard';
import ChartCard from '@/components/ChartCard';
import RecentActivity from '@/components/RecentActivity';
import { fetchDashboardData } from '@/services/api';
import React from 'react';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

export default function DashboardScreen() {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadDashboardData = async () => {
    try {
      const data = await fetchDashboardData();
      setDashboardData(data);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDashboardData();
    setRefreshing(false);
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading Dashboard...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2125c4', '#4d4fc7ff']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.headerSubtitle}>Welcome back! Here's your overview</Text>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Stats Cards */}
        <View style={[styles.row, isTablet && styles.tabletRow]} className='row-span-2'>
          <StatsCard
            title="Total Users"
            value={dashboardData?.stats?.users || '0'}
            icon="user"
            color="#3B82F6"
            change="+12%"
          />
          <StatsCard
            title="Revenue"
            value={dashboardData?.stats?.revenue || '$0'}
            icon="dollar"
            color="#10B981"
            change="+8.5%"
          />
          <StatsCard
            title="Orders"
            value={dashboardData?.stats?.orders || '0'}
            icon="home"
            color="#F59E0B"
            change="+15.3%"
          />
          <StatsCard
            title="Conversion"
            value={dashboardData?.stats?.conversion || '0%'}
            icon="users"
            color="#EF4444"
            change="-2.1%"
          />
        </View>

        {/* Recent Activity */}
        <RecentActivity activities={dashboardData?.activities || []} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
  },
  header: {
    padding: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8E8E8',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  row: {
    marginBottom: 16,
  },
  tabletRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});