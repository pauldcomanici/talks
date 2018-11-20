const service = {};

service.onMessage = (req, sender) => {
  switch (req.command) {
    case 'activate':
      chrome.pageAction.show(sender.tab.id);
    break;
  }
};

service.onPageActionClick = (tab) => {
  chrome.pageAction.setTitle(
    {
      title: "clicked",
      tabId: tab.id,
    }
  );
  chrome.tabs.create({selected: true, url: 'https://cluj.codecamp.ro/'});
};

chrome.runtime.onMessage.addListener(service.onMessage);

// event available only if default_popup is not defined
chrome.pageAction.onClicked.addListener(service.onPageActionClick);