import { muatTugas, tambahTugas, renderTugas } from "./tugas.js";
import { muatCatatan, tambahCatatan, renderCatatan } from "./catatan.js";
import { ambilKutipan, ambilCuaca } from "./api.js";
import { muatTema, simpanTema } from "./storage.js";

function validasiInput(nilai) {
    if (nilai.trim() === "") {
        alert("Input tidak boleh kosong!");
        return false;
    }

    if (nilai.length > 100) {
        alert("Input tidak boleh lebih dari 100 karakter!");
        return false;
    }

    return true;
}

function debounce(fn, delay = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => fn(...args), delay);
    };
}

const app = document.getElementById("app");

const topBar = document.createElement("div");
topBar.className = "top-bar";
app.appendChild(topBar);

const judul = document.createElement("h2");
judul.textContent = "Selamat Datang di DailyBoard!";
topBar.appendChild(judul);

const statusText = document.createElement("p");
statusText.id = "status";
topBar.appendChild(statusText);

const toggleTema = document.createElement("button");
toggleTema.id = "toggle-tema";
topBar.appendChild(toggleTema);

function perbaruiLabelTema() {
    const modeAktif =
        document.body.classList.contains("dark-mode");

    toggleTema.textContent =
        modeAktif
            ? "☀️ Mode Terang"
            : "🌙 Mode Gelap";
}

toggleTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const modeAktif =
        document.body.classList.contains("dark-mode");

    simpanTema(modeAktif ? "dark" : "light");

    perbaruiLabelTema();
});


// ==============================
// KUTIPAN
// ==============================

const sectionKutipan = document.createElement("section");

sectionKutipan.className = "section-kutipan";

sectionKutipan.innerHTML =
    "<h3>Kutipan Hari Ini</h3>";

app.appendChild(sectionKutipan);

const pKutipan = document.createElement("p");

pKutipan.id = "kutipan-harian";

pKutipan.textContent =
    "Memuat kutipan...";

sectionKutipan.appendChild(pKutipan);


// TOMBOL REFRESH KUTIPAN

const tombolRefreshKutipan =
    document.createElement("button");

tombolRefreshKutipan.textContent =
    "🔄 Refresh Kutipan";

sectionKutipan.appendChild(
    tombolRefreshKutipan
);

tombolRefreshKutipan.addEventListener(
    "click",
    async () => {

        pKutipan.textContent =
            "Memuat kutipan...";

        try {

            await ambilKutipan();

        } catch (error) {

            pKutipan.textContent =
                "Gagal memuat kutipan.";

            console.error(error);
        }
    }
);


// ==============================
// TUGAS
// ==============================

const sectionTugas =
    document.createElement("section");

sectionTugas.className =
    "section-tugas";

sectionTugas.innerHTML =
    "<h3>Tugas</h3>";

app.appendChild(sectionTugas);

const inputCari =
    document.createElement("input");

inputCari.placeholder =
    "🔍 Cari tugas...";

inputCari.id =
    "input-cari-tugas";

sectionTugas.appendChild(inputCari);

sectionTugas.appendChild(
    document.createElement("br")
);

const input1 =
    document.createElement("input");

input1.placeholder =
    "Tambah tugas baru...";

sectionTugas.appendChild(input1);

const tombol1 =
    document.createElement("button");

tombol1.textContent =
    "Tambah";

sectionTugas.appendChild(tombol1);

tombol1.addEventListener(
    "click",
    () => {

        if (validasiInput(input1.value)) {

            inputCari.value = "";

            tambahTugas(input1.value);

            input1.value = "";
        }
    }
);

input1.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Enter") {

            if (validasiInput(input1.value)) {

                inputCari.value = "";

                tambahTugas(input1.value);

                input1.value = "";
            }
        }
    }
);

sectionTugas.appendChild(
    document.createElement("br")
);

const containerFilter =
    document.createElement("div");

