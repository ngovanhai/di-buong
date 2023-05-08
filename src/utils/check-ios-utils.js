import { Platform } from 'react-native';

export const check_device_ios = () => {
  let check = false;
  if (Platform.OS === 'ios') {
    let marjorVersionIOS = parseInt(Platform.Version, 10);
    if (marjorVersionIOS < 12) {
      check = false;
    } else {
      check = true;
    }
  }
  return check;
};