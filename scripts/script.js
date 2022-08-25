const gridSize = 16;

const render = function(size) {

    document.querySelectorAll('.squares').forEach((e) => e.remove()); // Elimina el canvas anterior

    const contenedor = document.querySelector('.contenedor');
    for (let i = 0; i < (size ** 2); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'squares');
        contenedor.appendChild(square);
    }
    contenedor.style.gridTemplateColumns = `repeat(${size},1fr)`;
    document.querySelector('.sizeSelector').textContent = size;

    const cuadrado = document.querySelectorAll('.squares');
    cuadrado.forEach((e) => {
        e.addEventListener('mouseover',() => e.style.backgroundColor = '#' + (Math.floor(Math.random() * 16777215)).toString(16));
        e.addEventListener('mousedown', () => e.style.backgroundColor = 'white');
    });
}

render(gridSize);

const sizeChanger = document.querySelector('.sizeSelector');
sizeChanger.addEventListener('click',() => {
    const sizeSelection = prompt('How many squares per side?');
    render(sizeSelection);
    });