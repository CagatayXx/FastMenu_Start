import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default function ServiceInfo({ status }) {
  const styles = StyleSheet.create({
    statusStyle: {
      width:
        status == "sent"
          ? "52%"
          : status == "preparing"
          ? "56%"
          : status == "cancelled"
          ? "44%"
          : status == "done"
          ? "46%"
          : "48%",
      height: 25,
      backgroundColor:
        status == "preparing"
          ? "#ED6E2F"
          : status == "done"
          ? "#5B8C3B"
          : "#D34431",
      marginTop: 2,
      marginLeft: 2,
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 2,
      paddingRight: 2,
      borderRadius: 100,
      opacity: status == "draft" ? 0 : 1,
    },
  });

  return (
    <View
      style={[
        styles.statusStyle,
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
        <ActivityIndicator style={{ marginLeft: -8, marginRight: 10 }} />
      ) : null}
      <Text
        style={{
          color: "rgba(245,245,245,0.8)",
          textAlign: "center",
          fontSize: 13,
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
