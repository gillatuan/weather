// src/utils/storage.ts
import CryptoJS from 'crypto-js';

export const SECRET_KEY = process.env.REACT_APP_WEATHER_HISTORY_KEY || 'REACT_APP_WEATHER_HISTORY_KEY'; // Đổi tùy bạn

export const encryptData = (data: any): string => {
  const json = JSON.stringify(data);
  return CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
};

export const decryptData = (cipherText: string): any => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Decryption failed', error);
    return null;
  }
};

export const saveEncryptedToLocalStorage = (key: string, data: any): void => {
  const encrypted = encryptData(data);
  localStorage.setItem(key, encrypted);
};

export const loadEncryptedFromLocalStorage = (key: string): any => {
  const encrypted = localStorage.getItem(key);
  if (!encrypted) return null;
  return decryptData(encrypted);
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
