//1

function swap(arr,v1,v2)
{
    let temporal=arr[v1];
    arr[v1]=arr[v2];
    arr[v2]=temporal;
}

function ordena(arr, numerico)
{
    let menor=0;
    let resul=arr;
    
    for (let i=0; i<arr.length; i++)
        {
            menor=i;

            for (let j=i;j<arr.length;j++)
            {
                if (numerico)
                {
                    if (resul[j] < resul[menor])
                    {
                        menor = j;
                    }
                }
                else
                {
                    if (String(resul[j]) < String(resul[menor]))
                    {
                        menor = j;
                    }
                }

            }

            swap(arr,i,menor);//Creada por mi, arriba
        }

        return resul;
}
console.log("1.-");

console.log (ordena([3, 2, 30, 4], true));  // devuelve un array nuevo ordenado numéricamente [2, 3, 4, 30] 

console.log (ordena([3, 2, 30, 4], false));  // devuelve un array nuevo ordenado alfabéticamente [2, 3, 30, 4]

////////////////////////////////////////////////////////////////////

//2

function tajada (arr, inicio, fin)
{
    if (Array.isArray(arr) && arr.length>0 && typeof inicio != "number" && inicio > 1 && typeof fin != "number" && fin > 1)
    {
        let resul=[];

        for (let i=inicio;i < fin; i++)
        {
            resul.push(arr[i]);
        }

        return resul;
    }
    else
    {
        console.log("ERROR, debes pasar un array y dos numeros");
    }
    
}

console.log("\n2.-");

console.log (tajada([3,2,30,4], 1, 3)); // Devuelve un array nuevo [2, 30];

///////////////////////////////////////////////////////////////////

//3

function romboHueco(num)
{
    if (typeof num == "number" && num > 1)
    {

        //PARTE DE ARRIBA Y MEDIO
        let espacios=num-1;
        let asteriscos=1;
        let string;
        let rombo="";

        for (let i=1;i<=num;i++)
        {
            string="";

            for (let j=1;j<=espacios;j++)
            {
                string+=" ";
            }

            for (let j=1;j<=asteriscos;j++)
            {
                if (j==1 || j==asteriscos)
                {
                    string+="*";
                }
                else
                {
                    string+=" ";
                }
            }

            asteriscos+=2;
            espacios-=1;

            rombo+= string+"\n";

        }

        //PARTE DE ABAJO
        espacios=1;
        asteriscos=(num*2)-3;

        for (let i=1;i<=num-1;i++)
        {
            string="";
            for (let j=1;j<=espacios;j++)
            {
                string+=" ";
            }

            for (let j=1;j<=asteriscos;j++)
            {
                if (j==1 || j==asteriscos)
                {
                    string+="*";
                }
                else
                {
                    string+=" ";
                }
            }

            asteriscos-=2;
            espacios+=1;
            rombo+=string + "\n";
        }
        console.log(rombo);
    }
    else
    {
        console.log("ERROR, el valor debe ser un número.");
    }
}

console.log("\n3.-");

romboHueco(NaN);