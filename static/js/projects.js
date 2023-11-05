const studentList = document.querySelector("ul.projectsList");

let detailList = document.querySelectorAll(".fieldList > ul > li");


const $projectList = $('ul.projectsList')
const $projectPage = $('.projectPage');
const $projectTextBox = $('.projectTextBox');
const $imagePart = $('.imagePart');
const $imagePartMobile = $('.imagePartMobile');
const $deleteBtn = $('.deleteBtn');
const $numCode = $('.numCode');
const $projectNum = $('.projectNum');
const $projectCode = $('.projectCode');
const $teamPart = $('.teamPart');
const $memberPart = $('.memberPart');
const $memberImg = $('.memberImg');
const $bangButton = $('.bangButton');

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

// 프로젝트 랜덤 이벤트



function randomFunction() {
    randomNum =  (Math.floor(Math.random() * 2) + 1);
}

function mainLoad() {
    // 프로젝트 리스트 비우기
    $projectList.empty();
    project.shuffle();

    for (let i = 0; i < project.length; i++) {
        // project[i].originalIndex = i;
        randomFunction();
        $projectList.append(
            `
            <li class="${project[i].mainName} flip-container">
                <div class="flipper">
                    <div class="mainThumb1 front">
                        <a href="#">
                            <img class="project_img" src="${project[i].thumb}"></a>
                    </div>
                    <div class="mainThumb1 back">
                        <a href="#">
                            <img class="project_img" src="${project[i].thumbHover}"></a>
                    </div>
                </div>
                <p class="teamField">${project[i].field}</p>
                <p class="projectDetail"><span class="numCode">${project[i].projectNum}</span> 
                ${project[i].name}
                <span class="teamName">${project[i].team}</span></p>
            </li>
            `
        );
    }
}

mainLoad();



//이미지 호버 이벤트

const lists = document.querySelectorAll(".flip-container");

function listOver(target){
    target.querySelector(".front").style.opacity = "0";
}
function listOut(target){
    target.querySelector(".front").style.opacity = "1";
}

lists.forEach((target) => target.addEventListener("mouseover", function(){ 
    listOver(target); 
    })
);
lists.forEach((target) => target.addEventListener("mouseout", function(){ 
    listOut(target); 
}));



  // 프로젝트 리스트 클릭 시 상세페이지 이동
$('.projectTitle').click(function () {
    const index = $(this).index();
    $projectTextBox.empty();
    $memberPart.empty();
    $memberImg.empty();
    $imagePart.empty();
    $imagePartMobile.empty();
    $bangButton.empty();
    $teamPart.empty();

    
    $imagePart.append(
        
        `
        <a href="${project[index].projectSite}" target="_blank">
            <div class="imgSize">
                <div class="firstDiv">
                    <img src="${project[index].teamPic}" class="firstImage">
                </div>
            </div>
        </a>

        `
    );

    $projectTextBox.append(
        `  
            <p class="projectTextTeamMobile">Team. ${project[index].team}</p>
            <p class="projectText2">${project[index].name}</p>
            <p class="projectText1">${project[index].slogan} <img src="${project[index].icon}"></p>
            <p class="projectText3">${project[index].intro}</p>
            <ul class="projectField">
                <li class="projectLiFirst">분야 |</li>
                <li class="projectLiSecond">${project[index].projectLi1}</li>
            </ul>
            <ul class="projectField">
                <li class="projectLiFirst">대상 |</li>
                <li class="projectLiSecond">${project[index].projectLi2}</li>
            </ul>
            <ul class="projectField">
                <li class="projectLiFirst">매체 |</li>
                <li class="projectLiSecond">${project[index].projectLi3}</li>
            </ul>
            `
    )


    $teamPart.append(
        `  
        <div class="leftBox">
            <img class="teamPhoto1" src="${project[index].teamPhoto}">
            <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
        </div>

        <div class="rightBox">
        <p> 
        <img class="rightImg" src="${project[index].teamWrite}"> 
        </p>
    </div>
        `
    )


        $memberImg.append(
            `
            <div class="memberImgBox">
            <ul class="memberImgList">
            <li>
                <img class="memPhoto1" src="${project[index].teamPic1}">
            </li>
            <li>
            <img class="memPhoto1" src="${project[index].teamPic2}">
            </li>
            <li>
            <img class="memPhoto1" src="${project[index].teamPic3}">
            </li>
        </ul>
        </div>
        `
        
    )

    $bangButton.append(
        `
        <div class="bang17">
        <button>
        VIEW BANG 17
        </button>
        </div>
        `
    )
    $('.projectPage').show();


    
    $('.projectsList').hide();
});




