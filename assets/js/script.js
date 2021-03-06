const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque2");
const bloque3 = document.getElementById("bloque3");
const bloque4 = document.getElementById("bloque4");
const bloque5 = document.getElementById("bloque5");
const bloque6 = document.getElementById("bloque6");
const bloque7 = document.getElementById("bloque7");
const bloque8 = document.getElementById("bloque8");
const bloque9 = document.getElementById("bloque9");
const bloque0 = document.getElementById("bloque0");
let visor = document.getElementsByClassName("visor");
const limpiar = document.getElementById("limpiar");
const suma = document.getElementById("suma");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const resta = document.getElementById("resta");
const resultado = document.getElementById("resultado");

let visorContenido = "";
let operacion = "";

const SUMA = "SUMA";
const MULTIPLICAR = "MULTIPLICAR";
const RESTA = "RESTA";
const DIVIDIR = "DIVIDIR";

bloque1.addEventListener("click", function () {
  visor[0].textContent += bloque1.textContent;
});

bloque2.addEventListener("click", function () {
  visor[0].textContent += bloque2.textContent;
});

bloque3.addEventListener("click", function () {
  visor[0].textContent += bloque3.textContent;
});

bloque4.addEventListener("click", function () {
  visor[0].textContent += bloque4.textContent;
});
bloque5.addEventListener("click", function () {
  visor[0].textContent += bloque5.textContent;
});
bloque6.addEventListener("click", function () {
  visor[0].textContent += bloque6.textContent;
});
bloque7.addEventListener("click", function () {
  visor[0].textContent += bloque7.textContent;
});
bloque8.addEventListener("click", function () {
  visor[0].textContent += bloque8.textContent;
});
bloque9.addEventListener("click", function () {
  visor[0].textContent += bloque9.textContent;
});
bloque0.addEventListener("click", function () {
  visor[0].textContent += bloque0.textContent;
});

limpiar.addEventListener("click", function () {
  visor[0].textContent = "";
});

const prepareDataForOperation = function(operation){
    operacion = operation;
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
}

const result = function() {
    let res;
    switch(operacion){
        case SUMA : res = +visorContenido + Number(visor[0].textContent);break;
        case MULTIPLICAR : res = +visorContenido * Number(visor[0].textContent);break;
        case RESTA : res = +visorContenido - Number(visor[0].textContent);break;
        case DIVIDIR : res = +visorContenido / Number(visor[0].textContent);break;
        default : res=undefined;alert("Seleccione una operación");
    }
    if(res!=undefined)
        visor[0].textContent = res;
}

suma.addEventListener("click", () => prepareDataForOperation(SUMA));
multiplicar.addEventListener("click", () => prepareDataForOperation(MULTIPLICAR));
dividir.addEventListener("click", () => prepareDataForOperation(DIVIDIR));
resta.addEventListener("click", () => prepareDataForOperation(RESTA));

resultado.addEventListener("click", result);