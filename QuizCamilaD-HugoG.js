var contador=0
function addItem() {
    const producto= document.getElementById("producto").value;
    if (producto.length>0) {
        contador++;
        console.log(producto);
        const seccion= document.getElementById("lista");
        const listaElementos= document.getElementById("listaElementos");
        const elementos= document.createElement("li");
        const botonRealizado= document.createElement("button");
        const botonEliminar= document.createElement("button");
        const linea= document.createElement("hr");

        elementos.setAttribute("id",contador);
        botonRealizado.setAttribute("class",contador);
        botonEliminar.setAttribute("class",contador);
        botonRealizado.setAttribute("onclick","marcarItem(this)");
        botonEliminar.setAttribute("onclick","eliminarItem(this)")

        elementos.textContent=producto;
        botonRealizado.innerHTML="&checkmark;";
        botonEliminar.innerHTML="&#128465;";

        elementos.appendChild(botonRealizado);
        elementos.appendChild(botonEliminar);
        listaElementos.appendChild(elementos);
        listaElementos.appendChild(linea);
        seccion.appendChild(listaElementos);

        document.getElementById("producto").value = "";
    } 
    else {
        alert("no ingresaste un producto");
    }
}
function eliminarItem(boton) {
    const atributo= boton.getAttribute("class");
    const elementoEliminar= document.getElementById(atributo);
    elementoEliminar.setAttribute("style","display:none")
    const hr = elementoEliminar.nextSibling;
    hr.style.display = "none";
}
function marcarItem(boton) {
    if (boton.style.backgroundColor === "rgb(177, 250, 135)") {
        boton.style.backgroundColor = "";
    } else {
        boton.style.backgroundColor = "rgb(177, 250, 135)";
    }
}