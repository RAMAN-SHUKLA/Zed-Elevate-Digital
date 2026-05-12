function initTheme() {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply theme immediately on load
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'light';
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', function(e) {
            const newTheme = e.target.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Sync across all tabs/windows
            window.dispatchEvent(new Event('storage'));
        });
    }
}

// Sync theme across pages
window.addEventListener('storage', () => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (themeSwitch) {
        themeSwitch.checked = theme === 'light';
    }
});

function initPageTransitions() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Initial entrance animation
    setTimeout(() => {
        overlay.classList.add('exit');
    }, 100);

    document.querySelectorAll('a').forEach(link => {
        // Only target internal links
        if (link.hostname === window.location.hostname && 
            !link.hash && 
            link.href !== '#' && 
            !link.href.includes('mailto:') && 
            !link.href.includes('tel:')) {
            
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = link.href;
                overlay.classList.remove('exit');
                overlay.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = target;
                }, 600);
            });
        }
    });
}

function loadHomeProjects() {
    const homeProjectsContainer = document.getElementById('homeProjectsContainer');
    if (!homeProjectsContainer) return;

    const projects = JSON.parse(localStorage.getItem('zed_projects')) || [
        {
            id: 1,
            title: "Modern FinTech Branding",
            category: "branding",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200",
            link: "#"
        },
        {
            id: 2,
            title: "E-Commerce Luxury Hub",
            category: "web",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200",
            link: "#"
        },
        {
            id: 3,
            title: "Viral Real Estate Campaign",
            category: "marketing",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200",
            link: "#"
        }
    ];

    if (!localStorage.getItem('zed_projects')) {
        localStorage.setItem('zed_projects', JSON.stringify(projects));
    }

    homeProjectsContainer.innerHTML = '';
    // Show only first 3 on home
    projects.slice(0, 3).forEach(p => {
        const html = `
            <div class="col-lg-4" data-aos="fade-up">
                <div class="project-card-modern">
                    <div class="project-image-container">
                        <img src="${p.image}" alt="${p.title}">
                        <div class="project-overlay">
                            <a href="${p.link}" class="project-link-modern">View Project <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="project-content-modern">
                        <span class="project-category-badge">${p.category}</span>
                        <h3 class="project-title-modern">${p.title}</h3>
                    </div>
                </div>
            </div>
        `;
        homeProjectsContainer.insertAdjacentHTML('beforeend', html);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPageTransitions();
    loadHomeProjects();
});

window.addEventListener('storage', () => {
    loadHomeProjects();
});
