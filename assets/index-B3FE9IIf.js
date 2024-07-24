import e from"https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?o.credentials="include":"anonymous"===e.crossOrigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const o={pc:'This is my PC. I work mostly in Python to develop data science projects.\n    I\'ve made a couple of games in that language. I also like Golang and Python. Anyway regardless of the language, I just like programming.\n    Here is my <a href="https://github.com/jslegenddev" target="_blank">Github</a>!',"cs-degree":"This is my CS degree. I hung it on the wall because I'm proud of it. It was a very theoretical degree but I think it gave me a good foundation.","sofa-table":'That\'s my sofa. I like to relax here and watch YouTube.\n  I also make game programming tutorials on YouTube. Go sub to <a href="https://youtube.com/@jslegenddev" target="_blank">my channel</a>! (If you like the content)\n  You\'ll learn how I built this portfolio you\'re currently playing through!',tv:'That\'s my TV. I\'ve been watching tech youtubers a lot recently like :\n   <a href="https://www.youtube.com/@ThePrimeTimeagen" target="_blank">Theprimeagen</a>, <a href="https://www.youtube.com/@t3dotgg" target="_blank">Theo - t3.gg</a>,\n  <a href="https://www.youtube.com/@PirateSoftware" target="_blank">PirateSoftware</a> (sometimes) and <a href="https://www.youtube.com/@MelkeyDev" target="_blank">Melkey</a>!',bed:"This where I sleep. Great ideas comes when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.",resume:'This is my desk and on it is my resume. <a href="https://github.com/JSLegendDev/Resume/blob/main/JSLegend%20Resume-1.pdf" target="_blank">Check it out?</a>\n  Contact me at jslegend@protonmail.com if you have any interesting job opportunities!',projects:'Info about this portfolio : It\'s made with the Kaboom.js library which is a library for making games in JavaScript.\n  Text is rendered with HTML/CSS. So the textbox you\'re currently reading is not rendered within canvas. Learn more about how to use\n  Kaboom.js by watching some of my tutorials <a href="https://youtube.com/@jslegenddev" target="_blank">here</a>.',library:"There are a lot of programming books on my shelves. There is even one in French (I also speak French btw).\n  I probably only read one of them. Who else compulsively buys technical books without ever finishing them?",exit:"If you want to exit JSLegendDev's portfolio, just close the tab."},t=e({global:!1,touchToMouse:!0,canvas:document.getElementById("game"),debug:!1});function n(e,o){const t=document.getElementById("textbox-container"),n=document.getElementById("dialogue");t.style.display="block";let i=0,a="";const s=setInterval((()=>{if(i<e.length)return a+=e[i],n.innerHTML=a,void i++;clearInterval(s)}),1),r=document.getElementById("close");r.addEventListener("click",(function e(){o(),t.style.display="none",n.innerHTML="",clearInterval(s),r.removeEventListener("click",e)})),addEventListener("keypress",(e=>{"Enter"===e.code&&r.click()}))}function i(e){e.width()/e.height()<1?e.camScale(e.vec2(1)):e.camScale(e.vec2(1.5))}t.loadSprite("spritesheet","./spritesheet.png",{sliceX:39,sliceY:31,anims:{"idle-down":936,"walk-down":{from:936,to:939,loop:!0,speed:8},"idle-side":975,"walk-side":{from:975,to:978,loop:!0,speed:8},"idle-up":1014,"walk-up":{from:1014,to:1017,loop:!0,speed:8}}}),t.loadSprite("map","./map.png"),t.setBackground(t.Color.fromHex("#311047")),t.scene("main",(async()=>{const e=(await(await fetch("./map.json")).json()).layers,a=t.add([t.sprite("map"),t.pos(0),t.scale(4)]),s=t.make([t.sprite("spritesheet",{anim:"idle-down"}),t.area({shape:new t.Rect(t.vec2(0,3),10,10)}),t.body(),t.anchor("center"),t.pos(),t.scale(4),{speed:250,direction:"down",isInDialogue:!1},"player"]);for(const i of e)if("boundaries"!==i.name){if("spawnpoints"===i.name)for(const e of i.objects)"player"!==e.name||(s.pos=t.vec2(4*(a.pos.x+e.x),4*(a.pos.y+e.y)),t.add(s))}else for(const e of i.objects)a.add([t.area({shape:new t.Rect(t.vec2(0),e.width,e.height)}),t.body({isStatic:!0}),t.pos(e.x,e.y),e.name]),e.name&&s.onCollide(e.name,(()=>{s.isInDialogue=!0,n(o[e.name],(()=>s.isInDialogue=!1))}));function r(){"down"!==s.direction?"up"!==s.direction?s.play("idle-side"):s.play("idle-up"):s.play("idle-down")}i(t),t.onResize((()=>{i(t)})),t.onUpdate((()=>{t.camPos(s.worldPos().x,s.worldPos().y-100)})),t.onMouseDown((e=>{if("left"!==e||s.isInDialogue)return;const o=t.toWorld(t.mousePos());s.moveTo(o,s.speed);const n=s.pos.angle(o);return n>50&&n<125&&"walk-up"!==s.curAnim()?(s.play("walk-up"),void(s.direction="up")):n<-50&&n>-125&&"walk-down"!==s.curAnim()?(s.play("walk-down"),void(s.direction="down")):Math.abs(n)>125?(s.flipX=!1,"walk-side"!==s.curAnim()&&s.play("walk-side"),void(s.direction="right")):Math.abs(n)<50?(s.flipX=!0,"walk-side"!==s.curAnim()&&s.play("walk-side"),void(s.direction="left")):void 0})),t.onMouseRelease(r),t.onKeyRelease((()=>{r()})),t.onKeyDown((e=>{const o=[t.isKeyDown("right"),t.isKeyDown("left"),t.isKeyDown("up"),t.isKeyDown("down")];let n=0;for(const t of o)t&&n++;if(!(n>1||s.isInDialogue))return o[0]?(s.flipX=!1,"walk-side"!==s.curAnim()&&s.play("walk-side"),s.direction="right",void s.move(s.speed,0)):o[1]?(s.flipX=!0,"walk-side"!==s.curAnim()&&s.play("walk-side"),s.direction="left",void s.move(-s.speed,0)):o[2]?("walk-up"!==s.curAnim()&&s.play("walk-up"),s.direction="up",void s.move(0,-s.speed)):void(o[3]&&("walk-down"!==s.curAnim()&&s.play("walk-down"),s.direction="down",s.move(0,s.speed)))}))})),t.go("main");
