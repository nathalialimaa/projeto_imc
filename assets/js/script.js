const form = document.querySelector('.form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputPeso=event.querySelector('.peso');
    const inputAltura=event.querySelector('.altura');
    const peso=Number(inputPeso.value);
    const altura=Number(inputAltura.value);
})