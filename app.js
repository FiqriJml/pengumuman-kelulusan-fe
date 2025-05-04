// inisialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById("searchForm");
const loading = document.getElementById("loading");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultDiv.innerHTML = ""; // Clear previous results
  loading.style.display = "block"; // Show loading indicator

  const nisn = form.nisn.value.trim(); // Get the NISN value from the form
  const tglLahirInput = form.tglLahir.value;

  if (!nisn || !tglLahirInput) {
    alert("Mohong isi NISN dan tanggal lahir dengan benar!");
    loading.style.display = "none"; // Hide loading indicator
    return;
  }

  // Format tanggal lahir sesuai format yang ada di Firestore dd-mm-yyyy
  const tglLahir = new Date(tglLahirInput);
  const formattedDate = `${String(tglLahir.getDate()).padStart(
    2,
    "0"
  )}-${String(tglLahir.getMonth() + 1).padStart(
    2,
    "0"
  )}-${tglLahir.getFullYear()}`;

  try {
    const docRef = db.collection("siswa").doc(nisn);
    const doc = await docRef.get();

    if (!doc.exists) {
      resultDiv.innerHTML = `<p class="error">Data tidak ditemukan untuk NISN ${nisn}.</p>`;
      loading.style.display = "none"; // Hide loading indicator
    } else {
      const data = doc.data();
      if (data["Tanggal Lahir (dd-mm-yyyy)"] === formattedDate) {
        // Tampilkan data kelulusan
        resultDiv.innerHTML = `
                <h3>Hasil Kelulusan</h3>
                <p><strong>Nama:</strong> ${data["Nama Peserta"]}</p>
                <p><strong>Status:</strong> ${data["LULUS"]}</p>
                <p><strong>Rerata Nilai:</strong> ${data["Rerata"]}</p>
                `;
      } else {
        resultDiv.innerHTML = `<p>Data tidak ditemukan (tanggal lahir tidak cocok).</p>`;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    resultDiv.innerHTML = `<p>Terjadi kesalahan saat mengambil data.</p>`;
  } finally {
    loading.style.display = "none";
  }
});
