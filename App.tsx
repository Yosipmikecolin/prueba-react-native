import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./views/Home/Home";
import { MaterialIcons } from "@expo/vector-icons";
import DetailsScreen from "./views/Details/Details";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="users">
        <Stack.Screen
          name="users"
          component={HomeScreen}
          options={{
            title: "Lista de usuarios",
            headerLeft: () => (
              <MaterialIcons
                name="person"
                size={24}
                color="orange"
                style={{ marginLeft: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen name="details" options={{title:"Detalles de usuario"}} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
