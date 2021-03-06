var close = document.querySelector(".page-header__toggle");

var popup = document.querySelector(".site-list");

popup.classList.add("site-list--close");
close.classList.add("page-header__toggle--show");

close.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  popup.classList.toggle("site-list--close");
  close.classList.toggle("page-header__toggle--open");
});

Dropzone.autoDiscover = false;
var dz = new Dropzone('div#dz', {
  url: "/file/post",
  capture: false,
  acceptedFiles: 'image/*;capture=camera'
});
