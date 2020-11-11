//burger-menu

let navBarList = document.querySelector('.header-menu-nav__list');
let navBarButtonWrap = document.querySelector('.menu-nav');
let navBarButton = document.querySelector('.menu-nav--item')

navBarButtonWrap.addEventListener('click', () => {
  navBarButton.classList.toggle('menu-nav--item--active');
  navBarList.classList.toggle('nav-active');
});



//slider-opasity

let slide = document.querySelectorAll('.testimonials__slider-box');
let dotSlide = document.querySelectorAll('.testimonials__slider-dots-item');
let dots = document.querySelector('.testimonials__slider-dots');
let rr = document.querySelector('.testimonials__slider-box-text');
let currentSlide = 0;

//add new element to dots
const checkDotsSlider = () => {
  for (let k = 3; k <= slide.length - 1; k++) {
    let  newElem = document.createElement('span'); 
    newElem.className = 'testimonials__slider-dots-item'; 
    newElem.setAttribute('data-dot', k);   
    dots.appendChild(newElem);
    console.log(newElem);
  }   
}   
checkDotsSlider();

const sliderOpacity = () => {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove('active-testimonials-slider');
    slide[currentSlide].classList.add('active-testimonials-slider');
  }  
  for (let i = 0; i < dotSlide.length; i++) {
    dotSlide[i].classList.remove('active-dot');
    dotSlide[currentSlide].classList.add('active-dot');
  }
}; 
sliderOpacity();

document. querySelector('.testimonials__slider-arrow-left').onclick = () => {
  currentSlide - 1 === -1 ? currentSlide = slide.length - 1 : currentSlide--;
  sliderOpacity();
};

document.querySelector('.testimonials__slider-arrow-right').onclick = () => {
  currentSlide + 1 === slide.length ? currentSlide = 0 : currentSlide++;
  sliderOpacity(currentSlide);
};

dots.addEventListener('click', (e) => {  
  currentSlide = e.target.className === 'testimonials__slider-dots-item' && e.target.getAttribute('data-dot');
  sliderOpacity(currentSlide);
});



//counter-services

let numberСounter = document.querySelectorAll('.services__number-item');
let symbolСounter = document.querySelectorAll('.services__number-item--letter');

const counterItems = () => {

  let currentNumber = new Array(numberСounter.length);
  let currentSymb = new Array(symbolСounter.length);
   
  for (let i=0, j=0; i<numberСounter.length, j<symbolСounter.length; i++, j++) {

    let getValue = Number(numberСounter[i].getAttribute('value'));
    currentNumber[i] = 0;
    currentSymb[i] = symbolСounter[j].innerText;
  
    setInterval(() => {
      currentNumber[i] < getValue ? currentNumber[i]++ : currentNumber[i];
      numberСounter[i].innerText = `${currentNumber[i]} ${currentSymb[i]}`;
    }, 10); 

  };

};



//video-box

let videoBigScreen = document.querySelector('.video__screen > video');  
let videoSmallScreen = document.querySelectorAll('.video__box-item-play');
let videoWrapperItem = document.querySelectorAll('.video__box-wrapper-up');

const setVideoSrc = (index=0) => {
  let src = videoSmallScreen[index].getAttribute('src');
  videoBigScreen.setAttribute('src', src);
}
  setVideoSrc();
  
  for (let i = 0; i < videoWrapperItem.length; i++) {  
    videoWrapperItem[i].addEventListener('click', (e)=> {

      let getDataItemVideo = e.target.getAttribute('data-item');
      e.target.className === videoWrapperItem[i].className && setVideoSrc(getDataItemVideo);
  }) 
}



//scroll-page


let animItems = document.querySelectorAll('.anim-items');
let servicesNumber = document.querySelector('.services__number.anim-items');

if (animItems.length > 0) {
  
  const animScroll = () => {

    for (let i = 0; i < animItems.length; i++) {

      let animItem = animItems[i];
      let animItemHeight = animItem.offsetHeight;
      let animItemOffset = offset(animItem).top;
      let animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (pageYOffset > animItemOffset - animItemPoint) {
        animItem.classList.add('anim-active');
        
        if (servicesNumber.className === 'services__number anim-items anim-active') {
          counterItems();
          servicesNumber.classList.remove('anim-items');
        }
      } 
    }
  }

  const offset = (el) => {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
  }

  animScroll();
  window.addEventListener('scroll', animScroll);
}

