import {
  TrangChuIcon,
  DonHangIcon,
  ThongKeIcon,
  CaNhanIcon,
  ScanIcon,
} from './20220421/tabs';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
const iconCheckSvg = ({ color, size }) => (
  <Svg
    width="24"
    height="24"
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM18.4474 8.18182H16.7502C16.6923 8.18182 16.6368 8.2048 16.5959 8.24571L10.5776 14.2632L7.83227 11.518C7.79135 11.4771 7.73586 11.4541 7.67799 11.4541H5.98113C5.92328 11.4541 5.8678 11.4771 5.82688 11.518C5.74166 11.6032 5.74163 11.7413 5.82682 11.8266C5.92273 11.9225 6.01865 12.0185 6.11457 12.1144C6.14059 12.1405 6.16719 12.1671 6.19432 12.1943L6.36333 12.3637C6.71318 12.7146 7.13065 13.135 7.55564 13.5636L7.87486 13.8857C8.86652 14.8867 9.8173 15.8495 9.96361 15.9974L9.98237 16.0163C10.3019 16.3358 10.8199 16.3358 11.1395 16.0163L18.6017 8.55428C18.6426 8.51336 18.6656 8.45787 18.6656 8.4C18.6656 8.2795 18.5679 8.18182 18.4474 8.18182Z"
      fill={color}
    />
  </Svg>
);
const iconAddSvg = ({ color, size }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10.824 19.464V13.224H5V11.24H10.824V5H12.904V11.24H18.728V13.224H12.904V19.464H10.824Z"
      fill="#01977B"
    />
  </Svg>
);
const iconViTriSvg = ({ color, size }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
      fill={color}
    />
  </Svg>
);

export const Images = {
  radio_on: require('./20220421/radio/on.png'),
  radio_off: require('./20220421/radio/off.png'),
  search: require('./20220421/icon/search.png'),
  more: require('./20220421/icon/more.png'),
  kho: require('./20220421/icon/kho.png'),
  vitri2: require('./20220421/icon/vitri2.png'),
  checkbox_on: require('./20220421/checkbox/check.png'),
  checkbox_off: require('./20220421/checkbox/uncheck.png'),
  clear: require('./20220421/icon/clear.png'),
  showpass: require('./20220421/icon/showpass.png'),
  hidepass: require('./20220421/icon/hidepass.png'),
  phoneNumber: require('./20220421/icon/phoneNumber.png'),
  password: require('./20220421/icon/password.png'),
  apple: require('./20220421/icon/apple.png'),
  zalo: require('./20220421/icon/zalo.png'),
  fb: require('./20220421/icon/fb.png'),
  gg: require('./20220421/icon/gg.png'),
  warning: require('./20220421/icon/warning.png'),
  replay: require('./20220421/icon/replay.png'),
  profile: require('./20220421/icon/profile.png'),
  email: require('./20220421/icon/email.png'),
  location: require('./20220421/icon/location.png'),
  plus: require('./20220421/icon/plus.png'),
  filter: require('./20220421/icon/filter.png'),
  scan: require('./20220421/icon/scan.png'),
  delete: require('./20220421/icon/delete.png'),
  addImage: require('./20220421/icon/addImage.png'),
  map: require('./20220421/icon/map.png'),
  map2: require('./20220421/icon/map2.png'),
  back: require('./20220421/icon/back.png'),
  up: require('./20220421/icon/up.png'),
  trash: require('./20220421/icon/trash.png'),
  barcode: require('./20220421/icon/barcode.png'),
  bangGia: require('./20220421/icon/bangGia.png'),
  phone: require('./20220421/icon/phone.png'),
  cauHoi: require('./20220421/icon/cauHoi.png'),
  danhSachPhat: require('./20220421/icon/danhSachPhat.png'),
  donHang: require('./20220421/icon/donHang.png'),
  next: require('./20220421/icon/next.png'),
  notification: require('./20220421/icon/notification.png'),
  img_logo: require('./20220421/img/logo.png'),
  home_traCuuBuuCuc: require('./20220421/home/traCuuBuuCuc.png'),
  home_taoDonHang: require('./20220421/home/taoDonHang.png'),
  home_tinhCuocPhi: require('./20220421/home/tinhCuocPhi.png'),
  home_dinhVuBuuCuc: require('./20220421/home/dinhViBuuGui.png'),
  home_crm_ring: require('./20220421/home/crmRing.png'),
};

export const ImageSvg = {
  iconAddSvg,
  iconViTriSvg,
  iconCheckSvg,
};
export const Tabs = {
  TrangChuIcon,
  DonHangIcon,
  ThongKeIcon,
  CaNhanIcon,
  ScanIcon,
};
