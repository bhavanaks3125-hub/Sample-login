import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  type: 'user' | 'order' | 'payment';
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return 'user';
      case 'order': return 'user';
      case 'payment': return 'user';
      default: return 'edit';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user': return '#3B82F6';
      case 'order': return '#F59E0B';
      case 'payment': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      
      {activities.map((activity) => (
        <View key={activity.id} style={styles.activityItem}>
          <View style={[styles.iconContainer, { backgroundColor: getActivityColor(activity.type) + '15' }]}>
             <Icon name={getActivityIcon(activity.type)} size={18} color={getActivityColor(activity.type)}/>
          </View>
          
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>
              <Text style={styles.userName}>{activity.user}</Text>
              <Text> {activity.action}</Text>
            </Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 2,
  },
  userName: {
    fontWeight: 'bold',
    color: '#1F2937',
  },
  activityTime: {
    fontSize: 12,
    color: '#6B7280',
  },
});