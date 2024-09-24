let previewContainer = document.querySelector('.profile-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.profile-container .profile').forEach(profile =>{
    profile.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = profile.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
