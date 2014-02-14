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

  /*var $overlays = $(".overlay");

  $overlays.each(function() {
    var $overlay = $(this),
        $span    = $overlay.find('span:first-of-type'),
        top = ($overlay.outerHeight() - $span.outerHeight())/2,
        left = ($overlay.outerWidth() - $span.outerWidth())/2;

    $overlay.css({
      "padding-top": top + parseInt($span.css('padding-top'))
      //"left": left
    });

  });*/

  var $nextLinks = $('.chevron-right'),
      $prevLinks = $('.chevron-left'),
      filename = window.location.pathname.split( '/' ).pop().trim();

  var pages = {
    "vmware.html": {
      prev: "Core Merchant",
      next: "Wikipedia"
    },
    "wikipedia.html": {
      prev: "VMware",
      next: "Visualizations &amp; Experiments"
    },
    "experiments.html": {
      prev: "Wikipedia",
      next: "Giftly"
    },
    "giftly.html": {
      prev: "University of Michigan Health System",
      next: "Visualizations &amp; Experiments"
    },
    "umhealth.html": {
      prev: "Giftly",
      next: "Highwire"
    },
    "highwire.html": {
      prev: "University of Michigan Health System",
      next: "Visual.ly",
    },
    "visually.html": {
      prev: "Highwire",
      next: "Core Merchant"
    },
    "coremerchant.html": {
      prev: "Visual.ly",
      next: "VMware"
    }
  }

  $nextLinks.each(function() {
    $(this).attr("title", pages[filename].next);
  });
  $prevLinks.each(function() {
    $(this).attr("title", pages[filename].prev);
  });
});

