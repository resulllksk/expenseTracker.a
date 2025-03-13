// // AuthScreen.js
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput } from 'react-native';
// import { auth } from './screens/firebaseConfig';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';

// const SalesTracking = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Kullanıcı rolüne göre yönlendirme (user mı admin mi?)
//       if (user.email === 'admin@example.com') {
//         navigation.navigate('AdminHome'); // Admin için yönlendirme
//       } else {
//         navigation.navigate('UserHome'); // Normal kullanıcı için yönlendirme
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <View>
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
//       <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default SalesTracking;
