let datos = [{nombre:"Camila", edad: 20, peso: 60, condicion:"Peso normal", alergias:"No"},{
    nombre:"Luis", edad: 40, peso: 90, condicion:"Sobre peso", alergias:"No"},{
     nombre:"Claudia", edad: 18, peso: 50, condicion:"Peso normal", alergias:"Si"},{
         nombre:"Manuel", edad: 20, peso: 52, condicion:"Bajo peso normal", alergias:"Si"},{
             nombre:"Rodolfo", edad: 10, peso: 30, condicion:"Peso normal", alergias:"No"}];

let cantidadpersonas = datos.length;

let mayoresedad = 0;
for(let i=0; i<cantidadpersonas;i++){
    if(datos[i].edad>=18){
        mayoresedad++;
    }
}
console.log(mayoresedad)

let sobrepeso = 0;
for(let i=0; i<cantidadpersonas;i++){
    if(datos[i].peso>=90){
        sobrepeso++;
    }
}
console.log(sobrepeso)

let promedioedad = 0;
for(let i=0; i<cantidadpersonas; i++){
    promedioedad += datos[i].edad;
}

let promedio = promedioedad/cantidadpersonas;
console.log(promedio)

function compare( a, b ) {
    if ( a.nombre < b.nombre ){
      return -1;
    }
    if ( a.nombre > b.nombre ){
      return 1;
    }
    return 0;
  }
  
  datos.sort( compare );
  console.log(datos); 