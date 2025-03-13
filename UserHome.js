// // UserHome.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import { firestore } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

// const UserHome = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Ürünleri Firestore'dan çek
//     const fetchProducts = async () => {
//       const productsCollection = collection(firestore, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map(doc => doc.data());
//       setProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   const handlePurchase = (product) => {
//     // Satın alma işlemi (ürünü satın alan kullanıcı ve ürün bilgilerini Firestore'a ekle)
//   };

//   return (
//     <View>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.name}</Text>
//             <Text>{item.price} TL</Text>
//             <Button title="Satın Al" onPress={() => handlePurchase(item)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default UserHome;
