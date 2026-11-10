import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

const INITIAL_PRODUCTS = [
  { id: '1', name: 'Beras Premium 5 kg', category: 'Sembako', price: 78000, image: 'rice', stock: 20 },
  { id: '2', name: 'Minyak Goreng 1 L', category: 'Sembako', price: 18000, image: 'oil', stock: 30 },
  { id: '3', name: 'Gula Pasir 1 kg', category: 'Sembako', price: 17000, image: 'sugar', stock: 25 },
  { id: '4', name: 'Susu UHT 1 L', category: 'Minuman', price: 21000, image: 'milk', stock: 18 },
  { id: '5', name: 'Roti Tawar', category: 'Makanan', price: 16000, image: 'bread', stock: 15 },
  { id: '6', name: 'Telur Ayam 1 kg', category: 'Sembako', price: 29000, image: 'eggs', stock: 22 }
].map(p => ({ ...p, price: Number(p.price) }));

export default function App() {
  const [cart, setCart] = useState([]);
  const [lastOrder, setLastOrder] = useState(null);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );


  const addToCart = (product) => {
    setCart(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const changeQuantity = (productId, amount) => {
    setCart(current =>
      current
        .map(item => item.id === productId
          ? { ...item, quantity: item.quantity + amount }
          : item)
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(current => current.filter(item => item.id !== productId));
  };

  const completeOrder = (paymentMethod) => {
    const order = {
      id: `KM-${Date.now().toString().slice(-6)}`,
      items: cart,
      total,
      paymentMethod,
      date: new Date().toLocaleString('id-ID')
    };
    setLastOrder(order);
    setCart([]);
    return order;
  };

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerTintColor: '#172033',
            headerTitleStyle: { fontWeight: '800' },
            contentStyle: { backgroundColor: '#F5F7FB' }
          }}
        >
          <Stack.Screen name="Home" options={{ title: 'KasirMart' }}>
            {props => (
              <HomeScreen
                {...props}
                products={INITIAL_PRODUCTS}
                cartCount={cartCount}
                onAddToCart={addToCart}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Cart" options={{ title: 'Keranjang Belanja' }}>
            {props => (
              <CartScreen
                {...props}
                cart={cart}
                total={total}
                onChangeQuantity={changeQuantity}
                onRemove={removeFromCart}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Checkout" options={{ title: 'Pembayaran' }}>
            {props => (
              <CheckoutScreen
                {...props}
                cart={cart}
                total={total}
                lastOrder={lastOrder}
                onCompleteOrder={completeOrder}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Success" component={require('./src/screens/SuccessScreen').default} options={{ title: 'Transaksi Selesai', headerBackVisible: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

