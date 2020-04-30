async function savePages(value) {
  chrome.storage.sync.set({'pages': value}, function() {});
}

async function saveLastUpdate(value) {
  chrome.storage.sync.set({'lastUpdate': value}, function() {});
}

function getPages() {
  return new Promise((resolve, reject) =>
        chrome.storage.sync.get(['pages'], result => resolve(result.pages))
  );
}

function getLastUpdate() {
  return new Promise((resolve, reject) =>
        chrome.storage.sync.get(['lastUpdate'], result => resolve(result.lastUpdate))
  );
}