$(document).ready(function () {
  // header 메뉴
  $("header ul li").click(function () {
    let i = $(this).index();

    $("header ul li").removeClass("on");
    $(this).addClass("on");

    $("#sNav a").removeClass("on");
    $("#sNav a").eq(i).addClass("on");
  });

  //   전체 네비
  $("#sNav a").click(function () {
    let i = $(this).index();

    $("#sNav a").removeClass("on");
    $(this).addClass("on");

    $("header ul li").removeClass("on");
    $("header ul li").eq(i).addClass("on");
  });

  //   스크롤
  $(window).scroll(function () {
    let sc = $(document).scrollTop();

    let homeT = $("#home").offset().top - 150;
    let ameT = $("#aboutme").offset().top - 150;
    let portT = $("#portfolio").offset().top - 150;
    let designT = $("#design").offset().top - 150;

    if (homeT <= sc && sc < ameT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(0).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(0).addClass("on");
    } else if (ameT <= sc && sc < portT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(1).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(1).addClass("on");
    } else if (portT <= sc && sc < designT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(2).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(2).addClass("on");
    } else if (designT <= sc) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(3).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(3).addClass("on");
    }
  });

  //   modal 연결
  $(".swiper-slide .opmodal").click(function () {
    $("#modal").addClass("open");
  });

  $(".mbox button").click(function () {
    $("#modal").removeClass("open");
  });
});
