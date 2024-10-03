import { View, Text, FlatList } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import { drivers, icons } from "@/constants";
import Button from "@/components/Button";
import { router } from "expo-router";
import DriverCard from "@/components/DriverCard";

const ConfirmRide = () => {
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => <DriverCard item={item} />}
        ListFooterComponent={() => (
          <View className="mx-5 mt-8">
            <Button
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
