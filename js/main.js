$(document).ready(function(){
  //.depth2
  $(".gnb > li").hover(function(){
    $(".depth2").stop().fadeToggle();
  });


  //슬라이드
  let slidew = $(".swiper").width();
  $(".swiper ul").width(slidew * 3);
  setInterval(function(){
    $(".swiper ul").delay(2500).animate({marginLeft:-slidew})
    $(".swiper ul").delay(2500).animate({marginLeft:-(slidew * 2)})
    $(".swiper ul").delay(2500).animate({marginLeft: 0 })
  });

  //탭
  $("#contents .tab-tit ul li").eq(0).addClass("active");
  $("#contents .tab-cont > ul > li").eq(1).hide();

  $("#contents .tab-tit ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let indexNum = $(this).index();
    $("#contents .tab-cont > ul > li").eq(indexNum).show().siblings().hide();
  });

  //팝업
  $(".popup-wrap").hide();

  $("#contents .open-popup").click(function(){
    $(".popup-wrap").show();
  });
  $("#contents .close-popup").click(function(){
    $(".popup-wrap").hide();
  });
});