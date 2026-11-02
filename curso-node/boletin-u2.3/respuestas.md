a) Busca en nodejs.org/api el nivel de estabilidad del módulo querystring y del constructor new Buffer(). 
¿Qué significa cada nivel y qué alternativa propone la documentación?

Es un módulo proporciona utilidades para analizar y formatear cadenas de consulta URL. Y el new Buffer() lo que hace es crear un buffer esto nos da los datos binarios.

b) En la firma fs.readdir(path[, options], callback), ¿qué parámetros son obligatorios y
cuáles opcionales? ¿Cómo lo sabes?

Los obligatorios son la ruta donde se encuentra el fichero (path) y la llamada a la funcion (callback) y opcional es el ['utf 8']

c) Crea extensiones.js, que reciba la ruta de una carpeta por la terminal (si no se indica, usa la carpeta del propio script) y muestre con console.table cuántos ficheros hay de cada
extensión. Los ficheros sin extensión se cuentan como "(sin extensión)". Usa fs.readdirSync y path.extname.





Ejercicio 2 

e) ¿Por qué el programa termina solo después de clearInterval? ¿Qué pasaría si no lo
llamaras?

Utilizamos un sistema llamado Event Loop (bucle de eventos), que permite gestionar operaciones asíncronas y ejecutar funciones cuando corresponde.


Ejercicio 4

a) stdout.write() muestra la pregunta y stdin.once('data') recoge el nombre del archivo.

b) createReadStream() lee el archivo y createWriteStream() escribe la copia en mayúsculas.

c) finish indica que se ha terminado de escribir el archivo y muestra los bytes escritos.

d) error detecta si hay algún problema y process.exit(1) termina el programa con error.

e) No podemos usar directamente lectura.pipe(escritura) porque copiaría el texto tal cual, sin convertirlo a mayúsculas. Por eso usamos data y toUpperCase().

No hace falta process.exit() al final porque Node.js termina solo cuando acaba de trabajar.


Ejercicio 6

e) ¿Por qué aparece también GET /favicon.ico en la terminal?

Porque el navegador solicita automáticamente el icono de la página web (favicon).

¿Qué ocurre si arrancas el servidor dos veces en el mismo puerto?

El segundo servidor no puede arrancar porque el puerto ya está ocupado por el primero. Aparece un error eaddrinuse.