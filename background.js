'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() { //because added rules are saved across browser restarts
        chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: '/'},
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
