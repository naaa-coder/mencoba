/* ============================================
   Friendship Showcase - Main JavaScript
   ============================================ */

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
});

// ============================================
// Particle System
// ============================================

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        // Set canvas size
        this.resizeCanvas();
        
        // Initialize particles
        this.initParticles();
        
        // Start animation
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Mouse interaction
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                radius: Math.random() * 2 + 1,
                color: this.getRandomColor(),
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            'rgba(236, 72, 153, ',   // Pink
            'rgba(168, 85, 247, ',   // Purple
            'rgba(6, 182, 212, ',    // Cyan
            'rgba(244, 114, 182, ',  // Light Pink
            'rgba(192, 132, 250, '   // Light Purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    onMouseMove(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Attract particles to mouse
        for (let particle of this.particles) {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                const force = (200 - distance) / 200;
                particle.vx += (dx / distance) * force * 0.1;
                particle.vy += (dy / distance) * force * 0.1;
            }
        }
    }
    
    animate() {
        // Clear canvas
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        for (let particle of this.particles) {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Add friction
            particle.vx *= 0.98;
            particle.vy *= 0.98;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.fillStyle = particle.color + particle.opacity + ')';
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Draw connections between nearby particles
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
window.addEventListener('load', () => {
    new ParticleSystem('particleCanvas');
});

// ============================================
// Quote Generator
// ============================================

const quotes = [
    {
        text: "Teman sejati tidak datang dari keberuntungan, tetapi dari pilihan hati yang konsisten.",
        author: "Penulis Bijak"
    },
    {
        text: "Pertemanan adalah ibadah tanpa agama, cinta tanpa syarat, dan kebahagiaan tanpa alasan.",
        author: "Kahlil Gibran"
    },
    {
        text: "Orang bisa bertahan 3 minggu tanpa makanan, 3 hari tanpa air, 3 menit tanpa udara, tetapi tidak bisa bertahan sedetik pun tanpa teman.",
        author: "Filosofi Hidup"
    },
    {
        text: "Teman adalah orang yang mengenal seluruh cerita hidupmu dan tetap suka padamu.",
        author: "Elbert Hubbard"
    },
    {
        text: "Kualitas pertemanan diukur bukan dari waktu bersama, tetapi dari kedalaman koneksi hati.",
        author: "Bijak Pertemanan"
    },
    {
        text: "Teman terbaik adalah mereka yang bisa membuat dirimu tertawa lebih keras, senyum lebih lebar, dan hidup lebih bermakna.",
        author: "Kebenaran Sejati"
    },
    {
        text: "Pertemanan yang indah adalah ketika kamu bisa diam bersama dan tetap merasa nyaman.",
        author: "George Eliot"
    },
    {
        text: "Seorang teman adalah seseorang yang tahu lagu hatimu dan bisa menyanyikannya kembali ketika kamu lupa liriknya.",
        author: "Donna Roberts"
    },
    {
        text: "Dalam hidup ini, teman seperti bintang. Bahkan ketika mereka hilang dari pandangan, cahayanya tetap bersinar dalam hati.",
        author: "Hiram Johnson"
    },
    {
        text: "Pertemanan dimulai dengan senyuman, bertumbuh dengan kejujuran, dan berlanjut dengan kepercayaan.",
        author: "Roy Croft"
    },
    {
        text: "Teman terbaik adalah cermin yang jujur—menunjukkan siapa kamu sebenarnya dan siapa yang bisa kamu jadi.",
        author: "Filosofi Pertemanan"
    },
    {
        text: "Bersahabat adalah keputusan seumur hidup untuk saling merawat, saling mendukung, dan saling mencintai.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Pertemanan sejati tidak pernah berkurang seiring waktu, malah semakin menguat di setiap tantangan.",
        author: "Bijak Waktu"
    },
    {
        text: "Teman adalah orang yang membuat dunia terasa lebih ringan dan hidup terasa lebih berwarna.",
        author: "Kebenaran Hidup"
    },
    {
        text: "Dalam kesunyian, dengan teman sejati, kita menemukan kedamaian. Dalam kegembiraan, bersama mereka, kita menemukan kebahagiaan berlipat ganda.",
        author: "Penulis Hati"
    }
];

// Quote Generator Initialization
const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const quoteText = document.getElementById('quoteText');
let currentQuoteIndex = -1;

// Fungsi untuk mendapatkan kutipan random yang berbeda
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    return quotes[newIndex];
}

// Fungsi untuk menampilkan kutipan dengan animasi
function displayQuote() {
    const quote = getRandomQuote();
    
    // Add fade out effect
    quoteText.classList.add('fade-out');
    
    setTimeout(() => {
        quoteText.innerHTML = `
            <div class="mb-4">"${quote.text}"</div>
            <div class="text-lg text-cyan-400">— ${quote.author}</div>
        `;
        quoteText.classList.remove('fade-out');
        quoteText.classList.add('fade-in');
        
        // Remove fade-in class after animation
        setTimeout(() => {
            quoteText.classList.remove('fade-in');
        }, 600);
    }, 300);
}

// Event listener untuk button
generateQuoteBtn.addEventListener('click', displayQuote);

// Tampilkan kutipan pertama saat page load
window.addEventListener('load', () => {
    displayQuote();
});

// Auto-generate quote setiap 10 detik (opsional)
// setInterval(displayQuote, 10000);

// ============================================
// Smooth Scroll Enhancement
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Interactive Card Effects
// ============================================

class InteractiveCard {
    constructor() {
        this.cards = document.querySelectorAll('.sticky-note > div, .quote-card > div');
        this.setupCardListeners();
    }
    
    setupCardListeners() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.addGlowEffect(e.target);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.removeGlowEffect(e.target);
            });
        });
    }
    
    addGlowEffect(element) {
        element.style.filter = 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))';
    }
    
    removeGlowEffect(element) {
        element.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))';
    }
}

window.addEventListener('load', () => {
    new InteractiveCard();
});

// ============================================
// Scroll Progress Indicator
// ============================================

function createScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.id = 'scrollIndicator';
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4);
        width: 0;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercentage + '%';
    });
}

window.addEventListener('load', createScrollIndicator);

// ============================================
// Accessibility Enhancements
// ============================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === generateQuoteBtn) {
        displayQuote();
    }
});

// ============================================
// Performance Optimization
// ============================================

// Lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// Dark Mode Support (Optional)
// ============================================

function initDarkModeToggle() {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.documentElement.classList.add('dark');
    }
}

window.addEventListener('load', initDarkModeToggle);

// ============================================
// Mobile Menu Optimization
// ============================================

// Close nav on mobile when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Anda bisa menambahkan logic untuk menutup mobile menu di sini
    });
});

// ============================================
// Utility Functions
// ============================================

// Debounce function untuk optimize event listeners
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Console Greeting
// ============================================

console.log('%c✨ Welcome to Friendship Showcase! ✨', 'color: #ec4899; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(236, 72, 153, 0.5);');
console.log('%cCelebrate the bonds of friendship with us!', 'color: #a855f7; font-size: 14px; font-style: italic;');
console.log('%cMade with ❤️ using HTML5, Tailwind CSS & Vanilla JavaScript', 'color: #06b6d4; font-size: 12px;');

console.log('\n🎨 Design & Development by: Friendship Showcase Team\n');

console.log('%cHappy to see you here! 💫', 'color: #f472b6; font-size: 16px; font-weight: bold;');
