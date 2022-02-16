
document.addEventListener("scroll", handleScroll);


var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var r = 0.1;

  if ((document.documentElement.scrollTop / h ) > r) {

    if(!scrollToTopBtn.classList.contains("showScrollBtn"))
    scrollToTopBtn.classList.add("showScrollBtn")
  } else {

    if(scrollToTopBtn.classList.contains("showScrollBtn"))
    scrollToTopBtn.classList.remove("showScrollBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}