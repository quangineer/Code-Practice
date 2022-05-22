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
    let inputs = text1[0].split(",");   //this is now an array of inputs
    text1 = text1.slice(2);             //this is now an array of nested arrays
    console.log(text1);

    let matrices = new Array();
    let matrix = new Array();
    for (i = 0; i < text1.length; i++) {
        // Split each line into row and convert each element to Integer.
        let row = text1[i].trim().replace(/\s+/g, " ").split(" ");  // multispace become 1 space, then split single-space
        for (j = 0; j < row.length; j++) {
            row[j] = parseInt(row[j]);   // this function convert strings in each row into number
        }
        // Combine 5 lines into a matrix and add the matrix into matrices.
        if (i % 6 == 5) {
            matrices.push(matrix);
            matrix = new Array();           //reset a new nested array
        } else {
            matrix.push(row);   //group 5 row into a nested array
        }
    }
    // Now we have an array-ed inputs and an array-ed matrices. 
    // We need to apply each element of inputs into each element of matrices. 

    // loop inputs to have each individual element

    console.log(matrices);
    for (a = 0; a < inputs.length; a++) {
        for (b = 0; b < matrices.length; b++) {
            matrices[b] = apply(matrices[b], inputs[a]);       // call function apply prepared in advance below
            won = verify(matrices[b]);
            let finalsum = 0;
            if (won) {
                finalsum = sum_unmarked(matrices[b])*inputs[a];
                console.log(finalsum);
                return finalsum;
            }
            
        }
        
    }
    

}


function sum_unmarked(unmarked) {
    let sum = 0;
    for (t = 0; t < unmarked.length; t++) {
        for (r = 0; r < unmarked[t].length; r++) {
            if (unmarked[t][r] != -1) {
                sum += unmarked[t][r];
            }
        }
    }
    return sum;
}
// console.log(sum_unmarked([
//     [44, -1, 10, -1, 8],
//     [92, -1, -1, -1, 93],
//     [74, 10, 5, -1, 68],
//     [24, -1, 42, 65, 72],
//     [-2, -2, -1, 10, -1],
// ]));

function apply(m, n) {
    for (u = 0; u < m.length; u++) {
        for (o = 0; o < m[0].length; o++) {
            if (m[u][o] == n) {
                m[u][o] = -1;
            }
        }
    }
    return m;
}
// console.log(apply([
//     [44, -1, 10, -1, 8],
//     [92, -1, -1, -1, 93],
//     [74, 10, 5, -1, 68],
//     [24, -1, 42, 65, 72],
//     [-2, -2, -1, 10, -1],
// ], 10))
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
    for (x = 0; x < m.length; x++) { // loop row
        let isRowWin = true;
        for (y = 0; y < m[x].length; y++) { // loop elements in row
            if (m[x][y] != -1) {
                isRowWin = false;
                break;
            }
        }
        if (isRowWin) {
            return true;
        }
    }
    for (z = 0; z < m[0].length; z++) { // loop row
        let isRowWin = true;
        for (w = 0; w < m.length; w++) { // loop elements in row
            if (m[w][z] != -1) {
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

// console.log(verify([
//     [44, -1, 10, -1, 8],
//     [92, -1, -1, -1, 93],
//     [74, -1, 5, -1, 68],
//     [24, -1, 42, 65, 72],
//     [-2, -2, -1, -1, -1],
// ]))
