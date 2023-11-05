//이미지 슬라이드 기능입니다.
const galleryWrapper = document.querySelector('.galleryWrapper');
const galleryControlsContainer = document.querySelector('.galleryControls');
const galleryControls = ['Previous', 'Next'];
const galleryItems = document.querySelectorAll('.galleryItem');
const galleryDatas = document.querySelectorAll('.galleryData');
const backgroundTypes = document.querySelectorAll('.galleryBackground2');

class Carousel {
    constructor(wrapper, items, controls, datas, types) {
        this.carouselWrapper = wrapper;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.carouselData = [...datas];
        this.carouselType = [...types];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('galleryItem1');
            el.classList.remove('galleryItem2');
            el.classList.remove('galleryItem3');
            el.classList.remove('galleryItem4');
            el.classList.remove('galleryItem5');
        });

        this.carouselData.forEach(el => {
            el.classList.remove('galleryData1');
            el.classList.remove('galleryData2');
            el.classList.remove('galleryData3');
            el.classList.remove('galleryData4');
            el.classList.remove('galleryData5');
        });

        this.carouselType.forEach(el => {
            el.classList.remove('backgroundType1');
            el.classList.remove('backgroundType2');
            el.classList.remove('backgroundType3');
            el.classList.remove('backgroundType4');
            el.classList.remove('backgroundType5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`galleryItem${i+1}`)
        });

        this.carouselData.slice(0, 5).forEach((el, i) => {
            el.classList.add(`galleryData${i+1}`)
        });

        this.carouselType.slice(0, 5).forEach((el, i) => {
            el.classList.add(`backgroundType${i+1}`)
        });
    }

    setCurrentState(direction) {
        if(direction.className == 'galleryControlsPrevious') {
            this.carouselArray.unshift(this.carouselArray.pop());
            this.carouselData.unshift(this.carouselData.pop());
            this.carouselType.unshift(this.carouselType.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
            this.carouselData.push(this.carouselData.shift());
            this.carouselType.push(this.carouselType.shift());
        }
        this.updateGallery();
    };

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `galleryControls${control}`
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const startCarousel = new Carousel(galleryWrapper, galleryItems, galleryControls, galleryDatas, backgroundTypes);

startCarousel.setControls();
startCarousel.useControls();


document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.galleryItem');
    const backButton = document.querySelector('.backButton');

    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if(e.target.classList.contains('galleryData3')) {
                //크라운을 없애줍니다.
                // document.querySelector('.crown').classList.add('active');
                //도형이 커지는 에니메이션 적용합니다.
                document.querySelector('.backgroundType3').classList.add('active');
                //body에 스크롤이 가능하게 만들어줍니다.
                document.querySelector('body').classList.add('active');
                //category를 가려줍니다.
                document.querySelector('.category').classList.add('active');
                //title를 가려줍니다.
                document.querySelector('.titleMain').classList.add('active');
                //control를 가려줍니다.
                document.querySelector('.galleryControls').classList.add('active');
                //순위를 가려줍니다.
                document.querySelectorAll('.num').forEach(num => {
                    num.classList.add('active');
                });
                setTimeout(function(){
                    document.querySelector('.answer').classList.add('active');
                    document.querySelectorAll('.galleryItem').forEach(item => {
                        item.classList.add('hide');
                    });
                    document.querySelector('.answer1st').classList.add('active');
                },1000)
            }
        });
    });

    backButton.addEventListener('click', function(){
        document.querySelector('.answer').classList.remove('active');
        document.querySelector('.answer1st').classList.remove('active');
        document.querySelectorAll('.galleryItem').forEach(item => {
            item.classList.remove('hide');
        });
        
        document.querySelector('body').classList.remove('active');
        setTimeout(function(){
            document.querySelector('.backgroundType3').classList.remove('active');
        },1000)
        setTimeout(function(){
            document.querySelectorAll('.num').forEach(num => {
                num.classList.remove('active');
            });
            document.querySelector('.galleryControls').classList.remove('active');
            document.querySelector('.category').classList.remove('active');
            document.querySelector('.titleMain').classList.remove('active');
        },1500)
    })
});

// //galleryItem3만 클릭가능하게 만들고 클륵 시 active class를 추가하여 애니메이션을 만듭니다.
// document.addEventListener('click', function(event) {
//     //클릭한 요소(event.target이 'galleryBasckground2' 클래스를 가지고 있는지 확인
//     if(event.target.classList.contains('galleryBackground2')) {
//         //클릭한 요소의 부모 요소가 'galleryItem3' 클래스를 가지고 있는지 확인
//         if(event.target.parentElement.classList.contains('galleryItem3')) {
//             //클릭한 요소가 'galleryBackground2' 클래스를 가지고 있고 부모요소가 'galleryItem3' 클래스를 가지고 있을 때만 아래 코드 실행
//             event.target.classList.add('active');
//             document.querySelector('body').classList.add('active');
//             // document.querySelector('.category').classList.add('active');
//             document.querySelector('.galleryData1').classList.add('active');
//             document.querySelector('.galleryData2').classList.add('active');
//             document.querySelector('.galleryData3').classList.add('active');
//             document.querySelector('.galleryData4').classList.add('active');
//             document.querySelector('.galleryData5').classList.add('active');
//             setTimeout(function() {
//                 document.querySelector('.answer').classList.add('active');
//             }, 1500);
//             setTimeout(function() {
//                 document.querySelector('.backgroundType1').classList.add('hide');
//             }, 2000);
//             setTimeout(function() {
//                 document.querySelector('.backgroundType2').classList.add('hide');
//             }, 2000);
//             setTimeout(function() {
//                 document.querySelector('.backgroundType3').classList.add('hide');
//             }, 2000);
//             setTimeout(function() {
//                 document.querySelector('.backgroundType4').classList.add('hide');
//             }, 2000);
//             setTimeout(function() {
//                 document.querySelector('.backgroundType5').classList.add('hide');
//             }, 2000);
//         };
//     };
// });

