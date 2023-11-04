// Passion 슬라이드 기능입니다.
document.addEventListener('DOMContentLoaded', function() {
    const passionScaleControlButton = document.querySelector('.passion .controller.scale .controlButton');
    const passionScaleControlWrapper = document.querySelector('.passion .controller.scale .controlWrapper');
    const passionPatternImgs = document.querySelectorAll('.passion .pattern img');

    let passionScale = 1;

    passionScaleControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handlePassionScaleControlButtonMove);
        document.addEventListener('mouseup', handlePassionScaleControlButtonUp);
    });

    function handlePassionScaleControlButtonMove(event) {
        const newPosition = calculateNewPosition(event.clientX, passionScaleControlWrapper);
        movePassionScaleControlButton(newPosition);
        adjustPassionScale(newPosition);
    }

    function calculateNewPosition(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newPosition = (clientX - rect.left) / rect.width;
        newPosition = Math.min(1, Math.max(0, newPosition));
        return newPosition;
    }

    function movePassionScaleControlButton(newPosition) {
        passionScaleControlButton.style.left = `${newPosition * 100}%`;
    }

    function adjustPassionScale(newPosition) {
        passionScale = 0.1 + newPosition * 1.5;
        passionPatternImgs.forEach(img => {
            img.style.transform = `scale(${passionScale})`;
        });
    }

    function handlePassionScaleControlButtonUp() {
        document.removeEventListener('mousemove', handlePassionScaleControlButtonMove);
        document.removeEventListener('mouseup', handlePassionScaleControlButtonUp);
    }

    const passionRotationControlButton = document.querySelector('.passion .controller.rotation .controlButton');
    const passionRotationControlWrapper = document.querySelector('.passion .controller.rotation .controlWrapper');
    const passionRotationImgs = document.querySelectorAll('.passion .pattern img');
    const patternImg = document.querySelector('.passion .patternImg img');

    let passionRotation = 0;
    let rotationSpeed = 1; // 초기 회전 속도

    passionRotationControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handlePassionRotationControlButtonMove);
        document.addEventListener('mouseup', handlePassionRotationControlButtonUp);
    });

    function handlePassionRotationControlButtonMove(event) {
        const newRotation = calculateNewRotation(event.clientX, passionRotationControlWrapper);
        movePassionRotationControlButton(newRotation);
        adjustPassionRotation(newRotation);
        adjustRotationSpeed(newRotation);
    }

    function calculateNewRotation(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newRotation = (clientX - rect.left) / rect.width;
        newRotation = Math.min(1, Math.max(0, newRotation));
        return newRotation * 360;
    }

    function movePassionRotationControlButton(newRotation) {
        passionRotationControlButton.style.left = `${newRotation / 360 * 100}%`;
    }

    function adjustPassionRotation(newRotation) {
        passionRotation = newRotation;
        passionRotationImgs.forEach(img => {
            img.style.transform = `scale(${passionScale}) rotate(${newRotation}deg)`;
        });
        patternImg.style.transform = `scale(${passionScale}) rotate(${newRotation}deg)`;
    }

    function adjustRotationSpeed(newRotation) {
        rotationSpeed = newRotation / 90; // 회전 속도를 0.5 단위로 계산 (360/720)
    }

    function handlePassionRotationControlButtonUp() {
        document.removeEventListener('mousemove', handlePassionRotationControlButtonMove);
        document.removeEventListener('mouseup', handlePassionRotationControlButtonUp);
    }

    function passionnRotation() {
        passionRotation += rotationSpeed;
        passionPatternImgs.forEach(img => {
            img.style.transform = `scale(${passionScale}) rotate(${passionRotation}deg)`;
        });
        patternImg.style.transform = `scale(${passionScale}) rotate(${passionRotation}deg)`;
        requestAnimationFrame(passionnRotation);
    }

    passionnRotation();
});


