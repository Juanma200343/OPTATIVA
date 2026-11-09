1. Al cargar / aparecen dos peticiones en la terminal. ¿Cuáles son y por qué?

Aparecen GET / y GET /estilos.css. La primera la realiza el navegador para cargar el HTML y la segunda para descargar la hoja de estilos CSS que está enlazada en el HTML.

2. Imagina que tienes que servir un vídeo de 500 MB. ¿Qué problema tendría fs.readFile y qué alternativa de las vistas en clase usarías?

fs.readFile carga el fichero completo en memoria RAM antes de enviarlo. Esto consumiría mucha memoria y podría ralentizar el servidor. Utilizaría fs.createReadStream(), que permite leer y enviar el archivo poco a poco sin cargarlo entero en memoria.


