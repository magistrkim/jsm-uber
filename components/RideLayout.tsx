import { View, Text } from "react-native";
import React from "react";

const RideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text>Top of the Layout</Text>
      {children}
      <Text>Bottom of the Layout</Text>
    </View>
  );
};

export default RideLayout;
