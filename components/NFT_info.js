import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";

export const NFTtitle = () => {
  return (
    <View>
      <Text>NFTtitle</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

export const ImgCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 45,
        height: 45,
        marginLeft: index == 0 ? 0 : -8,
        borderRadius: 45 / 2,
        borderWidth: 2,
        borderColor: "#FFF",
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.user_1, assets.user_2, assets.user_3].map((imgUrl, index) => (
        <ImgCmp imgUrl={imgUrl} index={index} key={`User-${index}`} />
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View>
      <Text>EndDate</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles.container}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
