const service = {};

service.close = () => {
  window.close();
};

service.delegate = () => {
  const deactivateEl = document.getElementById('close');
  deactivateEl && deactivateEl.addEventListener('click', service.close, false);
};

service.init = () => {
  service.delegate();
};

service.init();
