// Language Management
let currentLang = 'en'; // Default language is English

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if language preference is stored
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // Update language display
    updateLanguage();
    
    // Set up language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Set up mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferredLang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    // Update all elements with data-en and data-zh attributes
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(element => {
        // Skip elements that are inside other elements with data attributes (to preserve HTML structure)
        if (element.closest('[data-en][data-zh]') !== element) {
            return;
        }
        
        // For elements that contain HTML tags (like <strong>), use innerHTML
        // Otherwise use textContent for safety
        const hasHTML = element.innerHTML !== element.textContent;
        
        if (currentLang === 'zh') {
            const zhText = element.getAttribute('data-zh');
            if (hasHTML && zhText.includes('<')) {
                element.innerHTML = zhText;
            } else {
                element.textContent = zhText;
            }
        } else {
            const enText = element.getAttribute('data-en');
            if (hasHTML && enText.includes('<')) {
                element.innerHTML = enText;
            } else {
                element.textContent = enText;
            }
        }
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = currentLang === 'zh' ? 'English' : '中文';
        }
    }
    
    // Update page title if it has language attributes
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-en')) {
        titleElement.textContent = currentLang === 'zh' 
            ? titleElement.getAttribute('data-zh') 
            : titleElement.getAttribute('data-en');
    }
}

// Export for use in other scripts
window.currentLang = currentLang;
window.updateLanguage = updateLanguage;
window.toggleLanguage = toggleLanguage;




