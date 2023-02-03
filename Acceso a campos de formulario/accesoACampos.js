const formulario = document.forms[0];

function comprobarFormulario (event) {
    event.preventDefault();
    
    for (element of formulario.elements) {

       tipo = element.type;
       console.log(tipo);
       divValores = document.getElementById("valores");
       divValores.innerHTML = "";

       if (tipo === "text" || tipo === "password" || tipo === "email"
        || tipo === "tel" || tipo === "number" || tipo === "url" 
        || tipo === "search" || tipo === "color" || tipo === "textarea"
        || tipo === "time" || tipo === "date" || tipo === "datetime-local" 
        || tipo === "week" || tipo === "month" || tipo === "range" 
        || tipo === "file") 
       {
            if (element.value){
                divValores.innerHTML += "<br>" + element.name + ": " + element.value;
            }
            else {
                element.focus();
                divValores.innerHTML = "";
            }
       }
       else if (tipo === "radio")
       {
            if (element.checked)
            {
                divValores.innerHTML += "<br>" + element.name + ": " + element.value;
            }
       }
       else if (tipo === "checkbox")
       {
            if (element.checked)
            {
                divValores.innerHTML += "<br>" + element.name + ": " + element.value;
            }
       }
       else if (element.name === "datalist")
       {
            if (element.value){
                divValores.innerHTML += "<br>" + element.name + ": " + element.value;
            }
            else {
                element.focus();
                divValores.innerHTML = "";
            }
       }
       else if (element.name === "Seleccion")
       {
            if (element.value){
                divValores.innerHTML += "<br>" + element.name + ": " + element.value;
            }
            else {
                element.focus();
                divValores.innerHTML = "";
            }
       }
       else if (element.name === "drawfs")
       {
        if (element.value)
        {
            divValores.innerHTML += "<br>" + element.name + ": ";
            for (opcion of element)
            {
                if (opcion.selected)
                {
                    divValores.innerHTML += opcion.value + " ";
                }
            }
        }
        else
        {
            element.focus();
            divValores.innerHTML = "";
        }
       }

    }
}

formulario.addEventListener ("submit", comprobarFormulario);