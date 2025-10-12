const readline = require("readline");
const fs =require("fs")
var ai="\x1b[32mStultysBot:\x1b[0m"
var us="\x1b[37mUsuario:\x1b[0m"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//version 0.2
var texto = fs.readFileSync("index.Stultys","utf-8")
texto = texto.replace(/(\r\n|\n)/g,"\x1b[0m")
var terminado=false

console.clear()
console.log('\x1b[90mporfavor use este bot con responsabilidad,no nos hacemos cargo del uso que le de usted\x1b[0m')
function prompt() {


rl.question(us,(mensaje)=>{




if (mensaje==="/entrenar") {
console.clear()
console.log('\x1b[90ma continuacion un pequeño cuestiorario :-)\x1b[0m')
var x=""
rl.question("¿que palabra quieres añadir?",(p)=>{
x+="*"+p


rl.question("¿tu palabra tiene algun sinónimos?si son varios agregale comas y si no tiene dejalo en blanco",(si)=>{
if (si!==undefined) {
x+=":"+si    
}
texto+=x
console.log(texto)
})


rl.question("¿tu palabra tiene algun sinónimos?si son varios agregale comas y si no tiene dejalo en blanco",(si)=>{
if (si!==undefined) {
x+=":"+si    
}
texto+=x
console.log(texto)
})

})



}    
var msg=mensaje.split(" ")
var palabras=texto.split("*")

//console.log(msg);
//console.log(palabras);
for (let i = 0; i < msg.length; i++) {
for (let e = 0; e < palabras.length; e++) {
 if (palabras[e] == "") continue
var partes = palabras[e].split("$")
var parte =  partes[0].split(":")[0]



var sub = partes.slice(1)
 var variantes = parte.split(",").map(v => v.split("/")).flat()

var respuestas = partes[0].split(":")[1].split(",")
var respuesta = respuestas[Math.floor(Math.random()*respuestas.length)]
for (let n = 0; n < variantes.length; n++) {





if (msg[i].startsWith((variantes[n]).replace(/;.*?;/g, ''))) {
//console.log(msg)
var variantesx=variantes[n]

var definicion = variantesx.match(/;(.*?);/);
if (definicion) {
console.log("\x1b[90m"+definicion[1]+"")
}
    variantesx = variantesx.replace(/;.*?;/g, '');


terminado=true
var respondio=false
var resto =  mensaje.toLowerCase(); 
for (let s = 0; s < sub.length; s++) {

var subparte = sub[s].split(":")[0].trim()
 var otros = sub[s].split(":")[1].split(",").map(r => r.trim())
var subrespuesta =   otros[Math.floor(Math.random() * otros.length)]
if (resto.includes(subparte)) {

        console.log(ai, subrespuesta)
        respondio = true
        terminado = true
        break;
    }


}


if (!respondio) {
console.log(ai, respuesta)
terminado=true
}
}
}
}

}
if (!terminado) {
console.log(ai+"perdon no reconosco ese patron/palabra")
console.log('\x1b[90mcon el comando " /entrenar " puedes agregar palabras nuevas\x1b[0m')

}
prompt()
})

}

prompt()
