import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HOST } from "@client/request";
import ImagePicker from "mainam-react-native-select-image";

export default function index() {
  const refImagePicker = useRef(null);
  const onClick = () => {
    refImagePicker.current
      .show({
        multiple: false,
        mediaType: "photo",
        maxFiles: 5,
        cropping: true,
        compressImageMaxWidth: 500,
        compressImageMaxHeight: 500,
      })
      .then((images) => {
        alert(JSON.stringify(images));
      })
      .catch((e) => {
        alert(1);
      });
  };
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <Text>test</Text>
        <ImagePicker ref={refImagePicker} />
      </TouchableOpacity>
    </View>
  );
}
