// INITIALISASI UTAMA AOS DIJALANKAN DI LINE NOMOR SATU
AOS.init({ duration: 700, once: true, offset: 50 });

/* ---------------- DATABASE KATALOG 10 PAKET PERAWATAN ---------------- */
const paketProducts = [
  { id: 0, img: "Produk Paket/Foto 1.png", name: "Paket Glowing Premium Darkspot", type: "paket", price: "Rp 370.000" },
  { id: 1, img: "Produk Paket/Foto 2.png", name: "Paket Glowing Premium Perfect Glow", type: "paket", price: "Rp 500.000" },
  { id: 2, img: "Produk Paket/Foto 3.png", name: "Paket Acne Glow", type: "paket", price: "Rp 350.000" },
  { id: 3, img: "Produk Paket/Foto 4.png", name: "Paket Acne Derma", type: "paket", price: "Rp 300.000" },
  { id: 4, img: "Produk Paket/Foto 5.png", name: "Paket Glowing Whitening Luxury", type: "paket", price: "Rp 300.000" },
  { id: 5, img: "Produk Paket/Foto 6.png", name: "Paket Whitening Booster & Anti Aging", type: "paket", price: "Rp 420.000" },
  { id: 6, img: "Produk Paket/Foto 7.png", name: "Paket Premium Dian Glow", type: "paket", price: "Rp 320.000" },
  { id: 7, img: "Produk Paket/Foto 8.png", name: "Paket Glowing Premium Whitening Luxury", type: "paket", price: "Rp 320.000" },
  { id: 8, img: "Produk Paket/Foto 9.png", name: "Paket Perawatan Acne Prone", type: "paket", price: "Rp 360.000" },
  { id: 9, img: "Produk Paket/Foto 10.png", name: "Paket Perfect Glow Luxury", type: "paket", price: "Rp 450.000" }
];

