const customerLink = document.getElementById('customer-link');
const customerInfo = document.getElementById('customer-info');

// Biến để theo dõi trạng thái chuột
let isHovering = false;

// Sự kiện khi đưa chuột vào phần link
customerLink.addEventListener('mouseenter', () => {
    customerInfo.style.display = 'block';
    isHovering = true;
});

// Sự kiện khi chuột rời khỏi phần link
customerLink.addEventListener('mouseleave', () => {
    isHovering = false;
    setTimeout(() => {
        if (!isHovering) {
            customerInfo.style.display = 'none';
        }
    }, 200);
});

// Sự kiện khi đưa chuột vào phần nội dung bảng thông tin
customerInfo.addEventListener('mouseenter', () => {
    isHovering = true;
});

// Sự kiện khi chuột rời khỏi phần nội dung bảng thông tin
customerInfo.addEventListener('mouseleave', () => {
    isHovering = false;
    setTimeout(() => {
        if (!isHovering) {
            customerInfo.style.display = 'none';
        }
    }, 200);
});


//
// Lấy phần tử nút scroll-to-top
var scrollToTopButton = document.querySelector(".ButtonScrollToTop_scroll-to-top__KGhc4");

// Thêm sự kiện scroll cho window
window.addEventListener("scroll", function() {
    // Kiểm tra vị trí cuộn của window
    if (window.scrollY > 0) {
        // Nếu vị trí cuộn lớn hơn 0, hiển thị nút scroll-to-top
        scrollToTopButton.style.display = "block";
    } else {
        // Nếu vị trí cuộn là 0, ẩn nút scroll-to-top
        scrollToTopButton.style.display = "none";
    }
});

// Lấy phần tử nút scroll-to-top
var scrollToTopButton = document.querySelector(".ButtonScrollToTop_scroll-to-top__KGhc4");

// Thêm sự kiện click cho nút scroll-to-top
scrollToTopButton.addEventListener("click", function() {
    // Chạy trang lên trên cùng với hiệu ứng mượt
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

var toggleButton = document.getElementById("toggleButton");
var content = document.querySelector(".ProductTab_content__aTUkM");

toggleButton.addEventListener("click", function() {
    if (content.style.display === "none") {
        content.style.display = "block";
        toggleButton.innerHTML = "Thu gọn";
    } else {
        content.style.display = "none";
        toggleButton.innerHTML = "Xem thêm";
    }
});


function changeImage(imageUrl) {
    var productImage = document.querySelector('.ProductThumbnailCarousel_product-img__YsmdM img');
    productImage.src = imageUrl;
}