//===== 사이트 맵 클릭 이벤트 =====

const fieldList = document.querySelectorAll(".fieldList > ul.fieldFilter");
const fieldListLi = document.querySelectorAll(".fieldList > ul.fieldFilter > li");
const allProjectUl = document.querySelector("ul.allListMenu");
const allListMenuLi = document.querySelectorAll("ul.allListMenu > li");
// 사이트맵을 로드하는 시점에 project 배열을 복사하여 저장
let allProjectCopy = [...allProject];


// 사이트맵 로드
for (let i = 0; i < allProjectCopy.length; i++) {
    allProjectUl.innerHTML += `<li><a href="#"><span>${allProjectCopy[i].projectNum}</span>${allProjectCopy[i].name}</a></li>`;
}

$("ul.allListMenu > li").click(function () {
    console.log("Button clicked!"); // 추가된 console.log 문
    const index = $(this).index();
    $projectTextBox.empty();
    $imagePart.empty();
    $memberImg.empty();
    $bangButton.empty();
    $teamPart.empty();
    $imagePart.append(
        // allProject 대신 allProjectCopy를 사용
        `
        <a href="${allProjectCopy[index].projectSite}" target="_blank">
            <div class="imgSize">
                <div class="firstDiv">
                    <img src="${allProjectCopy[index].teamPic}" class="firstImage">
                </div>
            </div>
        </a>

        `
    );

    $projectTextBox.append(
        `
            <p class="projectText2">${allProjectCopy[index].name}</p>
            <p class="projectText1">${allProjectCopy[index].slogan} <img src="${allProjectCopy[index].icon}"></p>
            <p class="projectText3">${allProjectCopy[index].intro}</p>
            <ul class="projectField">
                <li class="projectLiFirst">분야 |</li>
                <li class="projectLiSecond">${allProjectCopy[index].projectLi1}</li>
            </ul>
            <ul class="projectField">
                <li class="projectLiFirst">대상 |</li>
                <li class="projectLiSecond">${allProjectCopy[index].projectLi2}</li>
            </ul>
            <ul class="projectField">
                <li class="projectLiFirst">매체 |</li>
                <li class="projectLiSecond">${allProjectCopy[index].projectLi3}</li>
            </ul>
        `
    )

    $teamPart.append(
        `  
        <div class="leftBox">
            <img class="teamPhoto1" src="${project[index].teamPhoto}">
            <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
        </div>

        <div class="rightBox">
        <p> 
        <img class="rightImg" src="${project[index].teamWrite}"> 
        </p>
    </div>
        `
    )
                

    $memberImg.append(
        `
        <div class="memberImgBox">
        <ul class="memberImgList">
        <li>
            <img class="memPhoto1" src="${allProjectCopy[index].teamPic1}">
        </li>
        <li>
        <img class="memPhoto1" src="${allProjectCopy[index].teamPic2}">
        </li>
        <li>
        <img class="memPhoto1" src="${allProjectCopy[index].teamPic3}">
        </li>
    </ul>
    </div>
    `
    
)

$bangButton.append(
    `
    <div class="bang17">
    <button>
    VIEW BANG 17
    </button>
    </div>
    `
)

    $('.projectPage').show();


});

$(document).ready(function() {
// 프로젝트 리스트 클릭 시 상세페이지 이동
$('.allListMenu').click(function () {

    $('.projectPage').show();
    $('.projectsList').hide(); 
});

// 상세 페이지 delete 버튼
$('.deleteBtn').click(function () {
    $('.projectPage').hide();
    $('.projectsList').show();
});
});



