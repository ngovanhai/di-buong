import { noop } from 'lodash';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dimensions, StyleSheet, Vibration, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScanner = (
  {
    bottomContent = null,
    topContent = null,
    topViewStyle = {},
    bottomViewStyle = {},
    cameraType = 'back',
    flashOn = false,
    onRead = noop,
    reactivateProps = false,
    reactivateTimeoutProps = 0,
  },
  ref,
) => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [scanning, setScanning] = useState(false);

  const _renderCameraMarker = () => {
    return (
      <View style={styles.containerMarker}>
        <View style={styles.contentMarker}>
          <View style={styles.topLeft} />
          <View style={styles.leftBottomLeft} />
          <View style={styles.rightTopRight} />
          <View style={styles.rightButtom} />

          <View style={styles.topTopLeft} />
          <View style={styles.bottomBottomLeft} />
          <View style={styles.topTopRight} />
          <View style={styles.bottomBottomRight} />
        </View>
      </View>
    );
  };

  useImperativeHandle(ref, () => ({
    reactivate: reactivate,
  }));

  const reactivate = () => {
    setScanning(false);
  };

  const _renderTopContent = () => {
    if (topContent) {
      return topContent;
    }
    return null;
  };

  const _renderBottomContent = () => {
    if (bottomContent) {
      return bottomContent;
    }
    return null;
  };

  const _handleBarCodeRead = (e) => {
    if (!scanning) {
      setScanning(true);
      Vibration.vibrate();
      onRead(e);
      if (reactivateProps) {
        setTimeout(() => setScanning(false), reactivateTimeoutProps);
      }
    }
  };

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  return (
    <View>
      <RNCamera
        flashMode={
          isCameraReady && flashOn
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        type={cameraType}
        style={styles.camera}
        captureAudio={false}
        onCameraReady={handleCameraReady}
        onBarCodeRead={_handleBarCodeRead}
      >
        {_renderCameraMarker()}
      </RNCamera>
      <View style={[styles.topContent, topViewStyle]}>
        {_renderTopContent()}
      </View>

      <View style={[styles.bottomContent, bottomViewStyle]}>
        {_renderBottomContent()}
      </View>
    </View>
  );
};

export default forwardRef(CameraScanner);

const styles = StyleSheet.create({
  topContent: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  bottomContent: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  camera: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    // position: 'absolute',
  },
  bottomBottomRight: {
    backgroundColor: '#00FF00',
    height: 2,
    width: 30,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  topTopRight: {
    backgroundColor: '#00FF00',
    height: 2,
    width: 30,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  bottomBottomLeft: {
    backgroundColor: '#00FF00',
    height: 2,
    width: 30,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  topTopLeft: {
    backgroundColor: '#00FF00',
    height: 2,
    width: 30,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  rightButtom: {
    backgroundColor: '#00FF00',
    width: 2,
    height: 30,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  rightTopRight: {
    backgroundColor: '#00FF00',
    width: 2,
    height: 30,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  leftBottomLeft: {
    backgroundColor: '#00FF00',
    width: 2,
    height: 30,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  topLeft: {
    backgroundColor: '#00FF00',
    width: 2,
    height: 30,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  contentMarker: {
    position: 'relative',
    height: 200,
    width: 200,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  containerMarker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
