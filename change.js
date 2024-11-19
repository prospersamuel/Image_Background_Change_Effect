let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("original-img")
let line = document.getElementById("line")
let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px"; 


line.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}