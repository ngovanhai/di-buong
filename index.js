/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import string from 'mainam-react-native-string-utils';
import APP from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
if (process.env.NODE_ENV !== 'development') {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <APP />;
}
AppRegistry.registerComponent(appName, () => HeadlessCheck);
