chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "get-headers") {
    function retriveHeaders() {
      const getHeaders = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      ).map((header) => header.innerText);

      sendResponse(getHeaders);
    }

    if (document.readyState === "complete") {
      retriveHeaders();
    } else {
      setTimeout(retriveHeaders, 100);
      return true;
    }
  }
});
