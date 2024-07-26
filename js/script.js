const startButton = document.getElementById('start-button')

startButton.addEventListener('click', fuction () {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 1; i <= 100; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;
        newCell.addEventListener('click', fuction () {


            this.classList.add('clicked');
            console.log(this.innerHTML);

        });
        gridContainer.append(newCell);
    }
});