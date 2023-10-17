var size = document.querySelectorAll(".sizes button");
size.forEach(sizeBtn => {
    sizeBtn.addEventListener('click', () => {
        size.forEach(sizeBtn => { sizeBtn.classList.remove('active'); });
        sizeBtn.classList.add('active');
    });
});