/* ---------------- DATABASE KATALOG 31 PRODUK SATUAN ---------------- */
const satuanProducts = [
  { id: 10, img: "Produk Satuan/Foto 1.png", name: "Gold Jelly Whitening Premium", type: "satuan", price: "Rp 265.000" },
  { id: 11, img: "Produk Satuan/Foto 2.png", name: "Whitening Booster Luxe For Dark Spot Serum", type: "satuan", price: "Rp 345.000" },
  { id: 12, img: "Produk Satuan/Foto 3.png", name: "Serum Aura White Luxe Peel", type: "satuan", price: "Rp 245.000" },
  { id: 13, img: "Produk Satuan/Foto 4.png", name: "Toner Glowing Dian Glow", type: "satuan", price: "Rp 90.000" },
  { id: 14, img: "Produk Satuan/Foto 5.png", name: "Milk Cleanser Normal Skin", type: "satuan", price: "Rp 89.000" },
  { id: 15, img: "Produk Satuan/Foto 6.png", name: "Derma Acne Facial Wash", type: "satuan", price: "Rp 90.000" },
  { id: 16, img: "Produk Satuan/Foto 7.png", name: "Serum Acne Prone", type: "satuan", price: "Rp 189.000" },
  { id: 17, img: "Produk Satuan/Foto 8.png", name: "Premium Day Sunscreen Whitening Luxe", type: "satuan", price: "Rp 160.000" },
  { id: 18, img: "Produk Satuan/Foto 9.png", name: "Premium Whitening Booster & Anti Aging", type: "satuan", price: "Rp 190.000" },
  { id: 19, img: "Produk Satuan/Foto 10.png", name: "Acne Glowing Toner", type: "satuan", price: "Rp 100.000" },
  { id: 20, img: "Produk Satuan/Foto 11.png", name: "Acne Glow Day Cream", type: "satuan", price: "Rp 140.000" },
  { id: 21, img: "Produk Satuan/Foto 12.png", name: "Premium Calendula Toner", type: "satuan", price: "Rp 110.000" },
  { id: 22, img: "Produk Satuan/Foto 13.png", name: "Whitening Luxury Night Cream", type: "satuan", price: "Rp 140.000" },
  { id: 23, img: "Produk Satuan/Foto 14.png", name: "Acne Glow Night Cream", type: "satuan", price: "Rp 140.000" },
  { id: 24, img: "Produk Satuan/Foto 15.png", name: "Acne Glowing Facial Wash", type: "satuan", price: "Rp 100.000" },
  { id: 25, img: "Produk Satuan/Foto 16.png", name: "Hydraluxe Crystal Lip Serum", type: "satuan", price: "Rp 185.000" },
  { id: 26, img: "Produk Satuan/Foto 17.png", name: "Glowing Spray", type: "satuan", price: "Rp 130.000" },
  { id: 27, img: "Produk Satuan/Foto 18.png", name: "Milk Cleanser Acne", type: "satuan", price: "Rp 89.000" },
  { id: 28, img: "Produk Satuan/Foto 19.png", name: "Serum Acne Luxe White Glow Premium", type: "satuan", price: "Rp 325.000" },
  { id: 29, img: "Produk Satuan/Foto 20.png", name: "Caviar De Luxe Moisturizer", type: "satuan", price: "Rp 245.000" },
  { id: 30, img: "Produk Satuan/Foto 21.png", name: "Moisturizer Dermalux Acne", type: "satuan", price: "Rp 199.000" },
  { id: 31, img: "Produk Satuan/Foto 22.png", name: "Derma Acne Lotion", type: "satuan", price: "Rp 100.000" },
  { id: 32, img: "Produk Satuan/Foto 23.png", name: "Face Wash Glowing", type: "satuan", price: "Rp 90.000" },
  { id: 33, img: "Produk Satuan/Foto 24.png", name: "SheetMask Whitening Glow DNA Salmon", type: "satuan", price: "Rp 38.000" },
  { id: 34, img: "Produk Satuan/Foto 25.png", name: "Premium Face Wash", type: "satuan", price: "Rp 110.000" },
  { id: 35, img: "Produk Satuan/Foto 26.png", name: "Perfect Glow Cream", type: "satuan", price: "Rp 245.000" },
  { id: 36, img: "Produk Satuan/Foto 27.png", name: "Vit C20 Collagen Glow", type: "satuan", price: "Rp 245.000" },
  { id: 37, img: "Produk Satuan/Foto 28.png", name: "Derma Acne Face Toner", type: "satuan", price: "Rp 90.000" },
  { id: 38, img: "Produk Satuan/Foto 29.png", name: "Advance Eye Night Complex", type: "satuan", price: "Rp 185.000" },
  { id: 39, img: "Produk Satuan/Foto 30.png", name: "Clay Mask Charcoal With Niacinamide", type: "satuan", price: "Rp 129.000" },
  { id: 40, img: "Produk Satuan/Foto 31.png", name: "Ultimate Dark Spot Booster Night Cream", type: "satuan", price: "Rp 170.000" }
];

const products = [...paketProducts, ...satuanProducts];

/* ---------------- Database Slider, Testimoni & Peta ---------------- */
const treatments = [
  { img: "Treatment/Foto 3.jpeg", alt: "Face Treatment Daftar Harga Bagian 1", category: "face" },
  { img: "Treatment/Foto 4.jpeg", alt: "Face Treatment Daftar Harga Bagian 2", category: "face" },
  { img: "Treatment/Foto 5.jpeg", alt: "Face Treatment Daftar Harga Bagian 3", category: "face" },
  { img: "Treatment/Foto 2.jpeg", alt: "Peeling Treatment Daftar Harga Bagian 1", category: "peeling" },
  { img: "Treatment/Foto 6.jpeg", alt: "Peeling Treatment Daftar Harga Bagian 2", category: "peeling" },
  { img: "Treatment/Foto 1.jpeg", alt: "Laser Treatment Daftar Harga", category: "laser" }
];

