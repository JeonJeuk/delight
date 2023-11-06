//imageFiles 배열을 생성하여 필요한 이미지를 넣습니다.
const imageFiles = [];

for (let i = 1; i <= 162; i++) {
    imageFiles.push(`${i}.jpg`);
}
//각 이미지의 날짜 데이터 정보를 배열을 생성하여 넣습니다.
const dates = [
    '2023-09-22', '2023-09-23', '2023-09-24', '2023-09-25', '2023-09-26', '2023-09-27', '2023-09-28', '2023-09-29', '2023-09-29', '2023-09-29',
    '2023-09-30', '2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-06', '2023-10-07', '2023-09-29', '2023-09-29',
    '2023-10-08', '2023-10-09', '2023-10-10', '2023-10-11', '2023-10-12', '2023-10-13', '2023-10-14', '2023-10-15', '2023-09-29', '2023-09-29',
    '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-20', '2023-10-21', '2023-10-22', '2023-10-23', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-09-29', '2023-09-29',
    '2023-10-24', '2023-10-25'
];

//이미지 파일에 번호를 할당합니다.
const imageList = [];
for (var i = 0; i < imageFiles.length; i++) {
    var image = {
        src: '../../../stactic/img/explosion/archive/' + imageFiles[i],
        date: dates[i]
    };
    imageList.push(image);
}

//sliderList에 이미지를 추가하고 랜덤한 위치를 생성합니다.
const sliderListContainer = document.querySelector('.sliderList');
imageList.forEach((image, index) => {
    var imageElement = document.createElement('img');
    imageElement.src = image.src;
    imageElement.setAttribute('data-date', image.date);

    var mathRandom = (Math.random() * (180 - 150) + 150);
    var imageLeft = index > 0 ? sliderListContainer.children[index - 1].getBoundingClientRect().left + mathRandom + 'px' : '0px';
    imageElement.style.left = imageLeft;
    imageElement.style.width = (Math.random() * (200 - 150) + 200) + 'px';
    imageElement.style.top = (Math.random() * (60 - 30) + 30) + '%';

    imageElement.classList.add('sliderImage');
    sliderListContainer.appendChild(imageElement);
})

//wheel 작동 시 가로스크롤 기능을 추가하고 marker의 동작을 위해 %를 계산합니다.

const scrollContainer = document.querySelector('.sliderWrapper');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    //scrollLeft가 왜 계속 0이 나올까...
    // console.log(scrollContainer.scrollLeft);
    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
})

//marker를 스크롤에 반응하여 이동시킵니다.
const markerWrapper = document.querySelector('.marker');
const contaienr  = document.querySelector('.container');

scrollContainer.addEventListener('scroll', () => {
    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
    const markerPosition = (scrollPercentage * (scrollContainer.clientWidth - markerWrapper.clientWidth)) / 100;

    markerWrapper.style.left = `${markerPosition}px`;
});

//marker의 날짜 데이터를 이미지에 맞게 변경합니다.
const images = document.querySelectorAll('.sliderList img');
const marker = document.querySelector('.markerWrapper');
const activeSlide = document.querySelector('.activeSlide');
let lastCollidedImage = null;

//marker가 이미지 에 닿는지 확인하는 함수입니다.
function checkIfMarkerTouchImage() {
    const markerRect = marker.getBoundingClientRect();

    images.forEach((image, index) => {
        const imageRect = image.getBoundingClientRect();

        // 이미지와 마커 사이의 충돌 여부 확인
        const isColliding = !(
            markerRect.right < imageRect.left || markerRect.left > imageRect.right
        );

        if (isColliding) {
            // 마커와 이미지가 닿았을 경우
            // console.log('마커와 이미지가 닿았음');
            // console.log('이미지 파일 번호:', index + 1); // 이미지 번호는 0부터 시작하므로 +1 처리
            lastCollidedImage = image;
            activeSlide.innerHTML = 'DATE.<br>' + image.getAttribute('data-date');
        }
    });
}

scrollContainer.addEventListener('wheel', () => {
    checkIfMarkerTouchImage();
})

//hide 페이지 기능입니다.
const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.sliderWrapper');
const hideWrapper = document.querySelector('.hide');
const hidePage = document.querySelector('.hideWrapper');
let scrollCounter = 0;

sliderWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    sliderWrapper.scrollLeft += e.deltaY;
    
    const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
    let scrollPercentage = Math.round((sliderWrapper.scrollLeft / maxScroll) * 100);

    console.log('퍼센트 ' + scrollPercentage)

    if(scrollPercentage == 100) {
        hidePage.style.clipPath = `circle(145% at 92% 8%)`
        hideWrapper.classList.add('active');
        hidePage.style.background = `#121212`;
        setTimeout(() => {
            hideWrapper.classList.add('overflow');
            slider.classList.add('active');
        }, 1000);

        hideWrapper.addEventListener('wheel', (e) => {
            if(hideWrapper.scrollTop <= 0 && e.deltaY < 0) {
                hideWrapper.classList.remove('overflow');
                hidePage.style.clipPath = `circle(1% at 92% 8%)`;
                hidePage.style.background = `#A54AFF`;
                
                slider.classList.remove('active');
                setTimeout(() => {
                    hideWrapper.classList.remove('active');
                }, 1000);
            }
        })
    }
});


// 이미지 클릭 이벤트를 위한 JavaScript
document.querySelectorAll('.sliderImage').forEach(image => {
    image.addEventListener('click', () => {
      // 클릭된 이미지에 'enlarged' 클래스 추가
      image.classList.add('enlarged');
  
      // 애니메이션이 끝난 후 'enlarged' 클래스 제거하여 원래 크기로 돌아가게 함
      setTimeout(() => {
        image.classList.remove('enlarged');
      }, 2000); // CSS 전환 지속 시간에 맞게 시간 조정
    });
  });
  
  
// 페이지가 로드될 때 실행될 함수
// window.onload = function() {
//     const images = document.querySelectorAll('.slider .sliderWrapper .sliderList img');
//     images.forEach(image => {
//         // 초기에 이미지를 작게 보이게 함
//         image.style.transform = 'scale(0)';
//         image.style.opacity = '0';

//         // 스케일을 1로 부드럽게 전환하여 이미지를 보이게 함
//         setTimeout(() => {
//             image.style.transform = 'scale(1)';
//             image.style.opacity = '1';
//         }, 100); // 원하는 딜레이를 주어도 됩니다.
//     });
// }
  
window.addEventListener('load', function(){
    const images = document.querySelectorAll('.slider .sliderWrapper .sliderList img');

    images.forEach(image => {
        image.classList.add('active');
    })
})