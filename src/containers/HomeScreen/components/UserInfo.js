import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Images,
  Styles,
  Fonts,
  Colors,
  Spacing,
  shadow,
} from '@resources/index';
import { Card, InputField, Button } from '@components';
import { useSelector } from 'react-redux';
import useStore from '@hook/useStore';

const UserInfo = () => {
  const { DienThoai, DiaChi, HoTenKhachHang } = useStore('auth.auth');
  return (
    <Card
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 0,
        marginTop: Spacing.padding,
      }}
    >
      <InputField
        iconLeft={Images.password}
        editable={false}
        value={HoTenKhachHang}
      />
      <InputField iconLeft={Images.phone} editable={false} value={DienThoai} />
      <InputField iconLeft={Images.location} editable={false} value={DiaChi} />
      {/* <Button
        title={'Xác nhận'}
        color={Colors.primary}
        style={styles.confirm}
      ></Button> */}
    </Card>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
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
  confirm: { width: '100%', marginVertical: Spacing.padding },
});
