import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { User } from "../interfaces/user";

export type RootStackParamList = {
  Home: undefined;
  Details: { user: User };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <Text style={styles.name}>
        {user.name.first} {user.name.last}
      </Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Text style={styles.phone}>Telefono: {user.phone}</Text>
      <Text style={styles.address}>
        Direccion: {user.location.city} - {user.location.country} -{" "}
        {user.location.postcode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    marginTop: 10,
    color: "gray",
  },
  phone: {
    fontSize: 18,
    marginTop: 10,
    color: "gray",
  },
  address: {
    fontSize: 18,
    marginTop: 10,
    color: "gray",
  },
});

export default DetailsScreen;
