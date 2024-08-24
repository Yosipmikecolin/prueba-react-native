import { useState, useEffect } from "react";
import { UserCard, Header } from "../../components";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View, FlatList } from "react-native";
import { styles } from "./Styles";
import { User } from "../../interfaces/user";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (response.ok) {
        const data = await response.json();
        setUsers(data.results);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (error) return <Text style={{ color: "red" }}>Error: {error}</Text>;
  if (loading) return <ActivityIndicator size="large" color="orange" />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <FlatList
        data={users}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
