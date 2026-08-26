// storage.js
// Modul generik untuk membaca/menulis data ke localStorage.

export function simpanKeStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function muatDariStorage(key, defaultValue = []) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

export function simpanTema(tema) {
    localStorage.setItem("tema", tema);
}

export function muatTema() {
    return localStorage.getItem("tema");
}