containerFilter.style.marginTop =
    "10px";

const filterSemua =
    document.createElement("button");

filterSemua.textContent =
    "Semua";

filterSemua.addEventListener(
    "click",
    () => renderTugas("semua")
);

const filterSelesai =
    document.createElement("button");

filterSelesai.textContent =
    "Selesai";

filterSelesai.addEventListener(
    "click",
    () => renderTugas("selesai")
);

const filterBelum =
    document.createElement("button");

filterBelum.textContent =
    "Belum Selesai";

filterBelum.addEventListener(
    "click",
    () => renderTugas("belum")
);

containerFilter.appendChild(filterSemua);
containerFilter.appendChild(filterSelesai);
containerFilter.appendChild(filterBelum);

sectionTugas.appendChild(
    containerFilter
);

const ulTugas =
    document.createElement("ul");

ulTugas.id =
    "daftar-tugas";

sectionTugas.appendChild(ulTugas);

const jalankanPencarian =
    debounce(
        () => renderTugas(),
        300
    );

inputCari.addEventListener(
    "input",
    jalankanPencarian
);


// ==============================
// CATATAN
// ==============================

const sectionCatatan =
    document.createElement("section");

sectionCatatan.className =
    "section-catatan";

sectionCatatan.innerHTML =
    "<h3>Catatan</h3>";

app.appendChild(sectionCatatan);

const textareaCatatan =
    document.createElement("textarea");

textareaCatatan.id =
    "input-catatan";

textareaCatatan.placeholder =
    "Tulis catatan singkat...";

textareaCatatan.rows = 3;

sectionCatatan.appendChild(
    textareaCatatan
);

const tombol2 =
    document.createElement("button");

tombol2.textContent =
    "Tambah";

sectionCatatan.appendChild(tombol2);

tombol2.addEventListener(
    "click",
    () => {

        if (
            validasiInput(
                textareaCatatan.value
            )
        ) {

            tambahCatatan(
                textareaCatatan.value
            );

            textareaCatatan.value = "";
        }
    }
);

const containerCatatan =
    document.createElement("div");

containerCatatan.id =
    "daftar-catatan";

sectionCatatan.appendChild(
    containerCatatan
);


// ==============================
// CUACA
// ==============================

const sectionCuaca =
    document.createElement("section");

sectionCuaca.className =
    "section-cuaca";

sectionCuaca.innerHTML =
    "<h3>Cuaca</h3>";

app.appendChild(sectionCuaca);

const input3 =
    document.createElement("input");

input3.placeholder =
    "Masukkan kota...";

sectionCuaca.appendChild(input3);

const tombol3 =
    document.createElement("button");

tombol3.textContent =
    "Cari Cuaca";

sectionCuaca.appendChild(tombol3);

const divCuaca =
    document.createElement("div");

divCuaca.id =
    "cuaca-harian";

divCuaca.textContent =
    "Memuat cuaca...";

sectionCuaca.appendChild(divCuaca);

tombol3.addEventListener(
    "click",
    () => {

        if (validasiInput(input3.value)) {

            ambilCuaca(input3.value);

            input3.value = "";
        }
    }
);


// ==============================
// LOAD SEMUA DATA
// ==============================

async function muatSemuaWidget() {

    statusText.textContent =
        "Memuat data...";

    try {

        await Promise.all([
            ambilKutipan(),
            ambilCuaca("Jakarta")
        ]);

        statusText.textContent =
            "Data berhasil dimuat!";

    } catch (error) {

        statusText.textContent =
            "Data gagal dimuat!";

        console.error(error);
    }
}


// ==============================
// JALANKAN
// ==============================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        if (muatTema() === "dark") {

            document.body.classList.add(
                "dark-mode"
            );
        }

        perbaruiLabelTema();

        muatTugas();

        muatCatatan();

        renderTugas();

        renderCatatan();

        muatSemuaWidget();
    }
);