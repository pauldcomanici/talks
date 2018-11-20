import localise from './localise.js';

const service = {};

service.onGetCpuData = (info) => {
  const containerEl = document.querySelector('#container');
  containerEl.innerHTML = JSON.stringify(info, null, 2);
};

service.onMessage = (message) => {
  if (message.command === 'getCpuData') {
    service.onGetCpuData(message.response);
  }
};

service.container = () => {
  chrome.extension.sendMessage(
    {
      command: 'getCpuData',
      owner: 'options',
    }
  );
};

service.localise = () => {
  localise.set('#title', 'innerText', 'optionsTitle', ['section']);
};

service.delegate = () => {
  chrome.extension.onMessage.addListener(service.onMessage);
};

service.init = () => {
  service.delegate();
  service.localise();
  service.container();
};

service.init();