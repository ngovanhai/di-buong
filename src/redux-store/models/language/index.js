import i18n from "@i18n/i18n";
import cacheUtils from "@utils/cache-utils";

export default {
  state: {
    language: (() => {
      return "vi";
    })(),
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
    onChange: (state, { language = "vi" } = (payload = {})) => {
      i18n.changeLanguage(language);
      cacheUtils.save("", "LANG", language);
      return { ...state, language };
    },
  },
  effects: (dispatch) => ({}),
};
