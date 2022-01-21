var h1 = document.getElementById("myName");
var header = document.querySelector("header");
var main = document.querySelector("main");
var body = document.querySelector("body");
var footer = document.querySelector("footer");
var nav = document.querySelector("nav");
var links = document.getElementById("links");
var id = null;
var pageVisited = sessionStorage.getItem("homepage.visited");

window.onload = function () {
  checkbox.checked = false;
  if (pageVisited == null) {
    sessionStorage.setItem("homepage.visited", 1);
    setTimeout(moveH1, 300);
  } else {
    h1.style.top = "0px";
    h1.style.left = "0px";
    links.style.top = "0px";
    links.style.right = "0px";
    links.style.display = "inline";
    showOthers();
  }
};

function moveH1() {
  var h1Rect = h1.getBoundingClientRect();
  var h1PosLeft = h1Rect.left;
  var h1PosTop = h1Rect.top;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (h1PosTop <= 1 && h1PosLeft <= 1) {
      h1.style.top = "0px";
      h1.style.left = "0px";
      clearInterval(id);
      links.style.display = "inline";
      setTimeout(moveLinks, 300);
    } else if (h1PosTop <= 1) {
      h1PosLeft--;
      h1.style.left = h1PosLeft + "px";
    } else if (h1PosLeft <= 1) {
      h1PosTop--;
      h1.style.top = h1PosTop + "px";
    } else {
      h1PosLeft--;
      h1PosTop--;
      h1.style.top = h1PosTop + "px";
      h1.style.left = h1PosLeft + "px";
    }
  }
}

function moveLinks() {
  var bodyRect = body.getBoundingClientRect();
  var linksRect = links.getBoundingClientRect();
  var linksPosRight = bodyRect.right - linksRect.right;
  var linksPosTop = linksRect.top;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (linksPosTop <= 1 && linksPosRight <= 1) {
      links.style.top = "0px";
      links.style.right = "0px";
      clearInterval(id);
      showOthers();
    } else if (linksPosTop <= 1) {
      linksPosRight--;
      links.style.right = linksPosRight + "px";
    } else if (linksPosRight <= 1) {
      linksPosTop--;
      links.style.top = linksPosTop + "px";
    } else {
      linksPosRight--;
      linksPosTop--;
      links.style.top = linksPosTop + "px";
      links.style.right = linksPosRight + "px";
    }
  }
}

function showOthers() {
  header.style.height = "3rem";
  nav.style.display = "inline-block";
  main.style.display = "flex";
  if (window.matchMedia("(max-width: 600px)").matches) {
    nav.className = "responsiveNav";
  } else {
    nav.className = "nav";
  }
}

window.matchMedia("(max-width: 600px)").addEventListener("change", showOthers); // Attach listener function on state changes
