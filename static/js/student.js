const studentList = document.querySelector("ul.studentList");

let detailList = document.querySelectorAll(".detailWrap > ul > li");


const $projectList = $('ul.studentList')
const $projectPage = $('.projectPage');
const $projectTextBox = $('.projectTextBox');
const $textAni = $('.textAni');
const $imagePart = $('.imagePart');
const $imagePartMobile = $('.imagePartMobile');
const $deleteBtn = $('.deleteBtn');
// const $soundPart = $('.soundPart');


detailList.forEach((item) => {
  item.addEventListener("click", () => {
    detailList.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// 오디오

let audio = new Audio(); 

audio.onended = function() {
  audio = new Audio(); 
};

function playSound(audioFile) {
  if(!audio.paused) {
    audio.pause(); 
    audio.currentTime = 0; 
  }

  audio.src = audioFile; 
  audio.play(); 
}


// 랜덤으로 나오게 하기

Array.prototype.shuffle = function () {
  let length = this.length;
  while (length) {
    let index = Math.floor(Math.random() * length--);
    let temp = this[length];
    this[length] = this[index];
    this[index] = temp;
  }
  return this;
};

//이미지 클릭 이벤트를 추가합니다.
$projectTextBox.on('click', '.projectText3 img', function(event) {
  event.stopPropagation();
  const index = $(this).data('index');
  console.log('Image clicked, playing sound for index', index); // 이 부분 추가
  playSound(student[index].audioFile);
});



function showDetailPage(index) {
  $projectTextBox.empty();
  $imagePart.empty();
  // $imagePartMobile.empty();
  
  $imagePart.append(
    `<a href="${student[index].site}">
      <div class="imgSize">
      
      <div class="bgDiv">
      <img src="${student[index].thumbbg1}" class="detailbg1">
      </div>

        <div class="firstDiv">
          <img src="${student[index].thumb}" class="firstImage">
        </div>
      </div>
    </a>`
  );



  $projectTextBox.append(
    `  
    <img src="${student[index].thumbbg2}" class="detailbg2">
    <p class="projectText2">${student[index].name} <span>${student[index].detail}</span></p>
    <p class="projectText3"><img src="${student[index].write}" class="${student[index].detail.toLowerCase()}" data-index="${index}"></p>
        <ul class="projectField">
            <li class="projectLiFirst">project </li>
            <li class="projectLiSecond">${student[index].studentLi1}</li>
        </ul>
        <ul class="projectField">
            <li class="projectLiFirst">Website </li>
            <li class="projectLiSecond">${student[index].studentLi2}</li>
        </ul>
        <ul class="projectField">
            <li class="projectLiFirst">E-mail </li>
            <li class="projectLiSecond">${student[index].studentLi3}</li>
        </ul>
        </div>
        
    `    
)


$textAni.append(
  `
    <div class="textaniWrapper ${student[index].detail.toLowerCase()}">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
  <img src="${student[index].textani}" class="textani">
    </div>
`

)


  $('.projectPage').show();

}
  


// 프로젝트 리스트 클릭 시 상세페이지 이동
$('.projectTitle').click(function () {
  const index = $(this).parent().index();
  showDetailPage(index);
});



function mainLoad() {
  student.shuffle();
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    const listItem = document.createElement('li');
    listItem.className = 'projectTitle'; // .projectTitle 클래스 추가
    listItem.innerHTML = `
      <img class="profile_img" src="${student[i].photo}"/>
      <p class="name">${student[i].name}
      <img class="nameIcon" src="${student[i].nameicon}" style="width:25px;height:auto;"></p>
      <p class="projectDetail">${student[i].proj} | ${student[i].detail}</p>
    `;

        // 프로젝트 제목 클릭 시 상세 페이지 표시
        listItem.addEventListener('click', function() {
          showDetailPage(i);
        });
    
        // 이미지 클릭 이벤트 추가
        const imgElement = listItem.querySelector('.profile_img');

        // 기존의 모든 이벤트 리스너 제거
        const cloneImgElement = imgElement.cloneNode(true);
        imgElement.parentNode.replaceChild(cloneImgElement, imgElement);

        cloneImgElement.addEventListener('click', function () {
        $imagePart.empty();
        $imagePartMobile.empty();
      
        $imagePart.append(
        `<a href="${student[i].site}">
          <!-- 이미지 내용 -->
        </a>`
      );
      
        $imagePartMobile.append(
        `<a href="${student[i].site}">
          <!-- 모바일 이미지 내용 -->
        </a>`
      );
      
    
    $('.projecindexPage').show();

  });




  studentList.appendChild(listItem);
}

}

// 상세 페이지 delete 버튼
$('.deleteBtn').click(function () {
  $('.projecindexPage').hide();
});

mainLoad();



// 셔플기능 끝 
// 검색기능

function filter() {
  let value, name, item, i;
  value = document.getElementById("value").value.toUpperCase();
  item = document.querySelectorAll("ul.studentList > li");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "inline-block";
    } else {
      item[i].style.display = "none";
    }
  }
}

// all
detailList[0].addEventListener("click", function () {
  let allList = [];
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
      allList.push(student[i]);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
    <a href="#">
    <img src="${student[i].photo}"/>
    <p class="name"><strong>${student[i].name}</strong>
    <img class="nameIcon" src="${student[i].nameicon}" style="width:25px;height:auto;"></p>
    <p class="projectDetail">${student[i].team} | ${student[i].detail}</p>
    </a>
    `;
      
      listItem.addEventListener('click', function() { 
        showDetailPage(i); 
      });
      
      studentList.appendChild(listItem);
  }
});






// 기획
detailList[1].addEventListener("click", function () {
  let plannerList = [];
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "Planner") {
      plannerList.push(student[i]);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
    <a href="#">
    <img src="${student[i].photo}"/>
    <p class="name"><strong>${student[i].name}</strong>
    <img class="nameIcon" src="${student[i].nameicon}" style="width:20px;height:auto;"></p>
    <p class="projectDetail">${student[i].team} | ${student[i].detail}</p>
    </a>
    `;
      
      listItem.addEventListener('click', function() { 
        showDetailPage(i); 
      });
      
      studentList.appendChild(listItem);
    }
  }
});



