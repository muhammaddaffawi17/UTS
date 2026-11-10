import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import SummaryCard from '../components/SummaryCard';

export default function CheckoutScreen({
  navigation,
  cart,
  total,
  onCompleteOrder
}) {
  const [paymentMethod, setPaymentMethod] = useState('Tunai');

  const pay = () => {
    if (cart.length === 0) {
      navigation.navigate('Home');
      return;
    }

    const order = onCompleteOrder(paymentMethod);

    if (!order) return;

    navigation.replace('Success', { order });
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.title}>Belum ada transaksi</Text>
          <Text style={styles.muted}>
            Keranjang belanja masih kosong.
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Kembali Belanja</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Pilih metode pembayaran</Text>
          <Text style={styles.muted}>
            Silakan pilih salah satu metode pembayaran.
          </Text>

          {['Tunai', 'Transfer Bank', 'E-Wallet'].map(method => (
            <Pressable
              key={method}
              style={[
                styles.method,
                paymentMethod === method && styles.selected
              ]}
              onPress={() => setPaymentMethod(method)}
            >
              <Text style={styles.methodText}>{method}</Text>
              <Text style={styles.radio}>
                {paymentMethod === method ? '●' : '○'}
              </Text>
            </Pressable>
          ))}

          <SummaryCard
            itemCount={cart.reduce(
              (sum, item) => sum + item.quantity,
              0
            )}
            total={total}
            title="Total yang harus dibayar"
          />

          <Pressable style={styles.button} onPress={pay}>
            <Text style={styles.buttonText}>
              Konfirmasi Pembayaran
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18 },
  title: {
    color: '#172033',
    fontWeight: '900',
    fontSize: 19,
    marginBottom: 6
  },
  muted: {
    color: '#718096',
    fontSize: 13,
    marginBottom: 18
  },
  method: {
    backgroundColor: '#FFF',
    borderRadius: 13,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E7EAF0'
  },
  selected: {
    borderColor: '#2457D6',
    backgroundColor: '#EEF3FF'
  },
  methodText: {
    color: '#172033',
    fontWeight: '700'
  },
  radio: {
    color: '#2457D6',
    fontSize: 17
  },
  button: {
    backgroundColor: '#2457D6',
    padding: 16,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 18
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '900'
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
