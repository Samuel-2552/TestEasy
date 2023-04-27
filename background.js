// background.js

importScripts('update-conf.js');
importScripts('update.js');

// Rest of your background script code...



(function() {
  "use strict";
  
  class Cache {
    constructor(maxAge, data) {
      this.maxAge = maxAge;
      this.map = new Map();
      this[Symbol.toStringTag] = "Map";

      if (data) {
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    }

    get size() {
      return this.map.size;
    }

    clear() {
      this.map.clear();
    }

    delete(key) {
      return this.map.delete(key);
    }

    has(key) {
      return this.map.has(key);
    }

    get(key) {
      const entry = this.map.get(key);
      if (entry) {
        return entry.data;
      }
    }

    set(key, value) {
      return this.map.set(key, {
        maxAge: Date.now() + this.maxAge,
        data: value
      });
    }

    values() {
      return this.createIterator(entry => entry[1].data);
    }

    keys() {
      return this.map.keys();
    }

    entries() {
      return this.createIterator(entry => [entry[0], entry[1].data]);
    }

    forEach(callback, thisArg) {
      for (const [key, value] of this.entries()) {
        callback.apply(thisArg, [value, key, this]);
      }
    }

    *createIterator(selector) {
      for (const entry of this.map.entries()) {
        yield selector(entry);
      }
    }
  }

  const accessTokenCache = new Cache(1e4);

  async function getAccessToken() {
    if (accessTokenCache.get("accessToken")) {
      return accessTokenCache.get("accessToken");
    }

    const response = await fetch("https://chat.openai.com/api/auth/session");
    if (response.status === 403) {
      return chrome.tabs.create({ url: "https://chat.openai.com/" });
    }

    const json = await response.json().catch(() => ({}));
    if (json.accessToken) {
      accessTokenCache.set("accessToken", json.accessToken);
      return json.accessToken;
    }

    chrome.tabs.create({ url: "https://chat.openai.com/" });
  }

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "https://chatgptbuddy.com/thank-you" });
  }
});

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "GET_ACCESS_TOKEN") {
      sendResponse({ accessToken: getAccessToken() });
    }
  });
})();

