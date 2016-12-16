Site = (function(){
  var dob = new Date("3 December 2000 21:00:00");
  var internDate = new Date("24 February 2015 00:00:00");

  setInterval(function(){
    var now = new Date();
    var duration = now - dob;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(9).toString().split('.');
    $age.text(majorMinor[0] + "." + majorMinor[1]);
  }, 100);

  $(document).ready(function(){
    $(function(){
      $(".content").addClass("setup");
      var $typer = $(".term-text").typed({
        strings: [
          "Hi.",
          "How are you?",
          "Welcome to my website.",
          "This is awkward...^1000 I'll get some stuff set up, stay right here.",
          "^1000Here we go!^1000"],
        cursorChar: "_",
        typeSpeed: 20,
        callback: function(){
          $(".content").removeClass("setup");
          $("#terminal").slideUp();
          $("#intro-completed").show();
        }
      });

      setTimeout(function(){
        $("#term-skip").fadeIn();
      }, 2000);

      if(window.location.hash === "#skip"){
        $(".content").removeClass("setup");
        $("#terminal").slideUp();
        $("#intro-completed").text("");
      }

      $("#term-skip").click(function(){
        $(".content").removeClass("setup");
        $("#terminal").slideUp();
        $("#intro-completed").text("");
      })
    });

    $age = $('#age');

    if(new Date() < internDate){
      $('#starting').text(", starting on February 24");
      $('#internstatus').text("will be");
    }else{
      $('#internstatus').text("am");
    }

    var handler = StripeCheckout.configure({
      key: 'pk_live_lUHrW5Ew681dVjezph8ZZpoB',
      image: 'https://gravatar.com/avatar/eeadfdd648bb640c78cda62b675885cf?s=100',
      token: function(token) { }
    });

    $('#donate').on('click', function(e) {
      handler.open({
        name: "Donation to TJ Horner",
        description: "I wanted to implement the Stripe API somewhere.",
        amount: 100
      });
      e.preventDefault();
    });

    $(window).on('popstate', function() {
      handler.close();
    });
  });
}());

load = function(data){
  // Toggl
  if(!data.toggl.current){
    $("#project-tense").text("I was last");
  }
  $("#project").text(data.toggl.project);
  $("#project-description").text(data.toggl.entry);
  var lastUpdated = new Date(data.toggl.lastUpdated);
  $("#project-last-updated").text((lastUpdated.getHours() > 12 ? (lastUpdated.getHours() - 12) : lastUpdated.getHours()) + ":" + (lastUpdated.getMinutes() < 10 ? ("0" + lastUpdated.getMinutes()) : lastUpdated.getMinutes()));

  // Last.fm
  if(data.lastfm.playing){
    $("#music-tense").text("Here's what I'm listening to right now!");
  }
  $(".music-display").css("background-image", "url(" + data.lastfm.image + ")");
  $("#music-track").text(data.lastfm.track);
  $("#music-artist").text(data.lastfm.artist);

  if(data.steam.game.playing){
    var statusHtml = "I'm playing <a href='http://store.steampowered.com/app/" + data.steam.game.appid + "/'>" + data.steam.game.title + "</a>.";
    if(data.steam.game.server){
      statusHtml += " You can <a href='steam://connect/" + data.steam.game.server + "'>join me</a> if you want!";
    }
    statusHtml += "<br><br>";
    $("#steam-status").html(statusHtml);
    $("#steam-img").attr("src", data.steam.game.images.logo).fadeIn("fast");
  }

  if(data.hardware.reported){
    $("#cpu-usage").text(data.hardware.results["CPU usage"]);
    $("#cpu-temp").text(data.hardware.results["CPU1 temperature"]);

    $("#gpu-usage").text(data.hardware.results["GPU usage"]);
    $("#gpu-temp").text(data.hardware.results["GPU temperature"]);

    $("#ram-usage").text(data.hardware.results["RAM usage"]);
  }

  if(data.phone.updatedAt){
    var loc = { lat: data.phone.latitude, lng: data.phone.longitude };

    var map = new google.maps.Map($(".map")[0], {
      zoom: 16,
      draggable: false,
      rotateControl: false,
      scaleControl: false,
      zoomControl: false,
      streetViewControl: false,
      scrollwheel: false,
      keyboardShortcuts: false,
      mapTypeControl: false,
      center: loc
    });

    var marker = new google.maps.Marker({
      position: loc,
      icon: "/img/tj-transparent.png",
      title: "This is where I am!",
      map: map
    });

    var iwText = "<b>This is where I am!</b> My phone is at " + data.phone.battery + "% and it is " + (data.phone.charging ? "charging" : "not charging") + ". This location was last updated " + moment(data.phone.updatedAt).fromNow() + ".";

    var iw = new google.maps.InfoWindow({
      content: iwText
    });

    marker.addListener("click", function() {
      iw.open(map, marker);
    });

    iw.open(map, marker);
  }
}
