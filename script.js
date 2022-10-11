function insert(n) {
     var number = document.getElementById('results').innerHTML;
     document.getElementById('results').innerHTML = number + n;
}

function clean() {
    document.getElementById('results').innerHTML = "";
}

function deleteNumber(){
    var result = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = resultado.substring(0, result.length -1);

}

function getResult(){
    var resultado = document.getElementById('results').innerHTML;
    if(resultado){
        document.getElementById('results').innerHTML = eval(resultado);
    }else{
        document.getElementById('results').innerHTML = "ERROR"
    } 
}