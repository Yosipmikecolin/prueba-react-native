import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../../interfaces/user";
import { RootStackParamList } from "../../views/Details/Details";

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "details"
>;

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate("details", { user });
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
