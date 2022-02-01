import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const seed = [
  { id: '1', name: 'Read 20 pages', days: 12 },
  { id: '2', name: 'Morning walk', days: 8 },
  { id: '3', name: 'Ship one commit', days: 21 },
];

export default function App() {
  const [habits, setHabits] = useState(seed);
  const check = (id) => setHabits((hs) =>
    hs.map((h) => (h.id === id ? { ...h, days: h.days + 1 } : h)));
  return (
    <View style={s.container}>
      <Text style={s.title}>habit tracker</Text>
      <FlatList
        data={habits}
        keyExtractor={(h) => h.id}
        renderItem={({ item }) => (
          <View style={s.row}>
            <View>
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.streak}>{item.days} day streak</Text>
            </View>
            <TouchableOpacity style={s.check} onPress={() => check(item.id)}>
              <Text style={s.checkText}>+1</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontSize: 16, fontWeight: '600' },
  streak: { color: '#888', marginTop: 2 },
  check: { backgroundColor: '#0a7c48', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8 },
  checkText: { color: '#fff', fontWeight: '700' },
});
