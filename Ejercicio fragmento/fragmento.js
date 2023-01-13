import {posts} from "./posts.js";

const contenedor = document.getElementById("contenedor");
let plantilla;

for (let i=0; i<posts.length-1; i++)
{
    if (i%2 == 0)
    {
        plantilla = `
        <article>
            <h3>${posts[i].title}</h3>
            <p>${posts[i].body}</p>
        </article> <hr>`;
        contenedor.innerHTML += plantilla;
    }
    else
    {   
        let entrada = document.createElement("article");
        let titulo = document.createElement("h3");
        let contenido = document.createElement("p");

        titulo.append(posts[i].title);
        contenido.append(posts[i].body);
        entrada.append(titulo,contenido);
        entrada.append(document.createElement("hr"));
        contenedor.append(entrada);
    }

}
