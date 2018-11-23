const service = {};

service.improve = () => {
  const logoEl = document.querySelector('.header-logo-invertocat');
  logoEl && logoEl.style.setProperty("color", "yellow");
};

service.activate = () => {
  chrome.extension.sendMessage(
    {
      command: 'activate',
    }
  );
};

service.init = () => {
  service.activate();
  service.improve();
};

service.init();
