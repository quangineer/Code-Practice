document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    let text_split = (text.split("\n"));

    for (i = 0; i < text_split.length; i++){
        text_split[i] = parseInt(text_split[i]);
    }
    // console.log(text_split);
    for (j = 0; j < text_split.length; j++){
        for (l = j+1; l < text_split.length; l++){
            if (text_split[j] + text_split[l] === 2020){
                console.log(text_split[j]);
                console.log(text_split[l]);
                console.log(text_split[j]*text_split[l]);
            }
        }
    }




}