window.onresize = function() {
  this.location.reload();
};

var navFunds = document.querySelector(".nav-funds");
var balance = 0.0;
navFunds.addEventListener("click", function(e) {
  balance += 1;
  document.querySelector(".money").textContent = balance.toFixed(2);
});

function myFunction(x) {
  x.classList.toggle("change");
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(e) {
  if (document.querySelector(".left-box").style.display === "none") {
    document.querySelector(".left-box").style =
      "display: block; width: 100%; height: 12vh;";
  } else {
    document.querySelector(".left-box").style.display = "none";
  }
});

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(e) {
  if (document.querySelector(".funds").style.display === "none") {
    document.querySelector(".funds").style =
      "display: block; width: 100%; height: 12vh;";
  } else {
    document.querySelector(".funds").style.display = "none";
  }
});
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(e) {
  if (document.querySelector(".nav-funds").style.display === "none") {
    document.querySelector(".nav-funds").style =
      "display: block; width: 100%; height: 12vh;";
  } else {
    document.querySelector(".nav-funds").style.display = "none";
  }
});
