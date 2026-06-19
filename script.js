
  // Smooth reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .testi-card, .keunggulan, .galeri-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
    observer.observe(el);
  });

  // Form button action
  document.querySelector('.form-daftar button').addEventListener('click', () => {
    const nama = document.querySelectorAll('.form-daftar input')[0].value.trim();
    const wa = document.querySelectorAll('.form-daftar input')[1].value.trim();
    if (!nama || !wa) { alert('Mohon isi nama dan nomor WhatsApp ya! 😊'); return; }
    const pesan = encodeURIComponent(`Assalamu'alaikum, saya ${nama}. Saya tertarik mendaftarkan anak ke RA Nurul Hidayah. Mohon informasi lebih lanjut. 🙏`);
    window.open(`https://wa.me/6281573282983?text=${pesan}`, '_blank');
  });
