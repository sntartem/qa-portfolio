function toggleLanguage() {
    const body = document.body;
    const isUa = body.classList.contains('lang-ua');

    if (isUa) {
        body.classList.remove('lang-ua');
        body.classList.add('lang-en');
        localStorage.setItem('preferred-lang', 'en');
        setLanguageText('en');
    } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-ua');
        localStorage.setItem('preferred-lang', 'ua');
        setLanguageText('ua');
    }
}

function setLanguageText(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    const body = document.body;
    
    if (savedLang === 'ua') {
        body.classList.remove('lang-en');
        body.classList.add('lang-ua');
        setLanguageText('ua');
    } else {
        body.classList.remove('lang-ua');
        body.classList.add('lang-en');
        setLanguageText('en');
    }
});
