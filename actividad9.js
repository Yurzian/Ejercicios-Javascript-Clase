const miObjeto = {
    nombre: "Miguel",
    lugar: 'En un lugar de la Mancha',
    nombreCompleto: function () {
            return 'Miguel de Cervantes Saavedra';
    },
    edad: 20,
    hijos: function () {
        return "Jose y Pepa";
    }
};

const keys = obj =>
{

    let resul=[];

    for (let key in obj)
    {
        if (typeof(obj[key])!="function")
        {
            resul.push(key);
        }
    }
    return resul;
} 

const propiedades = keys(miObjeto);
console.log(propiedades); // deberá mostrar el array: ["nombre", "lugar"];