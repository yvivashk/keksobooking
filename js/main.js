'use strict';

// Функция возвращающая целое число из диапазона "от...до"
const getRandomInt = (min, max) => {

  // Данное условие проверяет если min и max будут меньше нуля, функция вернёт -1;
  if (min < 0 || max < 0) {
    return -1;
  }

  // Условие проверяет min больше чем max
  if (max < min) {
    [min, max] = [max, min]; // используется деструктуризация, которая переворачивает значения min становится max, а max становится min
  }

  // данная строка выбирает рандомное значение
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInt = (min, max) => {

  // Данное условие проверяет если min и max будут меньше нуля, функция вернёт -1;
  if (min < 0 || max < 0) {
    return -1;
  }

  // Условие проверяет min больше чем max
  if (max < min) {
    [min, max] = [max, min]; // используется деструктуризация, которая переворачивает значения min становится max, а max становится min
  }

  let sum = Math.random() * (max - min + 1) + min;
  return sum.toFixed(1);
};




