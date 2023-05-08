import codePush from 'react-native-code-push';
import { Alert, Platform, Linking } from 'react-native';
import snackbar from '@utils/snackbar-utils';
import {
  getAppstoreAppVersion,
  getAppstoreAppMetadata,
} from 'react-native-appstore-version-checker';
import DeviceInfo from 'react-native-device-info';
const getVerstionAppstore = async () => {
  try {
    let bunndleId = DeviceInfo.getBundleId();
    let packageName = Platform.OS == 'android' ? bunndleId : '';
    let versionApp = DeviceInfo.getVersion();
    let appVersion = await getAppstoreAppMetadata(packageName);
    console.log('appVersion: ', appVersion);
    return appVersion?.version > versionApp;
  } catch (error) {
    return false;
  }
};
const updateFromAppStore = () => {
  const appName = Platform.OS == 'android' ? 'CH Play' : 'App Store';
  Alert.alert(
    'THÔNG BÁO',
    `Ứng dụng đã có phiên bản mới trên ${appName}. Bạn vui lòng cập nhật để có trải nghiệm tốt nhất!`,
    [
      {
        text: 'Cập nhật',
        onPress: () => {
          let link =
            Platform.OS == 'android'
              ? 'market://details?id=com.isofh.appdibuong'
              : `itms-apps://itunes.apple.com/us/app/id1428148423?mt=8`;
          Linking.canOpenURL(link).then(
            (supported) => {
              supported && Linking.openURL(link);
            },
            (err) => {
              console.log('err: ', err);
            },
          );
        },
      },
    ],
    { cancelable: false },
  );
};
module.exports = {
  checkUpdate: async (silent, init) => {
    let updateFromStore = await getVerstionAppstore();
    if (updateFromStore) {
      updateFromAppStore();
    } else {
      if (!init) {
        codePush
          .checkForUpdate()
          .then((update) => {
            if (update) {
              if (update.isMandatory) {
                Alert.alert(
                  'THÔNG BÁO',
                  'Ứng dụng đã có phiên bản mới. Bạn vui lòng cập nhật để có trải nghiệm tốt nhất!',
                  [
                    {
                      text: 'Cập nhật',
                      onPress: () => {
                        snackbar.show(
                          'Ứng dụng đang được cập nhật, vui lòng chờ',
                          'success',
                        );
                        codePush
                          .sync({
                            // updateDialog: true,
                            installMode: codePush.InstallMode.IMMEDIATE,
                          })
                          .then((s) => {});
                      },
                    },
                  ],
                  { cancelable: false },
                );
              } else {
                Alert.alert(
                  'THÔNG BÁO',
                  'Ứng dụng đã có phiên bản mới. Bạn vui lòng cập nhật để có trải nghiệm tốt nhất!',
                  [
                    {
                      text: 'Để sau',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Cập nhật',
                      onPress: () => {
                        snackbar.show(
                          'Ứng dụng đang được cập nhật, vui lòng chờ',
                          'success',
                        );
                        codePush
                          .sync({
                            // updateDialog: true,
                            installMode: codePush.InstallMode.IMMEDIATE,
                          })
                          .then((s) => {});
                      },
                    },
                  ],
                  { cancelable: false },
                );
              }
            } else {
              if (!silent)
                snackbar.show(
                  'Bạn đang sử dụng phiên bản IVIRSE mới nhất',
                  'success',
                );
            }
          })
          .catch(() => {
            if (!silent)
              snackbar.show(
                'Bạn đang sử dụng phiên bản IVIRSE mới nhất',
                'success',
              );
          });
      }
    }
  },
};
