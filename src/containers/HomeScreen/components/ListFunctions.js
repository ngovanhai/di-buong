import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Images,
  Styles,
  Fonts,
  Colors,
  Spacing,
  shadow,
  Routes,
} from '@resources/index';
import ScaledImage from 'mainam-react-native-scaleimage';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '@navigators/NavigationService';
const DEVICE_WIDTH = Dimensions.get('window').width;

const ListFunctions = ({ refModalTaoDonHang }) => {
  const funcs = [
    {
      text: 'Tạo đơn hàng mới',
      icon: Images.home_taoDonHang,
      colors: ['#2F80ED', '#0F9AFB'],
      onPress: () => {
        refModalTaoDonHang.current && refModalTaoDonHang.current.show({});
      },
    },
    {
      text: 'Tính thử cước phí',
      icon: Images.home_tinhCuocPhi,
      colors: ['#FFBF61', '#FE8819'],
      onPress: () => {
        NavigationService.navigate(Routes.tinhThuCuocScreen);
      },
    },
    {
      text: 'Định vị bưu gửi',
      icon: Images.home_dinhVuBuuCuc,
      colors: ['#0CB98D', '#15D48A'],
      onPress: () => {
        NavigationService.navigate(Routes.donHang);
      },
    },
    {
      text: 'Tra cứu bưu cục',
      icon: Images.home_traCuuBuuCuc,
      colors: ['#FBE363', '#FEBF37'],
    },
  ];
  return (
    <View style={styles.main}>
      {funcs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              width: (DEVICE_WIDTH - 32) / 4,
              ...Styles.flexCenter,
              padding: 10,
            }}
            onPress={item.onPress}
          >
            <LinearGradient colors={item.colors || []} style={styles.icon}>
              <ScaledImage source={item.icon} width={24} />
            </LinearGradient>
            <Text style={styles.label}>{item.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default ListFunctions;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacing.p20,
  },
  icon: {
    width: 40,
    height: 40,
    ...Styles.flexCenter,
    borderRadius: 20,
    ...shadow(0, 4, 8, 'rgba(73, 73, 73, 0.16)'),
  },
  label: {
    ...Fonts.font14w400,
    color: Colors.primary,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: Spacing.p4,
  },
});
