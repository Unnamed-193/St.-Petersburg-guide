const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  anchor.addEventListener('click', function(event){
    event.preventDefault();
   
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const swiper = new Swiper('.swiper', {
  effect: "cube",
      cubeEffect: {
        shadow: false,
        slideShadows: false,
      },
  navigation: {
    nextEl: ".swiper-button-custom-next",
    prevEl: ".swiper-button-custom-prev",
  },
  speed: 1100,
  spaceBetween: 100,
});

let center = [59.94385636098493,30.320136730191233];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 12
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/marker.png',
    iconImageSize: [20, 45],
    iconImageOffset: [-10, -37]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
