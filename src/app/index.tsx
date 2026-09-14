import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ThemedView style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <SafeAreaView style={[styles.safeArea, { backgroundColor: "#ffffff" }]}>
        <ThemedView
          style={[styles.heroSection, { backgroundColor: "#ffffff" }]}
        >
          <ThemedText type="title" style={[styles.title, { color: "#000000" }]}>
            Flood Control Money
          </ThemedText>
        </ThemedView>
        <ThemedText type="code" style={[styles.code, { color: "#000000" }]}>
          mga ninakaw
        </ThemedText>{" "}
        <ThemedView
          type="backgroundElement"
          style={[styles.stepContainer, { backgroundColor: "#ffffff" }]}
        ></ThemedView>
        <ThemedText type="code" style={[styles.code, { color: "#000000" }]}>
          total magnanakaw
        </ThemedText>
        <ThemedView
          type="backgroundElement"
          style={[styles.stepContainer, { backgroundColor: "#ffffff" }]}
        ></ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
