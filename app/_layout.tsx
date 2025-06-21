import { Stack } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface LogoTitleProps {
  children?: string;
  title?: string;
}

function LogoTitle({ children, title }: LogoTitleProps) {
  const displayTitle = title || children || "";

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 30, height: 30 }}
      />
      {displayTitle && (
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {displayTitle}
        </Text>
      )}
    </View>
  );
}

export default function RootLayout() {
  // (optional) define each screen's options here
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Pressable
              onPress={() => alert("This is a button!")}
              style={{ padding: 10 }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Info</Text>
            </Pressable>
          ),
          headerTitle: (props) => <LogoTitle />,
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack>
  );
}
