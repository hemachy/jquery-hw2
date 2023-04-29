let hideBtn=$(`.hide`);
let showBtn=$(`.show`);

let box=$(`.box`)
hideBtn.click(function (){

box.slideUp(700)
})

showBtn.click(function(){
box.slideDown(700)
})

let toggleBtn=$(`.toggle`);
toggleBtn.click(function(){
box.fadeToggle(800)


})

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
