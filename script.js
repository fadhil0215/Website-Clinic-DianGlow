const reducedMotionQuery = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

AOS.init({
  duration: reducedMotionQuery.matches ? 0 : 700,
  once: true,
  offset: 50,
  easing: 'ease-out-cubic',
  disable: reducedMotionQuery.matches
});

/* ---------------- GLOBAL WHATSAPP HELPER ---------------- */

function getCleanWaUrl(number, message) {
  let cleaned = String(number).replace(/\D/g, '');

  if (cleaned.startsWith('0')) {
    cleaned = `62${cleaned.substring(1)}`;
  }

  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

/* ---------------- PAGE SCROLL LOCK ---------------- */

const pageScrollLocks = new Set();

function updatePageScrollLock() {
  document.body.classList.toggle(
    'page-locked',
    pageScrollLocks.size > 0
  );
}

function lockPage(key) {
  pageScrollLocks.add(key);
  updatePageScrollLock();
}

function unlockPage(key) {
  pageScrollLocks.delete(key);
  updatePageScrollLock();
}

/* ---------------- DATABASE PRODUK PAKET ---------------- */

const paketProducts = [
  {
    id: 0,
    img: 'Produk Paket/Foto 1.png',
    name: 'Paket Glowing Premium Darkspot',
    type: 'paket',
    price: 'Rp 370.000'
  },
  {
    id: 1,
    img: 'Produk Paket/Foto 2.png',
    name: 'Paket Glowing Premium Perfect Glow',
    type: 'paket',
    price: 'Rp 500.000'
  },
  {
    id: 2,
    img: 'Produk Paket/Foto 3.png',
    name: 'Paket Acne Glow',
    type: 'paket',
    price: 'Rp 350.000'
  },
  {
    id: 3,
    img: 'Produk Paket/Foto 4.png',
    name: 'Paket Acne Derma',
    type: 'paket',
    price: 'Rp 300.000'
  },
  {
    id: 4,
    img: 'Produk Paket/Foto 5.png',
    name: 'Paket Whitening Glowing',
    type: 'paket',
    price: ''
  },
  {
    id: 5,
    img: 'Produk Paket/Foto 6.png',
    name: 'Paket Whitening Booster & Anti Aging',
    type: 'paket',
    price: 'Rp 420.000'
  },
  {
    id: 6,
    img: 'Produk Paket/Foto 7.png',
    name: 'Paket Premium Dian Glow',
    type: 'paket',
    price: ''
  },
  {
    id: 7,
    img: 'Produk Paket/Foto 8.png',
    name: 'Paket Glowing Premium Whitening Luxury',
    type: 'paket',
    price: 'Rp 320.000'
  },
  {
    id: 8,
    img: 'Produk Paket/Foto 9.png',
    name: 'Paket Perawatan Acne Prone',
    type: 'paket',
    price: 'Rp 360.000'
  },
  {
    id: 9,
    img: 'Produk Paket/Foto 10.png',
    name: 'Paket Perfect Glow Luxury',
    type: 'paket',
    price: 'Rp 450.000'
  }
];

/* ---------------- DATABASE PRODUK SATUAN ---------------- */

const satuanProducts = [
  {
    id: 10,
    img: 'Produk Satuan/Foto 1.jpg',
    name: 'Gold Jelly Whitening Premium',
    type: 'satuan',
    price: 'Rp 265.000'
  },
  {
    id: 11,
    img: 'Produk Satuan/Foto 2.jpg',
    name: 'Whitening Booster Luxe For Dark Spot Serum',
    type: 'satuan',
    price: 'Rp 345.000'
  },
  {
    id: 12,
    img: 'Produk Satuan/Foto 3.jpg',
    name: 'Serum Aura White Luxe Peel',
    type: 'satuan',
    price: 'Rp 245.000'
  },
  {
    id: 13,
    img: 'Produk Satuan/Foto 4.jpg',
    name: 'Toner Glowing Dian Glow',
    type: 'satuan',
    price: 'Rp 90.000'
  },
  {
    id: 14,
    img: 'Produk Satuan/Foto 5.jpg',
    name: 'Milk Cleanser Normal Skin',
    type: 'satuan',
    price: 'Rp 89.000'
  },
  {
    id: 15,
    img: 'Produk Satuan/Foto 6.jpg',
    name: 'Derma Acne Facial Wash',
    type: 'satuan',
    price: 'Rp 90.000'
  },
  {
    id: 16,
    img: 'Produk Satuan/Foto 7.jpg',
    name: 'Serum Acne Prone',
    type: 'satuan',
    price: 'Rp 189.000'
  },
  {
    id: 17,
    img: 'Produk Satuan/Foto 8.jpg',
    name: 'Premium Day Sunscreen Whitening Luxe',
    type: 'satuan',
    price: 'Rp 160.000'
  },
  {
    id: 18,
    img: 'Produk Satuan/Foto 9.jpg',
    name: 'Premium Whitening Booster & Anti Aging',
    type: 'satuan',
    price: 'Rp 210.000'
  },
  {
    id: 19,
    img: 'Produk Satuan/Foto 10.jpg',
    name: 'Acne Glowing Toner',
    type: 'satuan',
    price: 'Rp 100.000'
  },
  {
    id: 20,
    img: 'Produk Satuan/Foto 11.jpg',
    name: 'Acne Glow Day Cream',
    type: 'satuan',
    price: 'Rp 140.000'
  },
  {
    id: 21,
    img: 'Produk Satuan/Foto 12.jpg',
    name: 'Premium Calendula Toner',
    type: 'satuan',
    price: 'Rp 110.000'
  },
  {
    id: 22,
    img: 'Produk Satuan/Foto 13.jpg',
    name: 'Whitening Luxury Night Cream',
    type: 'satuan',
    price: 'Rp 140.000'
  },
  {
    id: 23,
    img: 'Produk Satuan/Foto 14.jpg',
    name: 'Acne Glow Night Cream',
    type: 'satuan',
    price: 'Rp 140.000'
  },
  {
    id: 24,
    img: 'Produk Satuan/Foto 15.jpg',
    name: 'Acne Glowing Facial Wash',
    type: 'satuan',
    price: 'Rp 100.000'
  },
  {
    id: 25,
    img: 'Produk Satuan/Foto 16.jpg',
    name: 'Hydraluxe Crystal Lip Serum',
    type: 'satuan',
    price: 'Rp 185.000'
  },
  {
    id: 26,
    img: 'Produk Satuan/Foto 17.jpg',
    name: 'Glowing Spray',
    type: 'satuan',
    price: 'Rp 130.000'
  },
  {
    id: 27,
    img: 'Produk Satuan/Foto 18.jpg',
    name: 'Milk Cleanser Acne',
    type: 'satuan',
    price: 'Rp 89.000'
  },
  {
    id: 28,
    img: 'Produk Satuan/Foto 19.jpg',
    name: 'Serum Acne Luxe White Glow Premium',
    type: 'satuan',
    price: 'Rp 325.000'
  },
  {
    id: 29,
    img: 'Produk Satuan/Foto 20.jpg',
    name: 'Caviar De Luxe Moisturizer',
    type: 'satuan',
    price: 'Rp 245.000'
  },
  {
    id: 30,
    img: 'Produk Satuan/Foto 21.jpg',
    name: 'Moisturizer Dermalux Acne',
    type: 'satuan',
    price: 'Rp 199.000'
  },
  {
    id: 31,
    img: 'Produk Satuan/Foto 22.jpg',
    name: 'Derma Acne Lotion',
    type: 'satuan',
    price: 'Rp 100.000'
  },
  {
    id: 32,
    img: 'Produk Satuan/Foto 23.jpg',
    name: 'Face Wash Glowing',
    type: 'satuan',
    price: 'Rp 90.000'
  },
  {
    id: 33,
    img: 'Produk Satuan/Foto 24.jpg',
    name: 'SheetMask Whitening Glow DNA Salmon',
    type: 'satuan',
    price: 'Rp 38.000'
  },
  {
    id: 34,
    img: 'Produk Satuan/Foto 25.jpg',
    name: 'Premium Face Wash',
    type: 'satuan',
    price: 'Rp 110.000'
  },
  {
    id: 35,
    img: 'Produk Satuan/Foto 26.jpg',
    name: 'Perfect Glow Cream',
    type: 'satuan',
    price: 'Rp 275.000'
  },
  {
    id: 36,
    img: 'Produk Satuan/Foto 27.jpg',
    name: 'Vit C20 Collagen Glow',
    type: 'satuan',
    price: 'Rp 245.000'
  },
  {
    id: 37,
    img: 'Produk Satuan/Foto 28.jpg',
    name: 'Derma Acne Face Toner',
    type: 'satuan',
    price: 'Rp 90.000'
  },
  {
    id: 38,
    img: 'Produk Satuan/Foto 29.jpg',
    name: 'Advance Eye Night Complex',
    type: 'satuan',
    price: 'Rp 185.000'
  },
  {
    id: 39,
    img: 'Produk Satuan/Foto 30.jpg',
    name: 'Clay Mask Charcoal With Niacinamide',
    type: 'satuan',
    price: 'Rp 129.000'
  },
  {
    id: 40,
    img: 'Produk Satuan/Foto 31.jpg',
    name: 'Ultimate Dark Spot Booster Night Cream',
    type: 'satuan',
    price: 'Rp 170.000'
  },
  {
    id: 41,
    img: 'Produk Satuan/Foto 32.jpg',
    name: 'Velux White DNA Salmon Serum',
    type: 'satuan',
    price: 'Rp 199.000'
  }
];

const products = [
  ...paketProducts,
  ...satuanProducts
];

/* ---------------- DATABASE TREATMENT ---------------- */

const treatments = [
  {
    img: 'Treatment/Foto 2.jpeg',
    alt: 'Face Treatment Daftar Harga Bagian 1',
    category: 'face'
  },
  {
    img: 'Treatment/Foto 1.jpeg',
    alt: 'Face Treatment Daftar Harga Bagian 2',
    category: 'face'
  },
  {
    img: 'Treatment/Foto 3.jpeg',
    alt: 'Face Treatment Daftar Harga Bagian 3',
    category: 'face'
  },
  {
    img: 'Treatment/Foto 4.jpeg',
    alt: 'Peeling Treatment Daftar Harga Bagian 1',
    category: 'peeling'
  },
  {
    img: 'Treatment/Foto 6.jpeg',
    alt: 'Peeling Treatment Daftar Harga Bagian 2',
    category: 'peeling'
  },
  {
    img: 'Treatment/Foto 5.jpeg',
    alt: 'Laser Treatment Daftar Harga',
    category: 'laser'
  }
];

/* ---------------- DATABASE TESTIMONI ---------------- */

const testimonisData = Array.from(
  {
    length: 15
  },
  (_, index) => ({
    img: `Testimoni/Foto ${index + 1}.jpeg`,
    alt: `Testimoni Pasien Dian Glow Clinic ${index + 1}`
  })
);

const TESTIMONI_IMGS_LIGHTBOX = testimonisData.map(
  testimoni => ({
    src: testimoni.img,
    alt: testimoni.alt
  })
);

/* ---------------- DATABASE LOWONGAN ---------------- */

const jobs = [
  {
    img: 'Lowongan/Foto 1.png',
    alt: 'Lowongan Pekerjaan 1'
  },
  {
    img: 'Lowongan/Foto 2.jpeg',
    alt: 'Lowongan Pekerjaan 2'
  },
  {
    img: 'Lowongan/Foto 3.jpeg',
    alt: 'Lowongan Pekerjaan 3'
  }
];

const JOB_IMGS = jobs.map(
  job => ({
    src: job.img,
    alt: job.alt
  })
);

/* ---------------- DATABASE MAPS ---------------- */

const mapBranchesData = [
  {
    name: 'Dian Glow Pontianak',

    embedUrl:
      'https://maps.google.com/maps?q=Jl.%20Pangeran%20Natakusuma%20No.%20137,%20Pontianak&t=&z=15&ie=UTF8&iwloc=&output=embed',

    directUrl:
      'https://maps.google.com/?q=Jl.+Pangeran+Natakusuma+No.+137,+Pontianak+Kota',

    waUrl:
      'https://wa.me/628115688008?text=Halo%20Dian%20Glow%20Pontianak%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan.'
  },
  {
    name: 'Dian Glow Ketapang',

    embedUrl:
      'https://maps.google.com/maps?q=Jl.%20D.I.%20Panjaitan,%20Ketapang&t=&z=15&ie=UTF8&iwloc=&output=embed',

    directUrl:
      'https://maps.google.com/?q=Jl.+D.I.+Panjaitan,+Ketapang',

    waUrl:
      'https://wa.me/6281155008809?text=Halo%20Dian%20Glow%20Ketapang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan.'
  },
  {
    name: 'Dian Glow Singkawang',

    embedUrl:
      'https://maps.google.com/maps?q=Jl.%20Yos%20Sudarso,%20Melayu%20Pasiran,%20Singkawang&t=&z=15&ie=UTF8&iwloc=&output=embed',

    directUrl:
      'https://maps.google.com/?q=Jl.+Yos+Sudarso,+Melayu+Pasiran,+Singkawang',

    waUrl:
      'https://wa.me/6281148008880?text=Halo%20Dian%20Glow%20Singkawang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan.'
  },
  {
    name: 'Dian Glow Sintang',

    embedUrl:
      'https://maps.google.com/maps?q=Jl.%20MT%20Haryono%20Km.%204,%20Sintang&t=&z=15&ie=UTF8&iwloc=&output=embed',

    directUrl:
      'https://maps.google.com/?q=Jl.+MT+Haryono+Km.+4,+Sintang',

    waUrl:
      'https://wa.me/628115684600?text=Halo%20Dian%20Glow%20Sintang%2C%20saya%20tertarik%20melakukan%20konsultasi%20perawatan.'
  }
];

/* ---------------- DATABASE KONTAK ---------------- */

const contactBranchesDatabase = [
  {
    name: 'Pontianak',
    konsultasi: '0821-5765-2087',
    cs: '0813-5074-0338',
    reservasi: '0811-5688-008'
  },
  {
    name: 'Ketapang',
    konsultasi: '0821-5765-2087',
    cs: '0813-5074-0338',
    reservasi: '0811-5688-008'
  },
  {
    name: 'Singkawang',
    konsultasi: '0821-5765-2087',
    cs: '0813-5074-0338',
    reservasi: '0811-5688-008'
  },
  {
    name: 'Sintang',
    konsultasi: '0821-5765-2087',
    cs: '0813-5074-0338',
    reservasi: '0811-5688-008'
  }
];

const branchNames = [
  'Cabang Pontianak',
  'Cabang Ketapang',
  'Cabang Sintang',
  'Cabang Singkawang'
];

/* ---------------- THEME ---------------- */

const themeToggle = document.getElementById(
  'theme-toggle'
);

const themeToggleMobile = document.getElementById(
  'theme-toggle-mobile'
);

const themeColorMeta = document.querySelector(
  'meta[name="theme-color"]'
);

const systemDarkQuery = window.matchMedia(
  '(prefers-color-scheme: dark)'
);

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(
      'dian-glow-theme'
    );

    if (savedTheme === 'dark') {
      return true;
    }

    if (savedTheme === 'light') {
      return false;
    }
  } catch (error) {
    console.warn(
      'Penyimpanan tema tidak tersedia.',
      error
    );
  }

  return systemDarkQuery.matches;
}

