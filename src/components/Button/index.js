import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, Spacing } from '@resources/index';

export default function Button({
  color = Colors.main,
  color2,
  textStyle = {},
  title,
  style = {},
  wraperStyle = {},
  buttonStyle,
  onPress,
  ...props
}) {
  return (
    <LinearGradient
      {...props}
      colors={[color, color2 || color]}
      style={[styles.btn, style, { padding: 0, margin: 0 }]}
    >
      <TouchableOpacity
        style={[{ padding: Spacing.padding, width: '100%' }, buttonStyle]}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.main,
    // padding: Spacing.padding,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    ...Fonts.font16w600,
    color: Colors.white,
    textAlign: 'center',
  },
});
