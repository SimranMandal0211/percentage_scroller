let msgPercent = document.getElementById('percentNum');
const originalTitle = document.title;
window.addEventListener('scroll', () => {
    let winHeight = window.innerHeight;
    let docHeight = document.body.offsetHeight;

    let scrollTop = window.scrollY;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    msgPercent.innerHTML = scrollPercentRounded;
            
    // percentage show in title
    document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
});