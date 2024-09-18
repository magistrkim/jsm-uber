import { View, Text, Image } from "react-native";
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
    <View className="flex flex-row justify-center items-center rounded-lg bg-white shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-row justify-between p-3 items-center">
        <View className="flex flex-row justify-between items-center">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:
              ${destination_longitude}, ${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
          />
        </View>
      </View>
      <Text className="text-xl">{destination_address}</Text>
      <Text className="text-2xl text-primary-800">{driver.first_name}</Text>
    </View>
  );
};

export default RideCard;
