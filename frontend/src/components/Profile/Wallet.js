import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import WalletIcon from "../../assets/Wallet/wallet-icon.png";
import VioletButton from "./VioletButton";
import WhiteButton from "./WhiteButton";

const Wallet = () => {
  return (
    <View className="">
      <View className="justify-center flex-row items-center">
        <Image source={WalletIcon}></Image>
        <Text className="text-xl font-bold ml-2">TU BILLETERA</Text>
      </View>
      <View className="flex-row justify-around my-4">
        <Text className="text-center ">
          Balance:{" "}
          <Text className="font-extrabold text-xl text-[#531CB3]">$1000</Text>
        </Text>
        <TouchableOpacity>
          <Text className="text-xs underline color-[#570E7E] w-[60%] text-center m-auto">
            HISTORIAL DE TRANSACCIONES
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-around">
        <WhiteButton title="RETIRAR DINERO" />
        <VioletButton title="INGRESAR DINERO" />
      </View>
    </View>
  );
};

export default Wallet;