const grid = document.getElementById('grid');
const participants = [
    { name: 'Rex', number: '053' },
    { name: 'Bee', number: '018' },
    { name: 'Samantha', number: '067' },
    { name: 'Stephanie', number: '018' },
    { name: 'Figgy', number: '033' },
    { name: 'Rosemary', number: '051' },
    // Ajoutez tous les autres participants ici
];

function createCell(participant, isActive) {
    const cell = document.createElement('div');
    cell.className = `cell ${isActive ? 'active' : 'inactive'}`;
    
    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.style.backgroundImage = `url(https://picsum.photos/100?random=${Math.random()})`;
    
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

// Créez un motif de cellules actives/inactives
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
            // Créez des cellules vides pour compléter la grille
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cell inactive';
            grid.appendChild(emptyCell);
        }
    });
});
