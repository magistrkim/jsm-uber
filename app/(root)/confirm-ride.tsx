import { View, Text, FlatList } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import { drivers, icons } from "@/constants";
import Button from "@/components/Button";
import { router } from "expo-router";

const ConfirmRide = () => {
  const { destinationAddress, setDestinationLocation } = useLocationStore();
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => <Text>DriverCard</Text>}
      />
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
        title="Book Ride"
        onPress={() => router.push("/(root)/book-ride")}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
