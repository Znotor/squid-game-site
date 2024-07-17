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
    // Ajoutez d'autres participants si nécessaire
];

function createCell(participant, isActive) {
    const cell = document.createElement('div');
    cell.className = `cell ${isActive ? 'active' : 'inactive'}`;
    
    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.style.backgroundImage = `url(https://picsum.photos/200?random=${Math.random()})`;
    
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = participant.number;
    
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = participant.name;
    
    cell.appendChild(photo);
    cell.appendChild(number);
    cell.appendChild(name);
    return cell;
}

const pattern = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
];

pattern.forEach((row, rowIndex) => {
    row.forEach((isActive, colIndex) => {
        const index = rowIndex * 8 + colIndex;
        if (index < participants.length) {
            const cell = createCell(participants[index], isActive === 1);
            grid.appendChild(cell);
        } else {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cell inactive';
            grid.appendChild(emptyCell);
        }
    });
});
