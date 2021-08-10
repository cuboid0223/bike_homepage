$(document).scroll(function () {
  var st = $(this).scrollTop();
  console.log(st);
  if (st < 3100) {
    $("#characterIntroBox-bgImage").css({
      "background-position": `50% ${st / 80}%`,
    });
    $("#bgImage-gear").css({
      "background-position": `${st / 50}% 50%`,
    });
    $("#bgImage-bikeWithMan").css({
      "background-position": `${50 + -st / 50}% 50%`,
    });

    $("#title-bottom").css({
      transform: `translateX(${st / 60}px)`,
    });
    $("#title-top").css({
      transform: `translateX(${-st / 80}px)`,
    });
  }
});
