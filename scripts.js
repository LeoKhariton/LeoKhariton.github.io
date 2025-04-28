document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий путь страницы
    const currentPath = window.location.pathname;

    // Получаем все элементы навигации
    const navLinks = document.querySelectorAll('nav ul li a');

    // Проходим по каждому элементу навигации
    navLinks.forEach(link => {
        // Если путь ссылки совпадает с текущим путем
        if (link.getAttribute('href') === currentPath) {
            // Добавляем класс 'active' к родительскому элементу <li>
            link.parentElement.classList.add('active');
        }
    });
});