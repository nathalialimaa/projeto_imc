const form = document.querySelector('.form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const inputPeso = document.querySelector('.peso');
    const inputAltura = document.querySelector('.altura');
    const peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    const resultadoDiv = document.getElementById('resultado-imc');
    
    if (!peso || !altura) {
        resultadoDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    // Converte altura de centímetros para metros
    altura = altura / 100;

    const imc = peso / (altura * altura);
    let resultado = '';
    
    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = 'Obesidade grau 2';
    } else {
        resultado = 'Obesidade grau 3';
    }
    
    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
});
