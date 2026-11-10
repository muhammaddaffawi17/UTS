import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ProductArtwork from './ProductArtwork';

const rupiah = value => `Rp${Number(value).toLocaleString('id-ID')}`;

export default function ProductCard({ product, onAdd }) {
  return (
    <View style={styles.card}>
      <ProductArtwork type={product.image} size={68} />
      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{rupiah(product.price)}</Text>
        <Text style={styles.stock}>Stok tersedia: {product.stock}</Text>
      </View>
      <Pressable style={styles.button} onPress={() => onAdd(product)}>
        <Text style={styles.buttonText}>+ Tambah</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2
  },
  info: { flex: 1 },
  category: {
    color: '#718096',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  name: {
    color: '#172033',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 3
  },
  price: {
    color: '#2457D6',
    fontWeight: '800',
    marginTop: 4
  },
  stock: {
    color: '#8A94A6',
    fontSize: 11,
    marginTop: 2
  },
  button: {
    backgroundColor: '#2457D6',
    paddingHorizontal: 11,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800'
  }
});
