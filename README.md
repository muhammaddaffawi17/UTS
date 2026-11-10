# KasirMart - UTS Mobile Programming Native

Aplikasi kasir belanja sederhana menggunakan React Native dan Expo.

## Fitur
- Katalog produk
- Tambah produk ke keranjang
- Ubah kuantitas dan hapus produk
- Hitung jumlah barang dan total otomatis
- Pilih metode pembayaran
- Konfirmasi transaksi dan nomor pesanan

## Persiapan
Pastikan Node.js sudah terpasang. Buka folder proyek ini di VS Code.

Jalankan perintah berikut di terminal:

```bash
npm install
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native @react-navigation/native-stack
npx expo start
```

Jika menggunakan PowerShell Windows dan perintah `npx` diblokir, gunakan:

```powershell
npx.cmd expo start
```

Pindai QR Code menggunakan Expo Go.

## Struktur folder
```text
KasirMart/
├── App.js
├── app.json
├── package.json
└── src/
    ├── components/
    │   ├── ProductCard.js
    │   ├── CartItem.js
    │   └── SummaryCard.js
    └── screens/
        ├── HomeScreen.js
        ├── CartScreen.js
        ├── CheckoutScreen.js
        └── SuccessScreen.js
```

## Implementasi ketentuan UTS
1. Komponen: ProductCard, CartItem, SummaryCard, dan komponen screen.
2. State: cart, lastOrder, dan paymentMethod. Props mengirim data serta fungsi antar-komponen.
3. Navigasi: Home, Cart, Checkout, dan Success menggunakan React Navigation.
4. Hooks: useState, useMemo, dan useEffect.

## Catatan
Data produk masih berupa data contoh di dalam aplikasi. Pembayaran hanya simulasi, belum terhubung ke payment gateway, database, atau layanan belanja online sungguhan.
