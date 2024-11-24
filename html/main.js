
const userIcon = document.getElementById('userIcon');
const loginAlert = document.getElementById('loginAlert');
const closeAlert = document.getElementById('closeAlert');


userIcon.addEventListener('click', () => {
    loginAlert.style.display = 'block'; 
});


closeAlert.addEventListener('click', () => {
    loginAlert.style.display = 'none';
});