// 분야별 필터링 기능

const fieldFilterLi = document.querySelectorAll(".fieldList > .fieldFilter > li");

// 분야 클릭 
const $filter1 = $('ul.fieldFilter').find('li').eq(0);
const $filter2 = $('ul.fieldFilter').find('li').eq(1);
const $filter3 = $('ul.fieldFilter').find('li').eq(2);
const $filter4 = $('ul.fieldFilter').find('li').eq(3);
const $filter5 = $('ul.fieldFilter').find('li').eq(4);
const $teamList = $("ul.allListMenu > li");

let projectCopy = [...project];

// 모든 분야
$filter1.click(function () {
    $("ul.allListMenu > li").removeClass('color');
    $('ul.fieldFilter').find('li').eq(0).css('opacity','1')
    $('ul.fieldFilter').find('li').eq(1).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(2).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(3).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(4).css('opacity','0.5')

    let allList = $(".projectTitle");
    allList.remove();
    let allList2 = "";
    
    for (let i = 0; i < projectCopy.length; i++) {
        {
        
            // randomNum =  (Math.floor(Math.random() * 2) + 1);
            
            
            allList2 = 
            `
            <li class="${projectCopy[i].mainName} flip-container">
                <div class="flipper">
                    <div class="mainThumb1 front">
                        <a href="#">
                            <img class="project_img" src="${projectCopy[i].thumb}"></a>
                    </div>
                    <div class="mainThumb1 back">
                        <a href="#">
                            <img class="project_img" src="${projectCopy[i].thumbHover}"></a>
                    </div>
                </div>
                <p class="teamField">${projectCopy[i].field}</p>
                <p class="projectDetail"><span class="numCode">${projectCopy[i].projectNum}</span> 
                ${projectCopy[i].name}
                <span class="teamName">${projectCopy[i].team}</span></p>
            </li>
            `;

            $('.projectsList').append(allList2);

            $('.projectTitle').click(function () {
                console.log("프로젝트 클릭")
                const index = $('.projectTitle').index(this);
                $projectTextBox.empty();
                $imagePart.empty();
                $imagePartMobile.empty();
                $memberImg.empty();
                $bangButton.empty();
                $teamPart.empty();
                $imagePart.append(
                    `
                    <a href="${projectCopy[index].projectSite}" target="_blank">
                        <div class="imgSize">
                            <div class="firstDiv">
                                <img src="${projectCopy[index].teamPic}" class="firstImage">
                            </div>
                        </div>
                    </a>
            
                    `
                );


            
                $projectTextBox.append(
                    `  
                        <p class="projectTextTeamMobile">Team. ${projectCopy[index].team}</p>
                        <p class="projectText2">${projectCopy[index].name}</p>
                        <p class="projectText1">${projectCopy[index].slogan} <img src="${projectCopy[index].icon}"></p>
                        <p class="projectText3">${projectCopy[index].intro}</p>
                        <ul class="projectField">
                            <li class="projectLiFirst">분야 |</li>
                            <li class="projectLiSecond">${projectCopy[index].projectLi1}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">대상 |</li>
                            <li class="projectLiSecond">${projectCopy[index].projectLi2}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">매체 |</li>
                            <li class="projectLiSecond">${projectCopy[index].projectLi3}</li>
                        </ul>
                        `
                )

                $teamPart.append(
                    `  
                    <div class="leftBox">
                    <img class="teamPhoto1" src="${project[index].teamPhoto}">
                    <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
                </div>
        
                <div class="rightBox">
                <p> 
                <img class="rightImg" src="${project[index].teamWrite}"> 
                </p>
            </div>
                    `
                )
            
            
                $bangButton.append(
                    `
                    <div class="bang17">
                    <button>
                    VIEW BANG 17
                    </button>
                    </div>
                    `
                )
                $('.projectPage').show();
            });
            
            // 프로젝트 리스트 클릭 시 상세페이지 이동
            $('.projectTitle').click(function () {
            
                $('.projectPage').show();
                $('.projectsList').hide();  // projectsList 숨기기
            });
            
            // 상세 페이지 delete 버튼
            $('.deleteBtn').click(function () {
                $('.projectPage').hide();
                $('.projectsList').show();
            });
}
    }
})


