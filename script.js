function buscarSistema() {
  const uso = document.getElementById("uso").value;
  const apertura = document.getElementById("apertura").value;
  const estilo = document.getElementById("estilo").value;

  const uwProyecto = parseFloat(document.getElementById("uw").value);
  const rwProyecto = parseFloat(document.getElementById("rw").value);

  const necesitaRPT = document.getElementById("rpt").checked;
  const necesitaPassivhaus = document.getElementById("passivhaus").checked;
  const necesitaRC2 = document.getElementById("rc2").checked;
  const necesitaRC3 = document.getElementById("rc3").checked;

  let candidatos = SISTEMAS.filter(function(sistema) {
    if (!sistema.usos.includes(uso)) {
      return false;
    }

    if (!sistema.aperturas.includes(apertura)) {
      return false;
    }

    if (!sistema.estilos.includes(estilo)) {
      return false;
    }

    if (!isNaN(uwProyecto) && sistema.uw_max > uwProyecto) {
      return false;
    }

    if (!isNaN(rwProyecto) && sistema.rw_min < rwProyecto) {
      return false;
    }

    if (necesitaRPT && !sistema.rpt) {
      return false;
    }

    if (necesitaPassivhaus && !sistema.passivhaus) {
      return false;
    }

    if (necesitaRC2 && !sistema.rc2) {
      return false;
    }

    if (necesitaRC3 && !sistema.rc3) {
      return false;
    }

    return true;
  });

  const resultado = document.getElementById("resultado");

  if (candidatos.length === 0) {
    resultado.innerHTML = `
      <h2>No se ha encontrado un sistema compatible</h2>
      <p>
        Prueba a modificar alguno de los requisitos del proyecto.
        Puede que la transmitancia, la acústica o la seguridad solicitada sean demasiado exigentes para los sistemas disponibles.
      </p>
    `;
    return;
  }

  candidatos.sort(function(a, b) {
    return calcularPuntuacion(b) - calcularPuntuacion(a);
  });

  const mejorSistema = candidatos[0];

  mostrarSistema(mejorSistema, candidatos);
}

function calcularPuntuacion(sistema) {
  let puntos = 0;

  if (sistema.rpt) puntos += 10;
  if (sistema.passivhaus) puntos += 20;
  if (sistema.rc2) puntos += 10;
  if (sistema.rc3) puntos += 15;

  puntos += sistema.rw_min;
  puntos += sistema.agua_clase * 5;
  puntos += sistema.aire_clase * 5;

  puntos += Math.round((2.5 - sistema.uw_max) * 20);

  return puntos;
}

function mostrarSistema(sistema, candidatos) {
  const resultado = document.getElementById("resultado");

  let prestacionesHTML = "";

  sistema.prestaciones.forEach(function(fila) {
    prestacionesHTML += `
      <tr>
        <td>${fila[0]}</td>
        <td>${fila[1]}</td>
      </tr>
    `;
  });

  let documentosHTML = "";

  sistema.docs.forEach(function(doc) {
    documentosHTML += `<li>${doc}</li>`;
  });

  resultado.innerHTML = `
    <h2>Sistema recomendado</h2>

    <div class="tarjeta-sistema">
      <h3>${sistema.nombre}</h3>
      <p><strong>${sistema.descripcionCorta}</strong></p>
      <p>${sistema.descripcion}</p>

      <h4>Prestaciones principales</h4>
      <table>
        <tbody>
          ${prestacionesHTML}
        </tbody>
      </table>

      <h4>Documentos disponibles</h4>
      <ul>
        ${documentosHTML}
      </ul>

      <h4>Otros sistemas compatibles encontrados</h4>
      <p>${candidatos.length} sistema(s) compatible(s).</p>
    </div>
  `;
}
