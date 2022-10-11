import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function VioletButton(props) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#570E7E", "#AA7BC3"]}
        className="h-10 rounded-xl"
      >
        <View>
          <Text className="text-[#f1f1f1] text-xs text-center p-3 font-extrabold">
            {" "}
            {props.title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
