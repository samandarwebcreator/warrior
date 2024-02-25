
document.addEventListener('DOMContentLoaded', function () {
    const servicesMain = document.getElementById('servicesMain');
    const scrollLine = document.getElementById('scrollLine');
    
    servicesMain.addEventListener('scroll', function() {
        const scrollPercentage = (servicesMain.scrollLeft / (servicesMain.scrollWidth - servicesMain.clientWidth)) * 100;
        scrollLine.style.background = `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) ${scrollPercentage}%)`;
    });
});

