import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Chrome as Home, ChartBar as BarChart3, Users, Settings, LogOut, Menu } from 'lucide-react-native';
import { useState } from 'react';
import React from 'react';
import { logo } from '@/utils/images';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

export default function Sidebar() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(!isTablet);

  const menuItems = [
    { icon: Home, label: 'Dashboard', route: '/(home)/dashboard', active: true },
    { icon: BarChart3, label: 'Analytics', route: '/analytics' },
    { icon: Users, label: 'Users', route: '/users' },
    { icon: Settings, label: 'Settings', route: '/settings' },
  ];

  const handleLogout = () => {
    router.replace('/login');
  };

  const sidebarWidth = isCollapsed ? 70 : 250;

  return (
    <LinearGradient
      colors={['#15181dff', '#29313dff']}
      style={[styles.container, { width: sidebarWidth }]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu color="#FFFFFF" size={24} />
        </TouchableOpacity>
        {!isCollapsed && (
          <View style={styles.headerContent}>
             <Image style={styles.logo} source={logo}  />
            <Text style={styles.brandName}>DashBoard</Text>
          </View>
        )}
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              item.active && styles.activeMenuItem,
              isCollapsed && styles.collapsedMenuItem,
            ]}
            onPress={() => router.push(item.route)}
          >
            <item.icon 
              color={item.active ? '#667eea' : '#9CA3AF'} 
              size={24} 
            />
            {!isCollapsed && (
              <Text
                style={[
                  styles.menuText,
                  item.active && styles.activeMenuText,
                ]}
              >
                {item.label}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.menuItem, isCollapsed && styles.collapsedMenuItem]}
          onPress={handleLogout}
        >
          <LogOut color="#EF4444" size={24} />
          {!isCollapsed && (
            <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    alignItems: 'center',
  },
  menuButton: {
    alignSelf: 'flex-start',
    padding: 8,
    marginBottom: 10,
  },
  headerContent: {
    alignItems: 'center',
  },
  logo: {
    height:80,
    width: 80,
    borderRadius: 16,
    marginBottom: 8,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  collapsedMenuItem: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  activeMenuItem: {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
  },
  menuText: {
    color: '#9CA3AF',
    fontSize: 16,
    marginLeft: 12,
    fontWeight: '500',
  },
  activeMenuText: {
    color: '#667eea',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  logoutText: {
    color: '#EF4444',
  },
});