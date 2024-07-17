const grid = document.getElementById('grid');
const names = ['Rex', 'Bee', 'Samantha', 'Stephanie', 'Figgy', 'Rosemary', 'Kyle', 'Lorenzo', 'Chanel', 'Husnain', 'Daniel', 'Stephen'];

names.forEach((name, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (Math.random() > 0.5) cell.classList.add('active');
    
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = Math.floor(Math.random() * 500).toString().padStart(3, '0');
    
    const nameElement = document.createElement('div');
    nameElement.className = 'name';
    nameElement.textContent = name;
    
    cell.appendChild(number);
    cell.appendChild(nameElement);
    grid.appendChild(cell);
});