const testimonisData = Array.from({length: 15}, (_, i) => ({
  img: `Testimoni/Foto ${i + 1}.jpeg`,
  alt: `Testimoni Pasien Dian Glow Clinic ${i + 1}`
}));
const TESTIMONI_IMGS_LIGHTBOX = testimonisData.map(t => ({ src: t.img, alt: t.alt }));

const jobs = [
  {img:"Lowongan/Foto 1.png", alt:"Lowongan Pekerjaan 1"},
  {img:"Lowongan/Foto 2.jpeg", alt:"Lowongan Pekerjaan 2"},
  {img:"Lowongan/Foto 3.jpeg", alt:"Lowongan Pekerjaan 3"}
];

// Sinkronisasi urutan array cabang slider & peta lokasi (0=PTK, 1=KTG, 2=SKW, 3=STG)
const branchNames = ["Cabang Pontianak", "Cabang Ketapang", "Cabang Singkawang", "Cabang Sintang"];

const mapBranchesData = [
  { name: "Dian Glow Pontianak", embedUrl: "https://maps.google.com/maps?q=Jl.%20Pangeran%20Natakusuma%20No.%20137,%20Pontianak&t=&z=15&ie=UTF8&iwloc=&output=embed", directUrl: "https://maps.google.com/?q=Jl.+Pangeran+Natakusuma+No.+137,+Pontianak+Kota", waUrl: "https://wa.me/628115680008?text=Halo%20Dian%20Glow%20Pontianak%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan." },
  { name: "Dian Glow Ketapang", embedUrl: "https://maps.google.com/maps?q=Jl.%20D.I.%20Panjaitan,%20Ketapang&t=&z=15&ie=UTF8&iwloc=&output=embed", directUrl: "https://maps.google.com/?q=Jl.+D.I.+Panjaitan,+Ketapang", waUrl: "https://wa.me/6281155008809?text=Halo%20Dian%20Glow%20Ketapang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan." },
  { name: "Dian Glow Singkawang", embedUrl: "https://maps.google.com/maps?q=Jl.%20Yos%20Sudarso,%20Melayu%20Pasiran,%20Singkawang&t=&z=15&ie=UTF8&iwloc=&output=embed", directUrl: "https://maps.google.com/?q=Jl.+Yos+Sudarso,+Melayu+Pasiran,+Singkawang", waUrl: "https://wa.me/6281148008880?text=Halo%20Dian%20Glow%20Singkawang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan." },
  { name: "Dian Glow Sintang", embedUrl: "https://maps.google.com/maps?q=Jl.%20MT%20Haryono%20Km.%204,%20Sintang&t=&z=15&ie=UTF8&iwloc=&output=embed", directUrl: "https://maps.google.com/?q=Jl.+MT+Haryono+Km.+4,+Sintang", waUrl: "https://wa.me/628115684600?text=Halo%20Dian%20Glow%20Sintang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan." }
];

const contactBranchesDatabase = [
  { name: "Pontianak", konsultasi: "0821-5765-2087", cs: "0811-5680-008", reservasi: "0811-5680-008" },
  { name: "Ketapang", konsultasi: "0821-5765-2087", cs: "0811-5500-8809", reservasi: "0811-5680-008" },
  { name: "Singkawang", konsultasi: "0821-5765-2087", cs: "0811-4800-8880", reservasi: "0811-5680-008" },
  { name: "Sintang", konsultasi: "0821-5765-2087", cs: "0811-5684-600", reservasi: "0811-5680-008" }
];

/* ---------------- Render Grids & Filter Treatment Menu ---------------- */
const treatmentGrid = document.getElementById('treatmentGrid');
let visibleTreatmentGallery = []; 

