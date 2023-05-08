'use strict';
import snackbar from '@utils/snackbar-utils';
import ActivityPanel from '@components/ActivityPanel';
import ImagePicker from 'mainam-react-native-select-image';
// import Permissions, { check, PERMISSIONS } from 'react-native-permissions';
// import jsQR from "jsqr";
// import RNFetchBlob from 'rn-fetch-blob'
import React, { useState, useEffect, useRef } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
  PermissionsAndroid,
} from 'react-native';
// import QrcodeDecoder from 'qrcode-decoder';
import QRCodeScanner from 'mainam-react-native-qrcode-scanner';
import ScaledImage from 'mainam-react-native-scaleimage';
import { Images, Colors } from '@resources/index';
import CameraScreen from './Camera';
import { t } from 'i18next';
const PERMISSION_AUTHORIZED = 'authorized';

const QRCodeScannerScreen = ({ navigation, route, auth }) => {
  const scanner = useRef();
  const [state, setDataState] = useState({
    isLoading: false,
    title: route?.params?.title,
    textHelp: route?.params?.textHelp,
    isAuthorizationChecked: false,
    isFocused: false,
    isAuthorized: false,
    flashOn: false,
    front: false,
  });

  const setState = (params) => {
    setDataState((prev) => {
      return {
        ...prev,
        ...params,
      };
    });
  };

  useEffect(async () => {
    const data = await check(PERMISSIONS.IOS.CAMERA);
    setState({
      isAuthorized: data === 'granted',
    });
  }, []);

  useEffect(async () => {
    console.log('state', state);
  }, [state]);

  const onSuccess = (e) => {
    if (route?.params?.onCheckData) {
      route?.params?.onCheckData(e.data);
      navigation.pop();
    } else {
      scanner.current.reactivate();
    }
  };

  useEffect(() => {
    requestPremission();
  }, []);

  const requestPremission = async () => {
    if (Platform.OS === 'ios') {
      Permissions.request(PERMISSIONS.IOS.CAMERA).then((response) => {
        setState({
          isAuthorized: response === PERMISSION_AUTHORIZED,
          isAuthorizationChecked: true,
        });
      });
    } else if (Platform.OS === 'android' && props.checkAndroid6Permissions) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'ssssss',
        message: 'props.permissionDialogMessage',
      }).then((granted) => {
        const isAuthorized =
          Platform.Version >= 23
            ? granted === PermissionsAndroid.RESULTS.GRANTED
            : granted === true;

        setState({ isAuthorized, isAuthorizationChecked: true });
      });
    } else {
      setState({ isAuthorized: true, isAuthorizationChecked: true });
    }
  };

  const onChangeCamreraType = () => {
    setState({
      front: !state.front,
      flashOn: false,
    });
  };

  const onTurnOnFlash = () => {
    if (!state.front)
      setState({
        flashOn: !state.flashOn,
      });
    else {
      snackbar.show('constants.qr_code.flash_only_behind', 'danger');
    }
  };

  return (
    <ActivityPanel isLoading={state.isLoading} title={state.title}>
      <View style={{ flex: 1 }}>
        <CameraScreen
          ref={scanner}
          flashOn={state.flashOn}
          cameraType={state.front ? 'front' : 'back'}
          onRead={onSuccess}
          topContent={
            <Text style={styles.centerText}>{t('txtQrScanner')}</Text>
          }
          bottomContent={
            <View style={styles.containerBottom}>
              <View style={styles.containerFlash}>
                <TouchableOpacity
                  onPress={onTurnOnFlash}
                  style={styles.buttonFlash}
                >
                  <ScaledImage
                    source={Images.ic_flash}
                    height={19}
                    width={19}
                    style={{
                      tintColor: state.flashOn ? Colors.white : Colors.black20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containerFlash}>
                <TouchableOpacity
                  onPress={onChangeCamreraType}
                  style={styles.buttonFlash}
                >
                  <ScaledImage
                    source={Images.icCameraGray}
                    height={19}
                    width={19}
                    style={{
                      tintColor: state.front ? Colors.white : Colors.black20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>
    </ActivityPanel>
  );
};

const styles = StyleSheet.create({
  buttonFlash: {
    width: 50,
    height: 50,
    backgroundColor: Colors.black20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlash: {
    flex: 1,
    alignItems: 'center',
  },
  containerBottom: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRCodeScannerScreen;
