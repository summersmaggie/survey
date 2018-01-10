$(document).ready(function() {
  $("#btn").click(function() {
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name-flavor]:checked").val();
    var dob = $("#born").val();

    $(".beverage").text(beverage);
    $(".flavor").text(flavor);
    $(".dob").text(dob);

    $("#story").show();
  });

});
