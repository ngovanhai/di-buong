import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Colors } from '@resources/index';
import { MainHeader } from '@components/index';
import LinearGradient from 'react-native-linear-gradient';
import { getBottomSpace } from '@utils/check-iphone-x-utils';
const ActivityPanel = (props) => {
  const {
    children,
    wrapStyle = {},
    hiddenHeader = false,
    MenuButton = false,
    paddingBottom = true,
    Search = <View />,
    containerStyle,
    leftIcon = 'back',
    isSearchBar = false,
    onChangeText,
    value,
    onSubmit,
    placeholder,
    iconRightInput,
    tintColor,
    leftAction,
    fullScreen = false,
    gradientColors = [Colors.white, Colors.white],
    backgroundColor = Colors.backgroundScreen,
  } = props;

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        paddingBottom && { paddingBottom: getBottomSpace() },
      ]}
    >
      <StatusBar
      // hidden={true}
      // translucent
      // backgroundColor="transparent"
      // barStyle="light-content"
      />

      <LinearGradient colors={gradientColors} style={[styles.wrap]}>
        <View
          style={[styles.wrap, { backgroundColor: backgroundColor }, wrapStyle]}
        >
          {hiddenHeader || fullScreen ? (
            <View />
          ) : (
            <MainHeader
              {...props}
              isSearchBar={isSearchBar}
              leftIcon={leftIcon}
              rightIcon={MenuButton}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmit}
              value={value}
              leftAction={leftAction}
              placeholder={placeholder}
              iconRightInput={iconRightInput}
              tintColor={tintColor}
            />
          )}

          {Search}

          {fullScreen ? (
            children
          ) : (
            <SafeAreaView
              style={{
                flex: 1,
                paddingTop:
                  Platform.OS === 'android'
                    ? hiddenHeader || fullScreen
                      ? StatusBar.currentHeight
                      : 0
                    : 0,
              }}
              forceInset={Platform.OS === 'android' && { vertical: 'never' }}
            >
              {children}
            </SafeAreaView>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default ActivityPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingBottom: getBottomSpace(),
  },
  wrap: {
    flex: 1,
  },
});
