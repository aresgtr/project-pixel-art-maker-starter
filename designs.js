const matrix = document.querySelector('#pixelCanvas');  //  Canvas for our table

// Select size input
document.getElementById('sizePicker').addEventListener("submit", function(e) {
    
    e.preventDefault(); //  Prevent redirect
    matrix.innerHTML = '';  //  Reset the canvas everytime we click submit

    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;

    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});


/**
* @description Draw grid matrix on the table canvas, and trigger onClick events to color the selected cell
* @param {number} height
* @param {number} width
*/
function makeGrid(height, width) {

    var row;

    //  Make Grid table
    for (var i = 0; i < height; i++) {
        row = matrix.insertRow(i);
        for (var j = 0; j < width; j++) {
            row.insertCell(j);
        }
    }

    //  Iterate cells through the table, looking for the onClick event on the cells
    for (var x = 0; x < matrix.rows.length; x++) {
        for (var y = 0; y < matrix.rows[x].cells.length; y++) {
            matrix.rows[x].cells[y].onclick = function() {
                // Color the cell by delected color input
                const color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            };
        }
    }
}