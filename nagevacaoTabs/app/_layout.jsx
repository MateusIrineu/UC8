import { Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />

        <Stack.Screen
          name="+not-found"
          options={{ headerTitle: "Erro" }}
        />
      </Stack>
    </>
  );
}
