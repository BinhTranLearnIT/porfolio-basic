//  <-- Header Navbar -->
const links = document.querySelectorAll("#navbar a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Xoá active ở tất cả link
    console.log();
    // event.preventDefault();
    links.forEach((l) => l.classList.remove("a--active"));
    // Gán active cho link vừa click
    this.classList.add("a--active");
  });
});

//  <--  Navbar Scroll -->
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