let isDark = getInitialTheme();

function setTheme(dark, saveTheme = true) {
  isDark = dark;

  document.documentElement.classList.toggle(
    'dark',
    dark
  );

  document
    .querySelectorAll('.theme-icon')
    .forEach(icon => {
      icon.className = dark
        ? 'theme-icon fas fa-sun'
        : 'theme-icon fas fa-moon';
    });

  if (themeColorMeta) {
    themeColorMeta.content = dark
      ? '#1B0E17'
      : '#FDF3F7';
  }

  if (saveTheme) {
    try {
      localStorage.setItem(
        'dian-glow-theme',
        dark ? 'dark' : 'light'
      );
    } catch (error) {
      console.warn(
        'Tema tidak dapat disimpan.',
        error
      );
    }
  }
}

setTheme(isDark, false);

if (themeToggle) {
  themeToggle.addEventListener(
    'click',
    () => {
      setTheme(!isDark);
    }
  );
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener(
    'click',
    () => {
      setTheme(!isDark);
    }
  );
}

/* ---------------- NAVIGATION ---------------- */

const nav = document.getElementById('nav');

const hamburger = document.getElementById(
  'hamburger'
);

const mobileMenu = document.getElementById(
  'mobile-menu'
);

const toTop = document.getElementById(
  'toTop'
);

