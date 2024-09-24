// let previewContainer = document.querySelector('.profile-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.profile-container .profile').forEach(profile =>{
//     profile.onclick = () =>{
//         previewContainer.style.display = 'flex';
//         let name = profile.getAttribute('data-name');
//         previewBox.forEach(preview =>{
//             let target = preview.getAttribute('data-target');
//             if(name == target){
//                 preview.classList.add('active');
//             }
//         });
//     };
// });

// previewBox.forEach(close =>{
//     close.querySelector('.fa-times').onclick = () =>{
//         close.classList.remove('active');
//         previewContainer.style.display = 'none';
//     };
// });
let previewContainer = document.querySelector('.profile-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
let currentIndex = 0;

document.querySelectorAll('.profile-container .profile').forEach((profile, index) => {
    profile.onclick = () => {
        previewContainer.style.display = 'flex';
        currentIndex = index;
        updatePreview();
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

document.querySelector('.prev').onclick = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : previewBox.length - 1;
    updatePreview();
};

document.querySelector('.next').onclick = () => {
    currentIndex = (currentIndex < previewBox.length - 1) ? currentIndex + 1 : 0;
    updatePreview();
};

function updatePreview() {
    previewBox.forEach(preview => preview.classList.remove('active'));
    previewBox[currentIndex].classList.add('active');

    document.querySelector('.prev').style.display = (currentIndex === 0) ? 'none' : 'block';
    document.querySelector('.next').style.display = (currentIndex === previewBox.length - 1) ? 'none' : 'block';
}

// Touch events for mobile responsiveness
let touchstartX = 0;
let touchendX = 0;

previewContainer.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

previewContainer.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
        // Swipe left
        document.querySelector('.next').click();
    }
    if (touchendX > touchstartX) {
        // Swipe right
        document.querySelector('.prev').click();
    }
}

