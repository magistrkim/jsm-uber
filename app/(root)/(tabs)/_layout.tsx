import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-primary-500" : ""}`}
    >
      <View
        className={`rounded-full h-12 w-12 justify-center items-center ${focused ? "bg-primary-500" : ""}`}
      >
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="h-7 w-7"
        />
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "#0286FF",
        tabBarInactiveTintColor: "#CBD5E1",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 30,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
        },
      }}
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
