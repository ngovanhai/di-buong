import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { forwardRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import { Card, Button } from '@components';
import { Fonts, Colors, Spacing } from '@resources/index';
// eslint-disable-next-line react/display-name
const ModalLoading = forwardRef(({}, ref) => {
  const refCallBack = useRef(null);
  const [state, _setState] = useState({
    show: false,
  });
  const setState = (data = {}) => {
    _setState((preState) => {
      return { ...preState, ...data };
    });
  };

  const getCurrentLoadingState = () => {
    return state.show;
  };
  useImperativeHandle(ref, () => ({
    show: ({ message, cancelText, acceptText }, callback) => {
      refCallBack.current = callback;
      setState({ show: true, message, acceptText, cancelText });
    },
    hide: () => {
      setState({ show: false });
    },
    getCurrentLoadingState: getCurrentLoadingState,
  }));
  const onClose = (value) => () => {
    setState({
      show: false,
    });
    refCallBack.current && refCallBack.current(value);
  };
  return (
    <Modal isVisible={state.show} transparent={true}>
      <Card style={{ alignItems: 'flex-start' }}>
        <Text
          style={{ color: Colors.black, ...Fonts.font14w600, lineHeight: 20 }}
        >
          Ecoship
        </Text>
        <Text
          style={{
            color: Colors.black,
            ...Fonts.font14w400,
            lineHeight: 22,
            marginTop: Spacing.p8,
            marginBottom: Spacing.padding,
            color: Colors.textColor2,
          }}
        >
          {state.message}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title={state.cancelText || 'Huỷ'}
            style={styles.buttonCancel}
            textStyle={styles.buttonCancelText}
            onPress={onClose(false)}
            color={Colors.white}
            color2={Colors.white}
            buttonStyle={{ padding: 8 }}
          ></Button>
          <Button
            title={state.acceptText || 'Đồng ý'}
            style={{
              flex: 1,
              marginLeft: Spacing.p8,
              padding: Spacing.p8,
            }}
            color={Colors.primary}
            onPress={onClose(true)}
            buttonStyle={{ padding: 8 }}
          ></Button>
        </View>
      </Card>
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
  buttonCancel: {
    flex: 1,
    marginRight: Spacing.p8,
    padding: Spacing.p8,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  buttonCancelText: { color: Colors.textColor2 },
});
