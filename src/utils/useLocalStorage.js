import { useState, useEffect } from "react";

// 🔍 Функция для получения значения из localStorage или значения по умолчанию
function getStorageValue(key, defaultValue) {
  try {
    const saved = localStorage.getItem(key); // Get item from localStorage
    if (saved === null) return defaultValue; // Return default if nothing is saved
    return JSON.parse(saved); // Parse if value exists
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return defaultValue; // Return default if parsing fails
  }
}

// 🌟 Кастомный хук для работы с localStorage
export const useLocalStorage = (key, defaultValue) => {
  // 🏗️ Состояние, инициализируемое значением из localStorage или дефолтным
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  // 🛠️ useEffect для обновления localStorage при изменении value или key
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // Сохраняем новое значение в localStorage
  }, [key, value]); // 🔄 Срабатывает при изменении key или value

  return [value, setValue]; // 🔙 Возвращаем текущее значение и функцию для его обновления
};
