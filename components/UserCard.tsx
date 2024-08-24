import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

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
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture.medium }} style={styles.userImage} />
      <Text style={styles.userName}>
        {user.name.first} {user.name.last}
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ver detalle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: 280,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#7C00FE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserCard;
