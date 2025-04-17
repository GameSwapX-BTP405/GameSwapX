// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        });
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });
});

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// google_map js
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// ✅ FIXED: Put loginRedirect OUTSIDE of any jQuery block
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login__form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = document.querySelector('input[type="email"]').value.trim();
        const pass = document.querySelector('input[type="password"]').value.trim();
  
        if (email && pass) {
          // Save login state
          localStorage.setItem("loggedIn", "true");
  
          // Redirect to homepage
          window.location.href = "index.html";
        } else {
          alert("Please fill in both fields.");
        }
      });
    }
  });

