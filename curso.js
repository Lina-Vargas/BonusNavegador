const fs = require('fs');
const express = require('express')
const app = express()

let cursos = [{
	id: 1,
	nombre: 'node js',
	duracion: '2 meses',
	valor: 120000
},

{
	id: 2,
	nombre: 'java',
	duracion: '3 meses',
	valor: 150000
},

{
	id: 3,
	nombre: 'python',
	duracion: '2 meses',
	valor: 150000
}];

let mostrarCursos = () => {
	console.log('\n' + 'Los Cursos son: ' + '\n'); 
	let n = cursos.length;
	for (i = 0; i < n; i++) {	
		(function(i){
  		setTimeout(function(){
  		console.log('Id del Curso: ' + cursos[i].id);
		console.log('Nombre: ' + cursos[i].nombre);
		console.log('Duración: ' + cursos[i].duracion);
		console.log('Valor: ' + cursos[i].valor +'\n');
  		}, 2000 * (i + 1));
  		})(i);	
	}
	return ' '; 
}

let buscarCurso = (id) => {
	let curso = cursos.find (idCurso => idCurso.id === id);
	//console.log(curso);
	return curso;
}

/*let crearArchivo = (curso, nombreEstudiante, idEstudiante) =>{
	texto = 'El estudiante con nombre ' + nombreEstudiante + ' identificado con cédula Nro. ' + idEstudiante + '\n' + ' Se ha matriculado en el curso ' + 
 	curso.nombre + '\n' + ' Con una duración de ' + curso.duracion + ' y un costo de $' + curso.valor
	fs.writeFile('Prematricula.txt', texto, (err)=>{
		if (err) throw (err);
		console.log('se ha creado el archivo exitosamente')
	});
}
*/

let imprimir = (curso, nombreEstudiante, idEstudiante) =>{
texto = ('El estudiante con nombre <b>' + nombreEstudiante + '</b><br> Identificado con cédula Nro. <b>' + idEstudiante + '</b><br> Se ha matriculado en el curso <b>' + curso.nombre + '</b><br> Con una duración de <b>' + curso.duracion + '</b><br> y un costo de COP <b>' +  'curso.valor </b>'); 	
/*fs.writeFile('Prematricula.txt', texto, (err)=>{
		if (err) throw (err);
		mensaje = ('se ha creado el archivo exitosamente')
	});*/
}

app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)


module.exports = {
	cursos,
	mostrarCursos,
	buscarCurso,
	imprimir	
	//crearArchivo
};