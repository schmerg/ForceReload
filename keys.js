// Keyboard keyup listener callback - listen for F5 keystrokes as part of ForceReload extension
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 116) {
        chrome.extension.sendRequest({
            rtype: "refresh",
            code:  e.keyCode,
            alt:   e.altKey,
            ctrl:  e.ctrlKey,
            shift: e.shiftKey
        });
    }
}, false);

