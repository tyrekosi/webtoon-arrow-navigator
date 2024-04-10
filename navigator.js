// ==UserScript==
// @name         Webtoon left and right hotkeys
// @namespace    tyrekosi_github
// @version      1.0
// @description  Arrow keys left and right for webtoon canvas, because god is it annoying to click buttons
// @author       tyrekosi
// @match        https://www.webtoons.com/*/canvas/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        if (e.key === "ArrowRight") {
            const nextButton = document.querySelector('a.pg_next._nextEpisode');
            if (nextButton) {
                window.location.href = nextButton.href;
            }
        }
        else if (e.key === "ArrowLeft") {
            const prevButton = document.querySelector('a.pg_prev._prevEpisode');
            if (prevButton) {
                window.location.href = prevButton.href;
            }
        }
    });
})();

