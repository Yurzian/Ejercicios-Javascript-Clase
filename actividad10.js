const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];

const unica = arr =>
{

    let resul=[];

    for (let valor of arr)
    {
        if (!resul.includes(valor))
        {
            resul.push(valor);
        }
    }

    return resul;
} 

const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]