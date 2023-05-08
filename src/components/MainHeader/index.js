import React, { memo } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import ScaleImage from 'mainam-react-native-scaleimage';
import {
  Spacing,
  Fonts,
  Colors,
  Images,
  shadow,
  ImageSize,
  Styles,
} from '@resources/index';
import NavigationService from '@navigators/NavigationService';
import { noop } from 'lodash';

const MainHeader = ({
  leftIcon,
  rightIcon = <View />,
  showBackground,
  disableTitle,
  TitleComp = null,
  style,
  title,
  leftStyle,
  disableBack = false,
  leftAction = () => NavigationService.pop(),
  rightAction = () => {},
  isSearchBar = false,
  onChangeText,
  value,
  onSubmitEditing,
  placeholder,
  iconRightInput,
  tintColor = Colors.white,
  headerBottom,
}) => {
  const ViewWraper = showBackground ? ImageBackground : View;
  const LeftIcon = leftIcon ? LeftIconTemplate[leftIcon] : <View />;
  const RightIconSearch = () => {
    return (
      <TouchableOpacity style={styles.btnRight}>
        <ScaleImage
          source={iconRightInput}
          height={ImageSize.image12}
          style={[
            styles.iconRight,
            {
              tintColor: tintColor,
            },
          ]}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ViewWraper style={[styles.header1]} source={Images.bgHeader}>
      <View style={[styles.header, style]}>
        <TouchableOpacity
          onPress={disableBack ? noop : leftAction}
          style={[styles.left, leftStyle]}
        >
          {!disableBack && LeftIcon}
        </TouchableOpacity>
        {!disableTitle && TitleComp ? (
          TitleComp
        ) : (
          <Text style={styles.title}>{disableTitle ? '' : title}</Text>
        )}
        <TouchableOpacity
          // disabled={!rightIcon}
          onPress={rightAction}
          style={styles.right}
        >
          {rightIcon}
        </TouchableOpacity>
      </View>
      {headerBottom}
    </ViewWraper>
  );
};

const styles = StyleSheet.create({
  container: { height: 89 },
  left: {
    position: 'absolute',
    left: Spacing.padding,
    bottom: Spacing.padding,
    zIndex: 1,
    padding: Spacing.p5,
  },
  left2: {
    position: 'absolute',
    bottom: Spacing.padding,
    zIndex: 2,
    padding: Spacing.bottom0,
    right: 55,
    left: 50,
  },
  right: {
    position: 'absolute',
    right: Spacing.padding,
    bottom: Spacing.padding,
    zIndex: 2,
    padding: Spacing.p5,
  },
  header1: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    minHeight: 89,
    justifyContent: 'flex-end',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: Spacing.padding,
    backgroundColor: Colors.white,
    minHeight: 89,
    justifyContent: 'flex-end',
  },
  backHead2: {
    paddingTop: 10,
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
  title: {
    ...Fonts.font16w500,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 2,
  },
});
const LeftIconTemplate = {
  close: (
    <View>
      <Image style={styles.backHead2} source={Images.ic_close} />
    </View>
  ),
  back: (
    <View>
      <Image style={styles.backHead2} source={Images.back} />
    </View>
  ),
  ignore: (
    <View>
      <Text style={styles.ingore}>Để sau</Text>
    </View>
  ),
};
export default memo(MainHeader);
