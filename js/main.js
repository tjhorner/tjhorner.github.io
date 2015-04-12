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
          "^2000Here we go!^1000"],
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
      key: 'pk_live_wjdMqy4jpe6g4WtqWUyqmDge',
      image: 'http://gravatar.com/avatar/eeadfdd648bb640c78cda62b675885cf?s=100',
      token: function(token) { }
    });

    $('#donate').on('click', function(e) {
      handler.open({
        name: "TJ Horner",
        description: "You're awesome!",
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
  if(!data.toggl.current){
    $("#project-tense").text("I was");
  }
  $("#project").text(data.toggl.project);
  $("#project-description").text(data.toggl.entry);
  var lastUpdated = new Date(data.toggl.lastUpdated);
  $("#project-last-updated").text((lastUpdated.getHours() > 12 ? (lastUpdated.getHours() - 12) : lastUpdated.getHours()) + ":" + lastUpdated.getMinutes());
}
