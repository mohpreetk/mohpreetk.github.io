var h1 = document.getElementById("myName");
var header = document.querySelector("header");
var main = document.querySelector("main");
var body = document.querySelector("body");
var footer = document.querySelector("footer");
var nav = document.querySelector("nav");
var links = document.getElementById("links");
var id = null;

window.onload = function () {
<<<<<<< Updated upstream
  checkbox.checked = false
  setTimeout(moveH1, 500);
=======
  checkbox.checked = false;
  if (pageVisited == null) {
    sessionStorage.setItem("homepage.visited", 1);
    setTimeout(moveH1, 3);
  } else {
    h1.style.top = "0px";
    h1.style.left = "0px";
    links.style.top = "0px";
    links.style.right = "0px";
    links.style.display = "inline";
    showOthers();
  }
>>>>>>> Stashed changes
};

function moveH1() {
  var h1Rect = h1.getBoundingClientRect();
  var h1PosLeft = h1Rect.left;
  var h1PosTop = h1Rect.top;
  clearInterval(id);
  id = setInterval(frame, 0.002);
  function frame() {
    if (h1PosTop <= 3 && h1PosLeft <= 3) {
      h1.style.top = "0px";
      h1.style.left = "0px";
      clearInterval(id);
      links.style.display = "inline";
<<<<<<< Updated upstream
      setTimeout(moveLinks, 500);
    } else if (h1PosTop <= 1) {
      h1PosLeft--;
=======
      setTimeout(moveLinks, 3);
    } else if (h1PosTop <= 3) {
      h1PosLeft-=3;
>>>>>>> Stashed changes
      h1.style.left = h1PosLeft + "px";
    } else if (h1PosLeft <= 3) {
      h1PosTop-=3;
      h1.style.top = h1PosTop + "px";
    } else {
      h1PosLeft-=3;
      h1PosTop-=3;
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
  id = setInterval(frame, 0.002);
  function frame() {
    if (linksPosTop <= 3 && linksPosRight <= 3) {
      links.style.top = "0px";
      links.style.right = "0px";
      clearInterval(id);
      showOthers();
    } else if (linksPosTop <= 3) {
      linksPosRight-=3;
      links.style.right = linksPosRight + "px";
    } else if (linksPosRight <= 3) {
      linksPosTop-=3;
      links.style.top = linksPosTop + "px";
    } else {
      linksPosRight-=3;
      linksPosTop-=3;
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
    footer.appendChild(nav);
    nav.style.bottom = "10px";
    nav.style.top = "unset";
    footer.style.visibility = "visible";
  } else {
    nav.style.bottom = "unset";
    nav.style.top = "10px";
    header.appendChild(nav);
    footer.style.visibility = "hidden";
  }
}

window.matchMedia("(max-width: 600px)").addEventListener("change", showOthers); // Attach listener function on state changes
