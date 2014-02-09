// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


$(document).ready(function() {
  var $orbit = $("ul[data-orbit]");

  $(document).foundation({
    orbit: {
      animation: 'slide',
      timer_speed: 3000,
      slide_number: false,
      pause_on_hover: true,
      resume_on_mouseout: false,
      animation_speed: 500,
      variable_height: true,
      timer: false
    }
  });

  function slideCaptionUp(el) {
    $(this).find(".orbit-caption").slideUp(200);
  }

  function slideCaptionDown(el) {
    $(this).find(".orbit-caption").slideDown(200);
  }

  $(".orbit-caption").hide();
  $(".orbit-container").hover(slideCaptionDown, slideCaptionUp);

  $orbit.each(function(idx, sliderGallery) {
    var $popupGallery, $sliderGallery;
    $sliderGallery = $(sliderGallery);
    $popupGallery = $sliderGallery.closest(".orbit-container").siblings(".clearing-assembled").first().find("ul[data-clearing]").first();
    if ($popupGallery.length > 0) {
      return $sliderGallery.find("> li").click(function(event, ui) {
        var $popupLi, $sliderLi;
        $sliderLi = $(event.target).closest("li");
        $popupLi = $popupGallery.find("li[data-asset-id='" + ($sliderLi.data("asset-id")) + "']").first();
        if ($popupLi.length > 0) {
          return Foundation.libs.clearing.open($popupLi.find("img").first(), null, $popupLi);
        }
      }).css("cursor", "pointer");
    }
  });

});



