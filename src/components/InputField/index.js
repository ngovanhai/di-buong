import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import ScaledImage from 'mainam-react-native-scaleimage';
import { Colors, Spacing, Styles, Images, Fonts } from '@resources/index';
import { Toggle } from '@components';

const InputField = ({
  style,
  textInputStyle,
  iconWidth = 24,
  iconLeft,
  inputBorderActiveColor = Colors.inputBorderActiveColor,
  secureTextEntry,
  allowShowPassword,
  allowClearText,
  editable = true,
  label,
  onPress,
  ...props
}) => {
  const [state, _setState] = useState({ showPass: false, value: '' });
  const refTimeOut = useRef(null);
  const refInput = useRef(null);
  const setState = (data = {}) => {
    _setState((preState) => {
      return { ...preState, ...data };
    });
  };
  useEffect(() => {
    setState({
      value: props.value,
    });
  }, [props.value]);
  useEffect(() => {
    return () => {
      refTimeOut.current && clearTimeout(refTimeOut.current);
      refTimeOut.current = null;
    };
  }, []);
  const [focus, setFocus] = useState(false);
  const onBlur = () => {
    setFocus(false);
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onShowPass = () => {
    setState({ showPass: !state.showPass });
  };
  const onChangeText = (value) => {
    setState({ value });
    refTimeOut.current && clearTimeout(refTimeOut.current);
    refTimeOut.current = setTimeout(
      (value) => {
        props.onChangeText && props.onChangeText(value);
      },
      500,
      value,
    );
  };
  const onClear = () => {
    onChangeText('');
  };
  const onPressContainer = () => {
    if (!editable) {
      if (onPress) return onPress && onPress();
      return;
    }
    refInput.current && refInput.current.focus();
  };
  const ViewWraper =
    !editable && onPress ? TouchableOpacity : TouchableWithoutFeedback;

  return (
    <ViewWraper onPress={onPressContainer} style={styles.container}>
      <View
        style={[
          styles.textField,
          focus ? { borderBottomColor: inputBorderActiveColor } : {},
          style,
        ]}
      >
        {iconLeft && (
          <ScaledImage source={iconLeft} width={iconWidth}></ScaledImage>
        )}
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          ref={refInput}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[styles.inputText, textInputStyle]}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry && !state.showPass}
          {...props}
          value={state.value}
          onChangeText={onChangeText}
          editable={editable}
          autoCapitalize="none"
          pointerEvents="box-none"
        />
        {allowClearText && !!state.value && (
          <TouchableOpacity onPress={onClear}>
            <ScaledImage source={Images.clear} width={24}></ScaledImage>
          </TouchableOpacity>
        )}
        {secureTextEntry && allowShowPassword && (
          <Toggle
            style={styles.toggleShowPasword}
            iconOn={Images.showpass}
            iconOff={Images.hidepass}
            checked={state.showPass}
            onChange={onShowPass}
          />
        )}
      </View>
    </ViewWraper>
  );
};
export default InputField;

const styles = StyleSheet.create({
  container: { width: '100%' },
  textField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorderInactiveColor,
    paddingHorizontal: Spacing.p8,
    paddingVertical: Spacing.padding,
    ...Styles.flexCenter,
  },
  inputText: {
    flex: 1,
    paddingHorizontal: Spacing.p8,
  },
  toggleShowPasword: {
    marginLeft: 10,
  },
  label: {
    lineHeight: 20,
    ...Fonts.font14w600,
    color: Colors.textColor2,
  },
});