// Explosion 슬라이드 기능입니다.
document.addEventListener('DOMContentLoaded', function() {
    const explosionScaleControlButton = document.querySelector('.explosion .controller.scale .controlButton');
    const explosionScaleControlWrapper = document.querySelector('.explosion .controller.scale .controlWrapper');
    const explosionPatternImgs = document.querySelectorAll('.explosion .pattern img');

    let explosionScale = 1;

    explosionScaleControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handleexplosionScaleControlButtonMove);
        document.addEventListener('mouseup', handleexplosionScaleControlButtonUp);
    });

    function handleexplosionScaleControlButtonMove(event) {
        const newPosition = calculateNewPosition(event.clientX, explosionScaleControlWrapper);
        moveexplosionScaleControlButton(newPosition);
        adjustexplosionScale(newPosition);
    }

    function calculateNewPosition(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newPosition = (clientX - rect.left) / rect.width;
        newPosition = Math.min(1, Math.max(0, newPosition));
        return newPosition;
    }

    function moveexplosionScaleControlButton(newPosition) {
        explosionScaleControlButton.style.left = `${newPosition * 100}%`;
    }

    function adjustexplosionScale(newPosition) {
        explosionScale = 0.1 + newPosition * 1.5;
        explosionPatternImgs.forEach(img => {
            img.style.transform = `scale(${explosionScale})`;
        });
    }

    function handleexplosionScaleControlButtonUp() {
        document.removeEventListener('mousemove', handleexplosionScaleControlButtonMove);
        document.removeEventListener('mouseup', handleexplosionScaleControlButtonUp);
    }

    const explosionRotationControlButton = document.querySelector('.explosion .controller.rotation .controlButton');
    const explosionRotationControlWrapper = document.querySelector('.explosion .controller.rotation .controlWrapper');
    const explosionRotationImgs = document.querySelectorAll('.explosion .pattern img');
    const patternImg = document.querySelector('.explosion .patternImg img');

    let explosionRotation = 0;
    let rotationSpeed = 1; // 초기 회전 속도

    explosionRotationControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handleexplosionRotationControlButtonMove);
        document.addEventListener('mouseup', handleexplosionRotationControlButtonUp);
    });

    function handleexplosionRotationControlButtonMove(event) {
        const newRotation = calculateNewRotation(event.clientX, explosionRotationControlWrapper);
        moveexplosionRotationControlButton(newRotation);
        adjustexplosionRotation(newRotation);
        adjustRotationSpeed(newRotation);
    }

    function calculateNewRotation(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newRotation = (clientX - rect.left) / rect.width;
        newRotation = Math.min(1, Math.max(0, newRotation));
        return newRotation * 360;
    }

    function moveexplosionRotationControlButton(newRotation) {
        explosionRotationControlButton.style.left = `${newRotation / 360 * 100}%`;
    }

    function adjustexplosionRotation(newRotation) {
        explosionRotation = newRotation;
        explosionRotationImgs.forEach(img => {
            img.style.transform = `scale(${explosionScale}) rotate(${newRotation}deg)`;
        });
        patternImg.style.transform = `scale(${explosionScale}) rotate(${newRotation}deg)`;
    }

    function adjustRotationSpeed(newRotation) {
        rotationSpeed = newRotation / 90; // 회전 속도를 0.5 단위로 계산 (360/720)
    }

    function handleexplosionRotationControlButtonUp() {
        document.removeEventListener('mousemove', handleexplosionRotationControlButtonMove);
        document.removeEventListener('mouseup', handleexplosionRotationControlButtonUp);
    }

    function explosionnRotation() {
        explosionRotation += rotationSpeed;
        explosionPatternImgs.forEach(img => {
            img.style.transform = `scale(${explosionScale}) rotate(${explosionRotation}deg)`;
        });
        patternImg.style.transform = `scale(${explosionScale}) rotate(${explosionRotation}deg)`;
        requestAnimationFrame(explosionnRotation);
    }

    explosionnRotation();
});

