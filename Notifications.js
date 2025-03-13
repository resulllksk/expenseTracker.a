// // Notifications.js
// // import * as Notifications from 'expo-notifications';
// import

// // Bildirim izinlerini istemek
// export const requestNotificationPermissions = async () => {
//   const { status } = await Notifications.requestPermissionsAsync();
//   return status === 'granted';
// };

// // Bildirim gönderme
// export const sendNotification = async (title, body, seconds = 10) => {
//   // Bildirim izinlerini kontrol et
//   const hasPermission = await requestNotificationPermissions();
  
//   if (hasPermission) {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: title,
//         body: body,
//       },
//       trigger: {
//         seconds: seconds, // belirli bir süre sonra bildirim gönder
//       },
//     });
//   } else {
//     console.log('Bildirim izni verilmedi.');
//   }
// };

// // Bildirimleri anında göndermek için kullanılabilir
// export const sendImmediateNotification = async (title, body) => {
//   const hasPermission = await requestNotificationPermissions();
  
//   if (hasPermission) {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: title,
//         body: body,
//       },
//       trigger: null, // Anında gönderim
//     });
//   } else {
//     console.log('Bildirim izni verilmedi.');
//   }
// };
