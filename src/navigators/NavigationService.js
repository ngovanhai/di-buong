import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const _navigator = createNavigationContainerRef();

function navigate(routeName, params) {
  _navigator.navigate(routeName, params);
}

function reset(routeName, params) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName, params }],
    }),
  );
}

function pop() {
  _navigator.goBack();
}

export default {
  reset,
  navigate,
  pop,
};
