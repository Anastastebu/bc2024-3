const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

// Параметри командного рядка
const argv = yargs
  .option('input', {
    alias: 'i',
    description: 'Шлях до вхідного JSON файлу',
    type: 'string',
    demandOption: true
  })
  .option('display', {
    alias: 'd',
    description: 'Вивести дані на екран',
    type: 'boolean',
    default: false
  })
  .argv;

// Шлях до файлу
const inputFilePath = argv.input;
const displayData = argv.display;

// Читання файлу
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Помилка при читанні файлу:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    
    // Якщо параметр --display вказано, вивести дані
    if (displayData) {
      console.log("Дані з файлу:");
      console.log(JSON.stringify(jsonData, null, 2)); // Виводимо красиво форматований JSON
    }
    
    // Тут можна додати додаткову логіку для обробки даних
    // Наприклад, агрегація або фільтрація за категоріями

  } catch (parseErr) {
    console.error("Помилка при парсингу JSON:", parseErr);
  }
});
