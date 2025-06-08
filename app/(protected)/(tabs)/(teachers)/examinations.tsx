import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";



const ExaminationsComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Examinations</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.mainContent}>
        {/* Purple Curved Section */}
        <View style={styles.purpleSection}>
          <View style={styles.contentArea}>
            <Text style={styles.uploadText}>
              Upload <Text style={styles.questionsText}>Questions</Text> for review
            </Text>
            
            {/* Upload Question Button */}
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload Question</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pink Curved Section at Bottom */}
        <View style={styles.pinkSection} />
      </View>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  mainContent: {
    flex: 1,
    position: 'relative',
  },
  purpleSection: {
    backgroundColor: '#d4a5d4',
    height: 280,
    borderTopRightRadius: 140,
    borderBottomRightRadius: 140,
    marginLeft: -20,
    paddingLeft: 40,
    paddingRight: 20,
    justifyContent: 'center',
    transform: [{ rotate: '-8deg' }],
    marginTop: 20,
  },
  contentArea: {
    transform: [{ rotate: '8deg' }],
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  uploadText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'left',
  },
  questionsText: {
    color: '#8b5a8b',
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#4285f4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uploadButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  pinkSection: {
    position: 'absolute',
    bottom: 0,
    right: -50,
    backgroundColor: '#f4a5a5',
    width: 300,
    height: 200,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    transform: [{ rotate: '15deg' }],
  },
});

export default ExaminationsComponent;