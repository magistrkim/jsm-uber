import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

const TabIcon = ({ focused }) => {
  return (
    <View className="">
      <View>
        <Image />
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{ tabBarActiveTintColor: "green" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
