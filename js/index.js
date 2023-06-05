// For welcome section
function setupWelcomeSection() {
  const images = document.querySelectorAll('.welcomeDown ul li');

  images.forEach((image) => {
    image.style.listStyle = 'none';
    image.style.opacity = '1';
    image.style.transition = 'opacity 0.3s ease-in-out';
    image.style.animationPlayState = 'running';
    image.style.cursor = 'pointer';

    image.addEventListener('mouseover', () => {
      images.forEach((img) => {
        img.style.opacity = '0.3';
        img.style.animationPlayState = 'paused';
      });
      image.style.opacity = '1';
    });

    image.addEventListener('mouseout', () => {
      images.forEach((img) => {
        img.style.opacity = '1';
        img.style.animationPlayState = 'running';
      });
    });
  });
}


// animation for the welcome h1 and sports text

/* CHAT PROMPT: Add some jQuery code where as when the user scrolls through the page, the section will animate as they come into view. */
$(document).ready(function() {

  $('.animate-element').addClass("animate");
   
   // Set the animation to be triggered when the element comes into view
   var elements = $('.animate-element');
   $(window).scroll(function() {
     elements.each(function() {
       if ($(this).isInViewport()) {
       
             if($(this).parent().hasClass("animate")) {
                 $(this).removeClass('animate-element');
                 $(this).removeClass('animate');
                 //return false; // abort function if element is already in view preventing double animation
             }
             
         $(this).css("visibility", "visible");
         $(this).addClass('animate'); // Add the "animate" class to trigger the animation
       } else {
         $(this).css("visibility", "hidden");
         $(this).removeClass('animate'); // Remove the "animate" class if the section is out of view
       }
     });
   });
 
 });
 // jQuery function to check if element is visible in viewport
 $.fn.isInViewport = function() {
   var elementTop = $(this).offset().top;
   var elementBottom = elementTop + $(this).outerHeight();
 
   var viewportTop = $(window).scrollTop();
   var viewportBottom = viewportTop + $(window).height();
 
   return elementBottom > viewportTop && elementTop < viewportBottom;
 };
 

// Preload images
function preloadImages() {
  var imageSources = ["/assets/top-tiger.jpg", "/assets/welcome.jpg", "/assets/2-water ball-sports.jpg", "/assets/5-sports.jpg", "/assets/sports-soccer.jpg", "/assets/academic-1.jpg", "/assets/acdemics-1.jpg", "/assets/top-5.jpg", "/assets/events-headboy.jpg"];

  for (var i = 0; i < imageSources.length; i++) {
    var img = new Image();
    img.src = imageSources[i];
  }
}

// Call the functions at appropriate times
window.onload = function () {
  preloadImages();
  setupWelcomeSection();
};


//Academics section
let scrollAnimationImg = document.querySelector('.academics-img img:nth-child(2)');

function isElementViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight));
}

function scrollHandler() {
  if (isElementViewport(scrollAnimationImg)) {
    scrollAnimationImg.classList.add('animate-academics');
  }
}

window.addEventListener('scroll', scrollHandler);


// For sports section
window.addEventListener('load', function () {
  var items = document.getElementsByClassName("item-sports");
  var circles = document.getElementsByClassName("circle-sports");
  var leftBtn = document.getElementById("btn-left-sports");
  var rightBtn = document.getElementById("btn-right-sports");
  var content = document.querySelector('.content-sports');
  var index = 0;
  var timer = null;

  // clear class
  var clearclass = function() {
    for (let i = 0; i < items.length; i++) {
      items[i].className = "item-sports";
      circles[i].className = "circle-sports";
      circles[i].setAttribute("data-num", i);
    }
  }

  /*only display one class*/
  function move() {
    clearclass();
    items[index].className = "item-sports active";
    circles[index].className = "circle-sports active";
  }

  // click right button display next image
  rightBtn.onclick = function() {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0;
    }
    move();
  }

  // click left button display previous image
  leftBtn.onclick = function() {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1;
    }
    move();
  }

  // Start the timer, click the button on the right to realize the carousel
  timer = setInterval(function() {
    rightBtn.onclick();
  }, 1500)

  // When the dot is clicked, jump to the corresponding picture
  for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
      var point_index = parseInt(this.getAttribute("data-num"));
      index = point_index;
      move();
    })

  }

  // Move the mouse in to clear the timer, and start a three-second timer to make the slow rotation
  content.onmouseover = function() {
    clearInterval(timer);
    timer = setInterval(function() {
      rightBtn.onclick();
    }, 3000)
  }

  // Mouse out and start the timer
  content.onmouseleave = function() {
    clearInterval(timer);
    timer = setInterval(function() {
      rightBtn.onclick();
    }, 1500)
  }
}

);

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}