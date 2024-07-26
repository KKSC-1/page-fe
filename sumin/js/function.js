$(function(){
  //변수
  var $dePrev = $('#design>.prev');
  var $deNext = $('#design>.next');
  var $design = $('#design>.container>ul');
  var $designs = $('#design>.container>ul>li');
  var $gallOpen = $('.gallOpen');
  var $gallClose = $('.gallClose');
  var $gall = $('#design>.gallery_bg');
  var $gallImg = $('#design>.gallery_bg>.gallery_img');
  var nowIdx = 0;
  var isPrev = false;

  //프로젝트
  function galleryMove(){
    var leftVal = isPrev ? '-990px' : '990px';
    var animateVal = isPrev ? '990px' : '0';

    $designs.eq(nowIdx).css({left: leftVal}).stop().animate({left:0}, 500);
    $designs.eq(nowIdx).siblings().css({'left': '990px'}).appendTo($design);
  }

  $dePrev.on('click', function(){
    isPrev = true;

    if(nowIdx > 0){
      nowIdx--;
    } else {
      nowIdx = 2;
    }

    galleryMove();
  });

  $deNext.on('click', function(){
    isPrev = false;

    if(nowIdx < 2){
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    galleryMove();
  });

  $gallOpen.on('click', function(event){
    event.preventDefault();
    var src = $(this).attr('href');

    $gallImg.css({
      backgroundImage: 'url(' + src + ')'
    }).parent().fadeIn();
  });

  $gallClose.on('click', function(event){
    event.preventDefault();
    $gall.fadeOut();
  });

  $gall.on('click', function(){
    $gall.fadeOut();
  });
});

  
