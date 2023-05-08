import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Routes,
  Images,
  Styles,
  Spacing,
  Colors,
  Fonts,
} from "@resources/index";
import { useFocusEffect } from "@react-navigation/native";
import { HeaderHome, ActivityPanel, Card } from "@components";
import ScaledImage from "mainam-react-native-scaleimage";
import LinearGradient from "react-native-linear-gradient";
import ListFunctions from "./components/ListFunctions";
import UserInfo from "./components/UserInfo";

const HomeScreen = ({ navigation, route, ...props }) => {
  useFocusEffect(React.useCallback(() => {}, []));

  const onShowNotification = () => {
    navigation.navigate(Routes.notificationScreen);
  };
  const onOpenCauHoiThuongGap = () => {
    navigation.navigate(Routes.cauHoiThuongGapScreen);
  };
  const onOpenDanhSachPhat = () => {
    navigation.navigate(Routes.danhSachPhatScreen);
  };
  return (
    <ActivityPanel fullScreen={true} paddingBottom={false}>
      <HeaderHome
        title="Trang chủ"
        rightIcon={
          <TouchableOpacity onPress={onShowNotification}>
            <ScaledImage source={Images.notification} width={24} />
          </TouchableOpacity>
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <Card>
            <LinearGradient
              colors={Colors.bannerHeaderHome}
              style={[styles.banner]}
            >
              <Text style={styles.bannerText}>Giao hàng nhanh chóng</Text>
              <Text style={styles.bannerText}>Tiết kiệm & An toàn</Text>
            </LinearGradient>
            <ListFunctions />
          </Card>
          <View style={{ padding: Spacing.padding }}>
            <View
              style={{
                backgroundColor: Colors.homeCrmBackground,
                padding: Spacing.p8,
                flexDirection: "row",
                ...Styles.flexCenter,
              }}
            >
              <ScaledImage
                source={Images.home_crm_ring}
                width={18}
              ></ScaledImage>
              <Text
                style={{
                  lineHeight: 24,
                  ...Fonts.font14w400,
                  marginLeft: Spacing.p10,
                }}
              >
                Để sử dụng các tính năng, vui lòng xác nhận thông tin phía dưới
                để được gán mã CRM.
              </Text>
            </View>
            {/* <Card style={styles.card}>
              <TouchableOpacity style={styles.cardItem}>
                <ScaledImage source={Images.barcode} width={24}></ScaledImage>
                <Text style={styles.cardText}>Mã CRM</Text>
                <ScaledImage source={Images.next} width={24}></ScaledImage>
              </TouchableOpacity>
            </Card> */}
            <Card style={styles.card}>
              {/* <TouchableOpacity style={styles.cardItem} onPress={onOpenBangGia}>
                <ScaledImage source={Images.bangGia} width={24}></ScaledImage>
                <Text style={styles.cardText}>Bảng Giá</Text>
                <ScaledImage source={Images.next} width={24}></ScaledImage>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.cardItem}
                onPress={onOpenCauHoiThuongGap}
              >
                <ScaledImage source={Images.cauHoi} width={24}></ScaledImage>
                <Text style={styles.cardText}>Các câu hỏi thường gặp</Text>
                <ScaledImage source={Images.next} width={24}></ScaledImage>
              </TouchableOpacity>
            </Card>
            <Card style={styles.card}>
              <TouchableOpacity
                style={styles.cardItem}
                onPress={onOpenDanhSachPhat}
              >
                <ScaledImage
                  source={Images.danhSachPhat}
                  width={24}
                ></ScaledImage>
                <Text style={styles.cardText}>Danh phát phát</Text>
                <ScaledImage source={Images.next} width={24}></ScaledImage>
              </TouchableOpacity>
            </Card>
            <UserInfo />
          </View>
        </View>
      </ScrollView>
    </ActivityPanel>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingVertical: Spacing.padding,
  },
  container: { marginBottom: Spacing.padding },
  banner: { borderRadius: 8, height: 118, ...Styles.flexCenter, width: "100%" },
  bannerText: {
    color: Colors.white,
    ...Fonts.font17Bold,
    lineHeight: 25,
    marginVertical: 4,
  },
  card: { marginTop: Spacing.padding, paddingVertical: 0 },
  cardItem: {
    width: "100%",
    flexDirection: "row",
    ...Styles.flexCenter,
    paddingVertical: Spacing.padding,
  },
  cardText: {
    flex: 1,
    marginLeft: Spacing.p8,
    ...Fonts.font14w400,
  },
});

export default HomeScreen;
