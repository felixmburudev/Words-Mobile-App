import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Divider } from 'react-native-paper';

const SideMenu = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar.Icon size={80} icon="account-circle" />
          <Text style={styles.profileText}>Your Name</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Bookmark')}>
          <Text>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Account')}>
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileText: {
    marginTop: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  navItem: {
    padding: 10,
  },
});

export default SideMenu;
