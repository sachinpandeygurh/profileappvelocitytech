import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './layout/Header';
import Filter from './component/Filter';
import { UserList, Slider } from './component/UserList';
import workerData from "./data/workers.json";
import categoryData from "./data/categories.json";


const Tab = createBottomTabNavigator();
const CategoriesTab = createBottomTabNavigator();

function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
    </View>
  );
}


function ChatScreen() {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState(null);

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const handleFilterOption = (option) => {
    setFilterOption(option);
  };

  const filteredData = workerData.filter(worker => {
    return (
      (!filterOption || worker.category === filterOption) &&
      worker.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <Slider categoryData={categoryData} />
      <Filter onSearch={handleSearchText} onFilter={handleFilterOption} />
      <UserList searchText={searchText} workerData={filteredData} />
    </SafeAreaView>
  );
}

function CallScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Call</Text>
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scan</Text>
    </View>
  );
}

function WishlistScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wishlist</Text>
    </View>
  );
}

function VIPScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>VIP</Text>
    </View>
  );
}


function CategoriesScreen() {
  return (
    <CategoriesTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Chat') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'Call') {
            iconName = 'call-outline';
          } else if (route.name === 'Scan') {
            iconName = 'qr-code-outline';
          } else if (route.name === 'Wishlist') {
            iconName = 'heart-circle-outline';
          } else if (route.name === 'VIP') {
            iconName = 'star-half-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <CategoriesTab.Screen name="Chat" component={ChatScreen} />
      <CategoriesTab.Screen name="Call" component={CallScreen} />
      <CategoriesTab.Screen name="Scan" component={ScanScreen} />
      <CategoriesTab.Screen name="Wishlist" component={WishlistScreen} />
      <CategoriesTab.Screen name="VIP" component={VIPScreen} />
    </CategoriesTab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Welcome') {
              iconName = 'home-outline';
            } else if (route.name === 'Categories') {
              iconName = 'apps-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
