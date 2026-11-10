import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const rupiah = value => `Rp${value.toLocaleString('id-ID')}`;

export default function SummaryCard({ itemCount, total, title = 'Ringkasan Belanja' }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Jumlah barang</Text>
        <Text style={styles.value}>{itemCount} item</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total pembayaran</Text>
        <Text style={styles.total}>{rupiah(total)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginTop: 8, elevation: 2 },
  title: { color: '#172033', fontSize: 15, fontWeight: '800', marginBottom: 13 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 },
  label: { color: '#718096', fontSize: 13 },
  value: { color: '#172033', fontWeight: '700' },
  line: { height: 1, backgroundColor: '#EDF0F5', marginVertical: 9 },
  totalLabel: { color: '#172033', fontWeight: '800' },
  total: { color: '#2457D6', fontWeight: '900', fontSize: 17 }
});