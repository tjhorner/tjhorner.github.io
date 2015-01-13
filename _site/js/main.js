Site = (function(){
  var dob = new Date("3 December 2000 11:00:00");

  setInterval(function(){
    var now = new Date();
    var duration = now - dob;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(9).toString().split('.');
    $age.text(majorMinor[0] + "." + majorMinor[1]);
  }, 10);

  $(document).ready(function(){
    $age = $('#age');
  });
}())
