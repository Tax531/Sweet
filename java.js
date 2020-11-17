'use strict'

function Probar() {
var dni= document.getElementById('dni').value;
var fnac=document.getElementById('fnac').value;
var nombre=document.getElementById('nombre').value;
var apellido=document.getElementById('apellido').value;
var radio=document.getElementById('H').value;
var radiotwo=document.getElementById('M').value;
var select=document.getElementById('nacionalidad');
console.log(dni, nombre, apellido, radio , radiotwo , select ); 
$.post ('modulo.php', {dni:dni , fnac:fnac , nombre:nombre , apellido:apellido , radio:radio , radiotwo:radiotwo , select:select})
swal({
title: "Se guardo!",
text: "su informacion fue guardada satisfactoriamente",
icon: "success",
});
}