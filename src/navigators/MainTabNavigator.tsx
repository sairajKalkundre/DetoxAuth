import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/listenNow';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import PodcastDetailScreen from '../components/podcastDetails/PodcastDetailScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MainTab = createBottomTabNavigator();

const ListenNowStack = createNativeStackNavigator();
const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        name="ListenNow"
        component={ListenNowScreen}
        options={{title: 'Listen Now'}}
      />
    </ListenNowStack.Navigator>
  );
};

const SearchStack = createNativeStackNavigator();
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchStack"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailScreen}
        options={{title: ''}}
      />
    </SearchStack.Navigator>
  );
};

const LibraryStack = createNativeStackNavigator();
const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryStack"
        component={LibraryScreen}
        options={{title: 'Library'}}
      />
    </LibraryStack.Navigator>
  );
};

const ICON_SIZE = 24;
const MainTabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        name="Listen"
        component={ListenNowStackNavigator}
        options={{
          title: 'Listen Now',
          tabBarIcon: props => (
            <FeatherIcon
              color={props.color}
              size={ICON_SIZE}
              name="headphones"
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: props => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="inbox" />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: props => (
            <FeatherIcon size={ICON_SIZE} name="search" color={props.color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
