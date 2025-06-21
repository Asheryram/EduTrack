import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";
import { useRouter } from 'expo-router';

const ClassInfoComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.classTitle}>Class 5</Text>
        <Text style={styles.teacherName}>Sir Maxwell</Text>
      </View>

      {/* Class Info Title */}
      <Text style={styles.sectionTitle}>Class Info.</Text>

      {/* Class Information Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>School Name: </Text>
          <Text style={styles.infoValue}>Learning Field International School</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Class Teacher: </Text>
          <Text style={styles.infoValue}>Wilson Adams</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Class size: </Text>
          <Text style={styles.infoValue}>25</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Boys: </Text>
          <Text style={styles.infoValue}>19</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Girls: </Text>
          <Text style={styles.infoValue}>6</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.viewStudentsButton}>
          <Text style={styles.viewStudentsText}>View Students</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadResultsButton}>
          <Text style={styles.uploadResultsText}>Upload Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 50, // Account for status bar
    paddingBottom: 20,
  },
  classTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  teacherName: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: '#4285f4',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 6,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  infoLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    minWidth: 100,
  },
  infoValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
  },
  buttonContainer: {
    gap: 15,
  },
  viewStudentsButton: {
    backgroundColor: '#f4a5a5',
    paddingVertical: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewStudentsText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  uploadResultsButton: {
    backgroundColor: '#b8860b',
    paddingVertical: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uploadResultsText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ClassInfoComponent;