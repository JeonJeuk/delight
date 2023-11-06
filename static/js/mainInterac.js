
    document.addEventListener('DOMContentLoaded', function() {
        function loadLottieAnimation() {
            const animationContainer = document.getElementById('lottieAnimation');
            const animationContainer2 = document.getElementById('lottieAnimation2');
            const animationContainer3 = document.getElementById('lottieAnimation3');

            const animData = {
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: './static/json/A_0.json'
            };

            const anim = lottie.loadAnimation(animData);

            animationContainer.addEventListener('click', function() {
                anim.addEventListener('loopComplete', function() {
                    animationContainer.style.display = 'none';
                    animationContainer2.style.display = 'block';

                    const anim2 = lottie.loadAnimation({
                        container: animationContainer2,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: './static/json/A_1.json'
                    });

                    anim2.addEventListener('loopComplete', function() {
                        animationContainer2.style.display = 'none';
                        animationContainer3.style.display = 'block';

                        const anim3 = lottie.loadAnimation({
                            container: animationContainer3,
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            path: './static/json/A_2.json'
                        });

                        anim3.addEventListener('loopComplete', function() {
                            // anim3의 loop가 끝나면 해당 요소를 숨기고 loop 중지
                            animationContainer3.style.display = 'none';
                            anim3.loop = false;
                        });
                    });

                    anim2.addEventListener('loopComplete', function() {
                        anim2.loop = false;
                    });
                });

                anim.addEventListener('loopComplete', function() {
                    anim.loop = false;
                });
            });
        }

        loadLottieAnimation();
    });

