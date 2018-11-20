const service = {};

service.improve = () => {
  const logoEl = document.querySelector('.header-logo-invertocat');
  logoEl && logoEl.style.setProperty("color", "yellow");
};

service.init = () => {
  service.improve();
};

service.init();