let scrollFrameRequested = false;

function updateScrollInterface() {
  const scrollY = window.scrollY;

  if (nav) {
    nav.classList.toggle(
      'scrolled',
      scrollY > 20
    );
  }

  if (toTop) {
    toTop.classList.toggle(
      'show',
      scrollY > 500
    );
  }

  scrollFrameRequested = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (scrollFrameRequested) {
      return;
    }

    scrollFrameRequested = true;

    window.requestAnimationFrame(
      updateScrollInterface
    );
  },
  {
    passive: true
  }
);

updateScrollInterface();

function openMobileMenu() {
  if (!hamburger || !mobileMenu) {
    return;
  }

  hamburger.classList.add('open');

  hamburger.setAttribute(
    'aria-expanded',
    'true'
  );

  hamburger.setAttribute(
    'aria-label',
    'Tutup menu'
  );

  mobileMenu.classList.add('open');

  mobileMenu.setAttribute(
    'aria-hidden',
    'false'
  );

  lockPage('mobile-menu');
}

function closeMobileMenu() {
  if (!hamburger || !mobileMenu) {
    return;
  }

  hamburger.classList.remove('open');

  hamburger.setAttribute(
    'aria-expanded',
    'false'
  );

  hamburger.setAttribute(
    'aria-label',
    'Buka menu'
  );

  mobileMenu.classList.remove('open');

  mobileMenu.setAttribute(
    'aria-hidden',
    'true'
  );

  unlockPage('mobile-menu');
}

if (hamburger) {
  hamburger.addEventListener(
    'click',
    () => {
      const isOpen = hamburger.classList.contains(
        'open'
      );

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  );
}

if (mobileMenu) {
  mobileMenu
    .querySelectorAll('a')
    .forEach(link => {
      link.addEventListener(
        'click',
        closeMobileMenu
      );
    });
}

if (toTop) {
  toTop.addEventListener(
    'click',
    () => {
      window.scrollTo({
        top: 0,
        behavior: reducedMotionQuery.matches
          ? 'auto'
          : 'smooth'
      });
    }
  );
}

window.addEventListener(
  'resize',
  () => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  },
  {
    passive: true
  }
);

/* ---------------- NAV INDICATOR ---------------- */

const navLinksRow = document.getElementById(
  'navLinksRow'
);

const navIndicator = document.getElementById(
  'navIndicator'
);

