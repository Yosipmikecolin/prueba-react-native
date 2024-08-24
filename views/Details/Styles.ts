import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    textAlign:"center"
  },
});
