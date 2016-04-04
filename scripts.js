//business logic
function Resident(name, section, restaurant, bar, entertainment, bridge) {
  this.residentName = name;
  this.residentSection = section;
  this.residentRestaurant = restaurant;
  this.residentBar = bar;
  this.residentEntertainment = entertainment;
  this.residentBridge = bridge;
}

// user interface logic
$(document).ready(function(){
  $("form#newResident").submit(function(event){
    event.preventDefault();

    var inputNewName = $("input#newName").val();
    var inputSection = $("input#newSection").val();
    var inputRestaurant = $("input#newRestaurant").val();
    var inputBar = $("input#newBar").val();
    var inputEntertainment = $("input#newEntertainment").val();
    var inputBridge = $("input#newBridge").val();

    var newResident = new Resident(inputNewName, inputSection, inputRestaurant, inputBar, inputEntertainment, inputBridge);

    $("ul#portlandInfo").append("<li><span class='resident'>" + newResident.residentName + "</span></li>");

    $(".resident").last().click(function() {
      $("#showPortland").show();
      $("#showPortland h2").text(newResident.residentName);
      $(".fullName").text(newResident.residentName);
      $(".portlandSection").text(newResident.residentSection);
      $(".favRestaurant").text(newResident.residentRestaurant);
      $(".favBar").text(newResident.residentBar);
      $(".favEntertainment").text(newResident.residentEntertainment);
      $(".favBridge").text(newResident.residentBridge);
    });

    $("input#newName").val("");
    $("input#newSection").val("");
    $("input#newRestaurant").val("");
    $("input#newBar").val("");
    $("input#newEntertainment").val("");
    $("input#newBridge").val("");
  });
});
