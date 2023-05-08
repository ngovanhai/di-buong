import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Spacing } from '@resources/index';
import { Fonts, Images } from '@resources/index';
import ScaledImage from 'mainam-react-native-scaleimage';

const ValidateMessage = ({ warning, style = {} }) => {
  if (!!warning)
    return (
      <View style={[styles.viewMessage, style]}>
        <ScaledImage source={Images.warning} width={24}></ScaledImage>
        <Text style={styles.message}>{warning}</Text>
      </View>
    );
  return null;
};

const styles = StyleSheet.create({
  viewMessage: {
    flexDirection: 'row',
    marginTop: Spacing.p20,
    width: "100%"
  },
  message: {
    color: Colors.red,
    marginLeft: Spacing.p4,
    marginTop: Spacing.p5,
    ...Fonts.font14w400,
  },
});
export default ValidateMessage;
