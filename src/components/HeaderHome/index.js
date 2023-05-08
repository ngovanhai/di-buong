import React, { memo } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import ScaleImage from 'mainam-react-native-scaleimage';
import {
  Spacing,
  Fonts,
  Colors,
  Images,
  ImageSize,
  Styles,
} from '@resources/index';

const styles = StyleSheet.create({
  container: { height: 89 },
  header: {
    alignItems: 'center',
    paddingVertical: Spacing.padding,
    paddingHorizontal: Spacing.padding,
    backgroundColor: Colors.white,
    height: 89,
    justifyContent: 'flex-end',
    ...Styles.flexCenter,
  },
  backHead2: {
    width: ImageSize.imageMedium,
    resizeMode: 'contain',
    height: ImageSize.imageMedium,
  },
  ingore: {
    ...Fonts.font16bold,
    color: Colors.white,
  },
  iconRight: {},
  btnRight: {
    right: Spacing.p10,
  },
});

const MainHeader = ({
  rightIcon = <View />,
  showBackground,
  disableTitle,
  style,
  title,
  rightAction = () => {},
}) => {
  const ViewWraper = showBackground ? ImageBackground : View;
  return (
    <ViewWraper
      style={[
        styles.header,
        style,
        { display: 'flex', flexDirection: 'row', alignItems: 'flex-end' },
      ]}
      source={Images.bgHeader}
    >
      <Text
        style={{
          color: Colors.black,
          ...Fonts.font18w500,
          flex: 1,
        }}
      >
        {disableTitle ? '' : title}
      </Text>
      <TouchableOpacity
        // disabled={!rightIcon}
        onPress={rightAction}
      >
        {rightIcon}
      </TouchableOpacity>
    </ViewWraper>
  );
};

export default memo(MainHeader);
