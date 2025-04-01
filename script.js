// Efek confetti
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
});

// Fungsi untuk mengubah konten kartu
function ubahKartu() {
    let kartu = document.getElementById("kartu");
    kartu.innerHTML = `
        <h1 class="font-semibold text-wrap animate__animated animate__zoomIn">
            🎉🎉 May on this blessed day, we all be given the opportunity to improve ourselves...
        </h1>
        <h2 class="mt-3 animate__animated animate__fadeIn">
            - From : Jevvier Rafael J -
        </h2>
        <h2 class="mt-3 animate__animated animate__fadeIn">
            - Date : 30 March 2025 -
        </h2>
        <button class="p-2 bg-slate-600 text-white rounded mt-5 hover:bg-slate-900 transition ease-in w-full animate__animated animate__delay-1s animate__tada" onclick="refresh()">Close</button>
    `;
}

// Fungsi untuk me-refresh halaman
function refresh() {
    location.reload();
}
