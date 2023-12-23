//*************************************************************************************************?Calling elements
//***************************************************************************************************slider
let d_btn_slider = document.querySelector(".button-slide");
let d_sliderImg = document.getElementById("slider-image");
let sliderContentPrice = document.querySelector(".content-slider-price");
//all buttons
let b_btns = document.querySelectorAll(".btn-slide-function");
//img content
let d_content_slide_section = document.querySelector(".content-slider-text");
//***************************************************************************************************list on Salse Section
let gameContainer = document.querySelector(".game-container");
let gameList = document.querySelector(".game-list");
//buttons
let b_swipe_right = document.querySelector(".swipe-right");
let b_swipe_left = document.querySelector(".swipe-left");

//**************************************************************************************************Slide-list Anumation
//! the main slide img

//*the map
let slideMap = new Map();
slideMap
  .set("spider", [
    `https://thecosmiccircus.com/wp-content/uploads/2023/07/Marvels-Spiderman-2-banner-e1690742326962.jpg`,
    `the friendly neighborhood spiderman has change after the new black suit... `,
    `$69,99`,
  ])
  .set("gow", [
    `https://www.psu.com/wp/wp-content/uploads/2018/04/god-of-war-theme.jpg`,
    ` Enter the Norse realm · Grasp a second chance · Journey to a dark, elemental world of fearsome creatures`,
    "$55.99",
  ])
  .set("reddead", [
    `https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/red-dead-redemption-2-pc-game-ready-driver/red-dead-redemption-2-nvidia-geforce-ogimage.jpg`,
    `Set in the American frontier in 1899,  follows the story of Arthur Morgan,a member of Dutch outlaw gang.`,
    "$30,99",
  ])
  .set("assassin", [
    `https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/1YHRDsi3voapHSwJfDMneZXV.jpg`,
    `you are Basim, a cunning street thief with nightmarish visions seeking answers and justice.`,
    "$49.50",
  ])
  .set("fc", [
    `https://icdn.caughtoffside.com/wp-content/uploads/2023/07/Screenshot-2023-07-13-at-21.jpg`,
    `EA SPORTS FC™ 24 kicks off a new era of The World's Game.`,
    "$79",
  ]);
//*the function

//add event to common parent element
// make a matching Strategy to match the current element

let btn_slide_event = d_btn_slider.addEventListener("click", function (el) {
  //the loop
  let btnNum = Number(el.target.getAttribute("value")) + 1;
  if (btnNum == 5) btnNum = 0;
  
  el.preventDefault();
  let arrbuttons = Array.from(b_btns); // convert the nodelist to an array

  //match Strategy
  if (el.target.classList.contains("btn-slide-function")) {
    //make suer all elements colsing their animations
    for (let i = 0; i < arrbuttons.length; i++) {
      if (arrbuttons[i].classList.contains("btn-slide-animation")) {
        arrbuttons[i].classList.add("hide-btn-slide-animation");
       
      }
      arrbuttons[i].classList.remove("loop-start-point");
        el.target.classList.add("loop-start-point");
    }
    //*end of array

    if (el.target.classList.contains("hide-btn-slide-animation")) {
      el.target.classList.remove("hide-btn-slide-animation");
    }
    el.target.classList.add("btn-slide-animation");

    //Change the background color
    for (let [key, value] of slideMap) {
     
      if (key == el.target.id) {
        d_sliderImg.classList.add("slider-img-change-left");
        setTimeout(function () {
          d_sliderImg.style.backgroundImage = `linear-gradient(to right top , rgba(0, 0, 0, .6) 20%,  rgba(255, 255, 255, 0) 50%) , url("${value[0]}")`;
          d_content_slide_section.innerText = value[1];
          sliderContentPrice.innerHTML = `<span style ="color:rgb(216, 216, 216)!important ; font-Size:1.2vw">Starting at</span> ${value[2]}`;
        }, 400);
        setTimeout(function () {
          d_sliderImg.classList.add("slider-img-change-right");
        }, 500);

        setTimeout(function () {
          d_sliderImg.classList.remove("slider-img-change-left");
          d_sliderImg.classList.remove("slider-img-change-right");
        }, 900);
      }
    }
    //the loop

   // 1) add class "loop-start-point" for the condition 
   setTimeout(function () {
     if (el.target.classList.contains("loop-start-point")) {
        b_btns[btnNum].click();
     }
    }, 4000);
    
  }
});
//start the loop
window.addEventListener("load", function () { 
  b_btns[0].click();
});

//***************************************************************************************************list on Salse code
b_swipe_left.addEventListener("click", function (e) {
  let gameListWitdh = gameList.getBoundingClientRect().width;
  gameContainer.scrollBy({ left: -gameListWitdh });
});
b_swipe_right.addEventListener("click", function (e) {
  let gameListWitdh = gameList.getBoundingClientRect().width;
  gameContainer.scrollBy({ left: gameListWitdh });
});
