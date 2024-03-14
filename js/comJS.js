$(document).ready(function() {
  $('.btn-result').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.targetElement').offset().top
    }, 10); // 1000 是滾動的動畫時間，以毫秒為單位
  });
});


$(function () {
  $("#navbar-placeholder").load("common/header.html");
  $("#footer-placeholder").load("common/footer.html");
});