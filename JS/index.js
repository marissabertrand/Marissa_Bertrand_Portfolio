console.log("testing");

$(document).ready(function(){
  $(".WPBP").mouseover(function(){
    $(".WPBPHover").show();
    $(".WPBP").hide();
  });
  $(".WPBP").mouseout(function(){
    $(".WPBPHover").hide();
    $(".WPBP").show();
  });
  });
  $(".WPBPHover").hide();

  $(document).ready(function(){
    $(".DVS").mouseover(function(){
      $(".DVSHover").show();
      $(".DVS").hide();
    });
    $(".DVS").mouseout(function(){
      $(".DVSHover").hide();
      $(".DVS").show();
    });
    });
    $(".DVSHover").hide();
