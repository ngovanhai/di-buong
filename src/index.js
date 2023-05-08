import { ModalConfirm, ModalLoading } from '@components/index';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import RootNavigation from '@navigators/index';
import { _navigator } from '@navigators/NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import stores from '@redux-store/stores';
import fonts from '@resources/fonts';
import React, { useEffect } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import {
  Animated,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import codePush from 'react-native-code-push';
import FlashMessage from 'react-native-flash-message';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import './i18n/i18n';
import messaging from '@react-native-firebase/messaging';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng Một',
    'Tháng Hai',
    'Tháng Ba',
    'Tháng Tư',
    'Tháng Năm',
    'Tháng Sáu',
    'Tháng Bảy',
    'Tháng Tám',
    'Tháng Chín',
    'Tháng Mười',
    'Tháng Mười Một',
    'Tháng Mười Hai',
  ],
  monthNamesShort: [
    'T.Một',
    'T.Hai',
    'T.Ba',
    'T.Tư',
    'T.Năm',
    'T.Sáu',
    'T.Bảy',
    'T.Tám',
    'T.Chín',
    'T.Mười',
    'T.M.Một',
    'T.M.Hai',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  dayNamesShort: ['T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7', 'C.Nhật'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'fr';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 15 * 60,
};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInput.defaultProps.placeholderTextColor = '#BBB';
Animated.Text.defaultProps = TextInput.defaultProps || {};
Animated.Text.defaultProps.allowFontScaling = false;

export const refModalLoading = React.createRef(null);
export const refModalConfirm = React.createRef(null);
const App = () => {
  useEffect(() => {
    setDefaultText();
    LogBox.ignoreAllLogs();
    checkApplicationPermission();
  }, []);

  const checkApplicationPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  };

  const setDefaultText = () => {
    let components = [Text, TextInput];
    let fontFamily;
    for (let i = 0; i < components.length; i++) {
      const TextRender = components[i].render;
      components[i].render = function (...args) {
        let origin = TextRender.call(this, ...args);
        if (
          origin.props &&
          origin.props.style &&
          origin.props.style.fontWeight
        ) {
          fontFamily = fonts[`${origin.props.style.fontWeight}`];
          return React.cloneElement(origin, {
            style: StyleSheet.flatten([
              origin.props.style,
              {
                fontFamily: fonts[`${origin.props.style.fontWeight}`],
                fontWeight: undefined,
              },
            ]),
          });
        }
        return React.cloneElement(origin, {
          style: StyleSheet.flatten([
            origin.props.style,
            { fontFamily: fonts['500'] },
          ]),
        });
      };
    }
  };
  return (
    <Provider store={stores}>
      <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
      <BottomSheetModalProvider>
        <MenuProvider>
          <NavigationContainer
            linking={{ prefixes: ['isofh://'] }}
            ref={_navigator}
          >
            <RootNavigation />
            <FlashMessage
              floating={true}
              style={{ marginTop: 30 }}
              position="top"
            />

            <ModalLoading
              ref={(ref) => {
                refModalLoading.current = ref;
              }}
            />
            <ModalConfirm
              ref={(ref) => {
                refModalConfirm.current = ref;
              }}
            />
          </NavigationContainer>
        </MenuProvider>
      </BottomSheetModalProvider>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
