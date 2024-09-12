import { View, Text, Image } from "react-native";
import React from "react";
import Button from "./Button";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignUp = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <Button
        title="Log In with Google"
        className="mt-4 shadow-none w-full"
        IconLeft={() => (
          <Image
            source={icons.google}
            className="w-5 h-5 mx-2"
            resizeMode="contain"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignUp}
      />
    </View>
  );
};

export default OAuth;
