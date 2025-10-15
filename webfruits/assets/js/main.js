window.addEventListener("load",()=>{
    // load 
    const loader = document.querySelector(".load");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(()=>{
        loader.style.display = "none";
    },300);

    // cart 

    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBox.classList.toggle('active');
    });

    //navbar
    const btnCat = document.getElementById('btn-cat');
    const dropdown = document.getElementById('dropdown-cat');

    btnCat.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });

    //slide

    const slidesMainWrap = document.querySelector('.slides_main');
    const slidesFeaturedWrap = document.querySelector('.slides_featured');
    const mainItems = document.querySelectorAll('.slide_main');
    const featItems = document.querySelectorAll('.slide_featured');
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');

    let index = 0;
    const total = Math.max(mainItems.length, featItems.length);

    function show(i){
        // calculate indices modulo each length (safe if counts differ)
        const idxMain = i % mainItems.length;
        const idxFeat = i % featItems.length;

        slidesMainWrap.style.transform = `translateX(-${idxMain * 100}%)`;
        slidesFeaturedWrap.style.transform = `translateX(-${idxFeat * 100}%)`;
    }

    // next / prev handlers
    if(nextBtn) nextBtn.addEventListener('click', () => { index = (index + 1) % total; show(index); resetAutoplay(); });
    if(prevBtn) prevBtn.addEventListener('click', () => { index = (index - 1 + total) % total; show(index); resetAutoplay(); });

    // autoplay
    let autoplay = setInterval(() => { index = (index + 1) % total; show(index); }, 4000);

    function resetAutoplay(){
        clearInterval(autoplay);
        autoplay = setInterval(() => { index = (index + 1) % total; show(index); }, 4000);
    }

    // pause on hover for both slider areas
    const sliderAreas = document.querySelectorAll('.slider');
    sliderAreas.forEach(s => {
        s.addEventListener('mouseenter', () => clearInterval(autoplay));
        s.addEventListener('mouseleave', () => resetAutoplay());
    });

    // initial render
    show(index);

    // Optional: enable swipe on mobile (basic)
    let startX = 0;
    let isDown = false;
    const mainSlider = document.querySelector('.slider_main');
    mainSlider.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
    mainSlider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if(Math.abs(diff) > 40){
        if(diff < 0) { index = (index + 1) % total; } else { index = (index - 1 + total) % total; }
        show(index); resetAutoplay();
        }
    });

    // our product

    const tabs = document.querySelectorAll('.nav_pro li');
    const panes = document.querySelectorAll('.tab_pane');

    tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();

        // delete active in all
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        //add active for tab chosing
        tab.classList.add('active');
        const target = tab.querySelector('a').getAttribute('href').substring(1);
        document.getElementById(target).classList.add('active');
    });
    });

    // Khi load trang mặc định mở tab đầu
    if (tabs.length > 0) {
    tabs[0].classList.add('active');
    panes[0].classList.add('active');
    }

    //<!-- product-list  -->
 // ===== Outer Carousel =====
    const outerTrack = document.querySelector('.outer-track');
    const outerSlides = document.querySelectorAll('.outer-slide');
    let outerIndex = 0;

    function updateOuter() {
    outerTrack.style.transform = `translateX(-${outerIndex * 100}%)`;
    }
    document.querySelector('.next-outer').onclick = () => {
    outerIndex = (outerIndex + 1) % outerSlides.length;
    updateOuter();
    resetOuterAuto();
    };
    document.querySelector('.prev-outer').onclick = () => {
    outerIndex = (outerIndex - 1 + outerSlides.length) % outerSlides.length;
    updateOuter();
    resetOuterAuto();
    };

    // Tự động chạy outer carousel
    let outerTimer = setInterval(() => {
    outerIndex = (outerIndex + 1) % outerSlides.length;
    updateOuter();
    }, 6000);

    function resetOuterAuto() {
    clearInterval(outerTimer);
    outerTimer = setInterval(() => {
        outerIndex = (outerIndex + 1) % outerSlides.length;
        updateOuter();
    }, 6000);
    }


    // ===== Inner Carousel =====
    document.querySelectorAll('.inner-carousel').forEach(carousel => {
    const track = carousel.querySelector('.inner-track');
    const cards = carousel.querySelectorAll('.product-card');
    const prev = carousel.querySelector('.prev-inner');
    const next = carousel.querySelector('.next-inner');
    const visibleCount = 4; // hiển thị 4 sản phẩm/lần
    let index = 0;

    function updateInner() {
        const movePercent = (100 / visibleCount) * index;
        track.style.transform = `translateX(-${movePercent}%)`;
    }

    // Nút bấm
    next.onclick = () => {
        index = (index + 1) % (cards.length - visibleCount + 1);
        updateInner();
        resetAuto();
    };
    prev.onclick = () => {
        index = (index - 1 + cards.length - visibleCount + 1) % (cards.length - visibleCount + 1);
        updateInner();
        resetAuto();
    };

    // Auto-slide cho inner carousel
    let timer = setInterval(() => {
        index = (index + 1) % (cards.length - visibleCount + 1);
        updateInner();
    }, 3000);

    // Khi bấm nút thì dừng 5 giây rồi chạy lại
    function resetAuto() {
        clearInterval(timer);
        timer = setInterval(() => {
        index = (index + 1) % (cards.length - visibleCount + 1);
        updateInner();
        }, 3000);
    }
    });

    //**************************best seller*******************

    document.querySelectorAll('.view-icon').forEach(icon=>{
        icon.addEventListener('click',()=>{
            alert('Xem chi tiết sản phẩm này');
        });
    });
    document.querySelectorAll('.product-actions button').forEach(btn=>{
        btn.addEventListener('click',()=>{
            alert('Đã thêm vào giỏ hàng!');
        });
    });
        // ************Notification Bar 
    const bar = document.getElementById('announcement-bar');
    const closeBtn = document.getElementById('close-announcement');
    
    // 1. close Notification Bar
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // hide Notification Bar when click button close
            bar.style.display = 'none';
            
            // Optional: Save state to LocalStorage so it doesn't re-display
            localStorage.setItem('announcementClosed', 'true');
        });
    }

    // 2. Status check function (E.g. do not re-display if closed)
    const isClosed = localStorage.getItem('announcementClosed');
    if (isClosed === 'true' && bar) {
       
    }
    
    // 3. (BE Integration) This function will be called from your backend
// to change the notification content dynamically:
    window.updateAnnouncement = function(newText, couponCode) {
        const textElement = bar.querySelector('p');
        if (textElement) {
            textElement.innerHTML = newText.replace('{code}', `<strong>${couponCode}</strong>`);
            bar.style.display = 'flex'; // Make sure to show if there is new content
        }
    }
});