window.onload = function() {
	/* Initialize Enabler */
	/*
	if (Enabler.isInitialized()) {*/
		dcrmInit();
	/*
		dcrmLogs('Enabler initialized');
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrmInit);
	}*/	
}

var cta = document.getElementById('cta');
var text = document.getElementById('text');
var reflection = document.getElementById('reflection');
var arrow = document.getElementById('arrow');
var container = document.getElementById('container');

function anime1(){
  container.style.visibility = "visible";

  TweenLite.to(text, 0.2, { left: 0, delay: .5});
  TweenLite.to(cta, 0.5, { opacity: 1, delay: 1.5});

  TweenLite.to(reflection, .8, { left: '200px', delay: 2.5});
  TweenLite.to(reflection, .8, { opacity: 1, delay: 2.5});
  TweenLite.to(reflection, 0, { left: '-77px', delay: 3.5});
  TweenLite.to(reflection, 0, { opacity: 0, delay: 3.5});
  TweenLite.to(reflection, 0, { opacity: 1, delay: 3.6});

  TweenLite.to(arrow, 0.2, { left: '110px', delay: 2.5});
  TweenLite.to(arrow, 0.2, { left: '106px', delay: 2.7});
  TweenLite.to(arrow, 0.2, { left: '110px', delay: 2.9});
  TweenLite.to(arrow, 0.2, { left: '106px', delay: 3.1});
  
  container.addEventListener('mouseenter', function() {
    TweenLite.to(reflection, 0.8, { left: '200px', delay: 0});
    TweenLite.to(reflection, 0.8, { opacity: 1, delay: 0});
    TweenLite.to(reflection, 0, { left: '-77px', delay: 1.2});
    TweenLite.to(reflection, 0, { opacity: 0, delay: 1.2});
    TweenLite.to(reflection, 0, { opacity: 1, delay: 1.3});

    TweenLite.to(arrow, 0.2, { left: '110px', delay: 0});
    TweenLite.to(arrow, 0.2, { left: '106px', delay: 0.2});
    TweenLite.to(arrow, 0.2, { left: '110px', delay: 0.4});
    TweenLite.to(arrow, 0.2, { left: '106px', delay: 0.6});
  }, false);

  container.onclick = function(e) {linkOut(e);};

  container.addEventListener("touchend", function() {
       linkOut();
  }, false);

  cta.onclick = function(e) {linkOut2(e);};

  cta.addEventListener("touchend", function() {
       event.preventDefault();
       linkOut2(event);
  }, false);
};


/* Run when Enabler is ready */
function dcrmInit() {
	/*
  dcrmLogs('Enabler initialized');
  if (Enabler.isPageLoaded()) {*/
    dcrmBannerReady();
  /*} else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, dcrmBannerReady);
  }*/
}

/* Logs console messages if in testing environment */
function dcrmLogs(dcrmLogMessage) {
  /*if(!(Enabler.isServingInLiveEnvironment())) {
    console.log(dcrmLogMessage);
  }*/
}

function linkOut(e) {
	e.preventDefault(); 
    Enabler.exit("billboard_click_billboard_clicktaghtml");
}

function linkOut2(e) {
    e.stopPropagation(); 
    Enabler.exit("billboard_click_cta_clicktaghtml");
}

//	Setup files after Enabler has been loaded
function dcrmBannerReady() {
	dcrmLogs('Banner initialized');
	//	Start Animation
	anime1();
}

//  HElPERS
function replaceClassName(divName, origString, newString) {
    divName.className = divName.className.replace(origString, newString);
    //divName.classList = divName.classList.replace(origString, newString); // IE10
}

function addFadeElementClass(divName) {
    removeClassName(divName, " revealElement");
    divName.className += " fadeElement";
    //divName.classList += " fadeElement"; // IE10
}

function addRevealElementClass(divName) {
    removeClassName(divName, " fadeElement");
    divName.className += " revealElement";
    //divName.classList += " revealElement"; // IE10
}

function fadeOutElement(divName) {
    removeClassName(divName, " revealElement");
    setTimeout(function() {
        addFadeElementClass(divName);
        setTimeout(function() {
            divName.style.display = 'none';
        }, 500); // Hide the Div
    }, 500); // Fade Delay
}

function fadeInElement(divName) {
    removeClassName(divName, " revealElement");
    removeClassName(divName, " fadeElement");
    divName.style.opacity = '0';
    divName.style.display = 'block';
    setTimeout(function() {
        divName.style.opacity = '';
        addRevealElementClass(divName);
    }, 500);
}

function removeClassName(elem, str) { //DOM element, className for remove
    str = String(str);
    var newStr = new RegExp(str, 'g');
    elem.className = elem.className.replace(newStr, '');
    //elem.classList.remove(newStr);  // IE10
}
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
