new fullpage("#fullpage", {
  anchors: ["head", "aboutshort", "projects", "quote", "aboutlong", "contact"],
  navigation: false,
  scrollOverflow: true,
  scrollBar: false,
  menu: ".header",
  autoScrolling: true,
  onLeave: function (origin, destination, direction) {
    const header = document.getElementById("header");
    const a = document.getElementById("nav1");
    const a1 = document.getElementById("nav2");
    const a2 = document.getElementById("nav3");
    const a3 = document.getElementById("nav4");
    const a4 = document.getElementById("nav5");
    const a5 = document.getElementById("nav6");
    const gif = document.querySelector(".header-gif");

    if (destination.index > 0) {
      header.classList.add("snapped");
      a.classList.add("snapped");
      a1.classList.add("snapped");
      a2.classList.add("snapped");
      a3.classList.add("snapped");
      a4.classList.add("snapped");
      a5.classList.add("snapped");
      gif.classList.add("snapped");
    } else {
      header.classList.remove("snapped");
      a.classList.remove("snapped");
      a1.classList.remove("snapped");
      a2.classList.remove("snapped");
      a3.classList.remove("snapped");
      a4.classList.remove("snapped");
      a5.classList.remove("snapped");
      gif.classList.remove("snapped");
    }
  },
  afterLoad: function (origin, destination, direction) {
    if (destination.anchor === "projects") {
      fullpage_api.setAllowScrolling(true, "down");
      fullpage_api.setKeyboardScrolling(true, "down");
    } else {
      fullpage_api.setAllowScrolling("auto");
      fullpage_api.setKeyboardScrolling("auto");
    }
  },
});

function topFunction() {
  fullpage_api.moveTo(1);
}

window.onload = function () {
  const top = document.getElementById("top");

  top.addEventListener("click", topFunction);
};
