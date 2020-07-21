import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Food from "./components/Food";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

export default function App() {
  const [fontsLoaded, useFontsLoaded] = useState(false);

  const [changed, useChanged] = useState(false);
  const [FoodList, useFoodList] = useState([
    {
      id: 0,
      name: "Soslu Çıtır Tavuk Parçaları",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      quantity: 2,
      price: 27.5,
      status: "draft",
    },
    {
      id: 1,
      name: "Soslu Çıtır Tavuk Parçaları",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      quantity: 2,
      price: 23,
      status: "sent",
    },
    {
      id: 2,
      name: "Soslu Çıtır Tavuk Parçaları",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      quantity: 2,
      price: 14.5,
      status: "preparing",
    },
    {
      id: 3,
      name: "Soslu Çıtır Tavuk Parçaları",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      quantity: 2,
      price: 18.75,
      status: "done",
    },
    {
      id: 4,
      name: "Soslu Çıtır Tavuk Parçaları",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      quantity: 2,
      price: 32.9,
      status: "cancelled",
    },
  ]);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <FlatList
          data={FoodList}
          extraData={changed}
          renderItem={({ item, index }) => (
            <Food
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              price={item.price}
              status={item.status}
              onIncrease={() => {
                let alldata = FoodList;
                ++alldata[index].quantity;
                useFoodList(alldata);
                useChanged(!changed);
              }}
              onDecrease={() => {
                let alldata = FoodList;
                --alldata[index].quantity;
                if (alldata[index].quantity == 0) {
                  alldata = alldata.filter((food) => food.id != item.id);
                }
                useFoodList(alldata);
                useChanged(!changed);
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          useFontsLoaded(true);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
