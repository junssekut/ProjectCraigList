var craiglistText1 = document.getElementById("craiglistText1");
      if (craiglistText1) {
        craiglistText1.addEventListener("click", function (e) {
          window.location.href = "./desktop-1.html";
        });
      }
      
      var component1Container = document.getElementById("component1Container");
      if (component1Container) {
        component1Container.addEventListener("click", function (e) {
          // Please sync "Desktop - 6" to the project
        });
      }
      
      let previousColor = null;

function toggleColor(element) {
  if (element.style.backgroundColor === 'var(--color-khaki)') {
    // Jika warnanya sudah diubah, kembalikan ke warna sebelumnya
    element.style.backgroundColor = previousColor || 'var(--color-gainsboro)'; // Gunakan warna sebelumnya atau default gainsboro
  } else {
    // Simpan warna sebelumnya dan ubah warna latar belakang
    previousColor = element.style.backgroundColor;
    element.style.backgroundColor = 'var(--color-khaki)'; // Ganti dengan warna yang diinginkan
  }
}

let previousColorFrame22 = null;

function toggleColor(element) {
  if (element.style.backgroundColor === 'var(--color-khaki)') {
    // Jika warnanya sudah diubah, kembalikan ke warna sebelumnya
    element.style.backgroundColor = previousColorFrame22 || 'var(--color-gainsboro)'; // Gunakan warna sebelumnya atau default gainsboro
  } else {
    // Simpan warna sebelumnya dan ubah warna latar belakang
    previousColorFrame22 = element.style.backgroundColor;
    element.style.backgroundColor = 'var(--color-khaki)'; // Ganti dengan warna yang diinginkan
  }
}

