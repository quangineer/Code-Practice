document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})


function solution(text) {
    let text1 = text.split("\n");
    let inputs = text1[0].split(",");
    text1 = text1.slice(2);
    console.log(text1);

    let matrices = new Array();
    let matrix = new Array();
    for (i = 0; i < text1.length; i++) {
        // Split each line into row and convert each element to Integer.
        let row = text1[i].replace(/\s+/g, " ").split(" ");
        for (j = 0; j < row.length; j++) {
            row[j] = parseInt(row[j]);
        }
        // Combine 5 lines into a matrix and add the matrix into matrices.
        if (i % 6 == 5) {
            matrices.push(matrix);
            matrix = new Array();
        } else {
            matrix.push(row);
        }
    }
    console.log(matrices);
}


// Return true if m wins, else return false.
// m is a 5x5 matrix.
// For example:
// [
//      [56, -1, 70, 2, 22]
//      [44, -1, 10, -1, 8]
//      [92, -1, -1, -1, 93]
//      [74, -1, 5, -1, 68]
//      [24, -1, 42, 65, 72]
// ]
function verify(m) {
    for (x = 0; x < m.length; x++ ){ // loop row
        let isRowWin = true;
        for (y = 0; y < m[x].length; y++){ // loop elements in row
            if (m[x][y] != -1) {
                isRowWin = false;
                break;
            }
        }
        if (isRowWin) {
            return true;
        }
    }
    return false;
}

console.log(verify([
     [44, -1, 10, -1, 8],
     [92, -1, -1, -1, 93],
     [74, -1, 5, -1, 68],
     [24, -1, 42, 65, 72],
     [-1, -1, -1, -1, -1],
]))