if (navLinksRow && navIndicator) {
  navLinksRow
    .querySelectorAll('[data-nav-link]')
    .forEach(link => {
      const showIndicator = () => {
        const rowRect =
          navLinksRow.getBoundingClientRect();

        const linkRect =
          link.getBoundingClientRect();

        navIndicator.style.left =
          `${linkRect.left - rowRect.left - 12}px`;

        navIndicator.style.width =
          `${linkRect.width + 24}px`;

        navIndicator.classList.add(
          'active'
        );
      };

      link.addEventListener(
        'mouseenter',
        showIndicator
      );

      link.addEventListener(
        'focus',
        showIndicator
      );
    });

  navLinksRow.addEventListener(
    'mouseleave',
    () => {
      navIndicator.classList.remove(
        'active'
      );
    }
  );

  navLinksRow.addEventListener(
    'focusout',
    event => {
      if (
        !navLinksRow.contains(
          event.relatedTarget
        )
      ) {
        navIndicator.classList.remove(
          'active'
        );
      }
    }
  );
}

/* ---------------- CUSTOM CURSOR ---------------- */

if (
  window.matchMedia(
    '(hover:hover) and (pointer:fine)'
  ).matches &&
  !reducedMotionQuery.matches
) {
  document.documentElement.classList.add(
    'custom-cursor'
  );

  const cursorDot = document.getElementById(
    'cursorDot'
  );

  const cursorRing = document.getElementById(
    'cursorRing'
  );

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;

  let cursorPrimed = false;

  window.addEventListener(
    'mousemove',
    event => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorDot) {
        cursorDot.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (
        !cursorPrimed &&
        cursorDot &&
        cursorRing
      ) {
        cursorPrimed = true;

        cursorDot.classList.add('show');
        cursorRing.classList.add('show');
      }
    },
    {
      passive: true
    }
  );

  function animateCursorRing() {
    ringX += (mouseX - ringX) * .18;
    ringY += (mouseY - ringY) * .18;

    if (cursorRing) {
      cursorRing.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    }

    window.requestAnimationFrame(
      animateCursorRing
    );
  }

  animateCursorRing();

  document.addEventListener(
    'pointerover',
    event => {
      const interactiveElement =
        event.target.closest?.(
          'a, button, .tile, .chip, [onclick], input, textarea, select, [role="button"]'
        );

      if (
        cursorRing &&
        interactiveElement
      ) {
        cursorRing.classList.add(
          'hover'
        );
      }
    }
  );

  document.addEventListener(
    'pointerout',
    event => {
      const interactiveElement =
        event.target.closest?.(
          'a, button, .tile, .chip, [onclick], input, textarea, select, [role="button"]'
        );

      if (
        cursorRing &&
        interactiveElement
      ) {
        cursorRing.classList.remove(
          'hover'
        );
      }
    }
  );

  document.documentElement.addEventListener(
    'mouseleave',
    () => {
      cursorDot?.classList.remove(
        'show'
      );

      cursorRing?.classList.remove(
        'show'
      );
    }
  );

  document.documentElement.addEventListener(
    'mouseenter',
    () => {
      if (!cursorPrimed) {
        return;
      }

      cursorDot?.classList.add(
        'show'
      );

      cursorRing?.classList.add(
        'show'
      );
    }
  );
}

/* ---------------- ABOUT SLIDER ---------------- */

const aboutTrack = document.getElementById(
  'about-slider-track'
);

const btnPrevAbout = document.getElementById(
  'btn-prev-about'
);

const btnNextAbout = document.getElementById(
  'btn-next-about'
);

const aboutDots = document.querySelectorAll(
  '.about-dot'
);

const aboutContainer = document.getElementById(
  'about-slider-container'
);

const aboutBranchBubble = document.getElementById(
  'about-branch-bubble'
);

if (aboutTrack) {
  let currentSlide = 0;

  const totalSlides =
    aboutTrack.children.length;

  let pointerStartX = 0;
  let pointerActive = false;
  let aboutAutoplay = null;

  function applyActiveImageRatio() {
    if (!aboutContainer) {
      return;
    }

    const activeImage =
      aboutTrack.children[currentSlide]
        ?.querySelector('img');

    if (!activeImage) {
      return;
    }

    const applyRatio = () => {
      if (
        activeImage.naturalWidth &&
        activeImage.naturalHeight
      ) {
        const ratio =
          activeImage.naturalWidth /
          activeImage.naturalHeight;

        aboutContainer.style.aspectRatio =
          String(ratio);
      }
    };

    if (activeImage.complete) {
      applyRatio();
    } else {
      activeImage.addEventListener(
        'load',
        applyRatio,
        {
          once: true
        }
      );
    }
  }

  function updateAboutSlider() {
    aboutTrack.style.transform =
      `translate3d(-${currentSlide * 100}%, 0, 0)`;

    aboutDots.forEach(
      (dot, index) => {
        const isActive =
          index === currentSlide;

        dot.classList.toggle(
          'active',
          isActive
        );

        dot.setAttribute(
          'aria-current',
          isActive ? 'true' : 'false'
        );
      }
    );

    if (aboutBranchBubble) {
      aboutBranchBubble.textContent =
        branchNames[currentSlide] ??
        `Cabang ${currentSlide + 1}`;
    }

    applyActiveImageRatio();
  }

  function showNextAboutSlide() {
    currentSlide =
      (currentSlide + 1) %
      totalSlides;

    updateAboutSlider();
  }

  function showPreviousAboutSlide() {
    currentSlide =
      (
        currentSlide -
        1 +
        totalSlides
      ) %
      totalSlides;

    updateAboutSlider();
  }

  function stopAboutAutoplay() {
    if (aboutAutoplay !== null) {
      window.clearInterval(
        aboutAutoplay
      );

      aboutAutoplay = null;
    }
  }

  function startAboutAutoplay() {
    stopAboutAutoplay();

    if (
      reducedMotionQuery.matches ||
      document.hidden
    ) {
      return;
    }

    aboutAutoplay = window.setInterval(
      showNextAboutSlide,
      4000
    );
  }

  btnPrevAbout?.addEventListener(
    'click',
    showPreviousAboutSlide
  );

  btnNextAbout?.addEventListener(
    'click',
    showNextAboutSlide
  );

  aboutDots.forEach(
    (dot, index) => {
      dot.addEventListener(
        'click',
        () => {
          currentSlide = index;

          updateAboutSlider();
          startAboutAutoplay();
        }
      );
    }
  );

  aboutTrack.addEventListener(
    'pointerdown',
    event => {
      pointerStartX = event.clientX;
      pointerActive = true;

      aboutTrack.style.transition =
        'none';

      try {
        aboutTrack.setPointerCapture(
          event.pointerId
        );
      } catch (error) {
        // Pointer capture tidak didukung.
      }
    }
  );

  aboutTrack.addEventListener(
    'pointermove',
    event => {
      if (!pointerActive) {
        return;
      }

      const distance =
        event.clientX - pointerStartX;

      aboutTrack.style.transform =
        `translate3d(calc(-${currentSlide * 100}% + ${distance}px), 0, 0)`;
    }
  );

  function finishAboutPointer(event) {
    if (!pointerActive) {
      return;
    }

    pointerActive = false;

    aboutTrack.style.transition = '';

    const distance =
      event.clientX - pointerStartX;

    if (Math.abs(distance) >= 50) {
      if (distance < 0) {
        showNextAboutSlide();
      } else {
        showPreviousAboutSlide();
      }
    } else {
      updateAboutSlider();
    }

    startAboutAutoplay();
  }

  aboutTrack.addEventListener(
    'pointerup',
    finishAboutPointer
  );

  aboutTrack.addEventListener(
    'pointercancel',
    event => {
      pointerActive = false;

      aboutTrack.style.transition = '';

      updateAboutSlider();
    }
  );

  aboutContainer?.addEventListener(
    'mouseenter',
    stopAboutAutoplay
  );

  aboutContainer?.addEventListener(
    'mouseleave',
    startAboutAutoplay
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        stopAboutAutoplay();
      } else {
        startAboutAutoplay();
      }
    }
  );

  updateAboutSlider();
  startAboutAutoplay();
}

