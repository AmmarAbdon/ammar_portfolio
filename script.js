// Initialize Lucide Icons
lucide.createIcons();

// Parallax Hero Effect (Disabled on touch devices for better mobile experience)
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            heroImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
}

// Project Data
const projects = {
    'taskora': {
        title: 'Taskora — Task Management',
        tags: ['Flutter', 'BLoC', 'Clean Arch', 'CI/CD', 'Testing'],
        features: [
            'Multi-store distribution (Amazon, Aptoide, F-Droid)',
            '75%+ Test Coverage (Unit, Widget, Integration)',
            'Automated CI/CD release pipeline',
            'Advanced BLoC state management',
            'Modern, responsive UI with fluid animations'
        ],
        tech: 'A production-grade task management system built with a focus on scalability and reliability. Implements Clean Architecture, BLoC, and a comprehensive testing suite following the AAA pattern. Features a fully automated CI/CD pipeline for multi-platform distribution.'
    },
    'badr': {
        title: 'BADR System (Desktop)',
        tags: ['Flutter', 'SQLite', 'BLoC', 'Clean Arch', 'Desktop', 'Animation'],
        features: [
            'Enterprise-ready Desktop application',
            'Advanced inventory and warehouse tracking',
            'Full accounting suite and staff management',
            'Complex UI animations for smooth UX',
            'Secure local database with SQLite'
        ],
        tech: 'Designed as a high-performance desktop system using Clean Architecture and BLoC. Optimized for efficiency with custom Flutter animations.'
    },
    'agro': {
        title: 'AGRO — AI Plant Detector',
        tags: ['Flutter', 'TensorFlow Lite', 'Supabase', 'Clean Arch'],
        features: [
            'On-device Disease Classification using TFLite',
            'Real-time Camera Diagnosis & Image History',
            'Automated Treatment Recommendations with Voice Support',
            'Multi-language Support (Arabic/English)',
            'Profile Management & Cloud Sync with Supabase'
        ],
        tech: 'Built with Flutter for high performance, leveraging TFLite for lightning-fast on-device ML without internet. Uses Clean Architecture (Data/Domain/Presentation) for maximum scalability.',
        link: 'https://github.com/AmmarAbdon/Agro',
        gallery: [
            'plant.png',
            'https://raw.githubusercontent.com/AmmarAbdon/ammar_portfolio/main/agro_2.png',
            'https://raw.githubusercontent.com/AmmarAbdon/ammar_portfolio/main/agro_3.png'
        ]
    },
    'techzone': {
        title: 'TechZone Marketplace',
        tags: ['Flutter', 'Supabase', 'OneSignal', 'Provider', 'Animation'],
        features: [
            'Robust marketplace app with Provider state mgmt',
            'Real-time backend & Edge Functions with Supabase',
            'System-level push notifications using OneSignal',
            'User profiles and secure purchase flows',
            'State-of-the-art Flutter hero animations'
        ],
        tech: 'A marketplace demonstration of scalable state management with Provider and real-time backend persistence with Supabase. Integrated OneSignal for reliable device-to-user push notifications.'
    }
};

// Modal Functionality
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

function openProject(key) {
    const project = projects[key];
    if (!project) return;

    // Add gallery if available
    let galleryHtml = '';
    if (project.gallery) {
        galleryHtml = `
            <div class="project-gallery">
                ${project.gallery.map(img => `<img src="${img}" alt="Screenshot" class="gallery-img">`).join('')}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        ${galleryHtml}
        
        <div class="modal-info">
            <div class="modal-desc">
                <h3>About Project</h3>
                <p>${project.tech}</p>
            </div>
            
            <div class="modal-features">
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(f => `<li><i data-lucide="check-circle-2"></i> ${f}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="modal-footer">
            <a href="${project.link}" target="_blank" class="btn btn-primary">
                View Source Code <i data-lucide="github"></i>
            </a>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
    lucide.createIcons();
}

// Close Modal
document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    
    // Toggle icon between menu and x
    if (isActive) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close Mobile Menu on Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Navbar Background Change on Scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '0';
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.boxShadow = 'none';
    }
});