// 디자인
detailList[2].addEventListener("click", function () {
  let designList = [];
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "Designer") {
      designList.push(student[i]);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
    <a href="#">
    <img src="${student[i].photo}"/>
    <p class="name"><strong>${student[i].name}</strong>
    <img class="nameIcon" src="${student[i].nameicon}" style="width:25px;height:auto;"></p>
    <p class="projectDetail">${student[i].team} | ${student[i].detail}</p>
    </a>
    `;
      
      listItem.addEventListener('click', function() { 
        showDetailPage(i); 
      });
      
      studentList.appendChild(listItem);
    }
  }
});



// 프로그래밍
detailList[3].addEventListener("click", function () {
  let programmingList = [];
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "Programmer") {
      programmingList.push(student[i]);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
    <a href="#">
    <img src="${student[i].photo}"/>
    <p class="name"><strong>${student[i].name}</strong>
    <img class="nameIcon" src="${student[i].nameicon}" style="width:25px;height:auto;"></p>
    <p class="projectDetail">${student[i].team} | ${student[i].detail}</p>
    </a>
    `;
      
      listItem.addEventListener('click', function() { 
        showDetailPage(i);
      });
      
      studentList.appendChild(listItem);
    }
  }
});




/* 각 전공 클릭 표시 */

detailList = Array.prototype.slice.call(detailList);
for (let i = 0; i < detailList.length; i++) {
  detailList[i].addEventListener("click", (e) => {
    const el = e.currentTarget;
    const target = detailList.indexOf(el);
    for (let j = 0; j < detailList.length; j++) {
      detailList[j].classList.remove("sideActive");
    }
    detailList[target].classList.add("sideActive");
  });
}



// top Button

const $topBtn = $(".topBtn");
$topBtn.click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// 프로젝트 리스트 클릭 시 상세페이지 이동
$('.projectTitle').click(function () {
  const index = $(this).index();
  $projectTextBox.empty();
  $imagePart.empty();
  $imagePartMobile.empty();
  // $soundPart.empty();
  $imagePart.append(
      `
      <a href="${student[index].site}">
          <div class="imgSize">
              <div class="firstDiv">
                  <img src="${student[index].thumb}" class="firstImage">
              </div>
          </div>
      </a>

      `
  );


  $projectTextBox.append(
      `  
      <p class="projectText2">${student[index].name} <span>${student[index].detail}</span></p>
      <p class="projectText3"><img src="${student[index].write}"></p>
          <ul class="projectField">
              <li class="projectLiFirst">project |</li>
              <li class="projectLiSecond">${student[index].studentLi1}</li>
          </ul>
          <ul class="projectField">
              <li class="projectLiFirst">Website |</li>
              <li class="projectLiSecond">${student[index].studentLi2}</li>
          </ul>
          <ul class="projectField">
              <li class="projectLiFirst">E-mail |</li>
              <li class="projectLiSecond">${student[index].studentLi3}</li>
          </ul>
          </div>
      `
      
  )
  $('.projectPage').show();

});

// 상세 페이지 delete 버튼
$('.deleteBtn').click(function () {
  $('.projectPage').hide();
});





let currentAudio = null;
let currentUrl = null;

function playSound(audioUrl) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (audioUrl !== currentUrl) {
    let audio = new Audio(audioUrl);
    currentAudio = audio;
    currentUrl = audioUrl;
  }
  
  currentAudio.play();
}

$('.deleteBtn').click(function () {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  
  $('.projectPage').hide();
});

$(document).on('click', '.projectTitle', function () {
  const index = $(this).index();
  showDetailPage(index);
}); 

