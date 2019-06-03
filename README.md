#Primera Entrega

Este trabajo se ejecuta inicialmente por consola, para hacerlo se debe correr primero "npm install" una vez descargado el proyecto.

La clase principal se llama matrícula, para poner en marcha el programa se debe digitar "node matricula" en el simbolo del sistema desde la carpeta del proyecto, de esta forma se listarán los cursos, mostrando la información básica de cada uno (id, nombre, duración y costo)

Para realizar la prematricula en el curso debe digitar "node matricula inscribir" especificando las siguientes opciones:

Options:
  --help           Show help                                           [boolean]
  --version        Show version number                                 [boolean]
  --id, -i                                                            [required]
  --nombre, -n                                                        [required]
  --documento, -c                                                     [required]

Si la operación fue exitosa, podrá ver en el navegador de su computador los datos del estudiante, y los del curso en que realizó  la inscripción, ingresando localhost:3000 como url, enla barra de direcciones.

En caso contrario, en el simbolo del sistema se le informará que los datos están incompletos o que el curso no existe, segú  sea el caso.





