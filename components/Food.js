import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ServiceInfo from "./ServiceInfo";

export default function Food({
  index,
  name,
  image,
  quantity,
  price,
  status,
  onIncrease,
  onDecrease,
  setter,
}) {
  return (
    <View style={styles.foodView}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.foodImage}
      />
      <View style={styles.foodBody}>
        <Text style={styles.name}>{name}</Text>

        <ServiceInfo status={status} />

        <View style={styles.ordering}>
          <View>
            {status != "draft" && status != "sent" ? (
              <Text
                style={{
                  fontSize: 16.5,
                  color: "#878787",
                  fontFamily: "poppins-regular",

                  marginTop: -2,
                }}
              >
                {quantity} adet
              </Text>
            ) : (
              <View style={styles.quantityComponent}>
                <Ionicons
                  onPress={() => onDecrease()}
                  name="ios-remove"
                  size={26}
                  color="#878787"
                />

                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 9,
                    marginRight: 9,
                    color: "#878787",
                    fontFamily: "poppins-regular",
                  }}
                >
                  {quantity}
                </Text>

                <Ionicons
                  onPress={() => onIncrease()}
                  name="ios-add"
                  size={26}
                  color="#878787"
                />
              </View>
            )}
          </View>

          <Text style={styles.price}>{price}₺</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  foodView: {
    flex: 1,
    flexDirection: "row",
    width: "92%",
    height: 104,
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    paddingLeft: 0,
  },
  foodImage: {
    width: "25%",
    height: "100%",
  },
  foodBody: {
    width: "70%",
    paddingLeft: 7,
    paddingTop: 4,
  },
  name: {
    fontSize: 17,
    fontFamily: "poppins-regular",
  },
  ordering: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom: -9,
  },
  quantityComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: -14,
  },
  price: {
    fontSize: 18,
    fontFamily: "poppins-medium",
  },
});
