const toggleBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times-circle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
})