// 브랜딩 분야
$filter2.click(function () {
    $("ul.allListMenu > li").removeClass('color');
    $('ul.fieldFilter').find('li').eq(0).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(1).css('opacity','1')
    $('ul.fieldFilter').find('li').eq(2).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(3).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(4).css('opacity','0.5')
    $teamList.eq(1).addClass('color');
    $teamList.eq(2).addClass('color');
    $teamList.eq(3).addClass('color');
    $teamList.eq(4).addClass('color');
    $teamList.eq(5).addClass('color');
    $teamList.eq(6).addClass('color');
    $teamList.eq(7).addClass('color');
    $teamList.eq(8).addClass('color');
    $teamList.eq(9).addClass('color');
    $teamList.eq(10).addClass('color');
    $teamList.eq(11).addClass('color');
    $teamList.eq(12).addClass('color');
    $teamList.eq(13).addClass('color');
    $teamList.eq(14).addClass('color');
    $teamList.eq(15).addClass('color');
    $teamList.eq(16).addClass('color');

    let brandingList = $(".projectTitle");
    brandingList.remove();
    let brandingList2 = "";
    let brandingList3 = [];
    
    for (let i = 0; i < brandingProject.length; i++) {
        

        if (brandingProject[i].field == "BRANDING") {
            brandingList3.push(brandingProject[i]);
            
            brandingList2 = 
            `
            <li class="${brandingProject[i].mainName} flip-container">
                <div class="flipper">
                    <div class="mainThumb1 front">
                        <a href="#">
                            <img class="project_img" src="${brandingProject[i].thumb}"></a>
                    </div>
                    <div class="mainThumb1 back">
                        <a href="#">
                            <img class="project_img" src="${brandingProject[i].thumbHover}"></a>
                    </div>
                </div>
                <p class="teamField">${brandingProject[i].field}</p>
                <p class="projectDetail"><span class="numCode">${brandingProject[i].projectNum}</span> 
                ${brandingProject[i].name}
                <span class="teamName">${brandingProject[i].team}</span></p>
            </li>
            `;


            $('.projectsList').append(brandingList2);
    
            $('.projectTitle').click(function () {
                console.log("프로젝트 클릭")
                // const index = $('.projectTitle').index(this);
                const index = $(this).index();
                $projectTextBox.empty();
                $imagePart.empty();
                $imagePartMobile.empty();
                $memberImg.empty();
                $bangButton.empty();
                $teamPart.empty();
                $imagePart.append(
                    `
                    <a href="${brandingProject[index].projectSite}" target="_blank">
                        <div class="imgSize">
                            <div class="firstDiv">
                                <img src="${brandingProject[index].teamPic}" class="firstImage">
                            </div>
                        </div>
                    </a>
            
                    `
                );

            
                $projectTextBox.append(
                    
                    `   
                        <p class="projectTextTeamMobile">Team. ${brandingProject[index].team}</p>
                        <p class="projectText2">${brandingProject[index].name}</p>
                        <p class="projectText1">${brandingProject[index].slogan} <img src="${brandingProject[index].icon}"></p>
                        <p class="projectText3">${brandingProject[index].intro}</p>
                        <ul class="projectField">
                            <li class="projectLiFirst">분야 |</li>
                            <li class="projectLiSecond">${brandingProject[index].projectLi1}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">대상 |</li>
                            <li class="projectLiSecond">${brandingProject[index].projectLi2}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">매체 |</li>
                            <li class="projectLiSecond">${brandingProject[index].projectLi3}</li>
                        </ul>
                        `
                )

                $teamPart.append(
                    `  
                    <div class="leftBox">
                    <img class="teamPhoto1" src="${project[index].teamPhoto}">
                    <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
                </div>
        
                <div class="rightBox">
                <p> 
                <img class="rightImg" src="${project[index].teamWrite}"> 
                </p>
            </div>
                    `
                )


                $memberImg.append(
                    `
                    <div class="memberImgBox">
                    <ul class="memberImgList">
                    <li>
                        <img class="memPhoto1" src="${brandingProject[index].teamPic1}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${brandingProject[index].teamPic2}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${brandingProject[index].teamPic3}">
                    </li>
                </ul>
                </div>
                ` 
            )

            $bangButton.append(
                `
                <div class="bang17">
                <button>
                VIEW BANG 17
                </button>
                </div>
                `
            )
                
            $('.projectPage').show();
    
            });
    
            // 프로젝트 리스트 클릭 시 상세페이지 이동
            $('.projectTitle').click(function () {
            
                $('.projectPage').show();
                $('.projectsList').hide();  // projectsList 숨기기
            });
            
            // 상세 페이지 delete 버튼
            $('.deleteBtn').click(function () {
                $('.projectPage').hide();
                $('.projectsList').show();
            });


    }
    }
    })