/* ---------------- TREATMENT SLIDER ---------------- */

const treatmentTrack = document.getElementById(
  'treatmentTrack'
);

const treatmentViewport = document.getElementById(
  'treatmentViewport'
);

const treatmentPrev = document.getElementById(
  'treatmentPrev'
);

const treatmentNext = document.getElementById(
  'treatmentNext'
);

const treatmentCounter = document.getElementById(
  'treatmentCounter'
);

const treatmentFilterButtons =
  document.querySelectorAll(
    '.treatment-filter-btn'
  );

let visibleTreatmentGallery = [];
let currentTreatmentSlide = 0;

let treatmentPointerStartX = 0;
let treatmentPointerActive = false;
let treatmentWasDragged = false;

function renderTreatmentSlider(filter = 'face') {
  if (!treatmentTrack) {
    return;
  }

  const filteredTreatments =
    treatments.filter(
      treatment =>
        treatment.category === filter
    );

  visibleTreatmentGallery =
    filteredTreatments.map(
      treatment => ({
        src: treatment.img,
        alt: treatment.alt
      })
    );

  currentTreatmentSlide = 0;

  if (filteredTreatments.length === 0) {
    treatmentTrack.innerHTML = `
      <div class="treatment-slide">
        <div class="treatment-empty-state">
          Tidak ada foto perawatan di kategori ini.
        </div>
      </div>
    `;

    updateTreatmentSlider();

    return;
  }

  treatmentTrack.innerHTML =
    filteredTreatments
      .map(
        (treatment, index) => `
          <div class="treatment-slide">
            <button
              type="button"
              class="treatment-slide-button"
              data-treatment-index="${index}"
              aria-label="Perbesar ${treatment.alt}"
            >
              <img
                src="${treatment.img}"
                alt="${treatment.alt}"
                loading="lazy"
                decoding="async"
                draggable="false"
              >

              <span
                class="tile-expand glass !bg-black/40 !border-white/30"
              >
                <i
                  class="fas fa-magnifying-glass-plus text-white text-sm"
                ></i>
              </span>
            </button>
          </div>
        `
      )
      .join('');

  treatmentTrack
    .querySelectorAll(
      '[data-treatment-index]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          if (treatmentWasDragged) {
            return;
          }

          const index = Number.parseInt(
            button.dataset.treatmentIndex,
            10
          );

          openLightbox(
            visibleTreatmentGallery,
            index
          );
        }
      );
    });

  updateTreatmentSlider();
}

function updateTreatmentSlider() {
  if (!treatmentTrack) {
    return;
  }

  treatmentTrack.style.transform =
    `translate3d(-${currentTreatmentSlide * 100}%, 0, 0)`;

  const totalSlides =
    visibleTreatmentGallery.length;

  const hasMultipleSlides =
    totalSlides > 1;

  if (treatmentCounter) {
    treatmentCounter.textContent =
      totalSlides > 0
        ? `${currentTreatmentSlide + 1} / ${totalSlides}`
        : '0 / 0';
  }

  treatmentPrev?.classList.toggle(
    'is-hidden',
    !hasMultipleSlides
  );

  treatmentNext?.classList.toggle(
    'is-hidden',
    !hasMultipleSlides
  );
}

function showNextTreatmentSlide() {
  const totalSlides =
    visibleTreatmentGallery.length;

  if (totalSlides <= 1) {
    return;
  }

  currentTreatmentSlide =
    (currentTreatmentSlide + 1) %
    totalSlides;

  updateTreatmentSlider();
}

function showPreviousTreatmentSlide() {
  const totalSlides =
    visibleTreatmentGallery.length;

  if (totalSlides <= 1) {
    return;
  }

  currentTreatmentSlide =
    (
      currentTreatmentSlide -
      1 +
      totalSlides
    ) %
    totalSlides;

  updateTreatmentSlider();
}

treatmentPrev?.addEventListener(
  'click',
  showPreviousTreatmentSlide
);

treatmentNext?.addEventListener(
  'click',
  showNextTreatmentSlide
);

if (treatmentViewport) {
  treatmentViewport.addEventListener(
    'pointerdown',
    event => {
      treatmentPointerStartX =
        event.clientX;

      treatmentPointerActive = true;
      treatmentWasDragged = false;

      try {
        treatmentViewport.setPointerCapture(
          event.pointerId
        );
      } catch (error) {
        // Pointer capture tidak didukung.
      }
    }
  );

  treatmentViewport.addEventListener(
    'pointermove',
    event => {
      if (!treatmentPointerActive) {
        return;
      }

      const distance =
        event.clientX -
        treatmentPointerStartX;

      if (Math.abs(distance) > 10) {
        treatmentWasDragged = true;
      }
    }
  );

  treatmentViewport.addEventListener(
    'pointerup',
    event => {
      if (!treatmentPointerActive) {
        return;
      }

      const distance =
        event.clientX -
        treatmentPointerStartX;

      treatmentPointerActive = false;

      if (Math.abs(distance) >= 45) {
        treatmentWasDragged = true;

        if (distance < 0) {
          showNextTreatmentSlide();
        } else {
          showPreviousTreatmentSlide();
        }
      }

      window.setTimeout(
        () => {
          treatmentWasDragged = false;
        },
        80
      );
    }
  );

  treatmentViewport.addEventListener(
    'pointercancel',
    () => {
      treatmentPointerActive = false;

      window.setTimeout(
        () => {
          treatmentWasDragged = false;
        },
        80
      );
    }
  );

  treatmentViewport.addEventListener(
    'keydown',
    event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();

        showPreviousTreatmentSlide();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();

        showNextTreatmentSlide();
      }
    }
  );
}

