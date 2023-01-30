/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
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

