import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { Images } from '@resources/index';
import { Spacing } from '@resources/index';
import { forwardRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';

// eslint-disable-next-line react/display-name
const ModalLoading = forwardRef(({ }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => {
    setIsVisible(true);
  };
  const hide = () => {
    setIsVisible(false);
  };
  const getCurrentLoadingState = () => {
    return isVisible;
  };
  useImperativeHandle(ref, () => ({
    show: show,
    hide: hide,
    getCurrentLoadingState: getCurrentLoadingState,
  }));
  return (
    <Modal isVisible={isVisible} transparent={true}>
      <View style={styles.wrap}>
        {/* <LottieView
          style={styles.loading}
          source={Images.loading}
          autoPlay
          loop
        /> */}
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
});
export default ModalLoading;
const styles = StyleSheet.create({
  loading: {
    width: Spacing.widthScreen / 2,
    height: Spacing.heightScreen / 2,
  },
  wrap: {
    alignItems: 'center',
  },
});
