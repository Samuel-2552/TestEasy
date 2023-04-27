((window,chrome) => {
    "use strict";
    window.addEventListener('load', () => {
        chrome.runtime.sendMessage({action: "GET_ACCESS_TOKEN"}, (response) => {
            if (response.accessToken) {
                const iframe = document.createElement('iframe');
                iframe.src = 'https://chat.openai.com/chat';
                iframe.frameBorder = 0;
                iframe.style.width = '770px';
                iframe.style.height = '560px';
                document.getElementById('app').appendChild(iframe);
            }
        });
    });
})(window,chrome);
