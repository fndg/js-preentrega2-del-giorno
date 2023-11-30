// VALORES DIVISAS

const valorDivisas = [
    {
        divisa: "dolar",
        valor: 990
    },
    {
        divisa: "euro",
        valor: 1000
    },
    {
        divisa: "real",
        valor: 80
    },
    {
        divisa: "yuan",
        valor: 60
    },
];

// =================================================

let continuar;

// =================================================
// FUNCONES

function conversion(ars, divisa){

    do{
        ars = parseFloat (prompt ("Ingrese el valor en pesos argentinos:"));
        divisa = prompt("¿A que divisa desea convertir sus pesos? Puede selecionar: Dolar, Euro, Real, Yuan.").toLowerCase();
        
        if (!isNaN(ars)){

            switch (divisa){
                case "dolar":
                    resultado = ars / valorDivisas[0].valor;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Dolares");
                    break;
                case "euro":
                    resultado = ars / valorDivisas[1].valor;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Euros");
                    break;
                case "real":
                    resultado = ars / valorDivisas[2].valor;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Reales");
                    break;
                case "yuan":
                    resultado = ars / valorDivisas[3].valor;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Yuanes");
                    break;
                case "":
                    alert("debe ingresar una divisa para poder hacer la conversion");
                    break;
                default:
                    alert("Lo siento, no disponemos el valor de esa divisa. Selecciona una de las mencionadas");
            }
        } else{
            alert("El monto en pesos debe ser ingresado en numeros");
        }
    continuar = prompt("¿Desea continuar con otra conversion? SI / NO").toLocaleLowerCase();
    } while(continuar === "si"){
        alert("Adios, que tengas buen dia!");

    }

}

// =================================================
// LLAMADO DE FUNCIONES

conversion();
