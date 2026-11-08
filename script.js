// ==========================================
// PINDAH HALAMAN
// ==========================================

function showPage(pageId) {

    // Sembunyikan semua halaman
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    // Tampilkan halaman yang dipilih
    let selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    // Ubah judul bagian atas
    let titles = {
        login: "Login",
        dashboard: "Dashboard",
        barang: "Daftar Barang",
        detail: "Detail Barang",
        peminjaman: "Form Peminjaman",
        status: "Status Peminjaman",
        riwayat: "Riwayat Peminjaman",
        admin: "Dashboard Admin",
        "kelola-barang": "Kelola Data Barang",
        "kelola-peminjaman": "Kelola Peminjaman",
        pengembalian: "Pengembalian Barang",
        laporan: "Laporan"
    };


    document.getElementById("pageTitle").textContent =
        titles[pageId] || "PinjamKelas";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// LOGIN
// ==========================================

function login(event) {

    event.preventDefault();

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;


    if (username !== "" && password !== "") {

        alert(
            "Login berhasil. Selamat datang, " +
            username + "!"
        );

        showPage("dashboard");

    }

}


// ==========================================
// DETAIL BARANG
// ==========================================

function detailBarang(nama) {

    let namaBarang =
        document.getElementById("detailNama");

    let deskripsi =
        document.getElementById("detailDeskripsi");


    namaBarang.textContent = nama;


    if (nama === "Proyektor") {

        deskripsi.textContent =
            "Proyektor untuk kegiatan presentasi dan pembelajaran di kelas.";

    }

    else if (nama === "Speaker") {

        deskripsi.textContent =
            "Speaker untuk mendukung kegiatan presentasi dan pembelajaran.";

    }

    else if (nama === "Kabel HDMI") {

        deskripsi.textContent =
            "Kabel untuk menghubungkan laptop dengan proyektor.";

    }

    else if (nama === "Microphone") {

        deskripsi.textContent =
            "Microphone untuk presentasi dan kegiatan kelas.";

    }


    showPage("detail");
}


// ==========================================
// AJUKAN PEMINJAMAN
// ==========================================

function ajukanPeminjaman(event) {

    event.preventDefault();


    let nama =
        document.getElementById("nama").value;

    let nim =
        document.getElementById("nim").value;

    let barang =
        document.getElementById("namaBarang").value;

    let jumlah =
        document.getElementById("jumlah").value;

    let tanggalPinjam =
        document.getElementById("tanggalPinjam").value;

    let tanggalKembali =
        document.getElementById("tanggalKembali").value;

    let keperluan =
        document.getElementById("keperluan").value;


    if (
        nama === "" ||
        nim === "" ||
        barang === "" ||
        jumlah === "" ||
        tanggalPinjam === "" ||
        tanggalKembali === "" ||
        keperluan === ""
    ) {

        alert("Semua data harus diisi!");

        return;
    }


    alert(
        "Pengajuan peminjaman berhasil dikirim!"
    );


    // Tambahkan ke riwayat
    let table =
        document.getElementById("riwayatTable");


    let row =
        table.insertRow();


    row.innerHTML = `
        <td>${table.rows.length}</td>

        <td>${barang}</td>

        <td>${tanggalPinjam}</td>

        <td>${tanggalKembali}</td>

        <td>
            <span class="badge waiting">
                Menunggu
            </span>
        </td>
    `;


    document.querySelector(
        "#peminjaman form"
    ).reset();


    showPage("status");
}


// ==========================================
// SEARCH BARANG
// ==========================================

function searchBarang() {

    let input =
        document.getElementById("search");

    let keyword =
        input.value.toLowerCase();


    let cards =
        document.querySelectorAll(".barang-card");


    cards.forEach(function(card) {

        let nama =
            card.querySelector("h3")
                .textContent
                .toLowerCase();


        if (nama.includes(keyword)) {

            card.style.display = "";

        }

        else {

            card.style.display = "none";

        }

    });
}


// ==========================================
// TAMBAH BARANG
// ==========================================

function tambahBarang() {

    let nama =
        prompt("Masukkan nama barang:");

    if (nama !== null && nama !== "") {

        alert(
            "Barang " +
            nama +
            " berhasil ditambahkan."
        );

    }

}


// ==========================================
// SETUJUI PEMINJAMAN
// ==========================================

function setujui() {

    alert(
        "Peminjaman berhasil disetujui."
    );

}


// ==========================================
// TOLAK PEMINJAMAN
// ==========================================

function tolak() {

    alert(
        "Peminjaman ditolak."
    );

}


// ==========================================
// KONFIRMASI PENGEMBALIAN
// ==========================================

function konfirmasiKembali() {

    alert(
        "Pengembalian barang berhasil dikonfirmasi."
    );

}
