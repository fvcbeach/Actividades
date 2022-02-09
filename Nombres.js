let listapersonas = [{nombre: "daniela", edad: 20}, {nombre: "miguel", edad: 30}, {nombre: "Ignacia", edad: 15},{nombre: "Juan", edad: 42}, {nombre: "Emilia", edad: 12}];

let cantidadpersonas = listapersonas.length;
document.write(cantidadpersonas);
console.log(cantidadpersonas)

let cantidadjuan = 0;
for(let i=0; i<cantidadpersonas; i++){
    if(listapersonas[i].nombre==="Juan"){
        cantidadjuan++;
        document.write(cantidadjuan);
        console.log(cantidadjuan)
    }
}

let promedioedad = 0;
for(let i=0; i<cantidadpersonas; i++){
    promedioedad +=listapersonas[i].edad;
}
let = promedio = promedioedad/cantidadpersonas;
document.write(promedio);
console.log(promedio);

let mayoresedad = 0;
for(let i=0; i<cantidadpersonas;i++){
    if(listapersonas[i].edad>=18){
        mayoresedad++;
    }
}
document.write(mayoresedad)
console.log(mayoresedad)