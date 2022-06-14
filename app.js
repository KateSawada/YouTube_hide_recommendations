let hide_targets = [{
        className: "ytd-rich-grid-renderer",
        id: "contents",
    },
    {
        className: "style-scope ytd-watch-flexy",
        id: "secondary",
    }
];


function hideTargets() {
    for (let i = 0; i < hide_targets.length; i++) {
        // id="secondary" が2つあるため, 候補を絞って検索
        candidates = document.getElementsByClassName(hide_targets[i].className)
        for (let j = 0; j < candidates.length; j += 1) {
            if (candidates[j].id == hide_targets[i].id) {
                candidates[j].style.display = "none";
                return true;
            }
        }
    }
    return false;
}
//window.addEventListener('DOMContentLoaded', (event) => {});
let repeatId = setInterval(() => {
    if (hideTargets()) {
        //clearInterval(repeatId);
    }
}, 100);
setTimeout(() => { hideTargets(); }, 5000)