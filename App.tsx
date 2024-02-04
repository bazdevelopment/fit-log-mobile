import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useTodoMutation } from "mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "queries/hooks/use-todo-query/use-todo-query";
import { queryClient } from "queries/query-client/query-client";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();
  const { mutate } = useTodoMutation(1, {});

  return (
    <View style={{ alignItems: "center", justifyContent: "center", display: "flex", marginTop: 100 }}>
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>Press to trigger todo mutation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Test />
      <View style={styles.container}>
        <Text>This is the first build for FitLog app!</Text>
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
