!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i.p,i.p,i.p;const r=document.createElement("canvas");r.width=250,r.height=1334/3;const n=r.getContext("2d");let a={time:0,character:{image:m("https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png"),x:0,y:0,height:18,width:16,scale:2,currentFrame:0,frameArray:[0,1,0,2],frameRate:4,direction:0,animationTime:0,name:"character",imageRows:{down:0,up:1,left:2,right:3}},grimReaper:{image:m("https://opengameart.org/sites/default/files/underworld_load-atlas-32x32_1.png"),x:30,y:60,height:32,width:32,scale:1.5,currentFrame:0,frameArray:[3,4,5],frameRate:5,direction:0,animationTime:0,name:"grimReaper",imageRows:{down:2,up:0,left:1,right:3}},chicken:{image:m("https://opengameart.org/sites/default/files/chicken_walk.png"),x:120,y:210,height:32,width:32,scale:1.25,currentFrame:0,frameArray:[0,1,2,3],frameRate:5,direction:0,animationTime:0,name:"chicken",imageRows:{down:2,up:0,left:1,right:3}},snake:{image:m("https://opengameart.org/sites/default/files/snake-NESW_0.png"),x:60,y:280,height:32,width:32,scale:1.5,currentFrame:0,frameArray:[0,1,2],frameRate:5,direction:0,animationTime:0,name:"snake",imageRows:{down:2,up:0,left:3,right:1}},pressedKeys:{}};function o(e){if(!e.image)return;const t=e.frameRate;let i=Math.floor(a.time/1e3*t);i%=e.frameArray.length,n.drawImage(e.image,e.frameArray[i]*e.width+(e.offset?e.offset:0),e.direction*e.height+(e.offset?e.offset:0),e.width,e.height,e.x,e.y,e.width*e.scale,e.height*e.scale)}function s(e,t){let i=[];"chicken"===e.name&&(i=["down","down","left","left","up","up","right","right","up","up","right","right","down","down","left","left"]),"snake"===e.name&&(i=["left","left","left","right","right","right"]),"grimReaper"===e.name&&(i=["up","down"]);const n=e.frameRate/2;let o=i[Math.floor(a.time/1e3*n)%i.length];"up"===o?(e.y-=t,e.direction=e.imageRows.up):"down"===o&&(e.y+=t,e.direction=e.imageRows.down),"left"===o?(e.x-=t,e.direction=e.imageRows.left):"right"===o&&(e.x+=t,e.direction=e.imageRows.right);let s=r.width-2*e.width;e.x>s?e.x=s:e.x<0&&(e.x=0);let c=r.height-2*e.height;e.y>c?e.y=c:e.y<0&&(e.y=0)}function c(e){!function(e,t){a.pressedKeys.w?(e.y-=t,e.direction=e.imageRows.up):a.pressedKeys.s&&(e.y+=t,e.direction=e.imageRows.down),a.pressedKeys.a?(e.x-=t,e.direction=e.imageRows.left):a.pressedKeys.d&&(e.x+=t,e.direction=e.imageRows.right);let i=r.width-2*e.width;e.x>i?e.x=i:e.x<0&&(e.x=0);let n=r.height-2*e.height;e.y>n?e.y=n:e.y<0&&(e.y=0)}(a.character,3),s(a.chicken,2),s(a.grimReaper,1),s(a.snake,1),a.time+=e}let d=0;function m(e){const t=new Image;return t.src=e,t}const g=m("https://opengameart.org/sites/default/files/preview_241.png");window.addEventListener("keydown",(function(e){a.pressedKeys[e.key]=!0}),!1),window.addEventListener("keyup",(function(e){a.pressedKeys[e.key]=!1}),!1),document.getElementById("app").append(r);const f=new Date(Date.now()).toLocaleTimeString(),l=Date.now();console.log(f+"; milliseconds: "+l),window.requestAnimationFrame((function e(t){window.requestAnimationFrame(e),c(t-d),n.clearRect(0,0,r.width,r.height),n.imageSmoothingEnabled=!1,n.drawImage(g,0,0,750,1334,0,0,750,1334),o(a.chicken),o(a.grimReaper),o(a.snake),o(a.character),d=t}))}]);