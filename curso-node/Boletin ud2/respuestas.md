a) ¿En qué orden se mostrarán las letras A, B, C y D? Razona la respuesta utilizando la pila de
llamadas, la cola de callbacks y el event loop.

Razonamiento con la pila de llamadas, la cola de callbacks y el Event Loop:
1. Pila de llamadas (Call Stack): Node.js ejecuta el código de forma secuencial. Primero aparece A.
2. Temporizador: setTimeout() programa el callback que mostrará B. Aunque el tiempo sea 0, el callback no se ejecuta inmediatamente.
3. Lectura asíncrona: fs.readFile() inicia la lectura del archivo y registra un callback para mostrar C cuando termine.
4. Lectura síncrona: fs.readFileSync() bloquea el hilo principal hasta terminar de leer el archivo. Después, console.log('D', texto.length > 0) muestra D true.
5. Event Loop: cuando el código síncrono ha terminado, Node.js puede ejecutar los callbacks pendientes. El temporizador y la lectura asíncrona compiten según las fases del Event Loop y el momento en que finaliza la lectura.

Por eso, A siempre aparece antes que D, y tanto B como C aparecen después de D. El orden relativo entre B y C puede variar según las condiciones de ejecución.

b) Ejecútalo y comprueba tu respuesta. ¿Qué instrucción es bloqueante? ¿Cuáles son no
bloqueantes? Explica la diferencia.

- fs.readFileSync(__filename, 'utf8') es bloqueante porque detiene la ejecución hasta que termina de leer el archivo.
- fs.readFile(__filename, 'utf8', callback) es no bloqueante porque permite continuar con las instrucciones siguientes mientras se lee el archivo.
- setTimeout(() => console.log('B'), 0) es no bloqueante porque programa un callback para ejecutarlo posteriormente.

La diferencia es que las operaciones bloqueantes detienen el hilo principal, mientras que las no bloqueantes permiten que Node.js siga ejecutando otras tareas.


c) Cambia __filename por 'no-existe.txt' en la llamada a readFile y añade al callback la
gestión del error con el parámetro err (convención «error primero»). ¿Qué muestra ahora? ¿Se
detiene el programa?

No. El error de fs.readFile() se entrega al callback y se gestiona mediante if (err). La instrucción return termina únicamente ese callback, no todo el programa. Por tanto, las instrucciones restantes pueden continuar ejecutándose.

La lectura síncrona de __filename sigue funcionando, por lo que también se mostrará D true. El orden del mensaje de error respecto a B puede variar.

Esta forma de gestionar errores sigue la convención de Node.js de error primero (error-first callback), en la que el primer parámetro del callback contiene el error si se produce.



d) Añade al final console.log(process.version) y console.log(document.title). ¿Qué
ocurre con cada una? Relaciónalo con las diferencias entre JavaScript en el navegador y en
Node.js.

El objeto process está disponible en Node.js y permite consultar la versión instalada mediante process.version. En cambio, document pertenece al entorno del navegador y permite acceder al documento HTML. Al ejecutar console.log(document.title) en Node.js se produce un ReferenceError, porque document no está definido. Como el error no se captura, el programa termina su ejecución en ese punto.

//Ejercicio 2

a) Explica por qué este código es un ejemplo de callback hell. ¿Por qué cada readFile/writeFile
tiene que ir dentro del anterior?

Se llama callback hell (infierno de callbacks) porque hay varias funciones callback anidadas unas dentro de otras, haciendo que el código tenga muchos niveles de indentación y sea más difícil de leer y mantener.

En el programa original:
1. Se lee config.json.
2. Dentro del callback de esa lectura, se lee alumnos.txt.
3. Dentro del callback de la segunda lectura, se escribe informe.txt.
Cada operación tiene que ir dentro de la anterior porque necesitamos sus resultados. Primero hay que leer la configuración para conocer el nombre del archivo de entrada y salida. Después hay que leer el archivo de alumnos para contar las líneas. Finalmente, se puede escribir el informe.

Si ejecutáramos estas operaciones sin esperar a que terminara la anterior, podríamos intentar contar las líneas antes de tener el contenido del archivo o escribir el informe antes de calcularlo.

b) Reescríbelo en procesar-then.js usando fs/promises con .then() y un único .catch().
c) Reescríbelo en procesar-async.js con una función async, await y try/catch.
Todo en su respectivo codigo.

d) Borra (o renombra) alumnos.txt y ejecuta las tres versiones. ¿En cuántos sitios hay que
gestionar el error en cada una?

Esta en alumnos.txt

e) (Ampliación) Crea una función esperar(ms) que devuelva una promesa (new Promise) y úsala
para que el programa espere 1 segundo antes de escribir el informe.

En procesar.asynsc.js

