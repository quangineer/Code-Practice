document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})


function solution (text){
    console.log(text);
    console.log(typeof text);
    console.log(text[0]);
    console.log(typeof text[0]);


}