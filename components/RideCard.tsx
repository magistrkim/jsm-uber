import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/type";
import { icons } from "@/constants";

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
  ride: Ride;
}) => {
  return (
    <View className="flex flex-row justify-center items-center rounded-lg bg-white shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-row justify-between p-3 items-center">
        <View className="flex flex-row justify-between items-center">
          <Image
            className="w-[80px] h-[90px] rounded-lg"
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
          />
          <View className="flex flex-1 flex-col mx-5 gap-y-5">
            <View className="flex flex-row gap-x-2 items-center">
              <Image source={icons.to} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {origin_address}
              </Text>
            </View>
            <View className="flex flex-row gap-x-2 items-center">
              <Image source={icons.point} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {destination_address}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col bg-general-500 w-full mt-5 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row w-full justify-between items-center mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-500">
              {formatDate(created_at)}, {formatDate(ride_time)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
