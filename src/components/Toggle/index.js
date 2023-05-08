import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ScaledImage from 'mainam-react-native-scaleimage';

const Toggle = ({
  style,
  checked,
  iconWidth = 24,
  iconOn,
  iconOff,
  componentOn,
  componentOff,
  iconStyle,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    setValue(checked);
  }, [checked]);
  const onChange = () => {
    // const newValue = !value;
    // setValue(newValue);
    props.onChange && props.onChange();
  };
  const WrapView = disabled ? View : TouchableOpacity;
  return (
    <WrapView onPress={onChange} style={style}>
      {value ? (
        iconOn ? (
          <ScaledImage
            source={iconOn}
            width={iconWidth}
            style={iconStyle}
          ></ScaledImage>
        ) : (
          componentOn
        )
      ) : iconOff ? (
        <ScaledImage
          source={iconOff}
          width={iconWidth}
          style={iconStyle}
        ></ScaledImage>
      ) : (
        componentOff
      )}
    </WrapView>
  );
};
export default Toggle;
