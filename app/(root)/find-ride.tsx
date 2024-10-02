import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import { icons } from "@/constants";
import Button from "@/components/Button";
import { router } from "expo-router";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Ride" snapPoints={["80%"]}>
      <View>
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          handlePress={(location) => setUserLocation(location)}
          initialLocation={userAddress!}
          containerStyle="bg-white shadow-sm shadow-primary-400"
          textInputBackgroundColor="transparent"
        />
      </View>
      <View>
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        <GoogleTextInput
          icon={icons.map}
          handlePress={(location) => setDestinationLocation(location)}
          initialLocation={destinationAddress!}
          containerStyle="bg-white shadow-sm shadow-primary-400"
          textInputBackgroundColor="transparent"
        />
      </View>
      <Button
        className="mt-2"
        title="Find now"
        onPress={() => router.push("/(root)/confirm-ride")}
      />
    </RideLayout>
  );
};

export default FindRide;
