//1

function swap(arr,v1,v2)
{
    let temporal=arr[v1];
    arr[v1]=arr[v2];
    arr[v2]=temporal;
}

function ordena(arr, numerico)
{
    let resul=arr;
    let menor=0;
    if (numerico) //Si usamos una ordenacion numerica
    {
        for (let i=0; i<arr.length; i++)
        {
            menor=i;

            for (let j=i;j<arr.length;j++)
            {
                if (resul[j] < resul[menor])
                {
                    menor = j;
                }
            }

            swap(arr,i,menor);//Creada por mi arriba
        }

        return resul;
    }
    else //Si usamos una ordenacion alfabetica
    {
        for (let i=0; i<arr.length; i++)
        {
            menor=i;

            for (let j=i;j<arr.length;j++)
            {
                if (String.resul[j] < String.resul[menor])
                {
                    menor = j;
                }
            }

            swap(arr,i,menor);//Creada por mi arriba
        }

        return resul;
    }
}

console.log (ordena([3, 2, 30, 4], true));  // devuelve un array nuevo ordenado numéricamente [2, 3, 4, 30] 

console.log (ordena([3, 2, 30, 4], false));  // devuelve un array nuevo ordenado alfabéticamente [2, 3, 30, 4]