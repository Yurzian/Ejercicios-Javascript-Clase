const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];

const unica = arr =>
{

    let resul=[];

    for (let key in arr)
    {
        if (!resul.includes(arr[key]))
        {
            resul.push(arr[key]);
        }
    }

    return resul;
} 

const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]