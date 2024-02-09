import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "context/theme-context/theme-context";
import { StatusBar } from "expo-status-bar";
import { useTodoMutation } from "mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "queries/hooks/use-todo-query/use-todo-query";
import { queryClient } from "queries/query-client/query-client";
import { Text, TouchableOpacity, View } from "react-native";
import { atoms } from "styles/atoms";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();
  const { mutate } = useTodoMutation(1, {});

  return (
    <View style={[atoms.justify_center, atoms.flex_1, atoms.flex_row]}>
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>Press to trigger todo mutation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  useReactQueryDevTools(queryClient);

  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Test />
        <View style={[atoms.flex_1, atoms.align_center, atoms.justify_center]}>
          <Text>This is the first build for FitLog app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
