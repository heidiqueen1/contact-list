/*Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros.*/





/*Función de incluir contacto a mi lista*/

function addContact (){
  const contact = 
    {
    id: parseInt(prompt("Ingrese un número de id")),
    name: prompt("Ingrese el nombre del contacto"),
    surname: prompt("Ingrese el apellido del contacto"),
    cellphone: parseInt(prompt("Ingrese un número de teléfono")),
    location: [prompt("Ingrese Ciudad"), prompt("Ingrese país")]
    }
  

  myList.push (contact);  
}



/*Crea una función para borrar un contacto existente de la lista*/

function eraseContact (){
  const position = parseInt(prompt(" Introducir el número de la posición del contacto que desea borrar"));
  myList.splice(position, 1); 
}
/*Crea una función para imprimir en consola los contactos presentes en la lista*/
function print() {
    console.table (myList);
  }

/* Se inicia la ejecución de las funciones*/
/*Mi lista predefinida*/

let  myList = [
  {
   id: 1,
   name: "Heidi",
   surname: "Sanchez",
   cellphone: 099864455,
   location: ["Quito", "Azcasubi"]
  },
  {
    id: 2,
    name: "Moises",
    surname: "Dupuy",
    cellphone: 099869955,
    location: ["Caracas", "Venezuela"]
   },
   {
    id: 3,
    name: "Nelly",
    surname: "García",
    cellphone: 099869111,
    location: ["Guayaquil", "Ecuador"]
   }
  ];

print();
addContact();
print();
eraseContact();
print();





