import { View, Text, TouchableOpacity, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useRef } from "react";
import { router } from "expo-router";
import { icons } from "@/constants";
import Map from "./Map";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const RideLayout = ({
  title,
  children,
  snapPoints,
}: {
  title: string,
  children: React.ReactNode,
  snapPoints?: string[],
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col bg-blue-500 h-screen">
          <View className="flex flex-row absolute z-10 top-16 px-5 justify-start items-center">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full justify-center items-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="font-JakartaSemiBold text-xl ml-5">
              {title || "Go back"}
            </Text>
          </View>
          <Map />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["45%", "85%"]}
          index={0}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
