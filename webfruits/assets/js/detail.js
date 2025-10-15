// main image product-gallery
// js/product-gallery.js

const mainImage = document.querySelector('#mainImage img');
const thumbnails = document.querySelectorAll('.thumbnail img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// 🧭 Cập nhật ảnh chính
function updateMainImage(index) {
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = thumbnails[index].src;
    mainImage.style.opacity = 1;
  }, 200);

  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  thumbnails[index].parentElement.classList.add('active');
}

// ⬅️➡️ Nút chuyển ảnh
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateMainImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateMainImage(currentIndex);
});

// 🖼️ Click vào thumbnail
thumbnails.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    currentIndex = i;
    updateMainImage(currentIndex);
  });
});



// fruit-detail

const qtyInput = document.querySelector('.qty-input');
const btnPlus = document.querySelector('.btn-qty.plus');
const btnMinus = document.querySelector('.btn-qty.minus');

btnPlus.addEventListener('click', () => {
  qtyInput.value = parseInt(qtyInput.value) + 1;
});

btnMinus.addEventListener('click', () => {
  if (parseInt(qtyInput.value) > 1) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
});

/* ==========================================
   JavaScript Thuần cho Tab Switching
========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy tất cả các nút tab và nội dung tab
    const tabButtons = document.querySelectorAll('#fruitTabList .tab-button');
    const tabPanes = document.querySelectorAll('#fruitTabContent .tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy target ID từ thuộc tính data-tab-target
            const targetId = this.getAttribute('data-tab-target');
            
            // --- Bước 1: Xử lý các nút (Buttons) ---
            // Loại bỏ class 'active' khỏi TẤT CẢ các nút
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Thêm class 'active' vào nút vừa click
            this.classList.add('active');

            // --- Bước 2: Xử lý nội dung (Panes) ---
            // Loại bỏ class 'active' khỏi TẤT CẢ các nội dung tab
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Tìm nội dung tương ứng và thêm class 'active'
            const targetPane = document.querySelector(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Tự động kích hoạt tab đầu tiên khi tải trang (Đảm bảo tab đầu tiên luôn active)
    if (tabButtons.length > 0 && !document.querySelector('#fruitTabList .tab-button.active')) {
        tabButtons[0].click();
    }
});

/* ==========================================
   Pure JavaScript for Simple Product Slider relation product
========================================== */

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.getElementById('relatedFruitSlider');
    const prevBtn = document.querySelector('.slider-nav.prev-btn');
    const nextBtn = document.querySelector('.slider-nav.next-btn');

    if (sliderWrapper && prevBtn && nextBtn) {
        // Lấy chiều rộng của một card (item) cộng với khoảng cách (gap)
        const card = sliderWrapper.querySelector('.fruit-card');
        const cardWidth = card ? card.offsetWidth + 20 : 300; // 300 là giá trị dự phòng nếu không tìm thấy card

        // Hàm cuộn
        function scrollSlider(direction) {
            if (direction === 'next') {
                // Cuộn sang phải bằng chiều rộng của 3 card (hoặc một số card)
                sliderWrapper.scrollLeft += cardWidth * 3;
            } else if (direction === 'prev') {
                // Cuộn sang trái
                sliderWrapper.scrollLeft -= cardWidth * 3;
            }
        }

        // Gắn sự kiện cho các nút
        nextBtn.addEventListener('click', () => {
            scrollSlider('next');
        });

        prevBtn.addEventListener('click', () => {
            scrollSlider('prev');
        });
        
        // Cập nhật trạng thái nút (tùy chọn: ẩn/hiện nút nếu đạt đến giới hạn)
        function updateNavButtons() {
            // Hiển thị/ẩn nút Prev
            if (sliderWrapper.scrollLeft <= 0) {
                prevBtn.style.opacity = '0.5';
                prevBtn.style.cursor = 'default';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
            }

            // Hiển thị/ẩn nút Next
            const maxScrollLeft = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
            if (sliderWrapper.scrollLeft >= maxScrollLeft) {
                nextBtn.style.opacity = '0.5';
                nextBtn.style.cursor = 'default';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
        }
        
        // Theo dõi sự kiện cuộn
        sliderWrapper.addEventListener('scroll', updateNavButtons);
        
        // Thiết lập trạng thái ban đầu
        updateNavButtons();
    }
});
