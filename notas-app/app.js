
const fs = require('fs/promises')
const { media, aprobados, mejor } = require('./notas')
const pc = require('picocolors')

async function main() {
  try {
    const datos = await fs.readFile('notas.json', 'utf8')
    const lista = JSON.parse(datos)

    const listaAprobados = aprobados(lista)
    const mejorAlumno = mejor(lista)

    console.log('\nRESUMEN DE NOTAS')
    console.log('----------------')
    console.log(`Nota media: ${media(lista).toFixed(2)}`)
    console.log(`Número de aprobados: ${listaAprobados.length}`)
    console.log(`Mejor alumno: ${mejorAlumno.nombre}`)

    console.log('\nNOTAS DE LOS ALUMNOS')
    console.log('-------------------')

    lista.forEach(alumno => {
      const linea = `${alumno.nombre}: ${alumno.nota}`
      if (alumno.nota >= 5) {
        console.log(pc.green(linea))
      } else {
        console.log(pc.red(linea))
      }
    })
  } catch (err) {
    console.error('Error:', err.message)
  }
}

main()
