import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, Routes, shadow, Spacing } from "@resources/index";
import { Tabs } from "@resources/images";
import { isIphoneX } from "@utils/check-iphone-x-utils";
import { HomeScreen, DemoScreen1 } from "@containers/index";
import ScaledImage from "mainam-react-native-scaleimage";

const MainTab = createBottomTabNavigator();

const MainTabs = ({ route }) => {
  return (
    <MainTab.Navigator
      initialParams={Routes.caNhanScreen}
      screenOptions={{
        tabBarActiveTintColor: Colors.tab_active_color,
        tabBarInactiveTintColor: Colors.tab_inactive_color,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginTop: 5,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: Spacing.p15,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          border: 0,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: isIphoneX() ? 90 : 60,
          padding: 0,
          // marginBottom: getBottomSpace(),
          backgroundColor: Colors.white,
          ...shadow(0, -4, 16, "rgba(15, 154, 251, 0.05)"),
        },
        tabBarBackground: () => (
          <View
            style={
              {
                // backgroundColor: Colors.tabbar_background,
              }
            }
          />
        ),
      }}
    >
      <MainTab.Screen
        initialRouteName={route.params}
        name={Routes.homeScreen}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color, size }) => (
            <Tabs.TrangChuIcon name="home" color={color} size={size} />
          ),
        }}
      />

      <MainTab.Screen
        initialRouteName={route.params}
        name={Routes.scan}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarButton: () => {
            return (
              <TouchableOpacity style={{ marginTop: 5 }}>
                <ScaledImage width={60} source={Tabs.ScanIcon} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <MainTab.Screen
        initialRouteName={route.params}
        name={Routes.demoScreen1}
        component={DemoScreen1}
        options={{
          headerShown: false,
          tabBarLabel: "Đơn hàng",
          tabBarIcon: ({ color, size }) => (
            <Tabs.DonHangIcon name="home" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
export default MainTabs;
