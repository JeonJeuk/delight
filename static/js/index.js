// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {  
//             setTimeout(() => {
//                 entry.target.style.clipPath = 'circle(150% at 50% 100%)';
//             }, 30); // 100밀리초(0.1초)의 지연시간
//         } else {
//             entry.target.style.clipPath = 'circle(0% at 50% 100%)';
//         }
//     });
// });

// const delightInsight = document.querySelector('.delightInsight');
// observer.observe(delightInsight);


//Video 감지하고 실행하는 기능입니다.
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const video = entry.target.querySelector('video'); // 비디오 요소 가져오기
            if (video) {
                video.play(); // 비디오 재생
            }
        } else {
            const video = entry.target.querySelector('video'); // 비디오 요소 가져오기
            if (video) {
                video.pause(); // 비디오 멈춤
            }
        }
    });
}, { threshold: 0.5 }); // 50% 이상이 보여질 때 감지

const introVideo = document.querySelector('.introVideo');
videoObserver.observe(introVideo);


//마우스 호버 시 SVG에 컬러가 들어오게 하는 기능입니다.
  const explosion = document.querySelectorAll('g[id^="explosion"] path');
  const passion = document.querySelectorAll('g[id^="passion"] rect');
  const startPath = document.querySelectorAll('g[id^="start"] path');
  const startCircle = document.querySelectorAll('g[id^="start"] circle');
  let hoverTimer = {};

  console.log(explosion);

  explosion.forEach(path => {
      path.addEventListener('mouseover', () => {
          let id = path.parentElement.id;
          let currentColor = window.getComputedStyle(path).fill;
          path.style.fill = 'rgb(165, 74, 255)';
          path.style.transition = 'fill 0s ease-in-out';
          hoverTimer[id] = undefined;
      });

      path.addEventListener('mouseout', () => {
          let id = path.parentElement.id;
          clearTimeout(hoverTimer[id]);
          hoverTimer[id] = setTimeout(() => {
              path.style.fill = 'rgba(18, 18, 18, 0)'; // 현재 경로만 변경되도록 수정
              path.style.transition = 'fill 1s ease-in-out';
          }, 1000); // 여기서 1000은 원하는 시간(밀리초 단위)으로 조절 가능
      });
  });

  passion.forEach(rect => {
      rect.addEventListener('mouseover', () => {
          let id = rect.parentElement.id;
          let currentColor = window.getComputedStyle(rect).fill;
          rect.style.fill = 'rgb(255, 19, 69)';
          rect.style.transition = 'fill 0s ease-in-out';
          hoverTimer[id] = undefined;
      });

      rect.addEventListener('mouseout', () => {
          let id = rect.parentElement.id;
          clearTimeout(hoverTimer[id]);
          hoverTimer[id] = setTimeout(() => {
              rect.style.fill = 'rgba(18, 18, 18, 0)'; // 현재 경로만 변경되도록 수정
              rect.style.transition = 'fill 1s ease-in-out';
          }, 1000); // 여기서 1000은 원하는 시간(밀리초 단위)으로 조절 가능
      });
  });

  startPath.forEach(path => {
      path.addEventListener('mouseover', () => {
          let id = path.parentElement.id;
          let currentColor = window.getComputedStyle(path).fill;
          path.style.fill = 'rgb(10, 167, 255)';
          path.style.transition = 'fill 0s ease-in-out';
          hoverTimer[id] = undefined;
      });

      path.addEventListener('mouseout', () => {
          let id = path.parentElement.id;
          clearTimeout(hoverTimer[id]);
          hoverTimer[id] = setTimeout(() => {
              path.style.fill = 'rgba(18, 18, 18, 0)'; // 현재 경로만 변경되도록 수정
              path.style.transition = 'fill 1s ease-in-out';
          }, 1000); // 여기서 1000은 원하는 시간(밀리초 단위)으로 조절 가능
      });
  });

  startCircle.forEach(circle => {
    circle.addEventListener('mouseover', () => {
          let id = circle.parentElement.id;
          let currentColor = window.getComputedStyle(circle).fill;
          circle.style.fill = 'rgb(10, 167, 255)';
          circle.style.transition = 'fill 0s ease-in-out';
          hoverTimer[id] = undefined;
      });

      circle.addEventListener('mouseout', () => {
          let id = circle.parentElement.id;
          clearTimeout(hoverTimer[id]);
          hoverTimer[id] = setTimeout(() => {
            circle.style.fill = 'rgba(18, 18, 18)'; // 현재 경로만 변경되도록 수정
            circle.style.transition = 'fill 1s ease-in-out';
          }, 1000); // 여기서 1000은 원하는 시간(밀리초 단위)으로 조절 가능
      });
  });

  
//버튼 클릭 시 열정, 폭발, 시작 호버 작동을 제어하는 기능입니다.
  document.addEventListener('DOMContentLoaded', function() {
    const passionBtn = document.querySelector('.passionBtn');
    const explosionBtn = document.querySelector('.explosionBtn');
    const startBtn = document.querySelector('.startBtn');
    const passionSection = document.querySelector('#passion');
    const explosionSection = document.querySelector('#explosion');
    const startSection = document.querySelector('#start');
  
    passionBtn.addEventListener('click', function() {
    //   passionSection.classList.add('active');
      explosionSection.classList.remove('active');
      startSection.classList.remove('active');
      passionSection.classList.remove('active');
    });
  
    explosionBtn.addEventListener('click', function() {
      passionSection.classList.add('active');
      explosionSection.classList.add('active');
      startSection.classList.remove('active');
    });
  
    startBtn.addEventListener('click', function() {
      passionSection.classList.add('active');
      explosionSection.classList.remove('active');
      startSection.classList.add('active');
    });
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            // entry.target.style.transform = 'translateX(0)';
        } else {
            entry.target.style.opacity = 0;
            // entry.target.style.transform = 'translateX(-20%)';
        }
    });
});

const typeface = document.querySelectorAll('.typeface');
typeface.forEach(element => {
    observer.observe(element);
});


