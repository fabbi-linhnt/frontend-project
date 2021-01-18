import Cookies from "js-cookie";

export const state = {
  locale: Cookies.get("locale") || 'vi',
  locales: [
    {
      target: "vi",
      text: "language-vi"
    },
    {
      target: "en",
      text: "language-en"
    }
  ]
};

export const getters = {
  locales: state => state.locales,
  locale: state => state.locale
};

export const mutations = {
  CHANGE_LOCALE(state, locale) {
    Cookies.set("locale", locale.target);
    state.locale = locale.target;
  }
};

export const actions = {
  changeLocale({ commit }, locale) {
    commit("CHANGE_LOCALE", locale);
  }
};