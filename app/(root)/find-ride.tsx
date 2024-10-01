import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();
  return (
    <SafeAreaView>
      <RideLayout>
        <Text className="text-2xl">Find Ride: {userAddress}</Text>
      </RideLayout>
    </SafeAreaView>
  );
};

export default FindRide;
