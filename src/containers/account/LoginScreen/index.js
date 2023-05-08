import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Card, InputField, ValidateMessage } from '@components';
import { Colors, Spacing, Routes } from '@resources/index';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '@navigators/NavigationService';
import { Fonts, Styles, Images } from '@resources/index';
import { ActivityPanel } from '@components/index';
import Svg, { Circle } from 'react-native-svg';
import AppSologan from '@components/AppSologan';
const DEVICE_WIDTH = Dimensions.get('window').width;

const LoginScreen = ({ navigation, route }) => {
  const auth = useSelector((state) => state.auth);
  const { onLogin } = useDispatch().auth;
  let nextScreen = route?.params?.nextScreen || {};

  const [state, _setState] = useState({ showPass: false });
  const setState = (data = {}) => {
    _setState((preState) => {
      return { ...preState, ...data };
    });
  };

  const onChange = (type) => (value) => {
    setState({ [type]: value });
  };
  const onNavigate = async () => {
    if (!nextScreen.screen) {
      navigation.replace(Routes.tabs);
      return;
    }
    navigation.replace(nextScreen.screen, nextScreen.param);
  };

  const onPressLogin = async () => {
    Keyboard.dismiss();
    setState({ warning: '' });
    if (!state.phoneNumber || !state.password) {
      setState({ warning: 'Vui lòng nhập số điện thoại và mật khẩu' });
      return;
    }
    onLogin({
      tendangnhap: state.phoneNumber,
      matkhau: state.password,
    }).then((s) => {
      onNavigate();
    });
  };

  const onRegisterScreen = () => {
    NavigationService.navigate(Routes.registerScreen);
  };

  const onForgotPassword = () => {
    NavigationService.navigate(Routes.forgotPasswordScreen);
  };
  return (
    <ActivityPanel fullScreen={true}>
      <View style={[Styles.flex1, { position: 'relative' }]}>
        <Animatable.View animation="swing" style={[styles.containCover]}>
          <View style={styles.headerView}>
            <Svg>
              <Circle
                cx={DEVICE_WIDTH / 2}
                cy={`-${450}`}
                r={900}
                fill={Colors.primary}
                stroke={Colors.primary}
                strokeWidth="2"
              />
            </Svg>
            <AppSologan
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '25%',
                left: 0,
                right: 0,
              }}
            />
          </View>
        </Animatable.View>

        <Animatable.View style={[styles.containLogin]}>
          <KeyboardAwareScrollView
            scrollEnabled={false}
            contentContainerStyle={styles.viewPaddingBottomContent}
          >
            <Animatable.View animation="slideInLeft" duration={500}>
              <Card style={styles.loginArea}>
                <Text style={styles.title}>Đăng nhập</Text>
                <InputField
                  iconLeft={Images.phoneNumber}
                  iconLeftWidth={24}
                  placeholder={'Tên đăng nhập'}
                  textContentType="username"
                  onChangeText={onChange('phoneNumber')}
                  value={state.phoneNumber}
                  allowClearText={true}
                />
                <InputField
                  iconLeft={Images.password}
                  iconLeftWidth={24}
                  placeholder={'Mật khẩu'}
                  secureTextEntry={'*'}
                  allowShowPassword={true}
                  textContentType="password"
                  onChangeText={onChange('password')}
                  value={state.password}
                  allowClearText={true}
                />
                <Button
                  title={'Đăng nhập'}
                  style={styles.btnLogin}
                  onPress={onPressLogin}
                  color={Colors.mainGradian}
                  color2={Colors.main}
                />
                <ValidateMessage warning={state.warning} />
              </Card>              
            </Animatable.View>
          </KeyboardAwareScrollView>
        </Animatable.View>
      </View>
    </ActivityPanel>
  );
};

const styles = StyleSheet.create({
  loginArea: { flexGrow: 1, margin: Spacing.p16, marginBottom: 220 },
  title: { ...Fonts.font24w600, textAlign: 'center' },
  textField: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorderInactive,
    paddingVertical: Spacing.padding,
    paddingHorizontal: Spacing.p8,
  },
  headerView: {
    width: '100%',
    position: 'relative',
    height: 500,
  },
  btnLogin: {
    marginTop: Spacing.padding,
    width: '100%',
  },
  areaForgotPassword: { width: '100%', marginVertical: Spacing.padding },
  btnForgotPassword: {
    color: Colors.main,
    ...Fonts.font16w400,
  },
  viewMessage: { flexDirection: 'row', marginTop: Spacing.p20 },
  message: {
    color: Colors.red,
    marginLeft: Spacing.p4,
    marginTop: Spacing.p5,
    ...Fonts.font14w400,
  },
  containCover: {
    alignItems: 'center',
    flexShrink: 1,
  },
  imgCover: {
    resizeMode: 'contain',
  },
  imgCover2: {
    resizeMode: 'contain',
    width: '100%',
    height: 265,
    position: 'absolute',
    top: 0,
  },
  containLogin: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  headSocial: {
    paddingTop: 79,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.p20,
  },
  titleSocial: {
    color: Colors.textColor,
    ...Fonts.font14w400,
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 30,
  },
  labelRegister: {
    ...Fonts.font16w500,
    color: Colors.textColor,
  },
  btnRegister: {
    color: Colors.main,
    ...Fonts.font16w500,
    marginLeft: Spacing.p4,
  },
  containBtnSocial: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default LoginScreen;