// 디미디 분야
$filter3.click(function () {
    $("ul.allListMenu > li").removeClass('color');
    $('ul.fieldFilter').find('li').eq(0).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(1).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(2).css('opacity','1')
    $('ul.fieldFilter').find('li').eq(3).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(4).css('opacity','0.5')
    $teamList.eq(0).addClass('color');
    $teamList.eq(3).addClass('color');
    $teamList.eq(13).addClass('color');
    $teamList.eq(14).addClass('color');
    $teamList.eq(15).addClass('color');
    $teamList.eq(16).addClass('color');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let dmdListCopy = [...dmdProject];
    shuffle(dmdListCopy);

    let dmdList = $(".projectTitle");
    dmdList.remove();
    let dmdList2 = "";
    let dmdList3 = [];
    
    
    // console.log(project.length);
    for (let i = 0; i < dmdListCopy.length; i++) {
    
        if (dmdListCopy[i].field == "UI/UX") {
            dmdList3.push(dmdListCopy[i]);
            
           randomNum =  (Math.floor(Math.random() * 2) + 1);
            
    
            dmdList2 = 
            `
            <li class="${dmdListCopy[i].mainName} flip-container">
                <div class="flipper">
                    <div class="mainThumb1 front">
                        <a href="#">
                            <img class="project_img" src="${dmdListCopy[i].thumb}"></a>
                    </div>
                    <div class="mainThumb1 back">
                        <a href="#">
                            <img class="project_img" src="${dmdListCopy[i].thumbHover}"></a>
                    </div>
                </div>
                <p class="teamField">${dmdListCopy[i].field}</p>
                <p class="projectDetail"><span class="numCode">${dmdListCopy[i].projectNum}</span> 
                ${dmdListCopy[i].name}
                <span class="teamName">${dmdListCopy[i].team}</span></p>
            </li>
            `;

            $('.projectsList').append(dmdList2);
    
            $('.projectTitle').click(function () {
                console.log("프로젝트 클릭")
                // const index = $('.projectTitle').index(this);
                const index = $(this).index();
                $projectTextBox.empty();
                $imagePart.empty();
                $imagePartMobile.empty();
                $memberImg.empty();
                $bangButton.empty();
                $teamPart.empty();
                $imagePart.append(
                    `
                    <a href="${dmdListCopy[index].projectSite}" target="_blank">
                        <div class="imgSize">
                            <div class="firstDiv">
                                <img src="${dmdListCopy[index].teamPic}" class="firstImage">
                            </div>
                        </div>
                    </a>
            
                    `
                );

            
                $projectTextBox.append(
                    
                    `   
                        <p class="projectTextTeamMobile">Team. ${dmdListCopy[index].team}</p>
                        <p class="projectText2">${dmdListCopy[index].name}</p>
                        <p class="projectText1">${dmdListCopy[index].slogan} <img src="${dmdListCopy[index].icon}"></p>
                        <p class="projectText3">${dmdListCopy[index].intro}</p>
                        <ul class="projectField">
                            <li class="projectLiFirst">분야 |</li>
                            <li class="projectLiSecond">${dmdListCopy[index].projectLi1}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">대상 |</li>
                            <li class="projectLiSecond">${dmdListCopy[index].projectLi2}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">매체 |</li>
                            <li class="projectLiSecond">${dmdListCopy[index].projectLi3}</li>
                        </ul>
                        `
                )

                $teamPart.append(
                    `  
                    <div class="leftBox">
                    <img class="teamPhoto1" src="${project[index].teamPhoto}">
                    <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
                </div>
        
                <div class="rightBox">
                <p> 
                <img class="rightImg" src="${project[index].teamWrite}"> 
                </p>
            </div>
                    `
                )


                $memberImg.append(
                    `
                    <div class="memberImgBox">
                    <ul class="memberImgList">
                    <li>
                        <img class="memPhoto1" src="${dmdListCopy[index].teamPic1}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${dmdListCopy[index].teamPic2}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${dmdListCopy[index].teamPic3}">
                    </li>
                </ul>
                </div>
                ` 
            )

            $bangButton.append(
                `
                <div class="bang17">
                <button>
                VIEW BANG 17
                </button>
                </div>
                `
            )
                
            $('.projectPage').show();
    
            });
    
            // 프로젝트 리스트 클릭 시 상세페이지 이동
            $('.projectTitle').click(function () {
            
                $('.projectPage').show();
                $('.projectsList').hide();  // projectsList 숨기기
            });
            
            // 상세 페이지 delete 버튼
            $('.deleteBtn').click(function () {
                $('.projectPage').hide();
                $('.projectsList').show();
            });


    }
    }
    })




    // 뉴미디어 분야
