const service = {};

service.clickCount = 0;

service.onGetCpuData = (info) => {
  chrome.extension.sendMessage(
    {
      command: 'getCpuData',
      owner: 'background',
      response: info,
    }
  );
};

service.onMessage = (req) => {
  switch (req.command) {
    case 'getCpuData':
      chrome.system.cpu.getInfo(service.onGetCpuData);
    break;
  }
};

service.onBrowserActionClick = (tab) => {
  chrome.browserAction.setBadgeText(
    {
      text: (++service.clickCount).toString(),
      tabId: tab.id,
    }
  );
  chrome.tabs.create({selected: true, url: 'https://cluj.codecamp.ro/'});
};

chrome.runtime.onMessage.addListener(service.onMessage);

// event available only if default_popup is not defined
chrome.browserAction.onClicked.addListener(service.onBrowserActionClick);