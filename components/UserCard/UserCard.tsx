import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";

interface UserCardProps {
  user: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      medium: string;
    };
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    //@ts-ignore
    navigation.navigate("Details", { user });
  };
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture.medium }} style={styles.userImage} />
      <Text style={styles.userName}>
        {user.name.first} {user.name.last}
      </Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver detalle</Text>
      </Pressable>
    </View>
  );
};

export default UserCard;
