import i18n from '@i18n/i18n';
import cacheUtils from '@utils/cache-utils';
import { Storage } from '@resources/strings';
// import userProvider from '@data-access/user-provider';

export default {
  state: {
    inited: false,
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    initAppData: async (payload, state) => {
      const auth = await cacheUtils.read('', 'AUTH', null);
      dispatch.auth.updateData({
        auth: auth,
      });
      // const lang = await cacheUtils.read('', 'LANG', null);
      // dispatch.language.onChange({ language: lang || 'vi' });
      dispatch.application.updateData({ inited: true });
    },
  }),
};
