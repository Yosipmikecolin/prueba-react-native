import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
const icon = require("../assets/icon.png");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>Usuarios</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "#f8f8f8",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
