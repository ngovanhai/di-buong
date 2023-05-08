// import { Platform, Alert, Linking } from 'react-native';
// import constants from '@resources/strings';
// import locationProvider from '@data-access/location-provider';
// // import LocationSwitch from 'mainam-react-native-location-switch';
// import GetLocation from 'react-native-get-location';
// import RNLocation from 'react-native-location';
// const getCurrentLocation = (callAgain) => {
//   return RNLocation.getLatestLocation()
//     .then((region) => {
//       locationProvider.saveCurrentLocation(region.latitude, region.longitude);
//       return region;
//     })
//     .catch(() => {
//       locationProvider
//         .getCurrentLocationHasSave()
//         .then((s) => {
//           if (s && s.latitude && s.longitude) {
//             s.latitudeDelta = 0.1;
//             s.longitudeDelta = 0.1;
//             return s;
//           }
//         })
//         .catch((e) => {
//           if (!callAgain) {
//             getCurrentLocation(true);
//           }
//         });
//     });
// };
// const openGps = () => {
//   Alert.alert(
//     'Bạn chưa bật định vị vị trí',
//     'Vui lòng vào Cài đặt > Quyền riêng tư > Vị trí để bật định vị',
//     [
//       {
//         text: 'Cài đặt',
//         onPress: () => {
//           Linking.openSettings();
//         },
//       },
//       {
//         text: 'Quay lại',
//         onPress: () => {},
//       },
//     ],
//     { cancelable: true },
//   );
// };

// const getLocation = async (callAgain) => {
//   return new Promise((resolve, reject) => {
//     let getLocation = () => {
//       RNLocation.requestPermission({
//         ios: 'whenInUse', // or 'always'
//         android: {
//           detail: 'coarse', // or 'fine'
//           rationale: {
//             title: 'Quyền truy cập vị trí',
//             message: 'IVIRSE cần quyền truy cập vào vị trí của bạn',
//             buttonPositive: 'Đồng ý',
//             buttonNegative: 'Hủy',
//           },
//         },
//       }).then((granted) => {
//         if (granted) {
//           RNLocation.getLatestLocation()
//             .then((region) => {
//               locationProvider.saveCurrentLocation(
//                 region.latitude,
//                 region.longitude,
//               );
//               console.log('in ra day', region);
//               resolve(region);
//             })
//             .catch((e) => {
//               locationProvider
//                 .getCurrentLocationHasSave()
//                 .then((s) => {
//                   if (s && s.latitude && s.longitude) {
//                     s.latitudeDelta = 0.1;
//                     s.longitudeDelta = 0.1;
//                     resolve(s);
//                   }
//                 })
//                 .catch(async (e) => {
//                   if (!callAgain) {
//                     console.log('callAgain');
//                     let s = await getCurrentLocation(true);
//                     resolve(s);
//                   }
//                 });
//             });
//         }
//       });
//     };

//     if (Platform.OS == 'android') {
//       GetLocation.getCurrentPosition({
//         enableHighAccuracy: true,
//         timeout: 15000,
//       })
//         .then((region) => {
//           locationProvider.saveCurrentLocation(
//             region.latitude,
//             region.longitude,
//           );
//           resolve(region);
//         })
//         .catch(async (error) => {
//           const { code, message } = error;
//           if (code == 'UNAVAILABLE') {
//             try {
//               await requestPermission();
//               let region = await GetLocation.getCurrentPosition({
//                 enableHighAccuracy: true,
//                 timeout: 15000,
//               });

//               locationProvider.saveCurrentLocation(
//                 region.latitude,
//                 region.longitude,
//               );
//               resolve(region);
//             } catch (error) {
//               reject();
//             }
//           } else {
//           }
//         });
//     } else {
//       try {
//         // LocationSwitch.isLocationEnabled(
//         //   () => {
//         //     getLocation();
//         //   },
//         //   () => {
//         //     openGps();
//         //     reject();
//         //   },
//         // );
//       } catch (error) {
//         console.log('error: 2', error);
//       }
//     }
//   });
// };
// const requestPermission = async () => {
//   try {
//     return LocationSwitch.enableLocationService(1000, true);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default {
//   getLocation,
//   requestPermission,
// };
