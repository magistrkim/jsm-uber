import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants";
import Button from "@/components/Button";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      >
        <Text className="text-md text-[#E53E3E]  font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="h-[4px] w-[32px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="h-[4px] w-[32px] mx-1 bg-[#E53E3E] rounded-ful" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="h-[340px] w-full"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-5">
              <Text className="text-black text-3xl font-bold text-center mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center mx-10 mt-3 mb-28 text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <Button
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-20 mb-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
