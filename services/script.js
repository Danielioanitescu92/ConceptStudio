/*---------------------MENU--------------------*/

var burger = document.querySelector("header .burger");
var menu = document.querySelector("header .menu");
var back = document.querySelector("header .menu .back .cls");

burger.addEventListener("click", () => {
    menu.style.left = "0";
    menu.style.transition = "0.7s";
});

back.addEventListener("click", () => {
    menu.style.left = "100vw";
    menu.style.transition = "0.7s";
});



/*---------------------VIDEO SLIDER--------------------*/

var porto = document.querySelector("header .slider .sidebar .mb-auto .opener");
var slider = document.querySelector("header .slider");
var videosl = document.querySelector("header .slider .videosl");
var side = document.querySelector("header .slider .sidebar");
var cls = document.querySelector("header .slider .videosl .closing");
var upp = document.querySelector("header .slider .videosl .bttup");
var downn = document.querySelector("header .slider .videosl .bttbottom");

porto.addEventListener("click", () => {
    if (porto.classList.contains("opener")) {
        console.log("porto open");
        slider.style.left = "0";
        slider.style.transition = "0.5s";
        porto.classList.remove("opener");
        if (window.matchMedia("(max-width: 425px)").matches) {
            videosl.style.width = "100vw";
            videosl.style.position = "fixed";
            side.style.display = "none";
            cls.style.display = "block";
            cls.setAttribute("class", "closing position-fixed");
            upp.setAttribute("class", "bttup position-fixed");
            downn.setAttribute("class", "bttbottom position-fixed");
        }
    } else {
        console.log("porto close");
        slider.style.left = "-245px";
        slider.style.transition = "0.5s";
        porto.classList.add("opener");
        cls.style.display = "none";
    };
});

cls.addEventListener("click", () => {
    console.log("porto close");
        slider.style.left = "-245px";
        slider.style.transition = "0.5s";
        porto.classList.add("opener");
        videosl.style.position = "relative";
        videosl.style.width = "245px";
        side.style.display = "flex";
        cls.style.display = "none";
        cls.setAttribute("class", "closing position-absolute");
        upp.setAttribute("class", "bttup position-absolute");
        downn.setAttribute("class", "bttbottom position-absolute");
})

/*---------------------VIDEO SLIDER MODAL--------------------*/


var close = document.querySelector("header .modal .closing img");
var modal = document.querySelector("header .modal");
var modalCont = document.querySelector("header .modal .cont");
var vdc = document.querySelector(".modal .video video");
var songT = document.querySelector(".modal .video .name");
var videoT = document.querySelector(".modal .video .name .title");
var videoS = document.querySelector(".modal .video .name .song");
var a = "../assets/headers/person-singing-1370545.jpg";
var b = "../assets/headers/group-of-teens-singing-1845085.jpg";
var c = "../assets/headers/man-standing-surrounded-with-smoke-1916818.jpg";
var d = "../assets/headers/man-standing-while-singing-2067677.jpg";
var e = "../assets/headers/man-wearing-denim-jacket-singing-on-stage-894156.jpg";
var f = "../assets/headers/person-singing-while-playing-electric-guitar-1864637.jpg";
var g = "../assets/headers/photo-of-man-playing-guitar-3045398.jpg";

function openmodal(y){
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.transition = "0.3s";

    
    vdc.setAttribute("poster", y);
    songT.style.visibility = "visible";
    songT.style.opacity = "1";
    songT.style.transition = "0.1s";

    if (y == a) {
        console.log("one");
        vdc.src = "../assets/one.mp4";
        videoT.innerText = "MR. SINGER & MISS STAR";
        videoS.innerText = "One New Song \n Killer Beats Studio";
    } else if (y == b) {
        console.log("two");
        vdc.src = "../assets/two.mp4";
        videoT.innerText = "TEENAGERS";
        videoS.innerText = "We're cool \n Killer Beats Studio";
    } else if (y == c) {
        console.log("three");
        vdc.src = "../assets/three.mp4";
        videoT.innerText = "SMOKE GUY";
        videoS.innerText = "I'm on fire \n Killer Beats Studio";
    } else if (y == d) {
        console.log("four");
        vdc.src = "../assets/four.mp4";
        videoT.innerText = "G-GANG";
        videoS.innerText = "Awesomeous \n Killer Beats Studio";
    } else if (y == e) {
        console.log("five");
        vdc.src = "../assets/five.mp4";
        videoT.innerText = "SUPERSTAR";
        videoS.innerText = "Another Tune \n Killer Beats Studio";
    } else if (y == f) {
        console.log("six");
        vdc.src = "../assets/six.mp4";
        videoT.innerText = "THE GUITARIST";
        videoS.innerText = "Notes on music \n Killer Beats Studio";
    } else if (y == g) {
        console.log("seven");
        vdc.src = "../assets/seven.mp4";
        videoT.innerText = "THE NEW GUY";
        videoS.innerText = "Bomb Track \n Killer Beats Studio";
    };

    setTimeout(function openmodal(y) {
        songT.style.visibility = "hidden";
        songT.style.opacity = "0";
        songT.style.transition = "0.5s";
    }, 2000);

};

