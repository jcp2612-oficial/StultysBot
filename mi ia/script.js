const readline = require("readline");
var ai="StultysBot:"
var us="Usuario:"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const texto = `*hola,hey:buenas,hola!*comoestas,que tal:bien,mal,normal,neutros*soy/hombre/mujer:ok,que bueno`
var terminado=false
rl.question(us,(mensaje)=>{

var msg=mensaje.split(" ")
var palabras=texto.split("*")
//console.log(msg);
//console.log(palabras);
for (let i = 0; i < msg.length; i++) {
for (let e = 0; e < palabras.length; e++) {
 if (palabras[e] == "") continue
var parte =  palabras[e].split(":")[0]
 var variantes = parte.split(",").map(v => v.split("/")).flat();

var respuestas = palabras[e].split(":")[1].split(",")
var respuesta = respuestas[Math.floor(Math.random()*respuestas.length)]
for (let n = 0; n < variantes.length; n++) {
if (msg[i].startsWith((variantes[n]))) {
//console.log(msg)
var variantesx=variantes[n]
console.log(ai, respuesta)
terminado=true
}
}
}

}
if (!terminado) {
console.log("perdon no reconosco ese patron/palabra")
}
})

