// Initialize Lucide Icons
lucide.createIcons();

// Project Data
const projects = {
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
        title: 'AGRO — AI Project',
        tags: ['Flutter', 'TFLite', 'Supabase', 'Clean Arch', 'Animation'],
        features: [
            'Real-time plant disease detection with AI',
            'Backend integration using Supabase',
            'Architected with strict Clean Architecture',
            'Fluid UI transitions and scan animations',
            'On-device TFLite inference for speed'
        ],
        tech: 'Integrated TFLite for local AI capabilities while leveraging Supabase for cloud data. Follows rigorous clean code standards.'
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

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="modal-detail-grid">
            <div class="modal-detail-item">
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-detail-item">
                <h4>Technical Deep Dive</h4>
                <p style="color: var(--text-dim); line-height: 1.8;">${project.tech}</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
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
