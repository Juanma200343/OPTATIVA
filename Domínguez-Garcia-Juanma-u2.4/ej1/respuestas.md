Preguntas
1. Al recargar, en la terminal aparece a veces GET /favicon.ico. ¿Quién hace esa petición y qué le responde tu servidor?

La petición la realiza automáticamente el navegador para buscar el icono de la página web (favicon), que aparece en la pestaña del navegador.

2. Si escribes la hora directamente como valor dentro del objeto de rutas, siempre sale la misma. ¿Por qué ocurre?

Porque el objeto de rutas se crea una sola vez cuando arranca el servidor, por lo que la hora se calcula únicamente en ese momento y se queda guardada.