function renderTreatmentGrid(filter = 'face') {
  if (!treatmentGrid) return;
  const filteredData = treatments.filter(t => t.category === filter);
  visibleTreatmentGallery = filteredData.map(t => ({ src: t.img, alt: t.alt }));
  
  if (filteredData.length === 0) {
    treatmentGrid.innerHTML = `<div class="col-span-full text-center py-10 text-[var(--ink-soft)] text-sm">Tidak ada foto perawatan di kategori ini.</div>`;
    return;
  }
  
  treatmentGrid.innerHTML = filteredData.map((t, index) => `
    <div class="tile glass aspect-[3/4] opacity-0 translate-y-4" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${index * 60}ms;" onclick="openLightbox(visibleTreatmentGallery, ${index})">
      <img src="${t.img}" alt="${t.alt}" loading="lazy" class="w-full h-full object-cover">
      <span class="tile-expand glass !bg-black/30 !border-white/30"><i class="fas fa-expand text-white text-sm"></i></span>
    </div>
  `).join('');
}

const filterButtons = document.querySelectorAll('.treatment-filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');
    const targetFilter = btn.getAttribute('data-filter');
    renderTreatmentGrid(targetFilter);
  });
});

renderTreatmentGrid('face');

/* ---------------- Render Grid & Logika Tab Filter Produk ---------------- */
const productGrid = document.getElementById('productGrid');
const productSectionTitle = document.getElementById('product-section-title');
const productSectionDesc = document.getElementById('product-section-desc');

