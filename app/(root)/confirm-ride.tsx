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
      />
      <Button
        className="mt-2"
        title="Book Ride"
        onPress={() => router.push("/(root)/book-ride")}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
