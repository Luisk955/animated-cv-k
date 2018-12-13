document.addEventListener(`DOMContentLoaded`, (event) => {
    const animator = new Animator();

    let buttonNext = document.getElementById(`buttonNext`),
        buttonPrevious = document.getElementById(`buttonPrevoius`),
        sections = document.getElementsByClassName(`curriculumSection`);
    console.log('sections: ', sections);


    let nameOptions = {
        scale: 0,
        transformOrigin: `center`,
        delay: 2,
        repeat: true,
        ease: Bounce.easeInOut
    };

    animator.animateUsingTweenMax(buttonNext, nameOptions);
    animator.animateUsingTweenMax(buttonPrevious, nameOptions);

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