if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,c)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let a={};const r=i=>n(i,o),l={module:{uri:o},exports:a,require:r};e[o]=Promise.all(s.map((i=>l[i]||r(i)))).then((i=>(c(...i),a)))}}define(["./workbox-c1760cce"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.a8c19d4f.js",revision:null},{url:"assets/index.f827bbfa.css",revision:null},{url:"assets/ListView.2602931f.css",revision:null},{url:"assets/ListView.bd3efd0f.js",revision:null},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:null},{url:"assets/materialdesignicons-webfont.9bdfaf27.eot",revision:null},{url:"assets/materialdesignicons-webfont.c14484cf.ttf",revision:null},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:null},{url:"assets/SettingViews.07958cfb.css",revision:null},{url:"assets/SettingViews.c79d8c9e.js",revision:null},{url:"assets/VTable.9e76ea37.css",revision:null},{url:"assets/VTable.af0510aa.js",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"e156f4a588667fee81ef6f6fd9e2d835"},{url:"favicon-32x32.png",revision:"4da2b534c404992690ecd0c3fe7c4b84"},{url:"favicon.ico",revision:"79c3c6922e5b1531989e70c2640aeabf"},{url:"img/icons/android-chrome-192x192.png",revision:"3efdba470584d45972f5149a7ef67b3b"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"3efdba470584d45972f5149a7ef67b3b"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"c8e97373e7df60114322dc0f7ac23a17"},{url:"img/icons/android-chrome.png",revision:"c8e97373e7df60114322dc0f7ac23a17"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"92d1a5ee401ddd93c6864d3371cf8d5b"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"b635a3208f088c47b0ba5eb133e1922a"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"9416f8cc628d2c80c408f84a5676b95c"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"dbf6e49cef0524363a4a8f8a900d7bfb"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"d29d58e4f7f3122fe5c69a6e0a3639f4"},{url:"img/icons/apple-touch-icon.png",revision:"9416f8cc628d2c80c408f84a5676b95c"},{url:"img/icons/favicon.ico",revision:"79c3c6922e5b1531989e70c2640aeabf"},{url:"img/icons/msapplication-icon-144x144.png",revision:"024a6a443a6f0fe004af156b296db9a6"},{url:"img/icons/mstile-150x150.png",revision:"72c4119bdf6e48a6b870a7fb2cab510e"},{url:"img/icons/safari-pinned-tab.svg",revision:"6486b2e1e9b8f281e294028bc5c09e2a"},{url:"index.html",revision:"a3c7accdf5ac12ef187c6ef6949ff53c"},{url:"./img/icons/android-chrome-192x192.png",revision:"3efdba470584d45972f5149a7ef67b3b"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"3efdba470584d45972f5149a7ef67b3b"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"c8e97373e7df60114322dc0f7ac23a17"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"dbf6e49cef0524363a4a8f8a900d7bfb"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"d29d58e4f7f3122fe5c69a6e0a3639f4"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"92d1a5ee401ddd93c6864d3371cf8d5b"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"b635a3208f088c47b0ba5eb133e1922a"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"9416f8cc628d2c80c408f84a5676b95c"},{url:"./img/icons/apple-touch-icon.png",revision:"9416f8cc628d2c80c408f84a5676b95c"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"024a6a443a6f0fe004af156b296db9a6"},{url:"./img/icons/mstile-150x150.png",revision:"72c4119bdf6e48a6b870a7fb2cab510e"},{url:"manifest.webmanifest",revision:"32bd86c78aac42ffdb19187baa23a1cd"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