treatmentFilterButtons.forEach(
  button => {
    button.addEventListener(
      'click',
      () => {
        treatmentFilterButtons.forEach(
          filterButton => {
            filterButton.classList.remove(
              'active-filter'
            );
          }
        );

        button.classList.add(
          'active-filter'
        );

        renderTreatmentSlider(
          button.dataset.filter
        );

        button.scrollIntoView({
          behavior: reducedMotionQuery.matches
            ? 'auto'
            : 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    );
  }
);

renderTreatmentSlider('face');

/* ---------------- PRODUCT GRID ---------------- */

const productGrid = document.getElementById(
  'productGrid'
);

const productSectionTitle =
  document.getElementById(
    'product-section-title'
  );

const productSectionDesc =
  document.getElementById(
    'product-section-desc'
  );

function getProductCard(product, index) {
  const priceMarkup = product.price
    ? `
      <p
        class="text-xs font-bold text-[var(--rose)] mb-3"
      >
        ${product.price}
      </p>
    `
    : `
      <p
        class="text-xs font-bold text-[var(--rose)] mb-3"
      >
        Hubungi Kami
      </p>
    `;

  return `
    <div
      class="product-card group glass rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-4"
      style="
        animation:fadeInUp .4s ease forwards;
        animation-delay:${(index % 8) * 40}ms;
      "
    >
      <button
        type="button"
        class="product-image-button aspect-square rounded-xl overflow-hidden bg-white/10 mb-4 p-2 flex items-center justify-center relative cursor-pointer w-full"
        data-product-id="${product.id}"
        aria-label="Lihat detail ${product.name}"
      >
        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
          decoding="async"
          class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        >

        <span
          class="tile-expand glass !bg-black/30 !border-white/30"
        >
          <i
            class="fas fa-expand text-white text-xs"
          ></i>
        </span>
      </button>

      <div
        class="text-left flex-grow flex flex-col justify-between min-w-0"
      >
        <div>
          <h3
            class="text-xs sm:text-sm font-bold text-[var(--ink)] line-clamp-2 mb-1.5 leading-tight"
            title="${product.name}"
          >
            ${product.name}
          </h3>

          ${priceMarkup}
        </div>

        <button
          type="button"
          data-product-id="${product.id}"
          class="product-detail-button chip !text-[9px] sm:!text-[10px] !py-1.5 !px-2.5 sm:!px-3 hover:!bg-[var(--rose-soft)] transition-colors w-max max-w-full mt-auto"
        >
          Lihat Detail

          <i
            class="fas fa-arrow-right text-[8px] ml-1"
          ></i>
        </button>
      </div>
    </div>
  `;
}

function bindProductButtons() {
  if (!productGrid) {
    return;
  }

  productGrid
    .querySelectorAll(
      '[data-product-id]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          const productId =
            Number.parseInt(
              button.dataset.productId,
              10
            );

          openProduct(productId);
        }
      );
    });
}

