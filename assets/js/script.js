document.addEventListener("DOMContentLoaded", () => {
    // === Hamburger menu toggle ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // === Custom cursor ===
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    function moveCursor(x, y) {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    }

    document.addEventListener('mousemove', e => moveCursor(e.clientX, e.clientY));
    document.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
    });

    // === Dark mode toggle inside nav-links ===
    if (navLinks) {
        const darkToggle = document.createElement('li');
        darkToggle.innerHTML = '<a href="#" class="dark-mode-toggle">🌙 Dark Mode</a>';
        navLinks.appendChild(darkToggle);

        darkToggle.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
        });
    }

    // === Page transition fade effect ===
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('javascript')) {
                e.preventDefault();
                document.body.style.transition = 'opacity 0.3s';
                document.body.style.opacity = '0';
                setTimeout(() => window.location.href = href, 300);
            }
        });
    });

    // === Cookie consent banner ===
    if (!localStorage.getItem("cookieAccepted")) {
        const banner = document.createElement("div");
        banner.className = "cookie-banner";
        banner.innerHTML = `This website uses cookies to ensure you get the best experience. 
            <button id="acceptCookies">Got it!</button>`;
        document.body.appendChild(banner);

        document.getElementById("acceptCookies").addEventListener("click", () => {
            localStorage.setItem("cookieAccepted", "true");
            banner.remove();
        });
    }

    // === AOS (Animate On Scroll) Init - Bubble floating effect ===
    AOS.init({
        duration: 800,             // durasi animasi (ms)
        offset: 120,               // jarak scroll sebelum animasi jalan
        easing: 'ease-out-cubic',  // efek gelembung smooth
        once: false                 // hanya animasi sekali
    });
});

// === HIDE PRELOADER ===
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
});