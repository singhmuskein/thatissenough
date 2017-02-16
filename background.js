/**
 * Created by muskein.singh on 17/02/17.
 */
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: "https://google.co.in/"
        };
    },
    {urls: ["*://www.facebook.com/*", "*://www.instagram.com/*", "*://www.twitter.com/*"], types: ["main_frame"]},
    ["blocking"]);