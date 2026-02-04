/* ========================================
   LEO PRIVÉ 2.0 - Application Logic
   Perfume Data & Interactive Features
   ======================================== */

// ----------------------------------------
// Perfume Database with Fragrantica Notes
// ----------------------------------------
const perfumes = [
    {
        id: 1,
        name: "Hawas",
        brand: "Rasasi",
        year: 2015,
        gender: "Masculino",
        concentration: "EDP",
        family: "Aromático Acuático",
        description: "Una fragancia fresca y dinámica que combina la frescura de la manzana con toques especiados de anís. Perfecta para el verano y días calurosos.",
        notes: {
            top: ["Manzana", "Limón Italiano", "Bergamota Siciliana", "Anís Estrellado"],
            heart: ["Ciruela", "Flor de Naranjo", "Cardamomo"],
            base: ["Almizcle", "Ámbar", "Madera Flotante", "Musgo"]
        },
        accords: [
            { name: "acuático", value: 85, color: "#22a6b3" },
            { name: "fresco", value: 75, color: "#6ab04c" },
            { name: "amaderado", value: 55, color: "#8b6914" },
            { name: "especiado", value: 40, color: "#eb4d4b" }
        ],
        longevity: "8-10 horas",
        sillage: "Moderado",
        image: "assets/perfumes/hawas.jpg",
        prices: { "5ml": 35, "10ml": 55, "full": 180 }
    },
    {
        id: 2,
        name: "9AM Dive",
        brand: "Afnan",
        year: 2022,
        gender: "Masculino",
        concentration: "EDP",
        family: "Aromático Acuático",
        description: "Una inmersión refrescante que captura la esencia del amanecer. Notas cítricas vibrantes se mezclan con toques de incienso y madera.",
        notes: {
            top: ["Limón", "Menta", "Grosella Negra", "Pimienta Rosa"],
            heart: ["Manzana", "Cedro", "Incienso"],
            base: ["Jengibre", "Sándalo", "Pachulí", "Jazmín"]
        },
        accords: [
            { name: "acuático", value: 90, color: "#22a6b3" },
            { name: "fresco", value: 80, color: "#6ab04c" },
            { name: "amaderado", value: 50, color: "#8b6914" },
            { name: "especiado", value: 35, color: "#eb4d4b" }
        ],
        longevity: "8-10 horas",
        sillage: "Fuerte",
        image: "assets/perfumes/9am-dive.jpg",
        prices: { "5ml": 30, "10ml": 50, "full": 150 }
    },
    {
        id: 3,
        name: "Amber Oud Aqua Dubai",
        brand: "Al Haramain",
        year: 2024,
        gender: "Unisex",
        concentration: "EDP",
        family: "Aromático Frutal",
        description: "Inspirado en el encanto costero de Dubai. Una explosión tropical de frutas y bergamota que evoca la luz del sol sobre el agua.",
        notes: {
            top: ["Bergamota", "Notas Verdes", "Mandarina"],
            heart: ["Ámbar", "Melón", "Grosella Negra", "Piña"],
            base: ["Almizcle", "Petitgrain", "Gálbano", "Vainilla"]
        },
        accords: [
            { name: "acuático", value: 85, color: "#22a6b3" },
            { name: "frutal", value: 75, color: "#f9ca24" },
            { name: "dulce", value: 50, color: "#ff7979" },
            { name: "amaderado", value: 40, color: "#8b6914" }
        ],
        longevity: "7-9 horas",
        sillage: "Moderado",
        image: "assets/perfumes/amber-oud-aqua-dubai.png",
        prices: { "5ml": 35, "10ml": 60, "full": 190 }
    },
    {
        id: 4,
        name: "Le Beau",
        brand: "Jean Paul Gaultier",
        year: 2019,
        gender: "Masculino",
        concentration: "EDT",
        family: "Amaderado Aromático",
        description: "La belleza masculina en estado puro. Bergamota fresca se funde con coco cremoso y tonka bean, creando una fragancia adictiva y sensual.",
        notes: {
            top: ["Bergamota"],
            heart: ["Coco"],
            base: ["Haba Tonka"]
        },
        accords: [
            { name: "dulce", value: 80, color: "#ff7979" },
            { name: "amaderado", value: 70, color: "#8b6914" },
            { name: "tropical", value: 65, color: "#6ab04c" },
            { name: "ámbar", value: 50, color: "#f0932b" }
        ],
        longevity: "6-8 horas",
        sillage: "Moderado",
        image: "assets/perfumes/le-beau.jpg",
        prices: { "5ml": 45, "10ml": 75, "full": 280 }
    },
    {
        id: 5,
        name: "Paradise Garden",
        brand: "Jean Paul Gaultier",
        year: 2024,
        gender: "Masculino",
        concentration: "EDT",
        family: "Amaderado Verde Acuático",
        description: "Un tributo al jardín de Gaultier. Frescura tropical con coco, higo y notas salinas que transportan a un paraíso terrenal.",
        notes: {
            top: ["Notas Verdes", "Notas Acuáticas", "Menta", "Jengibre"],
            heart: ["Coco", "Higo", "Sal"],
            base: ["Haba Tonka", "Sándalo"]
        },
        accords: [
            { name: "acuático", value: 75, color: "#22a6b3" },
            { name: "fresco", value: 70, color: "#6ab04c" },
            { name: "tropical", value: 65, color: "#6ab04c" },
            { name: "amaderado", value: 55, color: "#8b6914" }
        ],
        longevity: "6-8 horas",
        sillage: "Moderado",
        image: "assets/perfumes/le-beau-paradise-garden.jpg",
        prices: { "5ml": 50, "10ml": 85, "full": 320 }
    },
    {
        id: 6,
        name: "Scepter Malachite",
        brand: "Maison Alhambra",
        year: 2023,
        gender: "Unisex",
        concentration: "EDP",
        family: "Aromático Especiado",
        description: "Elegancia real en cada nota. Bergamota y mandarina verde dan paso a jazmín y lavanda, culminando en un fondo ambarado sofisticado.",
        notes: {
            top: ["Bergamota", "Mandarina Verde", "Grosella Negra"],
            heart: ["Jazmín", "Pimienta Rosa", "Lavanda"],
            base: ["Vetiver", "Ámbar", "Almizcle"]
        },
        accords: [
            { name: "aromático", value: 80, color: "#6ab04c" },
            { name: "especiado", value: 70, color: "#eb4d4b" },
            { name: "amaderado", value: 65, color: "#8b6914" },
            { name: "floral", value: 45, color: "#e056a0" }
        ],
        longevity: "8-10 horas",
        sillage: "Fuerte",
        image: "assets/perfumes/sceptre-malachite.png",
        prices: { "5ml": 30, "10ml": 50, "full": 140 }
    },
    {
        id: 7,
        name: "Eros Flame",
        brand: "Versace",
        year: 2018,
        gender: "Masculino",
        concentration: "EDP",
        family: "Amaderado Especiado",
        description: "El fuego de la pasión. Cítricos vibrantes y pimienta de Madagascar se encuentran con rosa y geranio, sobre una base amaderada y especiada.",
        notes: {
            top: ["Mandarina", "Pimienta de Madagascar", "Limón", "Chinotto", "Romero"],
            heart: ["Geranio", "Rosa", "Pepperwood™"],
            base: ["Vainilla", "Haba Tonka", "Sándalo", "Cedro de Texas", "Pachulí", "Musgo de Roble"]
        },
        accords: [
            { name: "especiado", value: 80, color: "#eb4d4b" },
            { name: "amaderado", value: 75, color: "#8b6914" },
            { name: "cítrico", value: 60, color: "#f9ca24" },
            { name: "dulce", value: 45, color: "#ff7979" }
        ],
        longevity: "8-10 horas",
        sillage: "Fuerte",
        image: "assets/perfumes/eros-flame.jpg",
        prices: { "5ml": 50, "10ml": 85, "full": 350 }
    },
    {
        id: 8,
        name: "Club de Nuit Urban Elixir",
        brand: "Armaf",
        year: 2022,
        gender: "Masculino",
        concentration: "EDP",
        family: "Aromático Especiado",
        description: "Sofisticación nocturna urbana. Una composición compleja con bergamota, lavanda y azafrán que culmina en ambroxan y ámbar.",
        notes: {
            top: ["Bergamota", "Pimienta Rosa", "Flor de Naranjo", "Jazmín"],
            heart: ["Lavanda", "Elemi", "Geranio", "Vetiver", "Azafrán", "Caléndula"],
            base: ["Ambroxan", "Ámbar", "Cedro", "Pachulí", "Labdanum"]
        },
        accords: [
            { name: "aromático", value: 85, color: "#6ab04c" },
            { name: "amaderado", value: 75, color: "#8b6914" },
            { name: "especiado", value: 60, color: "#eb4d4b" },
            { name: "floral", value: 40, color: "#e056a0" }
        ],
        longevity: "10-12 horas",
        sillage: "Fuerte",
        image: "assets/perfumes/club-de-nuit-urban-man-elixir.jpg",
        prices: { "5ml": 35, "10ml": 55, "full": 160 }
    },
    {
        id: 9,
        name: "Stronger With You Intensely",
        brand: "Emporio Armani",
        year: 2019,
        gender: "Masculino",
        concentration: "EDP",
        family: "Oriental Fougère",
        description: "Intensidad adictiva. Pimienta rosa y enebro se funden con toffee y canela, sobre una base de vainilla y ámbar irresistible.",
        notes: {
            top: ["Pimienta Rosa", "Enebro", "Violeta"],
            heart: ["Toffee", "Canela", "Lavanda", "Salvia"],
            base: ["Vainilla", "Ámbar", "Haba Tonka", "Gamuza"]
        },
        accords: [
            { name: "dulce", value: 90, color: "#ff7979" },
            { name: "especiado", value: 70, color: "#eb4d4b" },
            { name: "ámbar", value: 65, color: "#f0932b" },
            { name: "aromático", value: 50, color: "#6ab04c" }
        ],
        longevity: "10-12 horas",
        sillage: "Muy Fuerte",
        image: "assets/perfumes/stronger-with-you.png",
        prices: { "5ml": 55, "10ml": 95, "full": 400 }
    },
    {
        id: 10,
        name: "Khamrah",
        brand: "Lattafa",
        year: 2022,
        gender: "Unisex",
        concentration: "EDP",
        family: "Oriental Especiado",
        description: "Opulencia oriental. Canela y nuez moscada envuelven dátiles y praliné, culminando en vainilla y haba tonka exquisita.",
        notes: {
            top: ["Canela", "Nuez Moscada", "Bergamota"],
            heart: ["Dátiles", "Praliné", "Tuberosa", "Mahonial"],
            base: ["Vainilla", "Haba Tonka", "Madera de Ámbar", "Mirra", "Benjuí", "Akigalawood"]
        },
        accords: [
            { name: "dulce", value: 95, color: "#ff7979" },
            { name: "especiado", value: 80, color: "#eb4d4b" },
            { name: "oriental", value: 75, color: "#9b59b6" },
            { name: "amaderado", value: 55, color: "#8b6914" }
        ],
        longevity: "12+ horas",
        sillage: "Muy Fuerte",
        image: "assets/perfumes/khamrah.jpg",
        prices: { "5ml": 25, "10ml": 40, "full": 120 }
    },
    {
        id: 11,
        name: "Khamrah Qahwa",
        brand: "Lattafa",
        year: 2023,
        gender: "Unisex",
        concentration: "EDP",
        family: "Oriental Vainilla",
        description: "El aroma del café árabe tradicional. Canela y cardamomo abrazan praliné y frutas confitadas, con un fondo de café y vainilla.",
        notes: {
            top: ["Canela", "Cardamomo", "Jengibre"],
            heart: ["Praliné", "Frutas Confitadas", "Flores Blancas"],
            base: ["Vainilla", "Café", "Haba Tonka", "Benjuí", "Almizcle"]
        },
        accords: [
            { name: "dulce", value: 95, color: "#ff7979" },
            { name: "especiado", value: 75, color: "#eb4d4b" },
            { name: "oriental", value: 70, color: "#9b59b6" },
            { name: "café", value: 65, color: "#8b6914" }
        ],
        longevity: "12+ horas",
        sillage: "Muy Fuerte",
        image: "assets/perfumes/khamrah-qahwa.jpg",
        prices: { "5ml": 25, "10ml": 40, "full": 120 }
    },
    {
        id: 12,
        name: "Mandarin Sky",
        brand: "Armaf Odyssey",
        year: 2023,
        gender: "Masculino",
        concentration: "EDP",
        family: "Aromático Especiado",
        description: "Cielos de mandarina. Una apertura cítrica vibrante con azafrán y salvia da paso a caramelo y tonka, sobre ambroxan y vetiver.",
        notes: {
            top: ["Mandarina", "Naranja", "Azafrán", "Salvia"],
            heart: ["Caramelo", "Haba Tonka", "Caléndula"],
            base: ["Ambroxan", "Cedro", "Vetiver"]
        },
        accords: [
            { name: "cítrico", value: 80, color: "#f9ca24" },
            { name: "dulce", value: 70, color: "#ff7979" },
            { name: "amaderado", value: 60, color: "#8b6914" },
            { name: "especiado", value: 45, color: "#eb4d4b" }
        ],
        longevity: "8-10 horas",
        sillage: "Fuerte",
        image: "assets/perfumes/odyssey-mandarin-sky.png",
        prices: { "5ml": 30, "10ml": 50, "full": 140 }
    },
    {
        id: 13,
        name: "Badee Al Oud Sublime",
        brand: "Lattafa",
        year: 2021,
        gender: "Unisex",
        concentration: "EDP",
        family: "Oriental Especiado",
        description: "Opulencia árabe en cada nota. Una fragancia rica y sofisticada con especias, oud y vainilla que evoca el lujo del medio oriente.",
        notes: {
            top: ["Canela", "Nuez Moscada", "Azafrán"],
            heart: ["Rosa", "Oud", "Jazmín"],
            base: ["Vainilla", "Ámbar", "Sándalo", "Almizcle"]
        },
        accords: [
            { name: "oriental", value: 90, color: "#9b59b6" },
            { name: "especiado", value: 80, color: "#eb4d4b" },
            { name: "amaderado", value: 70, color: "#8b6914" },
            { name: "dulce", value: 60, color: "#ff7979" }
        ],
        longevity: "12+ horas",
        sillage: "Muy Fuerte",
        image: "assets/perfumes/badee-al-oud-sublime.png",
        prices: { "5ml": 25, "10ml": 40, "full": 110 }
    }
];

