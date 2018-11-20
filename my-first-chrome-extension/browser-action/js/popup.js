const service = {};

service.close = () => {
  window.close();
};

service.delegate = () => {
  const deactivateEl = document.getElementById('close');
  if (deactivateEl) {
    deactivateEl.innerText = chrome.i18n.getMessage('here');
    deactivateEl.addEventListener('click', service.close, false);
  }
};

service.init = () => {
  service.delegate();
};

service.init();
