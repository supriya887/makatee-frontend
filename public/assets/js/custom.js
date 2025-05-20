

//AOS
// AOS.init();
AOS.init({
  once: "false",
  offset: 50,
  startEvent: "load",
  // easing: 'ease-in-out-sine',
  disable: "mobile",
});
//AOS


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



$(document).ready(function(){
  $("#write-review-btn").click(function(){
    $("#write-review-box").toggle();
  });
});

// input eye icon
$(".toggle-password").click(function () {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});



// back to button
var btn = $('#backtotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});



// fix header
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

// dropdown menu mega
document.addEventListener('DOMContentLoaded', function () {
  var dropdownButton = document.getElementById('dropdownMenuButton');
  var dropdownMenu = dropdownButton.nextElementSibling; // The <ul> element with class "dropdown-menu"
  var dropdown = new bootstrap.Dropdown(dropdownButton);

  // Add an event listener to show the dropdown with animation
  dropdownButton.addEventListener('click', function () {
    if (!dropdownMenu.classList.contains('show')) {
      // Show the dropdown with animation
      dropdownMenu.classList.add('show');
      dropdownMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; // Ensure transition is applied
    }
  });

  // Optionally, add an event listener to close the dropdown
  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
      // Hide the dropdown with animation
      dropdownMenu.classList.remove('show');
    }
  });
});



// quantity increment and decrement
function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function (e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function (e) {
  decrementValue(e);
});


// testimonial 

$(document).ready(function () {

  $('.client-single').on('click', function (event) {
    event.preventDefault();

    var active = $(this).hasClass('active');

    var parent = $(this).parents('.testi-wrap');

    if (!active) {
      var activeBlock = parent.find('.client-single.active');

      var currentPos = $(this).attr('data-position');

      var newPos = activeBlock.attr('data-position');

      activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
      activeBlock.attr('data-position', currentPos);

      $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
      $(this).attr('data-position', newPos);

    }
  });

}(jQuery));




// price range

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// DOMContentLoaded  end
$(document).ready(function () {
  // Swiper: Slider
  var swiper = new Swiper('.trophy-category-slider', {
    slidesPerView: 7,
    loop: false,
    autoplay: true,
    navigation: {
      nextEl: '.trophies-swiper-button-next',
      prevEl: '.trophies-swiper-button-prev',
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      425: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      },
      1920: {
        slidesPerView: 7
      },

    },
  });
});

$(document).ready(function () {
  // Swiper: Slider
  var swiper = new Swiper('.main-category-slider ', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },


  });
});

$(document).ready(function () {
  // Swiper: Slider
  var swiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },


  });
});

$(document).ready(function () {
  // Swiper: Slider
  var swiper = new Swiper('.uniform-category-slider', {
    slidesPerView: 7,
    loop: false,
    autoplay: false,
    navigation: {

      nextEl: '.uniform-swiper-button-next',
      prevEl: '.uniform-swiper-button-prev',
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      },
      1920: {
        slidesPerView: 7
      },

    },
  });
});


var swiper = new Swiper('.newproduct-slider', {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.new-swiper-button-next',
    prevEl: '.new-swiper-button-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
    1800: {
      slidesPerView: 5
    },
  },
});

var swiperTwo = new Swiper('.bestsellers-slider', {
  slidesPerView: 5,
  loop: false,
  autoplay: true,
  navigation: {
    nextEl: '.best-swiper-button-next',
    prevEl: '.best-swiper-button-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
    1800: {
      slidesPerView: 5
    },
  },
});

var swiperTwo = new Swiper('.similar-slider', {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.similar-product-button-next',
    prevEl: '.similar-product-button-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
    1800: {
      slidesPerView: 5
    },
  },
});
var swiperTwo = new Swiper('.recent-view-slider', {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.recent-view-button-next',
    prevEl: '.recent-view-button-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
    1800: {
      slidesPerView: 5
    },
  },
});

var swiperTwo = new Swiper('.related-slider', {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.related-swiper-button-next',
    prevEl: '.related-swiper-button-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
    1800: {
      slidesPerView: 5
    },
  },
});


// product gallery
let gallery_top = new Swiper(".gallery", {
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



let gallery_thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: "auto",
  centeredSlides: false,/* ver 11 MEGA BUG -  works only when centeredSlides is true */
  spaceBetween: 16,
  loop: false, /* loop & slidesPerView auto not working well with swiper 11 */
  slideToClickedSlide: true,
});



gallery_thumbs.on('click', function () {
  const { clickedIndex } = this;
  gallery_thumbs.slideTo(clickedIndex);
  gallery_top.slideTo(clickedIndex);
  console.log('slide click', clickedIndex);
});


gallery_top.controller.control = gallery_thumbs;
gallery_thumbs.controller.control = gallery_top;

gallery_thumbs.slideTo(0);

$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    // image: {
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //   titleSrc: function(item) {
    //     return item.el.attr('title') + ' Tropies';
    //   }
    // }
  });
});

// backtotop
var btn = $('#backtotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

$('.dropdown-div').hover(function () {
  $(this).find('.dropdown-menu').finish().delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').finish().delay(200).fadeOut(500);
});



$(document).ready(function () {
  $(".vid-item").each(function (index) {
    $(this).on("click", function () {
      var current_index = index + 1;
      $(".vid-item .thumb").removeClass("active");
      $(".vid-item:nth-child(" + current_index + ") .thumb").addClass("active");
    });
  });
});



function checkMe(selected) {
  if (selected) {
    document.getElementById("divcheck").style.display = "";
  }
  else {
    document.getElementById("divcheck").style.display = "none";
  }

}


var swiperTwo = new Swiper('.customer-review-slider', {
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.best-swiper-button-next',
    prevEl: '.best-swiper-button-prev',
  },
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2
    },
    1480: {
      slidesPerView: 6
    },

  },
});


