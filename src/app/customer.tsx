import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomerRow } from "@/components/customer-row";
import { SEED } from "@/data/customer";

export default function CustomersScreen() {
  const [customers, setCustomers] = useState(SEED);
  const [query, setQuery] = useState("");

  function addWalkIn() {
    const id = String(Date.now());
    const walkIn = { id, name: "Walk-in", balance: "0", lastPaid: "Never" };
    setCustomers([...customers, walkIn]);
  }

  const shown = customers.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );
  const total = customers.reduce((sum, c) => sum + parseFloat(c.balance || "0"), 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Customers</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search customers"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.search}
      />

      <Text style={styles.total}>Total owed: ₱ {total.toFixed(2)}</Text>
      <Pressable style={styles.walkInButton} onPress={addWalkIn}>
        <Text style={styles.walkInText}>ADD WALK-IN</Text>
      </Pressable>

      <FlatList
        data={shown}
        style={styles.list}
        keyExtractor={(c) => c.id}
        renderItem={({ item, index }) => (
          <CustomerRow
            id={item.id}
            name={item.name}
            lastPaid={item.lastPaid}
            balance={parseFloat(item.balance || "0")}
            defaultExpanded={index === 0}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No customers match "{query}"</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 28,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  search: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 5,
    height: 42,
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 13,
  },
  total: {
    color: "#666",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  walkInButton: {
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    marginBottom: 8,
  },
  walkInText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  list: {
    marginTop: 2,
  },
  empty: {
    marginTop: 4,
    color: "#333",
    fontSize: 12,
  },
});
