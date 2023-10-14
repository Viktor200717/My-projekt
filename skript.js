// Отримуємо посилання на кнопки і контент
const homeButton = document.getElementById("home");
const mySitesButton = document.getElementById("mysites");
const contactButton = document.getElementById("contact");
const content = document.getElementById("content");

// Функція для завантаження контенту на основі натисканої кнопки
function loadContent(buttonId) {
    // Очищаємо контент
    content.innerHTML = "";

    // Завантажуємо вміст залежно від натисканої кнопки
    if (buttonId === "home") {
        content.innerHTML = "<h1>Ласкаво просимо на головну сторінку!</h1>";
    } else if (buttonId === "mysites") {
        content.innerHTML = "<h1>Мої сайти:</h1><ul><li>Сайт 1</li><li>Сайт 2</li></ul>";
    } else if (buttonId === "contact") {
        content.innerHTML = "<h1>Зв'язок зі мною:</h1><p>Тут ви можете знайти інформацію для зв'язку зі мною.</p>";
    }
}

// Додавання обробників подій на кнопки
homeButton.addEventListener("click", function() {
    loadContent("home");
});

mySitesButton.addEventListener("click", function() {
    loadContent("mysites");
});

contactButton.addEventListener("click", function() {
    loadContent("contact");
});

// Завантажуємо головний контент при завантаженні сторінки
loadContent("home");
