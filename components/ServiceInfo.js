import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default function ServiceInfo({ status }) {
  return (
    <View
      style={[
        styles.statusStyle,
        {
          backgroundColor:
            status == "preparing"
              ? "#ED6E2F"
              : status == "done"
              ? "#5B8C3B"
              : "#D34431",
        },
        status == "preparing"
          ? {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }
          : {},
      ]}
    >
      {status == "preparing" ? (
        <ActivityIndicator
          color="white"
          style={{ marginLeft: -8, marginRight: 10 }}
        />
      ) : null}
      <Text
        style={{
          color: "rgba(245,245,245,0.8)",
          textAlign: "center",
          fontSize: 14,
          marginTop: 1,
          fontFamily: "poppins-regular",
        }}
      >
        {status == "sent"
          ? "Garsona İletildi"
          : status == "preparing"
          ? "Hazırlanıyor"
          : status == "done"
          ? "Servis Edildi"
          : status == "cancelled"
          ? "İptal Edildi"
          : " "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusStyle: {
    height: 28,
    marginTop: 2,
    marginLeft: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 10,
    borderRadius: 100,
    alignSelf: "flex-start",
  },
});
