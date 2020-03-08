function mostrarInformacionTarea(tarea, prioridad){
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}


const persona ={
    nombre: 'jhon',
    profesion : 'desarrollo web',
    edad : '26'
}
console.log(persona);
//const mostrarcliente=mostrarInformacionTarea(persona.tarea,
  //  persona.profesion);
    //console.log(mostrarcliente)

function tarea(nombre,urgencia){
    this.nombre = nombre;
    this.urgencia=urgencia;
}


const tarea1 = new tarea('aprender javascripy react','urgente');
console.log(tarea1)
const mostrarInfo=mostrarInformacionTarea(tarea1.nombre,tarea1.urgencia);

console.log(tarea1)

