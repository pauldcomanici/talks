const service = {};

service.set = (selector, prop, strKey, strArgs) => {
  const el = document.querySelector(selector);
  if (el && el[prop]) {
    el[prop] = chrome.i18n.getMessage(strKey, strArgs);
  }
};

export default service;
