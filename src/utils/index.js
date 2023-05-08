import { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Keyboard } from 'react-native';
export const combineUrlParams = (url = '', params = {}) => {
  const keys = Object.keys(params);
  const paramUrl = keys
    .reduce(
      (result, key) =>
        params[key] !== undefined && params[key] !== null && params[key] !== ''
          ? [...result, `${key}=${params[key]}`]
          : [...result],
      [],
    )
    .join('&');
  return `${url}?${paramUrl}`;
};

export const convertArray = (element, prop, value) => {
  const arr = [];
  for (let i = 1; i <= element; i += 1) {
    arr.push({
      key: i,
      [prop]: value,
    });
  }
  return arr;
};

export const convertObjectToParams = (obj = {}) => {
  const keys = Object.keys(obj);
  return keys
    .reduce(
      (result, key) =>
        obj[key] !== undefined && obj[key] !== null && obj[key] !== ''
          ? [...result, `${key}=${obj[key]}`]
          : [...result],
      [],
    )
    .join('&');
};
export const useDebounce = (deboundFunc) => {
  const ref = useRef(debounce((params) => deboundFunc(params), 1000));
  return ref.current;
};
export const getFirstValueWarehouse = (item) => {
  const thongSoKho =
    item?.thongSoKho && (item?.thongSoKho || []).length > 0
      ? item?.thongSoKho
      : [
          {
            soLuongBan: '',
            soLuongSach: '',
            tonKho: '',
          },
        ];
  return thongSoKho[0];
};
export const numberToString = (number) => {
  return (number !== undefined ? number : '').toString();
};
export const getFullAddress = (addr) => {
  let fullAddr = '';
  if (addr?.soNha) {
    fullAddr += `${addr?.soNha || ''}, `;
  }
  if (addr?.dmXaPhuong) {
    fullAddr += `${addr?.dmXaPhuong?.ten || ''}, `;
  }
  if (addr?.dmQuanHuyen) {
    fullAddr += `${addr?.dmQuanHuyen?.ten || ''}, `;
  }
  if (addr?.dmTinhThanhPho) {
    fullAddr += `${addr?.dmTinhThanhPho?.ten || ''}`;
  }
  return fullAddr;
};
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const useKeyboard = () => {
  const [keyboard, setState] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setState(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setState(false);
    });
    return () => {
      if (showSubscription && hideSubscription) {
        showSubscription.remove();
        hideSubscription.remove();
      }
    };
  }, []);
  return { keyboard };
};
