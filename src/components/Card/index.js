import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing, shadow } from '@resources/index';

const Card = ({ style, children, ...props }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: Spacing.padding,
    alignItems: 'center',
    borderRadius: 8,
    ...shadow(0, 2, 10, '#0F9AFB80', 0.26),
  },
});
