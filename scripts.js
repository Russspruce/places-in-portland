//business logic
function Resident(name, section, restaurant, entertainment) {
  this.residentName = name;
  this.residentSection = section;
  this.residentRestaurant = restaurant;
  this.residentEntertainment = entertainment;
}

// user interface logic
$(document).ready(function(){
  $("form#newResident").submit(function(event){
    event.preventDefault();

    var inputNewName = $("input#newName").val();
    var inputSection = $("input#newSection").val();
    var inputRestaurant = $("input#newRestaurant").val();
    var inputEntertainment = $("input#newEntertainment").val();

    var newResident = new Resident(inputNewName, inputSection, inputRestaurant, inputEntertainment);

    $("ul#portlandInfo").append("<li><span class='resident'>" + newResident.residentName + "</span></li>");

    $(".resident").last().click(function() {
      $("#showPortland").show();
      $("#showPortland h2").text(newResident.residentName);
      $(".fullName").text(newResident.residentName);
      $(".portlandSection").text(newResident.residentSection);
      $(".favRestaurant").text(newResident.residentRestaurant);
      $(".favEntertainment").text(newResident.residentEntertainment);
    });

    $("input#newName").val("");
    $("input#newSection").val("");
    $("input#newRestaurant").val("");
    $("input#newEntertainment").val("");
  });
});
