window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const switchTheme = document.getElementById("darkmode");

switchTheme.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
});


  let button = document.getElementById("ed-btn");

  button.onclick = function() {
      let div = document.getElementById("education");
      if (div.style.display !== "none") {
          div.style.display = "none";
      }
      else {
          div.style.display = 'block';
      }
  };


  let workBtn = document.getElementById("work-btn");

  workBtn.onclick = function() {
      let div = document.getElementById("work");
      if (div.style.display !== "none") {
          div.style.display = "none";
      }
      else {
          div.style.display = 'block';
      }
  };


   function showL() {
    let x = document.getElementById("languages");
    if (x.style.display === "block") {
           x.style.display = "none";
    } else {
       x.style.display = "block";
        }
   }

   function showS() {
    let x = document.getElementById("softSkills");
    if (x.style.display === "block") {
           x.style.display = "none";
    } else {
       x.style.display = "block";
        }
   }

  $('.carousel').carousel({
    interval: 2000
  })

  function InvalidMsg(textbox) {

    document.getElementById("my-div")
         
    if (textbox.value === '') {
        textbox.setCustomValidity
            ('An email is required');
    } else if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity
            ('Email is not valid');
    } else {
        textbox.setCustomValidity('');
    }

    return true;
}

var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
