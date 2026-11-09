1. Para el servidor, vuelve a lanzarlo y visita /firmas. ¿Qué ha pasado con las firmas y por qué?

Las firmas han desaparecido porque se guardan en un array en memoria RAM. Cuando se reinicia el servidor, las variables vuelven a inicializarse y el array firmas vuelve a estar vacío.



2. ¿Por qué let cuerpo = '' tiene que declararse dentro de la función que atiende cada petición
y no al principio del fichero?

Porque cada petición POST tiene sus propios datos. Si declaramos cuerpo fuera de la función, varias peticiones podrían mezclar sus datos. Al declararlo dentro, cada petición tiene su propia variable independiente.

3. Si el formulario tuviera required en todos sus campos, ¿haría falta validar igualmente en el
servidor? Razona la respuesta.

Sí, porque required solamente valida los campos en el navegador. Un usuario podría saltarse esa comprobación y enviar datos directamente al servidor. Por eso siempre debemos validar los datos también en el servidor.

4. Firma con el nombre <h1 style="color:red">Hola</h1>. ¿Qué aparece en la página de
agradecimiento? ¿Por qué es un problema de seguridad?

Con la función escaparHTML() que hemos añadido, aparecerá el texto como contenido literal, no como un encabezado rojo.