$filter4.click(function () {
    $("ul.allListMenu > li").removeClass('color');
    $('ul.fieldFilter').find('li').eq(0).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(1).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(2).css('opacity','0.5')
    $('ul.fieldFilter').find('li').eq(3).css('opacity','1')
    $('ul.fieldFilter').find('li').eq(4).css('opacity','0.5')
    $teamList.eq(0).addClass('color');
    $teamList.eq(1).addClass('color');
    $teamList.eq(2).addClass('color');
    $teamList.eq(3).addClass('color');
    $teamList.eq(4).addClass('color');
    $teamList.eq(5).addClass('color');
    $teamList.eq(6).addClass('color');
    $teamList.eq(7).addClass('color');
    $teamList.eq(8).addClass('color');
    $teamList.eq(9).addClass('color');
    $teamList.eq(10).addClass('color');
    $teamList.eq(11).addClass('color');
    $teamList.eq(12).addClass('color');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let newmeListCopy = [...newmeProject];
    shuffle(newmeListCopy);

    let newmeList = $(".projectTitle");
    newmeList.remove();
    let newmeList2 = "";
    let newmeList3 = [];

     // console.log(project.length);
    for (let i = 0; i < newmeListCopy.length; i++) {
    
        if (newmeListCopy[i].field == "NEW MEDIA") {
            newmeList3.push(newmeListCopy[i]);
            
        //    randomNum =  (Math.floor(Math.random() * 2) + 1);
            
    
        newmeList2 = 
        `
        <li class="${newmeListCopy[i].mainName} flip-container">
            <div class="flipper">
                <div class="mainThumb1 front">
                    <a href="#">
                        <img class="project_img" src="${newmeListCopy[i].thumb}"></a>
                </div>
                <div class="mainThumb1 back">
                    <a href="#">
                        <img class="project_img" src="${newmeListCopy[i].thumbHover}"></a>
                </div>
            </div>
            <p class="teamField">${newmeListCopy[i].field}</p>
            <p class="projectDetail"><span class="numCode">${newmeListCopy[i].projectNum}</span> 
            ${newmeListCopy[i].name}
            <span class="teamName">${newmeListCopy[i].team}</span></p>
        </li>
        `;
            $('.projectsList').append(newmeList2);
    
            $('.projectTitle').click(function () {
                console.log("프로젝트 클릭")
                // const index = $('.projectTitle').index(this);
                const index = $(this).index();
                $projectTextBox.empty();
                $imagePart.empty();
                $imagePartMobile.empty();
                $memberImg.empty();
                $bangButton.empty();
                $teamPart.empty();
                $imagePart.append(
                    `
                    <a href="${newmeListCopy[index].projectSite}" target="_blank">
                        <div class="imgSize">
                            <div class="firstDiv">
                                <img src="${newmeListCopy[index].teamPic}" class="firstImage">
                            </div>
                        </div>
                    </a>
            
                    `
                );
            
                $projectTextBox.append(
                    
                    `   
                        <p class="projectTextTeamMobile">Team. ${newmeListCopy[index].team}</p>
                        <p class="projectText2">${newmeListCopy[index].name}</p>
                        <p class="projectText1">${newmeListCopy[index].slogan} <img src="${newmeListCopy[index].icon}"></p>
                        <p class="projectText3">${newmeListCopy[index].intro}</p>
                        <ul class="projectField">
                            <li class="projectLiFirst">분야 |</li>
                            <li class="projectLiSecond">${newmeListCopy[index].projectLi1}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">대상 |</li>
                            <li class="projectLiSecond">${newmeListCopy[index].projectLi2}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">매체 |</li>
                            <li class="projectLiSecond">${newmeListCopy[index].projectLi3}</li>
                        </ul>
                        `
                )

                $teamPart.append(
                    `  
                    <div class="leftBox">
                    <img class="teamPhoto1" src="${project[index].teamPhoto}">
                    <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
                </div>
        
                <div class="rightBox">
                <p> 
                <img class="rightImg" src="${project[index].teamWrite}"> 
                </p>
            </div>
                    `
                )


                $memberImg.append(
                    `
                    <div class="memberImgBox">
                    <ul class="memberImgList">
                    <li>
                        <img class="memPhoto1" src="${newmeListCopy[index].teamPic1}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${newmeListCopy[index].teamPic2}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${newmeListCopy[index].teamPic3}">
                    </li>
                </ul>
                </div>
                ` 
            )

            $bangButton.append(
                `
                <div class="bang17">
                <button>
                VIEW BANG 17
                </button>
                </div>
                `
            )
                
            $('.projectPage').show();
    
    
            });
    
            // 프로젝트 리스트 클릭 시 상세페이지 이동
            $('.projectTitle').click(function () {
            
                $('.projectPage').show();
                $('.projectsList').hide();  // projectsList 숨기기
            });
            
            // 상세 페이지 delete 버튼
            $('.deleteBtn').click(function () {
                $('.projectPage').hide();
                $('.projectsList').show();
            });

    }
    }
    })


