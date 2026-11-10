import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

const rupiah = value =>
  `Rp${Number(value || 0).toLocaleString('id-ID')}`;

export default function SuccessScreen({ route, navigation }) {
  const order = route.params?.order;
  const items = order?.items || [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.icon}>✓</Text>
      <Text style={styles.title}>Pembayaran Berhasil!</Text>
      <Text style={styles.subtitle}>
        Terima kasih sudah berbelanja di KasirMart.
      </Text>

      <View style={styles.receipt}>
        <Text style={styles.receiptTitle}>STRUK BELANJA KASIRMART</Text>
        <Text style={styles.line}>--------------------------------</Text>

        <Text style={styles.label}>Nomor transaksi</Text>
        <Text style={styles.value}>{order?.id || '-'}</Text>

        <Text style={styles.label}>Tanggal transaksi</Text>
        <Text style={styles.value}>{order?.date || '-'}</Text>

        <Text style={styles.label}>Metode pembayaran</Text>
        <Text style={styles.value}>
          {order?.paymentMethod || '-'}
        </Text>

        <Text style={styles.line}>--------------------------------</Text>
        <Text style={styles.sectionTitle}>Rincian Belanja</Text>

        {items.map((item, index) => (
          <View key={`${item.id}-${index}`} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>
              {item.quantity} x {rupiah(item.price)}
            </Text>
            <Text style={styles.itemPrice}>
              {rupiah(item.price * item.quantity)}
            </Text>
          </View>
        ))}

        <Text style={styles.line}>--------------------------------</Text>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL PEMBAYARAN</Text>
          <Text style={styles.total}>
            {rupiah(order?.total)}
          </Text>
        </View>

        <Text style={styles.thanks}>
          Terima kasih telah berbelanja!
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Kembali ke Beranda</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 60,
    color: '#16A34A',
    marginBottom: 12
  },
  title: {
    color: '#172033',
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center'
  },
  subtitle: {
    color: '#718096',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22
  },
  receipt: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 550,
    padding: 20,
    borderRadius: 16
  },
  receiptTitle: {
    textAlign: 'center',
    color: '#172033',
    fontSize: 17,
    fontWeight: '900'
  },
  line: {
    color: '#A0A8B5',
    marginVertical: 12,
    textAlign: 'center'
  },
  label: {
    color: '#8A94A6',
    fontSize: 12,
    marginTop: 9
  },
  value: {
    color: '#172033',
    fontWeight: '800',
    fontSize: 14,
    marginTop: 3
  },
  sectionTitle: {
    color: '#172033',
    fontWeight: '900',
    marginBottom: 12
  },
  item: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E7EAF0',
    paddingBottom: 9
  },
  itemName: {
    color: '#172033',
    fontWeight: '800'
  },
  itemDetail: {
    color: '#718096',
    fontSize: 12,
    marginTop: 3
  },
  itemPrice: {
    color: '#172033',
    fontWeight: '700',
    textAlign: 'right'
  },
  totalRow: {
    marginTop: 8
  },
  totalLabel: {
    color: '#172033',
    fontWeight: '900'
  },
  total: {
    color: '#2457D6',
    fontWeight: '900',
    fontSize: 23,
    marginTop: 7
  },
  thanks: {
    textAlign: 'center',
    color: '#16A34A',
    fontWeight: '700',
    marginTop: 20
  },
  button: {
    backgroundColor: '#2457D6',
    width: '100%',
    maxWidth: 550,
    padding: 16,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 18
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '900'
  }
});
