import { View, Text } from "react-native";
import React from "react";
import { Ride } from "@/types/type";

const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    driver,
    created_at,
    destination_address,
    origin_address,
    payment_status,
    ride_time,
  },
}: {
  ride: Ride,
}) => {
  return (
    <View>
      <Text className="text-xl">{destination_address}</Text>
      <Text className="text-2xl text-primary-800">{driver.first_name}</Text>
    </View>
  );
};

export default RideCard;
