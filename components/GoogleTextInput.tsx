import { View, Text } from "react-native";
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
      className={`flex flex-row justify-center items-center relative z-50 rounded-md ${containerStyle} mb-5 p-2`}
    >
      <Text>SEARCH</Text>
    </View>
  );
};

export default GoogleTextInput;
