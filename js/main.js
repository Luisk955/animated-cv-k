document.addEventListener(`DOMContentLoaded`, (event) => {
    const animator = new Animator();

    let buttonNext = document.getElementById(`buttonNext`),
        buttonPrevious = document.getElementById(`buttonPrevoius`),
        sections = document.getElementsByClassName(`curriculumSection`);
    console.log('sections: ', sections);


    // let nameOptions = {
    //     scale: 0,
    //     transformOrigin: `center`,
    //     delay: 2,
    //     repeat: true,
    //     ease: Bounce.easeInOut
    // };

    // animator.animateUsingTweenMax(buttonNext, nameOptions);
    // animator.animateUsingTweenMax(buttonPrevious, nameOptions);

    buttonNext.addEventListener(`click`, () => {
        showNextPage(true);
    });

    buttonPrevious.addEventListener(`click`, () => {
        showNextPage(false);
    });


    function update() {
        requestId = requestAnimationFrame(update);
    }
    update();


    // Containers 


    headerStart(startSection);

    //Navbar events
    let home = document.getElementById(`home`),
        aboutMe = document.getElementById(`aboutMe`),
        education = document.getElementById(`education`),
        skills = document.getElementById(`skills`),
        projects = document.getElementById(`projects`),
        contact = document.getElementById(`contact`);


    home.addEventListener(`click`, headerStart);
    aboutMe.addEventListener(`click`, aboutMeStart);
    education.addEventListener(`click`, educationStart);

    function headerStart() {
        hideContainer(aboutMeSection);
        hideContainer(educationSection);
        showContainer(startSection, `flex`);
        let headerRect = document.getElementById(`headerRect`),
            name = document.getElementById(`name`),
            prof = document.getElementById(`prof`);


        //header rectangle
        let headerRectOptions = {
            x: -1500,
            ease: Elastic.easeInOut
        };
        TweenMax.from(headerRect, 2.5, headerRectOptions);

        //name
        let nameOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 2,
            ease: Elastic.easeOut
        };
        TweenMax.from(name, 4, nameOptions);

        //prof
        let profOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 2.5,
            ease: Elastic.easeOut
        };
        TweenMax.from(prof, 4, profOptions);
        // setTimeout(() => {
        //     hideContainer(startSection);
        // }, 6000);
    }

    function aboutMeStart() {
        hideContainer(startSection);
        hideContainer(educationSection);
        showContainer(aboutMeSection, `flex`);


        let aboutMeText1 = document.getElementById(`aboutMeText1`),
            aboutMeText2 = document.getElementById(`aboutMeText2`),
            svgCircle = document.getElementById(`svgCircle`),
            aboutMeTitle = document.getElementById(`aboutMeTitle`);

        //aboutMeTitle
        let aboutMeTitleOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 0.5,
            ease: Elastic.easeOut
        };
        TweenMax.from(aboutMeTitle, 4, aboutMeTitleOptions);

        //aboutMeText1
        let aboutMeText1Options = {
            x: 800,
            delay: 1,
            ease: Elastic.easeInOut
        };
        TweenMax.from(aboutMeText1, 2, aboutMeText1Options);

        //aboutMeText2
        let aboutMeText2Options = {
            x: 800,
            delay: 2,
            ease: Elastic.easeInOut
        };
        TweenMax.from(aboutMeText2, 2, aboutMeText2Options);

        //svgCircle
        let svgCircleOptions = {
            x: -800,
            delay: 1.5,
            ease: Elastic.easeInOut
        };
        TweenMax.from(svgCircle, 2, svgCircleOptions);
    }

    function educationStart() {
        hideContainer(startSection);
        hideContainer(aboutMeSection);
        showContainer(educationSection, `block`);
        let aboutMeText1 = document.getElementById(`aboutMeText1`);

        //aboutMeTitle
        let aboutMeTitleOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 0.5,
            ease: Elastic.easeOut
        };
        TweenMax.from(aboutMeTitle, 4, aboutMeTitleOptions);


    }

    function showNextPage(pValue) {
        if (pValue) {
            for (let j = 0; j < sections.length; j++) {
                if (sections[j].classList[1] == `show`) {
                    sections[j].classList.remove(`show`)
                    sections[j].classList.add(`hide`);
                    let sectionNumber;
                    if (j == (sections.length - 1)) {
                        sections[0].classList.remove(`hide`);
                        sections[0].classList.add(`show`);
                    } else {
                        sectionNumber = j + 1;
                        sections[sectionNumber].classList.remove(`hide`);
                        sections[sectionNumber].classList.add(`show`);

                    }

                    j = sections.length;
                }

            }
        } else {
            for (let j = 0; j < sections.length; j++) {
                if (sections[j].classList[1] == `show`) {
                    sections[j].classList.remove(`show`)
                    sections[j].classList.add(`hide`);
                    let sectionNumber;
                    if (j == 0) {
                        sections[(sections.length - 1)].classList.remove(`hide`);
                        sections[(sections.length - 1)].classList.add(`show`);
                    } else {
                        sectionNumber = j - 1;
                        sections[sectionNumber].classList.remove(`hide`);
                        sections[sectionNumber].classList.add(`show`);

                    }

                    j = sections.length;
                }

            }
        }

    }



    function hideContainer(pContainer) {
        pContainer.style.display = `none`;
    }

    function showContainer(pContainer, pDisplay) {
        pContainer.style.display = pDisplay;
    }
});


