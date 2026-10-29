a) Busca en nodejs.org/api el nivel de estabilidad del módulo querystring y del constructor new Buffer(). 
¿Qué significa cada nivel y qué alternativa propone la documentación?

Es un módulo proporciona utilidades para analizar y formatear cadenas de consulta URL. Y el new Buffer() lo que hace es crear un buffer esto nos da los datos binarios.

b) En la firma fs.readdir(path[, options], callback), ¿qué parámetros son obligatorios y
cuáles opcionales? ¿Cómo lo sabes?

Los obligatorios son la ruta donde se encuentra el fichero (path) y la llamada a la funcion (callback) y opcional es el ['utf 8']

c) Crea extensiones.js, que reciba la ruta de una carpeta por la terminal (si no se indica, usa la carpeta del propio script) y muestre con console.table cuántos ficheros hay de cada
extensión. Los ficheros sin extensión se cuentan como "(sin extensión)". Usa fs.readdirSync y path.extname.



