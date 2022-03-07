// JavaScript Events to switch between
// Light and Dark Themes.


// Not yet added to HTML script

const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

const bodyElement = document.body;
const toggleButton = selectElement('#theme-button');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme)
{
    body.classList.add('light-theme');
}

toggleButton.addEventListener('click', function () {

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme'))
    {
        localStorage.setItem('currentTheme', 'themeActive');
    } 
    else
    {
        localStorage.removeItem('currentTheme');
    }
});