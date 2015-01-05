$(function(){
  console.log( "ready!" );

  $(".container").fadeIn(500).animate({
    height: '45%',
    color: 'black'
  }, 1000).delay(200).animate({
    width: '60%',
    padding: '2%',
  }, 1000);

  $(".main").delay(3000).fadeIn(1500);
  $(".main2, .fa-chevron-down").delay(4600).slideDown(500);

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

  $("#enter").on('click', function(){
    $('#bgvid').fadeToggle(2000);
    // move video or somehow slide down to next page on chevron
  })
});