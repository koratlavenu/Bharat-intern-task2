
let celsius = document.getElementById('celsius');
let faherenheit = document.getElementById('faherenheit');

celsius.oninput =() => {
    let output = (parseFloat(celsius.value)* 9)/5 + 32 ;
    faherenheit.value = parseInt(output.toFixed(2));
};

faherenheit.oninput =() => {
    let output = ((parseFloat(faherenheit.value)- 32)* 5)/9 ;
    celsius.value = parseInt(output.toFixed(2));
};