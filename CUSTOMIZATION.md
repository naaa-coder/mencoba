# 🎨 Customization Guide

Panduan lengkap untuk mengustomisasi Friendship Showcase sesuai dengan kebutuhan dan preferensi Anda.

---

## 📝 Table of Contents

1. [Text & Content](#text--content)
2. [Colors & Themes](#colors--themes)
3. [Animations & Effects](#animations--effects)
4. [Quotes & Messages](#quotes--messages)
5. [Typography](#typography)
6. [Advanced Customization](#advanced-customization)

---

## 📝 Text & Content

### Hero Section Title & Subtitle

Edit di `index.html` - cari Hero Section:

```html
<!-- BEFORE -->
<h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
    <span class="block mb-4">Pertemanan adalah</span>
    <span class="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Cahaya Hati</span>
</h1>

<p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
    Setiap teman membawa warna baru dalam kehidupan. Mari rayakan ikatan indah yang telah kita jalin bersama.
</p>

<!-- AFTER - Customize sesuai keinginan -->
<h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
    <span class="block mb-4">Teman adalah</span>
    <span class="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Anugerah Terbaik</span>
</h1>

<p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
    Persahabatan adalah cerita indah yang terukir di hati kita selamanya.
</p>
```

### Navigation Brand Name

Cari di Navigation section:

```html
<!-- BEFORE -->
<h1 class="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Friendship</h1>

<!-- AFTER -->
<h1 class="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">My Friends</h1>
```

### Section Titles

```html
<!-- BEFORE -->
<h2 class="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center gap-3" data-aos="fade-down">
    <span>💬 Kutipan Pertemanan</span>
</h2>

<!-- AFTER -->
<h2 class="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center gap-3" data-aos="fade-down">
    <span>💬 Kata Bijak untuk Sahabat</span>
</h2>
```

---

## 🎨 Colors & Themes

### Change Primary Colors

Edit CSS variables di `styles.css`:

```css
/* BEFORE */
:root {
    --primary-pink: #ec4899;
    --primary-purple: #a855f7;
    --primary-cyan: #06b6d4;
    --accent-glow: 0 0 60px rgba(236, 72, 153, 0.4);
}

/* AFTER - Contoh: Theme Sunset */
:root {
    --primary-pink: #ff6b6b;      /* Merah cerah */
    --primary-purple: #ffa94d;    /* Orange */
    --primary-cyan: #ffd43b;      /* Kuning */
    --accent-glow: 0 0 60px rgba(255, 107, 107, 0.4);
}
```

### Color Schemes Reference

**Cool Blue Theme:**
```css
--primary-pink: #2563eb;     /* Blue */
--primary-purple: #0ea5e9;   /* Sky Blue */
--primary-cyan: #06b6d4;     /* Cyan */
```

**Warm Sunset Theme:**
```css
--primary-pink: #ff6b35;     /* Orange */
--primary-purple: #f7931e;   /* Golden */
--primary-cyan: #fdb833;     /* Yellow */
```

**Neon Theme:**
```css
--primary-pink: #ff006e;     /* Hot Pink */
--primary-purple: #b537f2;   /* Neon Purple */
--primary-cyan: #00f5ff;     /* Cyan */
```

**Pastel Theme:**
```css
--primary-pink: #f8a5d9;     /* Soft Pink */
--primary-purple: #d5b4f8;   /* Soft Purple */
--primary-cyan: #b4e8f8;     /* Soft Cyan */
```

### Change Background Color

Edit di `index.html` - di `<body>` tag:

```html
<!-- BEFORE -->
<body class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">

<!-- AFTER - Dark Blue -->
<body class="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white overflow-x-hidden">

<!-- AFTER - Dark Green -->
<body class="bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 text-white overflow-x-hidden">

<!-- AFTER - Dark Gray (Minimal) -->
<body class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
```

### Message Card Colors

Edit sticky note colors di `index.html`:

```html
<!-- BEFORE - Yellow -->
<div class="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-2xl p-6 shadow-xl">

<!-- AFTER - Light Red -->
<div class="bg-gradient-to-br from-red-200 to-red-100 rounded-2xl p-6 shadow-xl">

<!-- AFTER - Light Teal -->
<div class="bg-gradient-to-br from-teal-200 to-teal-100 rounded-2xl p-6 shadow-xl">
```

### Button Colors

```html
<!-- BEFORE -->
<button class="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold">

<!-- AFTER - Blue-Cyan -->
<button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold">

<!-- AFTER - Green-Emerald -->
<button class="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold">
```

---

## ✨ Animations & Effects

### Adjust Animation Duration

Di `script.js` - ParticleSystem:

```javascript
// BEFORE
AOS.init({
    duration: 800,  // milliseconds
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
});

// AFTER - Lebih cepat
AOS.init({
    duration: 400,  // Faster animations
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
});

// AFTER - Lebih lambat
AOS.init({
    duration: 1200,  // Slower, more dramatic
    easing: 'ease-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
});
```

### Adjust Particle Count

Di `script.js` - ParticleSystem constructor:

```javascript
// BEFORE - Normal
this.particleCount = 50;

// AFTER - Lebih banyak (performance intensive)
this.particleCount = 100;

// AFTER - Lebih sedikit (untuk low-end devices)
this.particleCount = 25;
```

### Disable Blob Animation

Di `styles.css`:

```css
/* BEFORE */
.animate-blob {
    animation: blob 7s infinite;
}

/* AFTER - Disable */
.animate-blob {
    animation: none;  /* Disabled */
    /* or slower: animation: blob 15s infinite; */
}
```

### Reduce Motion Support

Di `styles.css` - sudah ada, tapi bisa customize:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;  /* atau 0s untuk disable total */
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Floating Animation Speed

Di `styles.css`:

```css
/* BEFORE */
.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* AFTER - Lebih cepat */
.animate-float {
    animation: float 2s ease-in-out infinite;
}

/* AFTER - Lebih lambat */
.animate-float {
    animation: float 5s ease-in-out infinite;
}
```

---

## 💬 Quotes & Messages

### Add More Quotes

Di `script.js` - cari array `quotes`:

```javascript
const quotes = [
    {
        text: "Teman sejati tidak datang dari keberuntungan...",
        author: "Penulis Bijak"
    },
    {
        text: "Pertemanan adalah ibadah tanpa agama...",
        author: "Kahlil Gibran"
    },
    // ADD HERE - Contoh:
    {
        text: "Persahabatan adalah harta yang paling berharga.",
        author: "Nama Penulis"
    },
    {
        text: "Bersama teman, dunia terasa lebih indah.",
        author: "Nama Penulis Lain"
    }
];
```

### Modify Message Cards

Edit di `index.html` - Message Wall section:

```html
<!-- BEFORE -->
<div class="sticky-note" data-aos="fade-up" data-aos-delay="0">
    <div class="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-2xl p-6 shadow-xl">
        <h3 class="font-bold text-gray-800 mb-2 text-lg">Kesetiaan</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
            Teman sejati adalah mereka yang tetap berada...
        </p>
        <div class="text-3xl group-hover:animate-bounce">💛</div>
    </div>
</div>

<!-- AFTER - Customize -->
<div class="sticky-note" data-aos="fade-up" data-aos-delay="0">
    <div class="bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl p-6 shadow-xl">
        <h3 class="font-bold text-gray-800 mb-2 text-lg">Kebersamaan</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
            Momen paling berharga adalah saat bersama teman tercinta.
        </p>
        <div class="text-3xl group-hover:animate-bounce">🌻</div>
    </div>
</div>
```

### Add/Remove Message Cards

Tambah card baru dengan copy-paste structure:

```html
<!-- Copy salah satu dari 6 cards yang ada, kemudian paste dan edit -->
<div class="sticky-note" data-aos="fade-up" data-aos-delay="600">
    <div class="bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-2xl p-6 shadow-xl">
        <h3 class="font-bold text-gray-800 mb-2 text-lg">Inspirasi</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
            Teman membawa inspirasi di setiap langkah hidup kita.
        </p>
        <div class="text-3xl group-hover:animate-bounce">✨</div>
    </div>
</div>
```

---

## 🔤 Typography

### Change Font Size

Edit di `styles.css`:

```css
/* BEFORE */
h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2rem;
}

/* AFTER - Lebih besar */
h1 {
    font-size: 4rem;
}

h2 {
    font-size: 2.5rem;
}

/* Atau gunakan Tailwind classes di HTML */
<!-- BEFORE -->
<h1 class="text-5xl md:text-7xl">

<!-- AFTER - Lebih besar -->
<h1 class="text-6xl md:text-8xl">

<!-- AFTER - Lebih kecil -->
<h1 class="text-4xl md:text-6xl">
```

### Change Font Weight

```html
<!-- BEFORE -->
<h1 class="text-5xl md:text-7xl font-bold">

<!-- AFTER - Lebih ringan -->
<h1 class="text-5xl md:text-7xl font-semibold">

<!-- AFTER - Lebih tebal -->
<h1 class="text-5xl md:text-7xl font-black">
```

### Change Letter Spacing

```css
/* Di styles.css */
h1 {
    letter-spacing: 0.05em;  /* Lebih lebar */
}

p {
    letter-spacing: -0.02em;  /* Lebih rapat */
}
```

### Change Line Height

```css
p {
    line-height: 1.6;  /* Normal */
    /* atau 1.8 untuk lebih lebar, 1.5 untuk lebih rapat */
}
```

---

## 🚀 Advanced Customization

### Add Google Fonts

```html
<!-- Di head section index.html, sebelum </head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

```css
/* Di styles.css */
h1, h2 {
    font-family: 'Playfair Display', serif;
}

body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Custom Background Image

```css
/* Di styles.css */
body {
    background-image: url('data:image/svg+xml,...'); /* SVG pattern */
    background-size: 100px 100px;
    background-attachment: fixed;
}
```

Atau di HTML:

```html
<!-- Sebelum section hero -->
<div style="position: fixed; inset: 0; z-0; background-image: url('your-image.jpg'); background-size: cover; background-position: center; opacity: 0.1;"></div>
```

### Change Gradient Directions

```html
<!-- BEFORE - Bottom-Right -->
<body class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

<!-- AFTER - Top-Right -->
<body class="bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900">

<!-- AFTER - Left to Right -->
<body class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">

<!-- AFTER - Bottom to Top -->
<body class="bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900">
```

### Add New Sections

```html
<!-- Contoh: Add Testimonial Section -->
<section id="testimonials" class="relative min-h-screen flex items-center justify-center z-10 py-20 px-4">
    <div class="max-w-4xl mx-auto w-full">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-down">
            💭 Apa Kata Mereka
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-purple-900/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20" data-aos="fade-up">
                <p class="text-lg mb-4">Quotes dari teman atau keluarga...</p>
                <p class="text-purple-400 font-semibold">— Nama Teman</p>
            </div>
            
            <div class="bg-purple-900/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20" data-aos="fade-up" data-aos-delay="100">
                <p class="text-lg mb-4">Quotes dari teman atau keluarga lain...</p>
                <p class="text-purple-400 font-semibold">— Nama Teman Lain</p>
            </div>
        </div>
    </div>
</section>
```

### Custom Tailwind Configuration

Jika ingin lebih kontrol, download Tailwind:

```bash
npm install -D tailwindcss

# Generate tailwind.config.js
npx tailwindcss init
```

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ec4899',
        secondary: '#a855f7',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
}
```

---

## 🎯 Theme Presets

### Dark & Minimal Theme

```css
/* Di styles.css */
:root {
    --primary-pink: #e5e5e5;      /* Light Gray */
    --primary-purple: #909090;    /* Dark Gray */
    --primary-cyan: #a0a0a0;      /* Medium Gray */
}

/* Di index.html <body> */
class="bg-gradient-to-br from-black via-gray-900 to-black"
```

### Vibrant Rainbow Theme

```css
:root {
    --primary-pink: #ff006e;      /* Hot Pink */
    --primary-purple: #8338ec;    /* Purple */
    --primary-cyan: #00f5ff;      /* Cyan */
}
```

### Nature Theme

```css
:root {
    --primary-pink: #2d6a4f;      /* Green */
    --primary-purple: #40916c;    /* Light Green */
    --primary-cyan: #52b788;      /* Mint */
}
```

---

## 📱 Responsive Adjustments

### Change Mobile Breakpoints

Di `styles.css`:

```css
@media (max-width: 480px) {
    /* Extra small devices */
    h1 { font-size: 1.5rem; }
}

@media (max-width: 768px) {
    /* Tablets */
    h1 { font-size: 2rem; }
}

@media (max-width: 1024px) {
    /* Small laptops */
    h1 { font-size: 2.5rem; }
}
```

### Adjust Padding/Margin

```html
<!-- BEFORE -->
<section class="py-20 px-4">

<!-- AFTER - Lebih besar -->
<section class="py-32 px-6">

<!-- AFTER - Lebih kecil -->
<section class="py-12 px-2">
```

---

## ✅ Customization Checklist

- [ ] Change hero title & subtitle
- [ ] Update primary colors
- [ ] Modify or add quotes
- [ ] Edit message cards
- [ ] Adjust animation speeds
- [ ] Change background gradient
- [ ] Update button colors
- [ ] Customize font sizes
- [ ] Adjust spacing & padding
- [ ] Test responsiveness
- [ ] Verify all animations work
- [ ] Check on mobile devices
- [ ] Validate HTML
- [ ] Test browser compatibility

---

## 🆘 Troubleshooting

### Changes tidak nampak

```bash
# 1. Clear browser cache
# Windows/Linux: Ctrl+Shift+Delete
# Mac: Cmd+Shift+Delete

# 2. Hard refresh browser
# Windows: Ctrl+Shift+R
# Mac: Cmd+Shift+R

# 3. Check file path di browser DevTools
# F12 → Elements → Check class names match
```

### Styling broken

```bash
# Check Tailwind CDN link aktif di index.html
# Check class names correct (no typos)
# Verify CSS file paths di index.html
```

### Animations tidak smooth

```javascript
// Cek console for errors: F12 → Console
// Reduce particle count
// Disable some animations di AOS

AOS.init({
    mirror: false,  // Disable mirror animations
});
```

---

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Color Picker Tool](https://htmlcolorcodes.com/)
- [Font Pairing Guide](https://www.fontpair.co/)
- [Animation Inspiration](https://animate.style/)

---

**Happy Customizing! 🎨✨**

*Last Updated: May 2024*
