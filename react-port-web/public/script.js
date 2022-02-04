myNavbar = document.querySelector(".my-navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myNavbar.style.padding = "10px 200px";
    myNavbar.style.backdropFilter = "blur(30px)";
    myNavbar.style.borderBottom = "1px solid #565656";
  } else {
    myNavbar.style.backdropFilter = "blur(0px)";
    myNavbar.style.padding = "30px 200px";
    myNavbar.style.borderBottom = "0px";
  }
}
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