// ----------------------------------------
// Payment Information
// ----------------------------------------
const paymentInfo = {
    whatsapp: "+51916401098",
    yape: "+51916401098",
    plin: "+51916401098",
    bcp: {
        account: "XXX-XXXXXXX-X-XX", // Cuenta BCP (ACTUALIZAR)
        cci: "002XXXXXXXXXXXXXX",
        holder: "LEO PRIVÉ"
    },
    bbva: {
        account: "XXXX-XXXX-XXXX-XXXX", // Cuenta BBVA (ACTUALIZAR)
        cci: "011XXXXXXXXXXXXXX",
        holder: "LEO PRIVÉ"
    }
};

// ----------------------------------------
// DOM Elements & State
// ----------------------------------------
let currentProduct = null;
let selectedPresentation = "10ml";

// ----------------------------------------
// Initialize Application
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    setupScrollEffects();
    setupMobileMenu();
});

// ----------------------------------------
// Render Products Grid
// ----------------------------------------
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = perfumes.map((perfume, index) => `
        <div class="product-card glass-card animate-fade-in animate-delay-${(index % 4) + 1}" 
             onclick="openProductModal(${perfume.id})" 
             data-product-id="${perfume.id}">
            <div class="product-image">
                <img src="${perfume.image}" alt="${perfume.name}" loading="lazy">
                ${perfume.year >= 2024 ? '<span class="badge">Nuevo</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-brand">${perfume.brand}</div>
                <h3 class="product-name">${perfume.name}</h3>
                <div class="product-accords">
                    ${perfume.accords.slice(0, 4).map(accord =>
        `<span class="accord-dot" style="background-color: ${accord.color}" title="${accord.name}"></span>`
    ).join('')}
                </div>
                <div class="product-price">Desde S/ ${perfume.prices["5ml"]}</div>
            </div>
        </div>
    `).join('');
}

