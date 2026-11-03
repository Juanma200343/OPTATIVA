const http = require('http')

const servidor = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost')
    const sobreMi = 'http://localhost/sobre-mi'
    const aficiones = 'http://localhost/aficiones'
    const hora = 'http://localhost/hora'
 res.setHeader('Content-Type', 'text/html; charset=utf-8')
 if (url.pathname === '/') {
    return res.end(`<h1>Bienvenido al servidor de Juanma</h1>
            <a href="/sobre-mi">Sobre mí</a>
            <a href="/aficiones">Mis aficiones</a>
            <a href="/hora">La hora</a>`)

 }
 if(url.pathname === '/sobre-mi'){
     const nombre = url.searchParams.get('nombre')|| 'desconocido'
return res.end(`<h1>Mi nombre es: ${nombre}</h1>
    <p>Y me gustan los videojuegos y jugar al tenis. Con este párrafo aprenderás de mí.</p>`) 
}
 if(url.pathname === '/aficiones'){
    return res.end(`<ul>
            <li>Jugar videojuegos</li>
            <li>Salir al parque</li>
            <li>Leer manga</li>
        </ul>`)
 }
 if(url.pathname === '/hora'){
    const hora = new Date().toLocaleDateString('es-ES')
    return res.end('<h1>Son las: ${hora}</h1>')//Poner las comillas siempre
 }


})
servidor.listen(3000, () => console.log('Puerto 3000 escuchando'))