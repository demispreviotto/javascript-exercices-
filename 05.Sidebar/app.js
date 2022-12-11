const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
    toggleBtn.classList.toggle('hide')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
    toggleBtn.classList.toggle('hide')
})