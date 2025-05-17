const BannerSlider = (() => {
    const arr = [
        {img:"./image/banner1.jpg"},
        {img:"./image/banner2.jpg"},
        {img:"./image/banner3.jpg"},
        {img:"./image/banner4.jpg"},
        {img:"./image/banner5.jpg"},
        {img:"./image/banner6.jpg"}
    ]
    let currentIndex = 0
    let timer = null
    const img = document.querySelector('.banner-img')
    const dots = document.querySelectorAll('.dot')
    function updateBanner(index) {
        currentIndex = index
        img.src = arr[currentIndex].img
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex)
        })
    }
    function startAutoPlay() {
        timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % arr.length
            updateBanner(currentIndex)
        }, 3000)
    }
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            clearInterval(timer) 
            const index = Array.from(dots).indexOf(dot)
            updateBanner(index)
        })
        
        dot.addEventListener('mouseleave', () => {
            startAutoPlay() 
        })
    })
    startAutoPlay()
    document.addEventListener('DOMContentLoaded', () => {
        BannerSlider.init();
});