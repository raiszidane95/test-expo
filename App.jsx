import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                width: 75,
                height: 75,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Logo</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 30, fontWeight: "900", color: "white" }}>
                UHC
              </Text>
              <Text style={{ fontSize: 24, fontWeight: "700", color: "white" }}>
                Urip Health Care
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
              Login
            </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flex: 1,
    backgroundColor: "#0B1D51",
    width: "100%",
  },
});
