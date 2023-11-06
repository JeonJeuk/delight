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

//   console.log(explosion);

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

//Typeface 오버시티 기능입니다.
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


//텍스트 입력 시 똑같이 입력되는 기능입니다.
// #textInput 요소 가져오기
const textInput = document.getElementById('textInput');

textInput.addEventListener('input', function() {
    const inputText = textInput.value;

    // 정규식을 사용하여 입력 체크
    if (inputText.match(/[^A-Za-z0-9\s!]/)) {
        // 입력된 텍스트에 허용된 문자 외의 것이 있으면 해당 문자를 지우고 빈 문자열로 대체
        textInput.value = inputText.replace(/[^A-Za-z0-9\s!]/g, '');
        alert('영어, 숫자, 공백, 느낌표만 입력 가능합니다.');
    }
    
    const finalText = textInput.value;

    // .box에 최종 텍스트 표시
    passionBox.innerText = finalText;
    explosionBox.innerText = finalText;
    startBox.innerText = finalText;
});

const fontSizeController = document.getElementById('fontSizeController');
const passionBox = document.getElementById('passionBox');
const explosionBox = document.getElementById('explosionBox');
const startBox = document.getElementById('startBox');

fontSizeController.addEventListener('input', function() {
    const fontSize = fontSizeController.value + 'px';
    passionBox.style.fontSize = fontSize;
    explosionBox.style.fontSize = fontSize;
    startBox.style.fontSize = fontSize;
});



//배너 무한 루프 기능입니다.
window.addEventListener('load', function() {
    setFlowBanner();
});

function setFlowBanner() {
    const wrap = document.querySelector('.synergyBanner');
    const list = document.querySelector('.synergyBanner .synergyList');
    let wrapWidth = wrap.offsetWidth;
    let listWidth = list.offsetWidth;
    const speed = .1;

    let clone = list.cloneNode(true);
    wrap.appendChild(clone);
    flowBannerAct();

    function flowBannerAct() {
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                const newClone = clone.cloneNode(true);
                wrap.appendChild(newClone);
            }
        }
        const lists = wrap.querySelectorAll('.synergyList');
        lists.forEach(item => {
            item.style.animation = `${listWidth / speed / 1000}s linear infinite flowRolling`;
        });
    }
}




    const rangeParagraph = document.querySelector('.range p');

    fontSizeController.addEventListener('input', function() {
        rangeParagraph.textContent = fontSizeController.value + 'px';
    });

