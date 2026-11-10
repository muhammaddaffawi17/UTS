import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import CartItem from '../components/CartItem';
import SummaryCard from '../components/SummaryCard';

export default function CartScreen({ navigation, cart, total, onChangeQuantity, onRemove }) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyTitle}>Keranjang masih kosong</Text>
          <Text style={styles.emptyText}>Silakan pilih produk terlebih dahulu.</Text>
          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.primaryText}>Mulai Belanja</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CartItem item={item} onChangeQuantity={onChangeQuantity} onRemove={onRemove} />
            )}
            ListFooterComponent={<SummaryCard itemCount={itemCount} total={total} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.primaryText}>Lanjut ke Pembayaran</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyEmoji: { fontSize: 55, marginBottom: 12 },
  emptyTitle: { color: '#172033', fontWeight: '900', fontSize: 18 },
  emptyText: { color: '#718096', marginTop: 6, marginBottom: 18 },
  primaryButton: { backgroundColor: '#2457D6', padding: 15, borderRadius: 13, alignItems: 'center', marginTop: 10 },
  primaryText: { color: '#FFF', fontWeight: '800' }
});