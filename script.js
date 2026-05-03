// ── FORM RESERVASI ──
const btnReservasi = document.getElementById('btnReservasi')
const pesanReservasi = document.getElementById('pesanReservasi')

btnReservasi.addEventListener('click', function() {

  const nama = document.getElementById('inputNama').value.trim()
  const jumlah = document.getElementById('inputJumlah').value
  const waktu = document.getElementById('inputWaktu').value
  const catatan = document.getElementById('inputCatatan').value.trim()

  // Validasi
  if (nama === '') {
    pesanReservasi.textContent = '⚠️ Nama tidak boleh kosong!'
    pesanReservasi.style.color = '#f87171'
    return
  }

  if (jumlah === '') {
    pesanReservasi.textContent = '⚠️ Pilih jumlah orang!'
    pesanReservasi.style.color = '#f87171'
    return
  }

  if (waktu === '') {
    pesanReservasi.textContent = '⚠️ Pilih tanggal dan waktu!'
    pesanReservasi.style.color = '#f87171'
    return
  }

  // Format tanggal
  const tgl = new Date(waktu)
  const formatTgl = tgl.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // Sukses
  pesanReservasi.textContent = `✅ Terima kasih ${nama}! Reservasi untuk ${jumlah} orang pada ${formatTgl} telah dikonfirmasi. Sampai jumpa di Kopi Senja!`
  pesanReservasi.style.color = '#34d399'

  // Reset form
  document.getElementById('inputNama').value = ''
  document.getElementById('inputJumlah').value = ''
  document.getElementById('inputWaktu').value = ''
  document.getElementById('inputCatatan').value = ''
})

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})