// const backgroundType1 = document.querySelector('.backgroundType1');
// const backgroundType2 = document.querySelector('.backgroundType2');
// const backgroundType3 = document.querySelector('.backgroundType3');
// const backgroundType4 = document.querySelector('.backgroundType4');
// const backgroundType5 = document.querySelector('.backgroundType5');
// // const backButton = document.querySelector('.backButton');

// backgroundType1.addEventListener('click', function() {
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#FF563F';
//     }, 1000);
//     setTimeout(function() {
//         document.querySelector('.answer').classList.add('active');
//         document.querySelector('.galleryWrapper').classList.add('active');
//         document.querySelector('.galleryControls').classList.add('active');
//     }, 2000);
// });

// backgroundType2.addEventListener('click', function() {
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#FFB6AC';
//     }, 1000);
//     setTimeout(function() {
//         document.querySelector('.answer').classList.add('active');
//         document.querySelector('.galleryWrapper').classList.add('active');
//         document.querySelector('.galleryControls').classList.add('active');
//     }, 2000);
// });

// backgroundType3.addEventListener('click', function() {
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#2F1411';
//     }, 1000);
//     setTimeout(function() {
//         document.querySelector('.answer').classList.add('active');
//         document.querySelector('.galleryWrapper').classList.add('active');
//         document.querySelector('.galleryControls').classList.add('active');
//     }, 2000);
// });

// backgroundType4.addEventListener('click', function() {
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#00FF38';
//     }, 1000);
//     setTimeout(function() {
//         document.querySelector('.answer').classList.add('active');
//         document.querySelector('.galleryWrapper').classList.add('active');
//         document.querySelector('.galleryControls').classList.add('active');
//     }, 2000);
// });

// backgroundType5.addEventListener('click', function() {
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#A9A7FF';
//     }, 1000);
//     setTimeout(function() {
//         document.querySelector('.answer').classList.add('active');
//         document.querySelector('.galleryWrapper').classList.add('active');
//         document.querySelector('.galleryControls').classList.add('active');
//     }, 2000);
// });

// backButton.addEventListener('click', function() {
//     document.querySelector('.answer').classList.remove('active');
//     document.querySelector('.galleryWrapper').classList.remove('active');
//     document.querySelector('.galleryControls').classList.remove('active');
//     document.querySelector('.backgroundType1').classList.remove('hide');
//     document.querySelector('.backgroundType2').classList.remove('hide');
//     document.querySelector('.backgroundType3').classList.remove('hide');
//     document.querySelector('.backgroundType4').classList.remove('hide');
//     document.querySelector('.backgroundType5').classList.remove('hide');
//     document.querySelector('.category').classList.remove('active');

//     setTimeout(function() {
//         document.querySelector('.backgroundType1').classList.remove('active');
//     }, 500);
//     setTimeout(function() {
//         document.querySelector('.backgroundType2').classList.remove('active');
//     }, 500);
//     setTimeout(function() {
//         document.querySelector('.backgroundType3').classList.remove('active');
//     }, 500);
//     setTimeout(function() {
//         document.querySelector('.backgroundType4').classList.remove('active');
//     }, 500);
//     setTimeout(function() {
//         document.querySelector('.backgroundType5').classList.remove('active');
//     }, 500);

//     setTimeout(function() {
//         document.querySelector('.galleryData1').classList.remove('active');
//     }, 1500);
//     setTimeout(function() {
//         document.querySelector('.galleryData2').classList.remove('active');
//     }, 1500);
//     setTimeout(function() {
//         document.querySelector('.galleryData3').classList.remove('active');
//     }, 1500);
//     setTimeout(function() {
//         document.querySelector('.galleryData4').classList.remove('active');
//     }, 1500);
//     setTimeout(function() {
//         document.querySelector('.galleryData5').classList.remove('active');
//     }, 1500);

//     backButton.addEventListener('click', function(event) {
//         if(event.target.parentElement.classList.contains('galleryData3')) {
//             setTimeout(function() {
//                 document.querySelector('.galleryData').classList.remove('active');
//             }, 1500);
//         }
//     });

//     document.querySelector('body').classList.remove('active');
//     document.body.style.backgroundColor = 'white';
// });