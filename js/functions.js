class Animator {
    constructor() {
        // this.
    }

    animateUsingTweenMax(pElement, pOptions) {
        TweenMax.from(pElement, 4, pOptions);
    }

    animateProgress(pElement) {
        TweenMax.from(pElement, 2, {
            css: {
                rotationY: 360,
                transformOrigin: "50% 50% -400px",
                backgroundColor: "hsl(" + Math.random() * 255 + ", 90%, 60%)"
            },
            repeat: 1,
            yoyo: true,
            repeatDelay: 1,
            ease: Linear.easeNone
        });
    }

}