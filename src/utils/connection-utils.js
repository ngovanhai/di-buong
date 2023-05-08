import NetInfo from '@react-native-community/netinfo';

module.exports = {
  isConnected() {
    return new Promise((resolve, reject) => {
      NetInfo.fetch()
        .then((connect) => {
          if (connect) resolve(true);
          else {
            setTimeout(() => {
              NetInfo.fetch()
                .then((connect) => {
                  if (connect) resolve(true);
                  else reject(false);
                })
                .catch(() => reject(false));
            }, 500);
          }
        })
        .catch(() => {
          reject(false);
        });
    });
  },
  checkConnect(callback) {
    NetInfo.fetch().then((isConnected) => {
      if (callback) callback(isConnected);
    });
  },
  addEventListener(listener) {
    if (listener) NetInfo.addEventListener('connectionChange', listener);
  },
};
