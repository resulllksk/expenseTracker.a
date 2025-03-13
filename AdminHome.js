// // AdminHome.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { firestore } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

// const AdminHome = () => {
//   const [sales, setSales] = useState([]);

//   useEffect(() => {
//     // Satışları Firestore'dan çek
//     const fetchSales = async () => {
//       const salesCollection = collection(firestore, 'sales');
//       const salesSnapshot = await getDocs(salesCollection);
//       const salesList = salesSnapshot.docs.map(doc => doc.data());
//       setSales(salesList);
//     };
//     fetchSales();
//   }, []);

//   return (
//     <View>
//       <Text>Satışlar</Text>
//       <FlatList
//         data={sales}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View>
//             <Text>Ürün: {item.productName}</Text>
//             <Text>Adet: {item.quantity}</Text>
//             <Text>Toplam: {item.totalPrice} TL</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default AdminHome;
