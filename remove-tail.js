// ==UserScript==
// @name         去除CSDN尾巴
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   javascript:(function(){ window.csdn.copyright.textData = '' })()
})();
