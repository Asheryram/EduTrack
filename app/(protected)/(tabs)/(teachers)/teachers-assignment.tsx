import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";



const AssignmentComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Assignment</Text>
        <Text style={styles.subtitle}>Osei Koomson Ajei</Text>
      </View>

      {/* Main Content Area with Purple Background */}
      <View style={styles.mainContent}>
        <View style={styles.purpleSection}>
          <Text style={styles.noAssignmentsText}>NO ASSIGNMENTS AVAILABLE</Text>
        </View>
      </View>

      {/* Status Section */}
      <View style={styles.statusSection}>
        <Text style={styles.statusLabel}>Status</Text>
        <Text style={styles.statusValue}>No assignments</Text>
      </View>

      {/* Weekly Comment Button */}
      <TouchableOpacity style={styles.weeklyCommentButton}>
        <Text style={styles.weeklyCommentText}>Weekly Comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50, // Account for status bar
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f5f5f5',
  },
  purpleSection: {
    backgroundColor: '#d4a5d4',
    height: 300,
    marginHorizontal: 0,
    marginTop: 20,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    transform: [{ rotate: '-10deg' }],
    marginLeft: -50,
  },
  noAssignmentsText: {
    color: '#8b5a8b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ rotate: '10deg' }],
  },
  statusSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statusLabel: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 5,
    textAlign: 'center',
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  weeklyCommentButton: {
    backgroundColor: '#6b5ce7',
    marginHorizontal: 20,
    marginBottom: 40,
    paddingVertical: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 6,
  },
  weeklyCommentText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AssignmentComponent;