import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type HeaderWithMenuProps = {
  menuComponents?: React.ReactNode[];
};

const { width } = Dimensions.get('window');
const MENU_WIDTH = width * 0.3; // Wider for better appearance




type MenuItemProps = {
  title: string;
  onPress?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress }) => (
  <TouchableOpacity className="py-3  " onPress={onPress}>
    <Text className="text-base">{title}</Text>
  </TouchableOpacity>
);

const menuComponents = [
  <MenuItem key="home" title="Home" />,
  <MenuItem key="profile" title="Profile" />,
  <MenuItem key="settings" title="Settings" />,
];


const HeaderWithMenu: React.FC<HeaderWithMenuProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const toggleMenu = (): void => {
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -MENU_WIDTH : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <GestureHandlerRootView style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {/* Header */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: 'transparent' }}>
        <View className="flex-row justify-between items-center px-4 py-3  border-b border-gray-100">
          <TouchableOpacity onPress={toggleMenu} className="p-2">
            <Feather name={isMenuOpen ? 'x' : 'menu'} size={24} color="black" />
          </TouchableOpacity>
          
          <View className="flex-row items-center">
            <TouchableOpacity className="p-2 mr-2">
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Floating Menu */}
      <Animated.View 
        className="absolute left-0 top-0 bottom-0 z-40"
        style={{
          transform: [{ translateX: slideAnim }],
          width: MENU_WIDTH,
          shadowColor: '#000',
          shadowOffset: { width: 5, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 20,
         
        }}
      >
        <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
          <View className="flex-1 bg-white rounded-r-full overflow-hidden">
            {/* Menu Header */}
            <View className="flex-row justify-end px-4 pt-4 pb-2">
              <TouchableOpacity 
                onPress={toggleMenu} 
                className="p-2 bg-gray-100 rounded-full"
              >
                <Feather name="x" size={20} color="black" />
              </TouchableOpacity>
            </View>
            
            {/* Menu Content */}
            <View className="px-4 py-2">
              {menuComponents.length > 0 ? (
                menuComponents.map((component, index) => (
                  <React.Fragment key={`menu-item-${index}`}>
                    {component}
                  </React.Fragment>
                ))
              ) : (
                <View className="py-3">
                  <Text className="text-base text-gray-500">Menu Items</Text>
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>

      {/* Semi-transparent Overlay */}
      {isMenuOpen && (
        <Animated.View 
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-30"
          style={{
            opacity: slideAnim.interpolate({
              inputRange: [-MENU_WIDTH, 0],
              outputRange: [0, 1],
            }),
          }}
        >
          <TouchableOpacity 
            className="flex-1" 
            onPress={toggleMenu}
            activeOpacity={1}
          />
        </Animated.View>
      )}
    </GestureHandlerRootView>
  );
};

export default HeaderWithMenu;