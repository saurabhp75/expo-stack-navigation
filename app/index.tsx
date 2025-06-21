import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" style={{ padding: 10 }}>
        <Text
          style={{
            color: "#007AFF",
            fontSize: 16,
            textDecorationLine: "underline",
          }}
        >
          About
        </Text>
      </Link>
    </View>
  );
}
