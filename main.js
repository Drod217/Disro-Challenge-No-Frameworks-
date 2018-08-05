var navFunds = document.querySelector(".nav-funds");
var balance = 0.0;
navFunds.addEventListener("click", function(e) {
  balance += 1;
  document.querySelector(".money").textContent = balance.toFixed(2);
});
