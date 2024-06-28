

function sumar(){
    let inputnum1 = parseInt(document.getElementById('num1').value);
    let inputnum2 = parseInt(document.getElementById('num2').value);
    document.getElementById('res').value = inputnum1+inputnum2
       
}

function resta(){
    let inputnum1 = parseInt(document.getElementById('num1').value);
    let inputnum2 = parseInt(document.getElementById('num2').value);
    document.getElementById('res').value = inputnum1-inputnum2
    
}

function dividir(){
    let inputnum1 = parseInt(document.getElementById('num1').value);
    let inputnum2 = parseInt(document.getElementById('num2').value);
    document.getElementById('res').value = inputnum1/inputnum2
    
}

function multiplicacion(){
    let inputnum1 = parseInt(document.getElementById('num1').value);
    let inputnum2 = parseInt(document.getElementById('num2').value);
    document.getElementById('res').value = inputnum1*inputnum2
    
}