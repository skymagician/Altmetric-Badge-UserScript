// ==UserScript==
// @name         Altmetric Badge (Global)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically shows the Altmetric badge on academic publisher websites. Uses Google Favicon service for high-quality icons.
// @author       skymagician
// @match        https://webvpn.zju.edu.cn/*
// @match        https://doi.org/*
// @match        https://*.sciencedirect.com/*
// @match        https://*.nature.com/*
// @match        https://*.wiley.com/*
// @match        https://*.springer.com/*
// @match        https://*.tandfonline.com/*
// @match        https://academic.oup.com/*
// @match        https://*.aeaweb.org/*
// @match        https://*.sagepub.com/*
// @match        https://*.cambridge.org/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://*.acm.org/*
// @match        https://*.pnas.org/*
// @match        https://*.sciencemag.org/*
// @match        https://*.science.org/*
// @match        https://*.jamanetwork.com/*
// @match        https://*.bmj.com/*
// @match        https://*.uchicago.edu/*
// @match        https://arxiv.org/*
// @grant        GM_addStyle
// @icon         https://www.google.com/s2/favicons?domain=altmetric.com&sz=64
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/skymagician/Altmetric-Badge-UserScript/main/Altmetric-Badge-Global.user.js
// @updateURL    https://raw.githubusercontent.com/skymagician/Altmetric-Badge-UserScript/main/Altmetric-Badge-Global.user.js
// ==/UserScript==

(function () {
    'use strict';
    // === Config ===
    // Google Sourced Icon (High Quality, requires network access to Google)
    const LOGO_URL = "https://www.google.com/s2/favicons?domain=altmetric.com&sz=128";
    const BOTTOM_DISTANCE = "30px";
    const AUTO_OPEN = false;

    const css = `
        #altmetric-master-btn { position: fixed; bottom: ${BOTTOM_DISTANCE}; right: 0; z-index: 2147483647; background: #fff; border: 1px solid #ddd; border-right: none; padding: 8px; border-radius: 8px 0 0 8px; cursor: pointer; box-shadow: -2px -2px 10px rgba(0,0,0,0.1); width: 48px; height: 48px; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; user-select: none; }
        #altmetric-master-btn:hover { width: 58px; background: #fcfcfc; box-shadow: -2px -4px 12px rgba(0,0,0,0.15); }
        #altmetric-master-btn img { width: 32px; height: 32px; object-fit: contain; transition: transform 0.3s ease; }
        #altmetric-master-btn:active img { transform: scale(0.9); }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        #altmetric-master-btn.is-loading img { animation: spin 0.8s linear infinite; opacity: 0.8; }
    `;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = css;
    document.head.appendChild(styleEl);

    var btn = document.createElement("div");
    btn.id = "altmetric-master-btn";
    btn.title = "Toggle Altmetric Badge";
    btn.innerHTML = `<img src="${LOGO_URL}" alt="Altmetric">`;
    document.body.appendChild(btn);

    var isToggling = false;
    btn.onclick = function (e) {
        e.stopPropagation(); e.preventDefault();
        if (isToggling) return;
        isToggling = true;
        var popover = document.getElementById('_altmetric_popover_el');
        if (!popover) { loadScript(); }
        else { popover.remove(); document.querySelectorAll('script[src*="d1bxh8uas1mnw7.cloudfront.net"]').forEach(s => s.remove()); setTimeout(() => { isToggling = false; }, 300); }
    };

    function loadScript() {
        btn.classList.add('is-loading');
        document.querySelectorAll('script[src*="d1bxh8uas1mnw7.cloudfront.net"]').forEach(s => s.remove());
        var oldPopover = document.getElementById('_altmetric_popover_el');
        if (oldPopover) oldPopover.remove();
        var script = document.createElement("script");
        script.setAttribute("src", "https://d1bxh8uas1mnw7.cloudfront.net/assets/content.js?" + Date.now());
        script.setAttribute("type", "text/javascript");
        script.setAttribute("async", "true");
        document.body.appendChild(script);
        var checkTimer = setInterval(() => { var p = document.getElementById('_altmetric_popover_el'); if (p) { clearInterval(checkTimer); btn.classList.remove('is-loading'); isToggling = false; } }, 500);
        setTimeout(() => { clearInterval(checkTimer); btn.classList.remove('is-loading'); isToggling = false; }, 5000);
    }
    if (AUTO_OPEN) { isToggling = true; setTimeout(loadScript, 1500); }
})();
