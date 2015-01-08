$(function(){

  // opening animation //
  console.log( "ready!" );

  $(".firstcontainer").fadeIn(200).animate({
    height: '30%',
    color: 'black'
  }, 800).delay(200).animate({
    width: '60%',
    padding: '2%',
  }, 800);

  $(".main").delay(1500).fadeIn(1500);
  $(".main2, .fa-chevron-down").delay(2000).slideDown(500);

  // waypoints variables //
  var $bgvid = $("#bgvid")
  var $nav = $("#nav");
  var $nav_links = $("#nav a")
  var $para_links = $('#para')
  var $intro = $("#intro");
  var $about = $("#about");
  var $experience = $("#experience");
  var $tech = $("#tech");
  var $education = $("#education");
  var $real = $("#real");
  var $intromenu = $("#intromenu");
  var $aboutmenu = $("#aboutmenu");
  var $experiencemenu = $("#experiencemenu");
  var $techmenu = $("#techmenu");
  var $educationmenu = $("#educationmenu");
  var $realmenu = $("#realmenu");

  // waypoints //

  $nav_links.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        easing: 'easeInOutExpo',
        offset: { 'left':0, 'top': -130 }
      }
    );
    removeActive();
    $(this).addClass('active')
  });

  $para_links.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        easing: 'easeInOutExpo',
        offset: { 'left':0, 'top':-130 }
      }
    );
  });

//nav menu waypoints//

  $intro.waypoint({
    handler: function(direction){
      if (direction == "down") {
        removeActive();
        $intromenu.addClass('active')
      }
    },
    offset: 100
  })

  $intro.waypoint({
    handler: function(direction){
      if (direction == "up") {
        removeActive();
        $intromenu.addClass('active')
      }
    },
    offset: function() {
      return -$(this).height();
    }
  })

  $about.waypoint({
    handler: function(direction){
      if (direction == "down") {
        removeActive();
        $aboutmenu.addClass('active')
      }
    },
    offset: -10
  })

  $about.waypoint({
    handler: function(direction){
      if (direction == "up") {
        removeActive();
        $aboutmenu.addClass('active')
      }
    },
    offset: function() {
      return -$(this).height();
    }
  })



  function removeActive() {
    $nav_links.removeClass('active');
  };


  // pause button //

  var vid = document.getElementById("bgvid");
  var pauseButton = document.getElementById("vidpause");
  function vidFade() {
    vid.classList.add("stopfade");
  }
  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
      vid.pause();
      pauseButton.innerHTML = "<i class='fa fa-play'></i>";
    }
  })

  // ending introduction //

  // here maybe instead of video fading out just make the backgrounf opaque..

  $("#enter, #topmenu").on('click', function(){
    $bgvid.addClass("stopfade");
    $('#maincontent').delay(500).fadeToggle(200);
    $('#section1, #vidpause').fadeToggle();
    $('#nav').delay(600).slideToggle(1000);
    // move video or somehow slide down to next page on chevron
  })
});