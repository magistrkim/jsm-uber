import { View, Text, FlatList } from "react-native";
import React from "react";
import { useDriverStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import Button from "@/components/Button";
import { router } from "expo-router";
import DriverCard from "@/components/DriverCard";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item.id)}
            item={item}
          />
        )}
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
