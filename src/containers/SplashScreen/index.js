import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Styles, Routes, Colors } from '@resources/index';
import ActivityPanel from '@components/ActivityPanel';
import AppSologan from '@components/AppSologan';
import { useSelector } from 'react-redux';

const MyView = Animatable.createAnimatableComponent(View);

const SplashScreen = ({ navigation }) => {
  const inited = useSelector((state) => state.application.inited);
  const auth = useSelector((state) => state.auth.auth);
  useEffect(() => {
    if (inited) {
      setTimeout(() => {
        // if (auth) {
          navigation.replace(Routes.tabs);
        // } else {
        //   navigation.replace(Routes.loginScreen);
        // }
      }, 2000);
    }
  }, [inited, auth, navigation]);

  return (
    <ActivityPanel
      fullScreen={true}
      backgroundColor={Colors.primary}
      wrapStyle={{ alignItems: 'center', justifyContent: 'center' }}
      paddingBottom={false}
    >
      <MyView
        animation="rubberBand"
        delay={500}
        duration={3000}
        style={Styles.flex}
      >
        <AppSologan />
      </MyView>
    </ActivityPanel>
  );
};

export default SplashScreen;
