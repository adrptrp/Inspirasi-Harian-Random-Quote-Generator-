// Memastikan elemen ada di halaman sebelum menjalankan script
const generateBtn = document.getElementById('generate-btn');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
        try {
            // Memberikan indikator loading
            quoteText.textContent = "Mengambil data...";
            quoteAuthor.textContent = "";
            generateBtn.disabled = true;
            generateBtn.textContent = "Loading...";

            // Menggunakan Fetch API ke API Quotes publik
            const response = await fetch('https://dummyjson.com/quotes/random');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Menampilkan hasil
            quoteText.textContent = `"${data.quote}"`;
            quoteAuthor.textContent = `- ${data.author}`;

        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            quoteText.textContent = "Gagal mengambil data API. Pastikan internetmu aktif.";
        } finally {
            // Mengembalikan status tombol
            generateBtn.disabled = false;
            generateBtn.textContent = "Fetch Quote Lain";
        }
    });
}