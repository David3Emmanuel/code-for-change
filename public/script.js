const bars = document.getElementById('bars');
const sidebar = document.getElementById('sidebar');

bars.addEventListener('click', () => {
  sidebar.classList.toggle('invisible');
});