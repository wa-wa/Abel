
const getHome    =  document.getElementById('homeShow');
const getProject =  document.getElementById('projectShow');
const getOffices =  document.getElementById('officesShow');
const getAbout   =  document.getElementById('aboutShow');
const getCareer  =  document.getElementById('careerShow');

$(function() {
  $(".home-content").addClass("fadeIn");
  $(".left-sidebar").hide();
  $("#enterSite").click(function(){
    $(".home-content").empty();
    $(".left-sidebar").addClass("fadeIn");
    $(".home-content").addClass("hc-image2");
    $(".front-page").css("grid-template-columns","300px 1fr");
    $(".left-sidebar").slideToggle("slow");

    // Contact-links: Remove or hide here depending
    // on what you want
    $("#contact-links").remove();
    $(".home-content").remove("hc-image1");

    // $(".navigation").hide();

    // $(".home-content").rem("fadeIn");

  });

})
