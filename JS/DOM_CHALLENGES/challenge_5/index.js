/**
 * Write your challenge solution here
 */

const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
  ];
  
  const carouselTrack = document.getElementById("carouselTrack");
  const caption = document.getElementById("caption");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const autoPlayButton = document.getElementById("autoPlayButton");
  const carouselNav = document.getElementById("carouselNav");
  const timerDisplay = document.getElementById("timerDisplay");
  
  let currIndex = 0;
  let autoPlayInterval;
  let countdown;
  
  function updateCarousel() {
    carouselTrack.innerHTML = `<img src="${images[currIndex].url}" alt="carousel image" class="carousel-slide">`;
    caption.innerText = images[currIndex].caption;
    updateIndicators();
  }
  
  images.forEach((_, idx) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    indicator.addEventListener("click", () => {
      currIndex = idx;
      updateCarousel();
    });
    carouselNav.appendChild(indicator);
  });
  
  function updateIndicators() {
    const indicators = document.querySelectorAll(".carousel-indicator");
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currIndex);
    });
  }
  
  prevButton.addEventListener("click", function () {
    currIndex = currIndex === 0 ? images.length - 1 : currIndex - 1;
    updateCarousel();
  });
  
  nextButton.addEventListener("click", function () {
    currIndex = (currIndex + 1) % images.length;
    updateCarousel();
  });
  
  function startAutoPlay() {
    let timeLeft = 5;
    timerDisplay.innerText = `Next slide in ${timeLeft}s`;
  
    countdown = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = `Next slide in ${timeLeft}s`;
    }, 1000);
  
    autoPlayInterval = setInterval(() => {
      currIndex = (currIndex + 1) % images.length;
      updateCarousel();
      timeLeft = 5;
    }, 5000);
  }
  
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    clearInterval(countdown);
    timerDisplay.innerText = "";
  }
  
  autoPlayButton.addEventListener("click", function () {
    if (autoPlayInterval) {
      stopAutoPlay();
      autoPlayButton.innerText = "Start Auto Play";
    } else {
      startAutoPlay();
      autoPlayButton.innerText = "Stop Auto Play";
    }
  });
  
  updateCarousel();
  