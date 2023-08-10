new fullpage("#fullpage", {
  anchors: ["head", "projects", "about", "contact", "blabla"], // Add anchors for each section/page
  navigation: true, // Add navigation dots
  scrollOverflow: true, // Allow content overflow
  scrollBar: false, // Show scroll bar
  menu: ".header",
  onLeave: function (origin, destination, direction) {
    const header = document.getElementById("header");
    const a = document.getElementById("nav1");
    const a1 = document.getElementById("nav2");
    const a2 = document.getElementById("nav3");
    const a3 = document.getElementById("nav4");

    if (destination.index > 0) {
      header.classList.add("snapped");
      a.classList.add("snapped");
      a1.classList.add("snapped");
      a2.classList.add("snapped");
      a3.classList.add("snapped");
    } else {
      header.classList.remove("snapped");
      a.classList.remove("snapped");
      a1.classList.remove("snapped");
      a2.classList.remove("snapped");
      a3.classList.remove("snapped");
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