function renderProductGrid(type = 'paket') {
  if (!productGrid) return;
  const filteredProducts = products.filter(p => p.type === type);
  
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `<div class="col-span-full text-center py-12 text-[var(--ink-soft)] text-sm">Tidak ada produk dalam kategori ini.</div>`;
    return;
  }
  
  productGrid.innerHTML = filteredProducts.map((p, index) => `
    <div class="group glass rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-4" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${(index % 8) * 40}ms;">
      <div class="aspect-square rounded-xl overflow-hidden bg-white/10 mb-4 p-2 flex items-center justify-center relative cursor-pointer" onclick="openProduct(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
        <span class="tile-expand glass !bg-black/30 !border-white/30"><i class="fas fa-expand text-white text-xs"></i></span>
      </div>
      <div class="text-left flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-sm font-bold text-[var(--ink)] line-clamp-2 mb-1.5 leading-tight" title="${p.name}">${p.name}</h3>
          <p class="text-xs font-bold text-[var(--rose)] mb-3">${p.price}</p>
        </div>
        <button onclick="openProduct(${p.id})" class="chip !text-[10px] !py-1.5 !px-3 hover:!bg-[var(--rose-soft)] transition-colors w-max mt-auto">
          Lihat Detail <i class="fas fa-arrow-right text-[8px] ml-1"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderAllProductsGrid() {
  if (!productGrid) return;
  productGrid.innerHTML = products.map((p, index) => `
    <div class="group glass rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-4" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${(index % 8) * 30}ms;">
      <div class="aspect-square rounded-xl overflow-hidden bg-white/10 mb-4 p-2 flex items-center justify-center relative cursor-pointer" onclick="openProduct(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105">
        <span class="tile-expand glass !bg-black/30 !border-white/30"><i class="fas fa-expand text-white text-xs"></i></span>
      </div>
      <div class="text-left flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-sm font-bold text-[var(--ink)] line-clamp-2 mb-1.5 leading-tight" title="${p.name}">${p.name}</h3>
          <p class="text-xs font-bold text-[var(--rose)] mb-3">${p.price}</p>
        </div>
        <button onclick="openProduct(${p.id})" class="chip !text-[10px] !py-1.5 !px-3 hover:!bg-[var(--rose-soft)] transition-colors w-max mt-auto">
          Lihat Detail <i class="fas fa-arrow-right text-[8px] ml-1"></i>
        </button>
      </div>
    </div>
  `).join('');
}

const productFilterBtns = document.querySelectorAll('.product-filter-btn');
productFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    productFilterBtns.forEach(b => {
      b.classList.remove('active-product-filter');
      b.classList.add('text-[var(--ink-soft)]');
    });
    btn.classList.add('active-product-filter');
    btn.classList.remove('text-[var(--ink-soft)]');
    
    const filterType = btn.getAttribute('data-filter');
    
    if (filterType === 'paket') {
      if (productSectionTitle) productSectionTitle.textContent = "Paket Perawatan Premium";
      if (productSectionDesc) productSectionDesc.textContent = "Perawatan lengkap dengan hasil maksimal untuk kulit sehat bercahaya.";
    } else {
      if (productSectionTitle) productSectionTitle.textContent = "Produk Satuan Premium";
      if (productSectionDesc) productSectionDesc.textContent = "Pilihan produk eceran satuan untuk melengkapi kebutuhan harian kulit Anda.";
    }
    renderProductGrid(filterType);
  });
});

const viewAllProductsBtn = document.getElementById('viewAllProductsBtn');
if (viewAllProductsBtn) {
  viewAllProductsBtn.addEventListener('click', () => {
    productFilterBtns.forEach(b => {
      b.classList.remove('active-product-filter');
      b.classList.add('text-[var(--ink-soft)]');
    });
    
    if (productSectionTitle) productSectionTitle.textContent = "Semua Produk Dian Glow Skincare";
    if (productSectionDesc) productSectionDesc.textContent = "Menampilkan koleksi lengkap produk skincare eksklusif (41 Produk) untuk kecantikan maksimal Anda.";
    
    renderAllProductsGrid();
  });
}

renderProductGrid('paket');

/* ---------------- Output Render Baru Foto Testimoni (15 Foto) ---------------- */
const photoTestimoniGrid = document.getElementById('photoTestimoniGrid');
if (photoTestimoniGrid) {
  photoTestimoniGrid.innerHTML = testimonisData.map((t, index) => `
    <div class="tile glass aspect-square group" onclick="openLightbox(TESTIMONI_IMGS_LIGHTBOX, ${index})">
      <img src="${t.img}" alt="${t.alt}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
      <span class="tile-expand glass !bg-black/40 !border-white/30"><i class="fas fa-magnifying-glass-plus text-white text-xs"></i></span>
    </div>
  `).join('');
}

const jobGrid = document.getElementById('jobGrid');
if (jobGrid) {
  jobGrid.innerHTML = jobs.map((j,i)=>`
    <div class="tile glass" data-aos="fade-up" data-aos-delay="${i*100}" onclick="openLightbox(JOB_IMGS, ${i})">
      <img src="${j.img}" alt="${j.alt}" loading="lazy" class="w-full h-auto object-cover">
      <span class="tile-expand glass !bg-black/30 !border-white/30"><i class="fas fa-expand text-white text-sm"></i></span>
    </div>`).join('');
}

/* ---------------- Logika Hubungi Cabang Interaktif Capsule ---------------- */
const contactBranchBtns = document.querySelectorAll('.contact-branch-btn');
const contactBranchName = document.getElementById('contact-branch-name');
const numKonsultasi = document.getElementById('num-konsultasi');
const numCs = document.getElementById('num-cs');
const numReservasi = document.getElementById('num-reservasi');
const linkKonsultasi = document.getElementById('link-konsultasi');
const linkCs = document.getElementById('link-cs');
const linkReservasi = document.getElementById('link-reservasi');

function updateContactSection(index) {
  const data = contactBranchesDatabase[index];
  if(!data) return;

  if(contactBranchName) contactBranchName.textContent = data.name;
  if(numKonsultasi) numKonsultasi.textContent = data.konsultasi;
  if(numCs) numCs.textContent = data.cs;
  if(numReservasi) numReservasi.textContent = data.reservasi;

  const msgText = encodeURIComponent(`Halo Dian Glow ${data.name}, saya ingin terhubung untuk bertanya info layanan kecantikan.`);
  if(linkKonsultasi) linkKonsultasi.href = `https://wa.me/${data.konsultasi.replace(/-/g, '')}?text=${msgText}`;
  if(linkCs) linkCs.href = `https://wa.me/${data.cs.replace(/-/g, '')}?text=${msgText}`;
  if(linkReservasi) linkReservasi.href = `https://wa.me/${data.reservasi.replace(/-/g, '')}?text=${msgText}`;
}

contactBranchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    contactBranchBtns.forEach(b => {
      b.classList.remove('active-contact-branch');
      b.classList.add('text-[var(--ink-soft)]');
    });
    btn.classList.add('active-contact-branch');
    btn.classList.remove('text-[var(--ink-soft)]');
    
    const idx = parseInt(btn.getAttribute('data-branch-idx'));
    updateContactSection(idx);
  });
});

updateContactSection(0);

/* ---------------- Sistem Kunci Poros Gulir Ganda (Scroll-Lock) ---------------- */
function lockBodyScroll(lock) {
  if (lock) {
    document.body.classList.add('overflow-hidden');
  } else {
    const activeModals = document.querySelectorAll('.modal-overlay.open');
    if (activeModals.length === 0) {
      document.body.classList.remove('overflow-hidden');
    }
  }
}

/* ---------------- Lightbox ---------------- */
let lbGallery = [], lbIndex = 0;
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(gallery, index){
  lbGallery = gallery; lbIndex = index;
  updateLightbox();
  if(lightbox) lightbox.classList.add('open');
  lockBodyScroll(true);
}
function updateLightbox(){
  if(!lbImg || lbGallery.length === 0) return;
  const item = lbGallery[lbIndex];
  lbImg.src = item.src; lbImg.alt = item.alt || '';
  if(lbCounter) lbCounter.textContent = lbGallery.length > 1 ? `${lbIndex+1} / ${lbGallery.length}` : '';
  if(document.getElementById('lbPrev')) document.getElementById('lbPrev').style.display = lbGallery.length > 1 ? 'flex' : 'none';
  if(document.getElementById('lbNext')) document.getElementById('lbNext').style.display = lbGallery.length > 1 ? 'flex' : 'none';
}
function closeLightbox(){ 
  if(lightbox) lightbox.classList.remove('open'); 
  lockBodyScroll(false); 
}
if(document.getElementById('lbClose')) document.getElementById('lbClose').onclick = closeLightbox;
if(document.getElementById('lbPrev')) document.getElementById('lbPrev').onclick = ()=>{ lbIndex = (lbIndex - 1 + lbGallery.length) % lbGallery.length; updateLightbox(); };
if(document.getElementById('lbNext')) document.getElementById('lbNext').onclick = ()=>{ lbIndex = (lbIndex + 1) % lbGallery.length; updateLightbox(); };
if(lightbox) lightbox.addEventListener('click', e=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{
  if(!lightbox || !lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if(e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

/* ---------------- Product Detail Modal ---------------- */
const productModal = document.getElementById('productModal');
function openProduct(index){
  const p = products.find(prod => prod.id === index);
  if(!p) return;
  
  if(document.getElementById('pmImg')) document.getElementById('pmImg').src = p.img;
  if(document.getElementById('pmImg')) document.getElementById('pmImg').alt = p.name;
  if(document.getElementById('pmName')) document.getElementById('pmName').textContent = p.name;
  if(document.getElementById('pmWa')) document.getElementById('pmWa').href = `https://wa.me/6281350740338?text=${encodeURIComponent('Halo Dian Glow, saya ingin tanya tentang produk "'+p.name+'"')}`;
  if(document.getElementById('pmImgWrap')) document.getElementById('pmImgWrap').onclick = ()=> openLightbox([{src:p.img, alt:p.name}], 0);
  if(productModal) productModal.classList.add('open');
  lockBodyScroll(true);
}
function closeProduct(){ 
  if(productModal) productModal.classList.remove('open'); 
  lockBodyScroll(false); 
}
if(document.getElementById('pmClose')) document.getElementById('pmClose').onclick = closeProduct;
if(productModal) productModal.addEventListener('click', e=>{ if(e.target === productModal) closeProduct(); });
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeProduct(); });

/* ---------------- Nav / mobile menu / theme / scroll ---------------- */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', ()=>{
  if(nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  if(toTop) toTop.classList.toggle('show', window.scrollY > 500);
});
if(hamburger) {
  hamburger.onclick = ()=>{
    hamburger.classList.toggle('open');
    if(mobileMenu) mobileMenu.classList.toggle('open');
  };
}
if(mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    if(hamburger) hamburger.classList.remove('open'); 
    mobileMenu.classList.remove('open');
  }));
}
if(toTop) toTop.onclick = ()=> window.scrollTo({top:0, behavior:'smooth'});

