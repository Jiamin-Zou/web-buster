document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("canvas"),t=e.getContext("2d");e.width=800,e.height=500;let n=new Image;n.src="../src/assets/images/sprites/player_walking.png";let d=new Image;d.src="../src/assets/images/background/game_bg.png";let a=0,i=0,s=0;document.addEventListener("keydown",(t=>{["d","a"].indexOf(t.key)>=0&&(i++,i%=7),"d"===t.key&&(a=0,s+5<=e.width-64&&(s+=5)),"a"===t.key&&(a=1,s-5>=0&&(s-=5))})),document.addEventListener("keyup",(e=>{"d"===e.key&&(i=0),"a"===e.key&&(i=0)})),function g(){t.clearRect(0,0,e.width,e.height),t.drawImage(d,0,0,e.width,e.height),t.drawImage(n,32*i,33*a,32,33,s,e.height-130,64,66),window.setTimeout((()=>{requestAnimationFrame(g)}),1e3/30)}()}));
//# sourceMappingURL=main.js.map