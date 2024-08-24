import { Image, View, Text } from "react-native";
import { styles } from "./Styles";
const icon = require("../../assets/icon.png");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>Usuarios</Text>
    </View>
  );
};

export default Header;
