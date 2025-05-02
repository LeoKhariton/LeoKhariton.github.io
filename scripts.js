// динамическая загрузка header'a и footer'a
/*document.addEventListener('DOMContentLoaded', function() {
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
});*/

async function loadComponent(elementId, url) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}
loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');

/*document.addEventListener("DOMContentLoaded", function() {
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
});*/