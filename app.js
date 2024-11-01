const ul = document.querySelector('ul');
const section = document.querySelector('section');

ul.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI'){
        const color  = target.dataset.color;
        const text = target.textContent;
        const textColor = target.dataset.text ?? 'white'

        section.style.background = `#${color}`;
        section.style.color = `${textColor}`;
        section.textContent = text;
        section.dataset.color = color;
        
    }
})

section.addEventListener('click', (event) => {
    const color = event.target.dataset.color;
    navigator.clipboard.writeText(color).then(() => {
        alert(event.target.textContent + ' copied!')
    })
})
