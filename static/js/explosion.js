//imageFiles 배열을 생성하여 필요한 이미지를 넣습니다.
const imageFiles = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg'
];
//각 이미지의 날짜 데이터 정보를 배열을 생성하여 넣습니다.
const dates = [
    '2023-10-15',
    '2023-10-16',
    '2023-10-17',
    '2023-10-18',
    '2023-10-19',
    '2023-10-20',
    '2023-10-21',
    '2023-10-22',
    '2023-10-23',
    '2023-10-24',
    '2023-10-25',
    '2023-10-26',
    '2023-10-27',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
    '2023-10-15',
];

//이미지 파일에 번호를 할당합니다.
const imageList = [];
for (var i = 0; i < imageFiles.length; i++) {
    var image = {
        src: '/static/img/explosion/' + imageFiles[i],
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

    var mathRandom = (Math.random() * (60 - 20) + 20);
    var imageLeft = index > 0 ? sliderListContainer.children[index - 1].getBoundingClientRect().left + mathRandom + 'px' : '0px';
    imageElement.style.left = imageLeft;
    imageElement.style.width = (Math.random() * (150 - 100) + 100) + 'px';
    imageElement.style.top = (Math.random() * (80 - 5) + 5) + '%';

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
            activeSlide.textContent = `${image.getAttribute('data-date')}`;
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
        hidePage.style.clipPath = `circle(145% at 95% 3%)`
        hideWrapper.classList.add('active');
        setTimeout(() => {
            hideWrapper.classList.add('overflow');
            slider.classList.add('active');
        }, 1000);

        hideWrapper.addEventListener('wheel', (e) => {
            if(hideWrapper.scrollTop <= 0 && e.deltaY < 0) {
                hideWrapper.classList.remove('overflow');
                hidePage.style.clipPath = `circle(1% at 95% 3%)`
                slider.classList.remove('active');
                setTimeout(() => {
                    hideWrapper.classList.remove('active');
                }, 1000);
            }
        })
    }
});

//이미지 클릭 시 팀페이지를 아래에서 위로 생성합니다.

const team = document.querySelector('.team');
const sliderImages = document.querySelectorAll('.sliderImage');

sliderImages.forEach(sliderImage => {
    sliderImage.addEventListener('click', function() {
        console.log('click');
        team.style.height = '100%';
    });
});