// ==UserScript==
// @name         segmentfault
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  segmentfault广告去除
// @author       maojun
// @match        http*://*.segmentfault.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 右侧最上角的招聘提示
    var notices = document.getElementById('notices');
    //删除元素 元素.parentNode.removeChild(元素);
    if (notices!= null) {
        notices.parentNode.removeChild( notices);
    }

    // 首页右上角的一些想投入广告
    var ads = document.getElementsByClassName('mb25');
    for(var i=0;i<ads.length;i++){
        //删除元素 元素.parentNode.removeChild(元素);
        if (ads[i] != null) {
            ads[i].parentNode.removeChild( ads[i]);
        }
    }


    // 首页右上角的一些课程推荐
    var lives = document.getElementsByClassName('sf-live-recommend');
    for(var j=0;i<lives.length;i++){
        //删除元素 元素.parentNode.removeChild(元素);
        if (lives[i] != null) {
            lives[i].parentNode.removeChild( lives[i]);
        }
    }
    //删除个人主页又上角的推广链接

    // 首页右上角的一些想投入广告
    var tuiguang = document.getElementsByClassName('hidden-md');
    for(var k=0;i<tuiguang.length;i++){
        //删除元素 元素.parentNode.removeChild(元素);
        if (tuiguang[i] != null) {
            tuiguang[i].parentNode.removeChild( tuiguang[i]);
        }
    }
})();
