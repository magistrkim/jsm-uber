import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[300px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[300px]" />
          <Text className="text-2xl text-primary-500 font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View>
          <></>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
