import { View, Text, Image } from "react-native";
import React from "react";
import { GoogleInputProps } from "@/types/type";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
  initialLocation,
  textInputBackgroundColor,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row justify-center items-center relative z-50 rounded-md ${containerStyle} mb-5 p-2 px-4`}
    >
      <Image source={icon} className="w-6 h-6" />
      <Text>SEARCH</Text>
    </View>
  );
};

export default GoogleTextInput;
