chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "get-user-data") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "get-headers" },
        sendResponse
      );
    });
    return true;
  }
});
