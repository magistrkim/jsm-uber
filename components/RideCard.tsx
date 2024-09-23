import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/type";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";

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
    <View className="flex flex-row justify-center items-center rounded-lg bg-white shadow-sm shadow-primary-400 mb-3">
      <View className="flex flex-col justify-center p-3 items-center">
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
        <View className="flex flex-col bg-primary-100 w-full mt-5 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row w-full justify-between items-center mb-5">
            <Text className="text-md font-JakartaMedium text-gray-600">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-600">
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
          </View>
          <View className="flex flex-row w-full justify-between items-center mb-5">
            <Text className="text-md font-JakartaMedium text-gray-600">
              Driver
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-600">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>
          <View className="flex flex-row w-full justify-between items-center mb-5">
            <Text className="text-md font-JakartaMedium text-gray-600">
              Car seats
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-600">
              {driver.car_seats}
            </Text>
          </View>
          <View className="flex flex-row w-full justify-between items-center mb-5">
            <Text className="text-md font-JakartaMedium text-gray-600">
              Payment Status
            </Text>
            <Text
              className={`text-lg capitalize font-JakartaBold ${payment_status === "paid" ? "text-success-500" : "text-red-600"}`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
