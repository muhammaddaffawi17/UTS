import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ProductArtwork from './ProductArtwork';

const rupiah = value => `Rp${Number(value).toLocaleString('id-ID')}`;

export default function CartItem({ item, onChangeQuantity, onRemove }) {
  return (
    <View style={styles.card}>
      <ProductArtwork type={item.image} size={58} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{rupiah(item.price)} / item</Text>
        <Text style={styles.subtotal}>
          Subtotal: {rupiah(item.price * item.quantity)}
        </Text>
        <View style={styles.actions}>
          <Pressable style={styles.qtyButton} onPress={() => onChangeQuantity(item.id, -1)}>
            <Text style={styles.qtyText}>−</Text>
          </Pressable>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Pressable style={styles.qtyButton} onPress={() => onChangeQuantity(item.id, 1)}>
            <Text style={styles.qtyText}>+</Text>
          </Pressable>
          <Pressable onPress={() => onRemove(item.id)}>
            <Text style={styles.remove}>Hapus</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 14,
    marginBottom: 11,
    alignItems: 'center'
  },
  info: { flex: 1 },
  name: { color: '#172033', fontWeight: '800', fontSize: 14 },
  price: { color: '#718096', fontSize: 12, marginTop: 4 },
  subtotal: { color: '#2457D6', fontWeight: '800', fontSize: 12, marginTop: 3 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 10 },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#EEF3FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qtyText: { color: '#2457D6', fontSize: 18, fontWeight: '800' },
  quantity: { color: '#172033', fontWeight: '800' },
  remove: { color: '#D64545', fontSize: 12, fontWeight: '700', marginLeft: 8 }
});