function renderProductGrid(type = 'paket') {
  if (!productGrid) {
    return;
  }

  const filteredProducts =
    products.filter(
      product =>
        product.type === type
    );

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div
        class="col-span-full text-center py-12 text-[var(--ink-soft)] text-sm"
      >
        Tidak ada produk dalam kategori ini.
      </div>
    `;

    return;
  }

  productGrid.innerHTML =
    filteredProducts
      .map(getProductCard)
      .join('');

  bindProductButtons();
}

function renderAllProductsGrid() {
  if (!productGrid) {
    return;
  }

  productGrid.innerHTML =
    products
      .map(getProductCard)
      .join('');

  bindProductButtons();
}

const productFilterButtons =
  document.querySelectorAll(
    '.product-filter-btn'
  );

productFilterButtons.forEach(
  button => {
    button.addEventListener(
      'click',
      () => {
        productFilterButtons.forEach(
          filterButton => {
            filterButton.classList.remove(
              'active-product-filter'
            );

            filterButton.classList.add(
              'text-[var(--ink-soft)]'
            );
          }
        );

        button.classList.add(
          'active-product-filter'
        );

        button.classList.remove(
          'text-[var(--ink-soft)]'
        );

        const filterType =
          button.dataset.filter;

        if (filterType === 'paket') {
          if (productSectionTitle) {
            productSectionTitle.textContent =
              'Paket Perawatan Premium';
          }

          if (productSectionDesc) {
            productSectionDesc.textContent =
              'Perawatan lengkap dengan hasil maksimal untuk kulit sehat bercahaya.';
          }
        } else {
          if (productSectionTitle) {
            productSectionTitle.textContent =
              'Produk Satuan Premium';
          }

          if (productSectionDesc) {
            productSectionDesc.textContent =
              'Pilihan produk eceran satuan untuk melengkapi kebutuhan harian kulit Anda.';
          }
        }

        renderProductGrid(
          filterType
        );
      }
    );
  }
);

const viewAllProductsBtn =
  document.getElementById(
    'viewAllProductsBtn'
  );

viewAllProductsBtn?.addEventListener(
  'click',
  () => {
    productFilterButtons.forEach(
      button => {
        button.classList.remove(
          'active-product-filter'
        );

        button.classList.add(
          'text-[var(--ink-soft)]'
        );
      }
    );

    if (productSectionTitle) {
      productSectionTitle.textContent =
        'Semua Produk Dian Glow Skincare';
    }

    if (productSectionDesc) {
      productSectionDesc.textContent =
        'Menampilkan koleksi lengkap produk skincare eksklusif untuk kecantikan maksimal Anda.';
    }

    renderAllProductsGrid();
  }
);

renderProductGrid('paket');

/* ---------------- TESTIMONI GRID ---------------- */

const photoTestimoniGrid =
  document.getElementById(
    'photoTestimoniGrid'
  );

if (photoTestimoniGrid) {
  photoTestimoniGrid.innerHTML =
    testimonisData
      .map(
        (testimoni, index) => `
          <button
            type="button"
            class="tile glass aspect-square group w-full"
            data-testimoni-index="${index}"
            aria-label="Perbesar ${testimoni.alt}"
          >
            <img
              src="${testimoni.img}"
              alt="${testimoni.alt}"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >

            <span
              class="tile-expand glass !bg-black/40 !border-white/30"
            >
              <i
                class="fas fa-magnifying-glass-plus text-white text-xs"
              ></i>
            </span>
          </button>
        `
      )
      .join('');

  photoTestimoniGrid
    .querySelectorAll(
      '[data-testimoni-index]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          openLightbox(
            TESTIMONI_IMGS_LIGHTBOX,
            Number.parseInt(
              button.dataset.testimoniIndex,
              10
            )
          );
        }
      );
    });
}

/* ---------------- JOB GRID ---------------- */

const jobGrid = document.getElementById(
  'jobGrid'
);

if (jobGrid) {
  jobGrid.innerHTML =
    jobs
      .map(
        (job, index) => `
          <button
            type="button"
            class="tile glass w-full"
            data-aos="fade-up"
            data-aos-delay="${index * 100}"
            data-job-index="${index}"
            aria-label="Perbesar ${job.alt}"
          >
            <img
              src="${job.img}"
              alt="${job.alt}"
              loading="lazy"
              decoding="async"
              class="w-full h-auto object-cover"
            >

            <span
              class="tile-expand glass !bg-black/30 !border-white/30"
            >
              <i
                class="fas fa-expand text-white text-sm"
              ></i>
            </span>
          </button>
        `
      )
      .join('');

  jobGrid
    .querySelectorAll(
      '[data-job-index]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          openLightbox(
            JOB_IMGS,
            Number.parseInt(
              button.dataset.jobIndex,
              10
            )
          );
        }
      );
    });
}

/* ---------------- CONTACT SECTION ---------------- */

const contactBranchButtons =
  document.querySelectorAll(
    '.contact-branch-btn'
  );

const contactBranchName =
  document.getElementById(
    'contact-branch-name'
  );

const numKonsultasi =
  document.getElementById(
    'num-konsultasi'
  );

const numCs = document.getElementById(
  'num-cs'
);

const numReservasi =
  document.getElementById(
    'num-reservasi'
  );

const linkKonsultasi =
  document.getElementById(
    'link-konsultasi'
  );

const linkCs = document.getElementById(
  'link-cs'
);

const linkReservasi =
  document.getElementById(
    'link-reservasi'
  );

function updateContactSection(index) {
  const data =
    contactBranchesDatabase[index];

  if (!data) {
    return;
  }

  if (contactBranchName) {
    contactBranchName.textContent =
      data.name;
  }

  if (numKonsultasi) {
    numKonsultasi.textContent =
      data.konsultasi;
  }

  if (numCs) {
    numCs.textContent =
      data.cs;
  }

  if (numReservasi) {
    numReservasi.textContent =
      data.reservasi;
  }

  if (linkKonsultasi) {
    linkKonsultasi.href =
      getCleanWaUrl(
        data.konsultasi,
        `Halo Dian Glow Clinic ${data.name}, saya ingin melakukan konsultasi mengenai perawatan kulit.`
      );
  }

  if (linkCs) {
    linkCs.href =
      getCleanWaUrl(
        data.cs,
        `Halo Dian Glow Clinic ${data.name}, saya ingin bertanya seputar informasi produk dan layanan Dian Glow.`
      );
  }

  if (linkReservasi) {
    linkReservasi.href =
      getCleanWaUrl(
        data.reservasi,
        `Halo Dian Glow Clinic ${data.name}, saya ingin memesan jadwal reservasi treatment.`
      );
  }
}

contactBranchButtons.forEach(
  button => {
    button.addEventListener(
      'click',
      () => {
        contactBranchButtons.forEach(
          branchButton => {
            branchButton.classList.remove(
              'active-contact-branch'
            );

            branchButton.classList.add(
              'text-[var(--ink-soft)]'
            );
          }
        );

        button.classList.add(
          'active-contact-branch'
        );

        button.classList.remove(
          'text-[var(--ink-soft)]'
        );

        const index =
          Number.parseInt(
            button.dataset.branchIdx,
            10
          );

        updateContactSection(
          index
        );

        button.scrollIntoView({
          behavior: reducedMotionQuery.matches
            ? 'auto'
            : 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    );
  }
);

updateContactSection(0);

/* ---------------- LIGHTBOX ---------------- */

let lbGallery = [];
let lbIndex = 0;

let lightboxPointerStartX = 0;
let lightboxPointerActive = false;

const lightbox = document.getElementById(
  'lightbox'
);

const lightboxContent =
  document.getElementById(
    'lightboxContent'
  );

const lbImg = document.getElementById(
  'lbImg'
);

const lbCounter = document.getElementById(
  'lbCounter'
);

const lbClose = document.getElementById(
  'lbClose'
);

const lbPrev = document.getElementById(
  'lbPrev'
);

const lbNext = document.getElementById(
  'lbNext'
);

function updateLightbox() {
  if (
    !lbImg ||
    lbGallery.length === 0
  ) {
    return;
  }

  const item = lbGallery[lbIndex];

  lbImg.src = item.src;
  lbImg.alt = item.alt ?? '';

  if (lbCounter) {
    lbCounter.textContent =
      lbGallery.length > 1
        ? `${lbIndex + 1} / ${lbGallery.length}`
        : '';
  }

  const hasMultipleImages =
    lbGallery.length > 1;

  if (lbPrev) {
    lbPrev.style.display =
      hasMultipleImages
        ? 'inline-flex'
        : 'none';
  }

  if (lbNext) {
    lbNext.style.display =
      hasMultipleImages
        ? 'inline-flex'
        : 'none';
  }
}

function openLightbox(gallery, index = 0) {
  if (
    !Array.isArray(gallery) ||
    gallery.length === 0 ||
    !lightbox
  ) {
    return;
  }

  lbGallery = gallery;

  lbIndex = Math.min(
    Math.max(index, 0),
    gallery.length - 1
  );

  updateLightbox();

  lightbox.classList.add('open');

  lightbox.setAttribute(
    'aria-hidden',
    'false'
  );

  lockPage('lightbox');

  window.setTimeout(
    () => {
      lbClose?.focus();
    },
    50
  );
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove('open');

  lightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  unlockPage('lightbox');
}

function showPreviousLightboxImage() {
  if (lbGallery.length <= 1) {
    return;
  }

  lbIndex =
    (
      lbIndex -
      1 +
      lbGallery.length
    ) %
    lbGallery.length;

  updateLightbox();
}

function showNextLightboxImage() {
  if (lbGallery.length <= 1) {
    return;
  }

  lbIndex =
    (
      lbIndex +
      1
    ) %
    lbGallery.length;

  updateLightbox();
}

lbClose?.addEventListener(
  'click',
  closeLightbox
);

lbPrev?.addEventListener(
  'click',
  showPreviousLightboxImage
);

lbNext?.addEventListener(
  'click',
  showNextLightboxImage
);

lightbox?.addEventListener(
  'click',
  event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  }
);

if (lightboxContent) {
  lightboxContent.addEventListener(
    'pointerdown',
    event => {
      lightboxPointerStartX =
        event.clientX;

      lightboxPointerActive = true;

      try {
        lightboxContent.setPointerCapture(
          event.pointerId
        );
      } catch (error) {
        // Pointer capture tidak didukung.
      }
    }
  );

  lightboxContent.addEventListener(
    'pointerup',
    event => {
      if (!lightboxPointerActive) {
        return;
      }

      lightboxPointerActive = false;

      const distance =
        event.clientX -
        lightboxPointerStartX;

      if (Math.abs(distance) < 50) {
        return;
      }

      if (distance < 0) {
        showNextLightboxImage();
      } else {
        showPreviousLightboxImage();
      }
    }
  );

  lightboxContent.addEventListener(
    'pointercancel',
    () => {
      lightboxPointerActive = false;
    }
  );
}

/* ---------------- PRODUCT MODAL ---------------- */

const productModal =
  document.getElementById(
    'productModal'
  );

const pmClose = document.getElementById(
  'pmClose'
);

const pmImg = document.getElementById(
  'pmImg'
);

const pmName = document.getElementById(
  'pmName'
);

const pmWa = document.getElementById(
  'pmWa'
);

const pmImgWrap =
  document.getElementById(
    'pmImgWrap'
  );

function openProduct(productId) {
  const product = products.find(
    item => item.id === productId
  );

  if (
    !product ||
    !productModal
  ) {
    return;
  }

  if (pmImg) {
    pmImg.src = product.img;
    pmImg.alt = product.name;
  }

  if (pmName) {
    pmName.textContent =
      product.name;
  }

  if (pmWa) {
    pmWa.href =
      `https://wa.me/6281350740338?text=${encodeURIComponent(
        `Halo Dian Glow, saya ingin tanya tentang produk "${product.name}"`
      )}`;
  }

  if (pmImgWrap) {
    pmImgWrap.onclick = () => {
      openLightbox(
        [
          {
            src: product.img,
            alt: product.name
          }
        ],
        0
      );
    };
  }

  productModal.classList.add(
    'open'
  );

  productModal.setAttribute(
    'aria-hidden',
    'false'
  );

  lockPage('product-modal');

  window.setTimeout(
    () => {
      pmClose?.focus();
    },
    50
  );
}

function closeProduct() {
  if (!productModal) {
    return;
  }

  productModal.classList.remove(
    'open'
  );

  productModal.setAttribute(
    'aria-hidden',
    'true'
  );

  unlockPage('product-modal');
}

pmClose?.addEventListener(
  'click',
  closeProduct
);

productModal?.addEventListener(
  'click',
  event => {
    if (event.target === productModal) {
      closeProduct();
    }
  }
);

/* ---------------- MAP BRANCHES ---------------- */

const branchItems =
  document.querySelectorAll(
    '.branch-item'
  );

const branchMap =
  document.getElementById(
    'branch-map'
  );

const activeBranchText =
  document.getElementById(
    'active-branch-text'
  );

const branchMapsBtn =
  document.getElementById(
    'branch-maps-btn'
  );

const branchWaBtn =
  document.getElementById(
    'branch-wa-btn'
  );

function activateMapBranch(index) {
  const branchData =
    mapBranchesData[index];

  if (
    !branchData ||
    !branchMap
  ) {
    return;
  }

  branchItems.forEach(
    item => {
      item.classList.remove(
        'active-branch'
      );

      item.classList.add(
        'opacity-70'
      );

      item.setAttribute(
        'aria-pressed',
        'false'
      );
    }
  );

  const activeItem =
    branchItems[index];

  if (activeItem) {
    activeItem.classList.add(
      'active-branch'
    );

    activeItem.classList.remove(
      'opacity-70'
    );

    activeItem.setAttribute(
      'aria-pressed',
      'true'
    );
  }

  branchMap.style.opacity = '.2';

  window.setTimeout(
    () => {
      branchMap.src =
        branchData.embedUrl;

      branchMap.title =
        `Peta lokasi ${branchData.name}`;

      if (activeBranchText) {
        activeBranchText.textContent =
          branchData.name;
      }

      if (branchMapsBtn) {
        branchMapsBtn.href =
          branchData.directUrl;
      }

      if (branchWaBtn) {
        branchWaBtn.href =
          branchData.waUrl;
      }

      branchMap.style.opacity = '1';
    },
    220
  );
}

branchItems.forEach(
  (item, index) => {
    item.setAttribute(
      'aria-pressed',
      index === 0
        ? 'true'
        : 'false'
    );

    item.addEventListener(
      'click',
      () => {
        activateMapBranch(index);
      }
    );

    item.addEventListener(
      'keydown',
      event => {
        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault();

          activateMapBranch(index);
        }
      }
    );
  }
);

/* ---------------- GLOBAL KEYBOARD ---------------- */

document.addEventListener(
  'keydown',
  event => {
    if (event.key !== 'Escape') {
      if (
        lightbox?.classList.contains(
          'open'
        )
      ) {
        if (event.key === 'ArrowLeft') {
          showPreviousLightboxImage();
        }

        if (event.key === 'ArrowRight') {
          showNextLightboxImage();
        }
      }

      return;
    }

    if (
      lightbox?.classList.contains(
        'open'
      )
    ) {
      closeLightbox();

      return;
    }

    if (
      productModal?.classList.contains(
        'open'
      )
    ) {
      closeProduct();

      return;
    }

    if (
      mobileMenu?.classList.contains(
        'open'
      )
    ) {
      closeMobileMenu();
    }
  }
);

/* ---------------- IMAGE AND AOS REFRESH ---------------- */

window.addEventListener(
  'load',
  () => {
    if (
      typeof AOS !== 'undefined' &&
      !reducedMotionQuery.matches
    ) {
      AOS.refreshHard();
    }
  }
);

document
  .querySelectorAll('img[loading="lazy"]')
  .forEach(image => {
    image.addEventListener(
      'load',
      () => {
        if (
          typeof AOS !== 'undefined' &&
          !reducedMotionQuery.matches
        ) {
          AOS.refresh();
        }
      },
      {
        once: true
      }
    );
  });