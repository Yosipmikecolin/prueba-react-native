import React from "react";
import { View, Text, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from "./Styles";
import { User } from "../../interfaces/user";

export type RootStackParamList = {
  details: { user: User };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "details">;

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

export default DetailsScreen;
