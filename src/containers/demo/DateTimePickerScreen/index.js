import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HOST } from "@client/request";
import DateTimePicker from "mainam-react-native-date-picker";

export default function index() {
  const [state, _setState] = useState({ show: false, data: [] });
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };

  const refImagePicker = useRef(null);
  const onClick = () => {
    setState({ show: true });
  };
  const onConfirm = (date) => {
    setState({ show: false, date });
    alert(date);
  };
  const onCancel = () => {
    setState({
      show: false,
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <Text>test</Text>
      </TouchableOpacity>
      <DateTimePicker
        mode={"time"}
        isVisible={state.show}
        onConfirm={onConfirm}
        onCancel={onCancel}
        locale={"vi"}
        titleIOS={"Chọn giờ"}
        cancelTextIOS={"Hủy"}
        confirmTextIOS={"Đồng ý"}
        date={state.date || new Date()}
      />
    </View>
  );
}