function setTheme(dark){
  document.documentElement.classList.toggle('dark', dark);
  document.querySelectorAll('.theme-icon').forEach(i=> i.className = dark ? 'theme-icon fas fa-sun' : 'theme-icon fas fa-moon');
}
let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(isDark);
if(document.getElementById('theme-toggle')) document.getElementById('theme-toggle').onclick = ()=>{ isDark = !isDark; setTheme(isDark); };
if(document.getElementById('theme-toggle-mobile')) document.getElementById('theme-toggle-mobile').onclick = ()=>{ isDark = !isDark; setTheme(isDark); };

/* ---------------- Liquid bubble nav indicator ---------------- */
const navLinksRow = document.getElementById('navLinksRow');
const navIndicator = document.getElementById('navIndicator');
if(navLinksRow && navIndicator){
  navLinksRow.querySelectorAll('[data-nav-link]').forEach(link=>{
    link.addEventListener('mouseenter', ()=>{
      const rowRect = navLinksRow.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      navIndicator.style.left = (linkRect.left - rowRect.left - 12) + 'px';
      navIndicator.style.width = (linkRect.width + 24) + 'px';
      navIndicator.classList.add('active');
    });
    link.addEventListener('focus', ()=> link.dispatchEvent(new Event('mouseenter')));
  });
  navLinksRow.addEventListener('mouseleave', ()=> navIndicator.classList.remove('active'));
}

/* ---------------- Custom liquid cursor ---------------- */
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.documentElement.classList.add('custom-cursor');
  const cDot = document.getElementById('cursorDot');
  const cRing = document.getElementById('cursorRing');
  let mx=0, my=0, rx=0, ry=0, primed=false;
  window.addEventListener('mousemove', e=>{
    mx = e.clientX; my = e.clientY;
    if(cDot) cDot.style.left = mx+'px'; 
    if(cDot) cDot.style.top = my+'px';
    if(!primed && cDot && cRing){ primed = true; cDot.classList.add('show'); cRing.classList.add('show'); }
  });
  (function ringLoop(){
    rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
    if(cRing) cRing.style.left = rx+'px'; 
    if(cRing) cRing.style.top = ry+'px';
    requestAnimationFrame(ringLoop);
  })();
  document.addEventListener('mouseover', e=>{
    if(cRing && e.target.closest && e.target.closest('a,button,.tile,.chip,[onclick],input,textarea,select')) cRing.classList.add('hover');
  });
  document.addEventListener('mouseout', e=>{
    if(cRing && e.target.closest && e.target.closest('a,button,.tile,.chip,[onclick],input,textarea,select')) cRing.classList.remove('hover');
  });
  document.documentElement.addEventListener('mouseleave', ()=>{ if(cDot && cRing) { cDot.classList.remove('show'); cRing.classList.remove('show'); } });
  document.documentElement.addEventListener('mouseenter', ()=>{ if(cDot && cRing) { cDot.classList.add('show'); cRing.classList.add('show'); } });
}

/* ---------------- About Section Image Slider ---------------- */
const aboutTrack = document.getElementById('about-slider-track');
const btnPrevAbout = document.getElementById('btn-prev-about');
const btnNextAbout = document.getElementById('btn-next-about');
const aboutDots = document.querySelectorAll('.about-dot');
const aboutContainer = document.getElementById('about-slider-container');
const aboutBranchBubble = document.getElementById('about-branch-bubble');

