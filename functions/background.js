const color = '#03c0ff';
const bgColor = "#c634eb";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ selectedColor:color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});