// Start 슬라이드 기능입니다.
document.addEventListener('DOMContentLoaded', function() {
    const startScaleControlButton = document.querySelector('.start .controller.scale .controlButton');
    const startScaleControlWrapper = document.querySelector('.start .controller.scale .controlWrapper');
    const startPatternImgs = document.querySelectorAll('.start .patternStart img');

    let startScale = 1;

    startScaleControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handlestartScaleControlButtonMove);
        document.addEventListener('mouseup', handlestartScaleControlButtonUp);
    });

    function handlestartScaleControlButtonMove(event) {
        const newPosition = calculateNewPosition(event.clientX, startScaleControlWrapper);
        movestartScaleControlButton(newPosition);
        adjuststartScale(newPosition);
    }

    function calculateNewPosition(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newPosition = (clientX - rect.left) / rect.width;
        newPosition = Math.min(1, Math.max(0, newPosition));
        return newPosition;
    }

    function movestartScaleControlButton(newPosition) {
        startScaleControlButton.style.left = `${newPosition * 100}%`;
    }

    function adjuststartScale(newPosition) {
        startScale = 0.1 + newPosition * 1.5;
        startPatternImgs.forEach(img => {
            img.style.transform = `scale(${startScale})`;
        });
    }

    function handlestartScaleControlButtonUp() {
        document.removeEventListener('mousemove', handlestartScaleControlButtonMove);
        document.removeEventListener('mouseup', handlestartScaleControlButtonUp);
    }

    const startRotationControlButton = document.querySelector('.start .controller.rotation .controlButton');
    const startRotationControlWrapper = document.querySelector('.start .controller.rotation .controlWrapper');
    const startRotationImgs = document.querySelectorAll('.start .pattern img');
    const patternImgs = document.querySelectorAll('.start .patternImg img');

    let startRotation = 0;
    let rotationSpeed = 1; // 초기 회전 속도

    startRotationControlButton.addEventListener('mousedown', function(event) {
        event.preventDefault();
        document.addEventListener('mousemove', handlestartRotationControlButtonMove);
        document.addEventListener('mouseup', handlestartRotationControlButtonUp);
    });

    function handlestartRotationControlButtonMove(event) {
        const newRotation = calculateNewRotation(event.clientX, startRotationControlWrapper);
        movestartRotationControlButton(newRotation);
        adjuststartRotation(newRotation);
        adjustRotationSpeed(newRotation);
    }

    function calculateNewRotation(clientX, wrapper) {
        const rect = wrapper.getBoundingClientRect();
        let newRotation = (clientX - rect.left) / rect.width;
        newRotation = Math.min(1, Math.max(0, newRotation));
        return newRotation * 360;
    }

    function movestartRotationControlButton(newRotation) {
        startRotationControlButton.style.left = `${newRotation / 360 * 100}%`;
    }

    function adjuststartRotation(newRotation) {
        startRotation = newRotation;
        startRotationImgs.forEach(img => {
            img.style.transform = `scale(${startScale}) rotate(${newRotation}deg)`;
        });
        patternImgs.forEach(img => {
            img.style.transform = `scale(${startScale}) rotate(${newRotation}deg)`;
        });
    }

    function adjustRotationSpeed(newRotation) {
        rotationSpeed = newRotation / 90; // 회전 속도를 0.5 단위로 계산 (360/720)
    }

    function handlestartRotationControlButtonUp() {
        document.removeEventListener('mousemove', handlestartRotationControlButtonMove);
        document.removeEventListener('mouseup', handlestartRotationControlButtonUp);
    }

    function starttRotation() {
        startRotation += rotationSpeed;
        startRotationImgs.forEach(img => {
            img.style.transform = `scale(${startScale}) rotate(${startRotation}deg)`;
        });
        patternImgs.forEach(img => {
            img.style.transform = `scale(${startScale}) rotate(${startRotation}deg)`;
        });
        requestAnimationFrame(starttRotation);
    }

    starttRotation();
});