// ----------------------------------------
// Product Modal Functions
// ----------------------------------------
function openProductModal(productId) {
    currentProduct = perfumes.find(p => p.id === productId);
    if (!currentProduct) return;

    const modal = document.getElementById('productModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${currentProduct.image}" alt="${currentProduct.name}">
        </div>
        <div class="modal-info">
            <div class="modal-brand">${currentProduct.brand}</div>
            <h2>${currentProduct.name}</h2>
            <p class="modal-description">${currentProduct.description}</p>
            
            <div class="modal-meta">
                <div class="meta-item">
                    <div class="meta-label">Género</div>
                    <div class="meta-value">${currentProduct.gender}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Concentración</div>
                    <div class="meta-value">${currentProduct.concentration}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Longevidad</div>
                    <div class="meta-value">${currentProduct.longevity}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Proyección</div>
                    <div class="meta-value">${currentProduct.sillage}</div>
                </div>
            </div>
            
            <!-- Fragrance Pyramid -->
            <div class="fragrance-pyramid">
                <div class="pyramid-level">
                    <div class="pyramid-header">
                        <div class="pyramid-icon top">🌸</div>
                        <span class="pyramid-label top">Notas de Salida</span>
                    </div>
                    <div class="pyramid-notes">
                        ${currentProduct.notes.top.map(note =>
        `<span class="note-tag">${note}</span>`
    ).join('')}
                    </div>
                </div>
                <div class="pyramid-level">
                    <div class="pyramid-header">
                        <div class="pyramid-icon heart">💐</div>
                        <span class="pyramid-label heart">Notas de Corazón</span>
                    </div>
                    <div class="pyramid-notes">
                        ${currentProduct.notes.heart.map(note =>
        `<span class="note-tag">${note}</span>`
    ).join('')}
                    </div>
                </div>
                <div class="pyramid-level">
                    <div class="pyramid-header">
                        <div class="pyramid-icon base">🪵</div>
                        <span class="pyramid-label base">Notas de Fondo</span>
                    </div>
                    <div class="pyramid-notes">
                        ${currentProduct.notes.base.map(note =>
        `<span class="note-tag">${note}</span>`
    ).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Accords -->
            <div class="accords-section">
                <div class="accords-title">Acordes Principales</div>
                ${currentProduct.accords.map(accord => `
                    <div class="accord-bar">
                        <span class="accord-name">${accord.name}</span>
                        <div class="accord-track">
                            <div class="accord-fill" style="width: ${accord.value}%; background-color: ${accord.color}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Update footer with prices
    updateModalFooter();

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalFooter() {
    const priceDisplay = document.querySelector('.modal-price');
    if (priceDisplay && currentProduct) {
        priceDisplay.textContent = `S/ ${currentProduct.prices[selectedPresentation]}`;
    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
}

function selectPresentation(presentation) {
    selectedPresentation = presentation;

    // Update button states
    document.querySelectorAll('.presentation-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === presentation);
    });

    updateModalFooter();
}

// ----------------------------------------
// WhatsApp Integration
// ----------------------------------------
function orderViaWhatsApp() {
    if (!currentProduct) return;

    const message = `¡Hola! 👋 Me interesa el perfume:

🌟 *${currentProduct.name}* de ${currentProduct.brand}
📦 Presentación: ${selectedPresentation}
💰 Precio: S/ ${currentProduct.prices[selectedPresentation]}

¿Está disponible?`;

    const whatsappUrl = `https://wa.me/${paymentInfo.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function contactViaWhatsApp() {
    const message = `¡Hola! 👋 Estoy interesado en hacer un pedido de perfumes. ¿Podrían ayudarme?`;
    const whatsappUrl = `https://wa.me/${paymentInfo.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ----------------------------------------
// Event Listeners Setup
// ----------------------------------------
function setupEventListeners() {
    // Modal close button
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }

    // Modal overlay click to close
    const modalOverlay = document.getElementById('productModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeProductModal();
            }
        });
    }

    // Presentation buttons
    document.querySelectorAll('.presentation-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectPresentation(btn.dataset.size);
        });
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                document.querySelector('.nav-links')?.classList.remove('active');
            }
        });
    });
}

// ----------------------------------------
// Scroll Effects
// ----------------------------------------
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const heroBg = document.querySelector('.hero-bg img');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header effect
        if (scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        // Parallax effect for hero background
        if (heroBg && scrollY < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Reveal on scroll for sections
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.glass-card, .trust-badge, .payment-method').forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
}

// ----------------------------------------
// Mobile Menu
// ----------------------------------------
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// ----------------------------------------
// Utility Functions
// ----------------------------------------
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(amount);
}

// Make functions globally accessible
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.selectPresentation = selectPresentation;
window.orderViaWhatsApp = orderViaWhatsApp;
window.contactViaWhatsApp = contactViaWhatsApp;

// ----------------------------------------
// FAQ Accordion
// ----------------------------------------
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items first
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle the clicked one
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

window.toggleFaq = toggleFaq;