var commute = new Boolean;

function css3RadialProgressBar() {

    var xvaluenow;

    console.log(commute);

    if (commute == 0) {
        xvaluenow = 80;
        var progreso = document.getElementById('progreso');
        progreso.innerHTML = 'Progress ' + xvaluenow + '%';
        commute = 1;
    } else {
        xvaluenow = 0;

        var progreso = document.getElementById('progreso');
        progreso.innerHTML = 'Click to view';
        commute = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle = document.getElementById('progress-circle');
    var progress_style = document.getElementById('progress-style');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h:before, .p-f, .p-f:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}
/*----------------------------------------------------*/

var commute01 = new Boolean;

function css3RadialProgressBar01() {

    var xvaluenow01;

    console.log(commute01);

    if (commute01 == 0) {
        xvaluenow01 = 70;
        var progreso01 = document.getElementById('progreso01');
        progreso01.innerHTML = 'Progress ' + xvaluenow01 + '%';
        commute01 = 1;
    } else {
        xvaluenow01 = 0;

        var progreso01 = document.getElementById('progreso01');
        progreso01.innerHTML = 'Click to view';
        commute01 = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow01 * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle01 = document.getElementById('progress-circle01');
    var progress_style01 = document.getElementById('progress-style01');

    /* Fix: Cover gap with shadow */
    if (xvaluenow01 == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle01.setAttribute("aria-valuenow", xvaluenow01);
    progress_style01.innerHTML = " \
.p-h01:before, .p-f01, .p-f01:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};

/*----------------------------------------------------*/

var commute02 = new Boolean;

function css3RadialProgressBar02() {

    var xvaluenow02;

    console.log(commute02);

    if (commute02 == 0) {
        xvaluenow02 = 50;
        var progreso02 = document.getElementById('progreso02');
        progreso02.innerHTML = 'Progress ' + xvaluenow02 + '%';
        commute02 = 1;
    } else {
        xvaluenow02 = 0;

        var progreso02 = document.getElementById('progreso02');
        progreso02.innerHTML = 'Click to view';
        commute02 = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow02 * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle02 = document.getElementById('progress-circle02');
    var progress_style02 = document.getElementById('progress-style02');

    /* Fix: Cover gap with shadow */
    if (xvaluenow02 == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle02.setAttribute("aria-valuenow", xvaluenow02);
    progress_style02.innerHTML = " \
.p-h02:before, .p-f02, .p-f02:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};