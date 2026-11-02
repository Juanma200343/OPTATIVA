
function media(lista) {
  return lista.reduce((suma, alumno) => suma + alumno.nota, 0) / lista.length
}

function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5)
}

function mejor(lista) {
  return lista.reduce((mejorAlumno, alumno) =>
    alumno.nota > mejorAlumno.nota ? alumno : mejorAlumno
  )
}

module.exports = { media, aprobados, mejor }