document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    splittext = text.split("\n");
    for (i=0; i<splittext.length; i++) {
        splittext[i] = parseInt(splittext[i]);
    }


    for (j=0; j<splittext.length; j++){
        splittext[j] = Math.floor(splittext[j]/3)-2;
    }
    splittext.splice(-1);
    console.log(splittext[splittext.length-1]);
    let count = 0;
    for (l=0; l<splittext.length; l++){
        count += splittext[l];

    }
    console.log(count);



    

}