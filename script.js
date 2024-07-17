const grid = document.getElementById('grid');
const participants = [
    { name: 'Rex', number: '053' },
    { name: 'Bee', number: '018' },
    { name: 'Samantha', number: '067' },
    { name: 'Stephanie', number: '018' },
    { name: 'Figgy', number: '033' },
    { name: 'Rosemary', number: '051' },
    { name: 'Kyle', number: '101' },
    { name: 'Lorenzo', number: '161' },
    { name: 'Chanel', number: '109' },
    { name: 'Husnain', number: '198' },
    { name: 'Daniel', number: '204' },
    { name: 'Stephen', number: '222' },
    { name: 'Rick', number: '232' },
    { name: 'Michael', number: '245' },
    { name: 'Ashley', number: '214' },
    { name: 'Allison', number: '218' },
    { name: 'Trey', number: '301' },
    { name: 'Leann', number: '302' },
    { name: 'Aurora', number: '399' },
    { name: 'Roland', number: '418' },
    { name: 'Riley', number: '423' },
    { name: 'Bryton', number: '433' },
    { name: 'Shelby', number: '438' },
    { name: 'Phill', number: '451' },
    { name: 'Tabitha', number: '455' },
];

participants.forEach((participant, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (Math.random() > 0.5) cell.classList.add('active');
    
    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.style.backgroundImage = `url(https://picsum.photos/100?random=${index})`;
    
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = participant.number;
    
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = participant.name;
    
    cell.appendChild(photo);
    cell.appendChild(number);
    cell.appendChild(name);
    grid.appendChild(cell);
});