import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Styles, Colors, Images } from '@resources/index';
import ScaledImage from 'mainam-react-native-scaleimage';

export default function AppSologan(props) {
  return (
    <View style={[Styles.flexCenter, props.style]}>
      {/* <Text style={[styles.text]}>IVIRSE</Text> */}
      <ScaledImage source={Images.img_logo} width={160} />
      {/* <Text style={[styles.text, styles.subTitle]}>
        Lorem Ipsum is simply dummy text{' '}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subTitle: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 10,
  },
});
