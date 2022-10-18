import { View, Text } from "react-native";
import React from "react";
import VioletButton from "../Profile/VioletButton";

export default function Modal(props) {
  return (
    <View className="bg-[#D2A8E8] w-[305px] m-auto p-10 shadow-2xl shadow-[#724BB6]">
      <Text className="text-lg font-extrabold color-[#570E7E] text-center leading-[22px]">
        {props.title}
      </Text>
      <Text
        className="text-[15px] font-semibold text-center color-[#FCFCFC] mt-4 leading-[18px] mb-6
]"
      >
        {props.message}
      </Text>
      <VioletButton title="Aceptar" />
    </View>
  );
}