close.addEventListener("click",() => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.transition = "0.3s";
});

modalCont.addEventListener("click",() => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.transition = "0.3s";
});


/*---------------------LOWBAR SLIDER--------------------*/

var row = document.getElementsByClassName("wow");
var cerc = document.getElementsByClassName("cerc");
var index = 1;
var i;

function showSlides(n) {
    if (n > row.length) {index = 1}    
    if (n < 1) {index = row.length}
    for (i = 0; i < row.length; i++) {
        row[i].className = row[i].className.replace(" d-flex", " d-none");
        row[i].style.opacity = "0";
    }
    row[index-1].classList.remove("d-none");
    row[index-1].classList.add("d-flex");
    row[index-1].style.opacity = "1";
}

showSlides(1);

function currentSlide(n) {
    showSlides(index = n);
}


/* Timer on Lowbar */

show();

function show() {
  for (i = 0; i < row.length; i++) {
    row[i].className = row[i].className.replace(" d-flex", " d-none");
    row[i].style.opacity = "0";  
  }
  index++;
  if (index > row.length) {index = 1}
  row[index-1].classList.remove("d-none");
    row[index-1].classList.add("d-flex");
    row[index-1].style.opacity = "1";
    setTimeout(show, 5000);
}


/*------------------SEARCH INPUT-------------------*/

var navmenu = document.querySelector(".navmenu");
var search = document.querySelector("header nav .container .row .search");
var sform = document.querySelector("header nav .container .formsearch");
var clsearch = document.querySelector("header nav .container .formsearch .closesearsch");

search.addEventListener('click', function(){
    navmenu.style.visibility = "hidden";
    navmenu.style.opacity = "0";
    navmenu.style.transition = "0.3s";
    setTimeout(function delay() {
        sform.style.visibility = "visible";
        sform.style.opacity = "1";
        sform.style.transition = "0.3s";
    }, 150);
});

clsearch.addEventListener('click', function(){
    sform.style.visibility = "hidden";
    sform.style.opacity = "0";
    sform.style.transition = "0.3s";
    setTimeout(function delay() {
        navmenu.style.visibility = "visible";
        navmenu.style.opacity = "1";
        navmenu.style.transition = "0.3s";
    }, 150);
});


/*-------------------TERMS AND CONDITIONS-----------------*/

var terms = document.querySelector("footer .terms");
var conds = document.querySelector("footer .terms .conds");
var close = document.querySelector("footer .terms .closing");

function openterms(){
    terms.style.visibility = "visible";
    terms.style.opacity = "1";
    terms.style.transition = "0.3s";
    conds.style.visibility = "visible";
    conds.style.opacity = "1";
    conds.style.transition = "0.3s";
    close.style.visibility = "visible";
    close.style.opacity = "1";
    close.style.transition = "0.3s";
};

close.addEventListener("click",() => {
    terms.style.visibility = "hidden";
    terms.style.opacity = "0";
    terms.style.transition = "0.3s";
    conds.style.visibility = "hidden";
    conds.style.opacity = "0";
    conds.style.transition = "0.3s";
    close.style.visibility = "hidden";
    close.style.opacity = "0";
    close.style.transition = "0.3s";
});

terms.addEventListener("click",() => {
    terms.style.visibility = "hidden";
    terms.style.opacity = "0";
    terms.style.transition = "0.3s";
    conds.style.visibility = "hidden";
    conds.style.opacity = "0";
    conds.style.transition = "0.3s";
    close.style.visibility = "hidden";
    close.style.opacity = "0";
    close.style.transition = "0.3s";
});

/*-----------------SCROLL SERVICES--------------*/

var second = document.querySelector("main .lax .second");

function runRight() {
    sideScroll(second,'right',10,400,10);
};

function runLeft() {
    sideScroll(second,'left',10,400,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){  // created the speed using an interval method with the folowing parameters: the scroll amount and the speed we insert
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}