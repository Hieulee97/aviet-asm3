"use stric";
// //tao ham hien thi khi nhap mail



const formContainer = document.getElementById("formContainer");
const infoContainer = document.getElementById("infoContainer");
const inputForm = document.getElementById("inputForm");
const emailInput = document.getElementById("email");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  // Kiểm tra xem email có hợp lệ hay không 
  if (!regex.test(email)) {
    alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email.");
    return;
  }

  // Ẩn và hiển thị vùng chứa thông tin với dữ liệu đã nhậpa
  formContainer.classList.add("hide");
  infoContainer.classList.remove("hide");
});


//chuyển đổi chế độ hiển thị
function toggleSkillDetails(skillElement) {
  const contentElement = skillElement.querySelector('.content');
  const viewMoreButton = skillElement.querySelector('.view-more');

  if (contentElement.classList.contains('hide')) {
    contentElement.classList.remove('hide');
    viewMoreButton.textContent = 'View Less';
  } else {
    contentElement.classList.add('hide');
    viewMoreButton.textContent = 'View More';
  }
}

// thêm trình xử lý sự kiện nhấp chuột
function addClickListenersToSkillTitles() {
  const skillTitles = document.querySelectorAll('.section-title h2');

  skillTitles.forEach((skillTitle) => {
    skillTitle.addEventListener('click', () => {
      const skillElement = skillTitle.closest('.section');
      toggleSkillDetails(skillElement);
    });
  });
}
// Hàm ẩn/hiển thị nội dung mở rộng và nút "Read more"
function toggleReadMoreLess(button) {
  var content = button.nextElementSibling;
  if (content.style.display === "none") {
    content.style.display = "block";
    button.innerHTML = "Read less";
  } else {
    content.style.display = "none";
    button.innerHTML = "Read more";
  }
}

// Lắng nghe sự kiện click cho các nút "Read more"
var readMoreButtons = document.querySelectorAll(".myBtn");
readMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleReadMoreLess(button);
  });
});