import AsyncStorage from '@react-native-community/async-storage';
module.exports = {
  save(userId, key, value) {
    try {
      AsyncStorage.setItem(
        userId + '_' + key,
        JSON.stringify({
          value: value,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  },

  read(userId, key, defaultValue) {
    return new Promise((resolve, reject) => {
      try {
        console.log(key, 'key');
        AsyncStorage.getItem(userId + '_' + key).then((value) => {
          if (value) {
            let json = JSON.parse(value);
            console.log(json.value);
            resolve(json.value);
          } else {
            resolve(defaultValue);
          }
        });
      } catch (e) {
        console.log(e, 'eee');
        resolve(defaultValue);
      }
    });
  },
};
