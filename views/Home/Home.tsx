import { useState, useEffect } from "react";
import { UserCard } from "../../components";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View, FlatList } from "react-native";
import { styles } from "./Styles";
import { User } from "../../interfaces/user";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const getUsers = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://randomuser.me/api/?results=5&page=${pageNumber}`
      );
      if (response.ok) {
        const data = await response.json();
        if (pageNumber === 1) {
          setUsers(data.results);
        } else {
          setUsers((prevUsers) => [...prevUsers, ...data.results]);
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (error) return <Text style={{ color: "red" }}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="orange" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({ item }) => <UserCard user={item} />}
          contentContainerStyle={styles.list}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator size="large" color="orange" />
            ) : null
          }
        />
      )}
    </View>
  );
}
