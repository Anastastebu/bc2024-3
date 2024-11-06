const fs = require('fs');

// Отримання шляхів до файлів з аргументів командного рядка
const inputFilePath = process.argv[3];
const outputFilePath = process.argv[5];

// Перевірка наявності параметра --display
const shouldDisplay = process.argv.includes("--display");

// Зчитування вмісту файлу
const data = fs.readFileSync(inputFilePath, 'utf-8');

if (!data) {
    console.log("Файл порожній або не вдалося зчитати вміст.");
    process.exit(1);
}

try {
    // Парсинг JSON
    const jsonData = JSON.parse(data);

    // Вивід вмісту, якщо є параметр --display
    if (shouldDisplay) {
        console.log("Вміст файлу:", JSON.stringify(jsonData, null, 2));
    }

    // Запис вмісту у вихідний файл
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log("Дані успішно записані у файл:", outputFilePath);

} catch (error) {
    console.error("Помилка парсингу JSON:", error.message);
    process.exit(1);
}
