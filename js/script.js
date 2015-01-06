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

  var $nav = $("#nav");
  var $nav_links = $("nav a")
  var $intro = $("#intro");
  var $intromenu = $("#intromenu");

  // waypoints //

  $nav_links.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000,
        easing: 'linear',
        offset: { 'left':0, 'top':500 }
      }
    );
  });

  $intro.waypoint({
    handler: function(direction){
      if (direction == "down") {
        removeActive();
        $intromenu.addClass('active')
      }
    },
    offset: -50
  })

  $intro.waypoint({
    handler: function(direction){
      if (direction == "up") {
        removeActive();
        $nav_one.addClass('active')
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
  vid.addEventListener('ended', function() {
    vid.pause();
    vidFade();
  });
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

  $("#enter, #topmenu").on('click', function(){
    $('#bgvid').fadeToggle(15000);
    $('#maincontent').delay(500).fadeToggle();
    $('#section1, #vidpause').fadeToggle();
    $('#nav').delay(600).slideToggle(1000);
    // move video or somehow slide down to next page on chevron
  })
});