// 영상디자인 분야
$filter5
    .click(function () {

        $("ul.allListMenu > li").removeClass('color');
        $('ul.fieldFilter').find('li').eq(0).css('opacity','0.5')
        $('ul.fieldFilter').find('li').eq(1).css('opacity','0.5')
        $('ul.fieldFilter').find('li').eq(2).css('opacity','0.5')
        $('ul.fieldFilter').find('li').eq(3).css('opacity','0.5')
        $('ul.fieldFilter').find('li').eq(4).css('opacity','1')
        $teamList.eq(0).addClass('color');
        $teamList.eq(1).addClass('color');
        $teamList.eq(2).addClass('color');
        $teamList.eq(4).addClass('color');
        $teamList.eq(5).addClass('color');
        $teamList.eq(6).addClass('color');
        $teamList.eq(7).addClass('color');
        $teamList.eq(8).addClass('color');
        $teamList.eq(9).addClass('color');
        $teamList.eq(10).addClass('color');
        $teamList.eq(11).addClass('color');
        $teamList.eq(12).addClass('color');
        $teamList.eq(13).addClass('color');
        $teamList.eq(14).addClass('color');
        $teamList.eq(15).addClass('color');
        $teamList.eq(16).addClass('color');

        let videoList = $(".projectTitle");
        videoList.remove();
        let videoList2 = "";
        let videoList3 = [];

    console.log(videoProject.length);
    for (let i = 0; i < videoProject.length; i++) {

        if (videoProject[i].field == "MOVING IMAGE") {
            videoList3.push(videoProject[i]);
            
            videoList2 = 
            `
            <li class="${videoProject[i].mainName} flip-container">
                <div class="flipper">
                    <div class="mainThumb1 front">
                        <a href="#">
                            <img class="project_img" src="${videoProject[i].thumb}"></a>
                    </div>
                    <div class="mainThumb1 back">
                        <a href="#">
                            <img class="project_img" src="${videoProject[i].thumbHover}"></a>
                    </div>
                </div>
                <p class="teamField">${videoProject[i].field}</p>
                <p class="projectDetail"><span class="numCode">${videoProject[i].projectNum}</span> 
                ${videoProject[i].name}
                <span class="teamName">${videoProject[i].team}</span></p>
            </li>
            `;

            $('.projectsList').append(videoList2);
    
            $('.projectTitle').click(function () {
                console.log("프로젝트 클릭")
                // const index = $('.projectTitle').index(this);
                const index = $(this).index();
                $projectTextBox.empty();
                $imagePart.empty();
                $imagePartMobile.empty();
                $memberImg.empty();
                $bangButton.empty();
                $teamPart.empty();
                $imagePart.append(
                    `
                    <a href="${videoProject[index].projectSite}" target="_blank">
                        <div class="imgSize">
                            <div class="firstDiv">
                                <img src="${videoProject[index].teamPic}" class="firstImage">
                            </div>
                        </div>
                    </a>
            
                    `
                );
            
                $projectTextBox.append(
                    
                    `   
                        <p class="projectTextTeamMobile">Team. ${videoProject[index].team}</p>
                        <p class="projectText2">${videoProject[index].name}</p>
                        <p class="projectText1">${videoProject[index].slogan} <img src="${videoProject[index].icon}"></p>
                        <p class="projectText3">${videoProject[index].intro}</p>
                        <ul class="projectField">
                            <li class="projectLiFirst">분야 |</li>
                            <li class="projectLiSecond">${videoProject[index].projectLi1}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">대상 |</li>
                            <li class="projectLiSecond">${videoProject[index].projectLi2}</li>
                        </ul>
                        <ul class="projectField">
                            <li class="projectLiFirst">매체 |</li>
                            <li class="projectLiSecond">${videoProject[index].projectLi3}</li>
                        </ul>
                        `
                )

                $teamPart.append(
                    `  
                    <div class="leftBox">
                    <img class="teamPhoto1" src="${project[index].teamPhoto}">
                    <img class="teamPhotoHover" src="${project[index].teamPhotoHover}">
                </div>
        
                <div class="rightBox">
                <p> 
                <img class="rightImg" src="${project[index].teamWrite}"> 
                </p>
            </div>
                    `
                )


                $memberImg.append(
                    `
                    <div class="memberImgBox">
                    <ul class="memberImgList">
                    <li>
                        <img class="memPhoto1" src="${videoProject[index].teamPic1}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${videoProject[index].teamPic2}">
                    </li>
                    <li>
                    <img class="memPhoto1" src="${videoProject[index].teamPic3}">
                    </li>
                </ul>
                </div>
                ` 
            )

            $bangButton.append(
                `
                <div class="bang17">
                <button>
                VIEW BANG 17
                </button>
                </div>
                `
            )
                
            $('.projectPage').show();
    
    
            });
    
            // 프로젝트 리스트 클릭 시 상세페이지 이동
            $('.projectTitle').click(function () {
            
                $('.projectPage').show();
                $('.projectsList').hide();  // projectsList 숨기기
            });
            
            // 상세 페이지 delete 버튼
            $('.deleteBtn').click(function () {
                $('.projectPage').hide();
                $('.projectsList').show();
            });

    }
    }
    })


    // top Button

    const $topBtn = $(".topBtn");
    $topBtn.click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    });



