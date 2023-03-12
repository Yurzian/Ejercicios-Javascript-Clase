//He intentado hacerlo para cada ususario pero no lo he logrado, solo me lo hace en el primero, no sé como hacerlo
//He utilizado primero el fetch como pedías y después el GET para hacerlo de las dos formas

let listaUsuarios = document.getElementById("listaUsuarios");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        
        function getData () {
            return new Promise ((resolve,reject) => {
                if (data.lenght === 0) {
                    reject (new Error("Data is empty"))
                }
                setTimeout(()=> {
                    resolve (data);
                },2000)
            })
        }

        async function fetchingData() {
            const usuarios = await getData();

            for (let usuario of usuarios) {
                let listaItem = document.createElement("LI");
                listaItem.innerHTML = `${usuario.id} - ${usuario.name} 
                    <br><button id="boton" class="${usuario.id}">Ver Tareas</button>
                    <ul id="listaTareasPendientes" class="${usuario.id}"></ul><br>
                    <ul id="listaTareasCompletadas" class="${usuario.id}"></ul><br><br>`
                listaUsuarios.appendChild(listaItem);
            }

            let boton = document.getElementById ("boton");
    
            boton.addEventListener("click", (e) => {
                
                fetch('https://jsonplaceholder.typicode.com/users/1/todos')
                .then(response => response.json(

                ))
                .then(data => {

                    function getData () {
                        return new Promise ((resolve,reject) => {
                            if (data.lenght === 0) {
                                reject (new Error("Data is empty"))
                            }
                            setTimeout(()=> {
                                resolve (data);
                            },2000)
                        })
                    }
            
                    async function fetchingData() {
                        const tareas = await getData();

                        let listaTareasPendientes = document.getElementById("listaTareasPendientes");
                        let listaTareasCompletadas = document.getElementById("listaTareasCompletadas");

                        if (listaTareasCompletadas.textContent != "" || listaTareasPendientes.textContent != "")
                        {
                            listaTareasPendientes.innerHTML = "";
                            listaTareasCompletadas.innerHTML = "";
                            return;
                        }
                        listaTareasPendientes.innerHTML = "<strong>Tareas pendientes:</strong><br>";
                        listaTareasCompletadas.innerHTML = "<strong>Tareas completadas:</strong><br>";
            
                        for (let tarea of tareas) {
                            let listaItem = document.createElement("LI");
                            listaItem.textContent = `${tarea.id} - ${tarea.title}`
            
                            if(tarea.completed == true) listaTareasCompletadas.appendChild(listaItem);
                            else listaTareasPendientes.appendChild(listaItem);
                        }
                    }

                    fetchingData();

                })
                .catch(error => console.log(error));
            
            });

        }

        fetchingData();

    })
    .catch(error => console.log(error));
