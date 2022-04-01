/*Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros.*/



/*Mi lista predefinida*/
let myLista = ["Heidi Sánchez","Jesús Naja", "Hector Sánchez"];

/*Función de incluir contacto a mi lista*/

function incluirContacto (){
  myLista.push ("Aithana Chaves");  
}

/*Crea una función para borrar un contacto existente de la lista*/

function borrarContacto (){
  myLista.pop ("Aithana Chaves"); 
}
/*Crea una función para imprimir en consola los contactos presentes en la lista*/
function imprimir() {
    console.log (myLista);
  }

/* Se inicia la ejecución de las funciones*/

incluirContacto();
imprimir();

borrarContacto();
imprimir();


