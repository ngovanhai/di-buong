import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const MainStack = createStackNavigator();
import Tabs from "./MainTabs";
import {
  SplashScreen,
  LoginScreen,
  DemoScreen1,
  DemoScreen2,
  ImagePickerScreen,
  DateTimePickerScreen,
  PhotoViewer,
  QRCodeScannerScreen,
} from "@containers/index";
import { Routes } from "@resources/index";
import { MainHeader } from "@components";
import { useDispatch, useSelector } from "react-redux";
const RootNavigation = () => {
  const { inited } = useSelector((state) => state.application);
  const { initAppData } = useDispatch().application;
  useEffect(() => {
    initAppData();
  }, []);
  if (!inited) return null;
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
      <MainStack.Screen name={Routes.tabs} component={Tabs} />
      <MainStack.Screen name={Routes.loginScreen} component={LoginScreen} />

      <MainStack.Screen name={Routes.demoScreen1} component={DemoScreen1} />
      <MainStack.Screen
        options={{
          header: (props) => <MainHeader {...props} leftIcon="close" />,
          headerTitle: "DemoScreen2",
        }}
        name={Routes.demoScreen2}
        component={DemoScreen2}
      />
      <MainStack.Screen
        options={{
          header: (props) => <MainHeader {...props} leftIcon="close" />,
          headerTitle: "Select image",
        }}
        name={Routes.selectImage}
        component={ImagePickerScreen}
      />
      <MainStack.Screen
        options={{
          header: (props) => <MainHeader {...props} leftIcon="close" />,
          headerTitle: "Select date",
        }}
        name={Routes.selectDate}
        component={DateTimePickerScreen}
      />

      <MainStack.Screen
        options={{ headerShown: false }}
        name={Routes.previewImage}
        component={PhotoViewer}
      />

      <MainStack.Screen
        options={{ headerShown: false }}
        name={Routes.qrCodeScannerScreen}
        component={QRCodeScannerScreen}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
