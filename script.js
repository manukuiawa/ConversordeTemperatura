document.getElementById('button_converter').onclick = tempConvert; 
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    var fahrenheit = document.getElementById('temp').value; //chamando o valor do input
    
    if(isNaN(fahrenheit)) { //isNan -> verifica se é um número
        alert("Digite um valor válido");
        return
    } else {
        celsius = (parseFloat(fahrenheit - 32)) / 1.8;
        console.log(celsius);
    }
}