if (aboutTrack) {
  let currentSlide = 0;
  const totalAboutSlides = aboutTrack.children.length;
  let startX = 0;
  let isDragging = false;

  const updateAboutSlider = () => {
    aboutTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    aboutDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    // Perbaikan total untuk merender text bubble secara solid dan akurat tanpa bug opacity
    if (aboutBranchBubble) {
      aboutBranchBubble.textContent = branchNames[currentSlide] || `Cabang ${currentSlide + 1}`;
    }

    if (aboutContainer) {
      const activeImg = aboutTrack.children[currentSlide].querySelector('img');
      if (activeImg) {
        const applyAspect = () => {
          if (activeImg.naturalWidth && activeImg.naturalHeight) {
            const aspect = activeImg.naturalWidth / activeImg.naturalHeight;
            aboutContainer.style.aspectRatio = aspect;
          }
        };

        if (activeImg.complete) {
          applyAspect();
        } else {
          activeImg.addEventListener('load', applyAspect);
        }
      }
    }
  };

  const nextAboutSlide = () => {
    currentSlide = (currentSlide < totalAboutSlides - 1) ? currentSlide + 1 : 0;
    updateAboutSlider();
  };

  const prevAboutSlide = () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalAboutSlides - 1;
    updateAboutSlider();
  };

  if(btnNextAbout) btnNextAbout.addEventListener('click', nextAboutSlide);
  if(btnPrevAbout) btnPrevAbout.addEventListener('click', prevAboutSlide);

  aboutDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateAboutSlider();
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    aboutTrack.style.transition = 'none';
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  const dragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const diff = currentX - startX;
    aboutTrack.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
  };

  const dragEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    aboutTrack.style.transition = 'transform 0.5s ease-in-out';
    
    const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff < -50 && currentSlide < totalAboutSlides - 1) {
      currentSlide++;
    } else if (diff > 50 && currentSlide > 0) {
      currentSlide--;
    }
    updateAboutSlider();
  };

  aboutTrack.addEventListener('mousedown', dragStart);
  aboutTrack.addEventListener('mousemove', dragMove);
  aboutTrack.addEventListener('mouseup', dragEnd);
  aboutTrack.addEventListener('mouseleave', dragEnd);

  aboutTrack.addEventListener('touchstart', dragStart, { passive: true });
  aboutTrack.addEventListener('touchmove', dragMove, { passive: true });
  aboutTrack.addEventListener('touchend', dragEnd);

  window.addEventListener('load', updateAboutSlider);
  updateAboutSlider();
  
  let autoPlayAbout = setInterval(nextAboutSlide, 4000);
  
  const parentEl = aboutTrack.parentElement;
  if (parentEl) {
    parentEl.addEventListener('mouseenter', () => clearInterval(autoPlayAbout));
    parentEl.addEventListener('mouseleave', () => {
      clearInterval(autoPlayAbout);
      autoPlayAbout = setInterval(nextAboutSlide, 4000);
    });
  }
}

/* ---------------- Peta Lokasi Cabang Dinamis Interaktif & WhatsApp Dinamis ---------------- */
const branchItems = document.querySelectorAll('.branch-item');
if (branchItems.length > 0 && branchMap) {
  branchItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      branchItems.forEach(i => {
        i.classList.remove('active-branch');
        i.classList.add('opacity-70');
      });
      item.classList.add('active-branch');
      item.classList.remove('opacity-70');

      branchMap.style.opacity = '0.2';
      
      setTimeout(() => {
        branchMap.src = mapBranchesData[index].embedUrl;
        if (activeBranchText) activeBranchText.textContent = mapBranchesData[index].name;
        if (branchMapsBtn) branchMapsBtn.href = mapBranchesData[index].directUrl;
        if (branchWaBtn) branchWaBtn.href = mapBranchesData[index].waUrl;
        branchMap.style.opacity = '1';
      }, 250);
    });
  });
}
const JOB_IMGS = jobs.map(j=>({src:j.img, alt:j.alt}));