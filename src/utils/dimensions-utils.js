import { Dimensions, Platform } from 'react-native';

export const getRange = () => {
  let dimension = Dimensions.get('window').width;
  // let [dimension, setDimension] = useState(Dimensions.get('window'));
  // const appState = useRef(AppState.currentState);

  // useEffect(() => {
  //   const majorVersionIOS = parseInt(Platform.Version, 10);
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === 'active'
  //     ) {
  //       if (Platform.OS === 'ios') {
  //         if (majorVersionIOS === 15) {
  //           setDimension(Dimensions.get('screen'));
  //         } else {
  //           setDimension(Dimensions.get('window'));
  //         }
  //       }
  //     }
  //     appState.current = nextAppState;
  //     return () => {
  //       subscription.remove();
  //     };
  //   });
  // }, []);
  const majorVersionIOS = parseInt(Platform.Version, 10);
  if (Platform.OS === 'ios') {
    if (majorVersionIOS === 15) {
      dimension = Dimensions.get('screen').width;
    } else {
      dimension = Dimensions.get('window').width;
    }
  }
  return dimension;
};
