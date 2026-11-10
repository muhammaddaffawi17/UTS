import React, { useEffect } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation, products, cartCount, onAddToCart }) {
  useEffect(() => {
    navigation.setOptions({ title: cartCount > 0 ? `KasirMart • ${cartCount}` : 'KasirMart' });
  }, [navigation, cartCount]);
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>BELANJA MUDAH DAN PRAKTIS</Text>
        <Text style={styles.heading}>Semua kebutuhan,{"\n"}dalam satu keranjang.</Text>
        <Text style={styles.description}>Pilih produk favoritmu dan selesaikan pembayaran dengan mudah.</Text>
      </View>
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Daftar Produk</Text>
        <Text style={styles.productCount}>{products.length} produk</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard product={item} onAdd={onAddToCart} />}
        contentContainerStyle={{ paddingBottom: 18 }}
        showsVerticalScrollIndicator={false}
      />
      <Pressable style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButtonText}>Lihat Keranjang  •  {cartCount} item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  hero: { backgroundColor: '#2457D6', borderRadius: 20, padding: 20, marginBottom: 18 },
  eyebrow: { color: '#DCE6FF', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  heading: { color: '#FFF', fontSize: 24, lineHeight: 30, fontWeight: '900', marginTop: 9 },
  description: { color: '#E5ECFF', fontSize: 12, lineHeight: 18, marginTop: 8 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { color: '#172033', fontSize: 17, fontWeight: '900' },
  productCount: { color: '#718096', fontSize: 12 },
  cartButton: { backgroundColor: '#172033', borderRadius: 13, padding: 15, alignItems: 'center', marginTop: 8 },
  cartButtonText: { color: '#FFF', fontWeight: '800' }
});