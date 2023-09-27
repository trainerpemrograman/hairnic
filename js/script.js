var typed = new Typed("#element", {
  strings: ["Hair Shampoo For Healthy Hair"],
  typeSpeed: 50,
});

AOS.init();

shampoo.onclick = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    shampoo.style.left = timePassed / 5 + "px";

    if (timePassed > 2000) clearInterval(timer);
  }, 20);
};

function showSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
}

showSpinner();
