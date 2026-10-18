let pages = [
  { title: "Definición del canal y métrica", eyebrow: "Lean Canvas · Taller 3IE", subtitle: "Un canal sirve si el cliente elegido realmente está ahí. Una métrica sirve si cambia una decisión del equipo.", section: "Definan el canal y la métrica", cards: [
    ["Cliente (ya definido)", "El segmento específico del bloque de Cliente — no lo redefinan aquí."],
    ["Canal elegido", "Propio, pagado o aliado. Elijan solo uno."],
    ["Decisión que cambiará con este dato", "Qué harán distinto según el resultado: mantener, ajustar o descartar."],
    ["Métrica principal", "Qué se mide + unidad + período. Ej.: % de leads convertidos semanalmente."]
  ], synthesis: ["Hipótesis de canal y métrica", "Probaremos __________________ con __________________, midiendo __________________ para decidir __________________."], tip: "Cliente específico · canal elegido · métrica ligada a una decisión · sin acción de campo requerida" },
  { title: "Segmento de clientes", eyebrow: "Lean Canvas · Taller presencial", subtitle: "Primero definan si venden a personas u organizaciones; luego delimiten un segmento específico, localizable y cuantificable.", section: "Definan el modelo y los roles", cards: [
    ["Modelo de negocio", "Marquen: B2C, B2B o B2B2C. ¿Quién usa y quién paga?"],
    ["Usuario / beneficiario", "¿Quién utiliza la solución o recibe directamente el beneficio? Descríbanlo con precisión."],
    ["Comprador y decisor", "¿Quién paga? ¿Quién decide, influye o autoriza la compra?"]
  ], extra: [["Criterios de segmentación", "Ubicación, edad y conducta. En B2B: industria, tamaño, comprador y digitalización."], ["Segmento prioritario", "¿Qué grupo comparte el problema, la urgencia y una forma similar de comprar?"], ["Dónde encontrarlos", "Ciudades, empresas, plataformas, asociaciones, eventos o comunidades."]    ], synthesis: ["Redacción del segmento", "Nuestro segmento prioritario es [CLIENTE] en [LUGAR/CANAL], que presenta [PROBLEMA] y puede ser alcanzado mediante [CANAL]."], tip: "Modelo definido · usuario y comprador diferenciados · segmento específico, localizable y cuantificable · SOM realista" },
  { title: "Definición del problema", eyebrow: "Lean Canvas · Taller presencial", subtitle: "Antes de pensar en una solución, describan con precisión quién vive el problema, qué brecha enfrenta y qué consecuencias genera.", section: "Construyan el ABC del problema", cards: [
    ["A · Actor afectado", "¿Quién vive el problema? Definan una persona, grupo u organización específica."],
    ["B · Brecha o dificultad", "¿Qué intenta hacer? ¿Qué le impide lograrlo? ¿Cuándo y dónde ocurre?"],
    ["C · Consecuencia", "¿Qué pierde, arriesga o deja de conseguir? Consideren tiempo, dinero, calidad o tranquilidad."]
  ], sections: [
    { title: "Construyan el ABC del problema", cards: [
      ["A · Actor afectado", "¿Quién vive el problema? Definan una persona, grupo u organización específica."],
      ["B · Brecha o dificultad", "¿Qué intenta hacer? ¿Qué le impide lograrlo? ¿Cuándo y dónde ocurre?"],
      ["C · Consecuencia", "¿Qué pierde, arriesga o deja de conseguir? Consideren tiempo, dinero, calidad o tranquilidad."]
    ] },
    { title: "Fundamenten la relevancia", cards: [
      ["Contexto y frecuencia", "¿En qué situación aparece? ¿Con qué frecuencia y desde cuándo?"],
      ["Evidencia disponible", "Anoten datos, observaciones, entrevistas o supuestos que todavía deban validarse."],
      ["Alternativas actuales", "¿Cómo lo resuelve hoy el cliente? ¿Por qué esa alternativa resulta insuficiente?"]
    ] },
    { title: "¿Vale la pena resolverlo?", rating: true }
  ], synthesis: ["Redacción final", "[ACTOR] experimenta [BRECHA] cuando [CONTEXTO], lo que provoca [CONSECUENCIA]."], tip: "Actor específico · brecha observable · consecuencia relevante · evidencia o supuesto identificado · sin pensar todavía en la solución" },
  { title: "Cantidad de ventas: Q", eyebrow: "Business Model Canvas · Taller 3IE", subtitle: "Define cuánto esperas vender en base a unidades de venta y explica los supuestos que sostienen esa cantidad.", section: "Analicen y justifiquen", cards: [
    ["SOM y base de Q", "¿Cuál fue el SOM y para qué horizonte? ¿A qué clientes podemos llegar primero y por qué canales?"],
    ["Evolución de Q", "¿Cuál es el Q del primer mes? ¿En qué meses aumentará, se mantendrá o disminuirá?"],
    ["Capacidad", "¿Cuántas unidades podemos producir, implementar, entregar y atender por mes?"]
  ], synthesis: ["Síntesis", "Estimamos vender ______ unidades en el mes 1 y ______ durante el año, con capacidad para ______ unidades al mes."], tip: "En pagos mensuales, cuenta a todos los activos. Si partes de cero: mes 1, 5 nuevos → Q = 5; mes 2, siguen 5 + 3 nuevos → Q = 8." },
  { title: "Mapa de ingresos y costos", eyebrow: "Business Model Canvas · Taller 3IE", subtitle: "Analiza tu modelo de negocios e identifica de dónde vienen los ingresos y qué costos son necesarios para operar.", section: "Identifiquen los cuatro bloques", cards: [
    ["Fuentes de ingreso", "¿Por qué beneficio estará dispuesto a pagar el cliente? ¿Qué producto o servicio cobraremos y cómo?"],
    ["Costos variables", "¿Qué costos aumentan al vender o atender más? ¿De qué depende cada uno?"],
    ["Costos fijos", "¿Qué debemos pagar aunque no vendamos? Miren sus recursos y actividades clave."],
    ["Inversión inicial", "¿Qué necesitamos desarrollar o adquirir antes de comenzar a vender?"]
  ], synthesis: ["Síntesis", "Nos pagarán por __________________ y necesitaremos __________________ para operar."], tip: "INGRESOS: elige una forma de cobro coherente con cómo el cliente recibe el beneficio. COSTOS: si un costo genera dudas, pregunta: ¿cambia cuando vendemos más?" },
  { title: "Cierre económico y pitch", eyebrow: "Business Model Canvas · Taller 3IE", subtitle: "Concluyan si la proyección cubre la operación, prueben un escenario y preparen un pitch de 30 segundos.", section: "Analicen y concluyan", cards: [
    ["Nuestra apuesta", "¿Qué vendemos y cómo cobramos? ¿Qué P y Q proyectamos? ¿Cuánto ingreso y costo total genera el primer año?"],
    ["¿Qué pasa si?", "Si vendemos 20% menos de lo proyectado, ¿seguimos cubriendo la operación? ¿Qué cambiaríamos primero?"],
    ["Decisión y validación", "¿La proyección cubre la operación? ¿Qué mantenemos o ajustamos? ¿Cuál es el supuesto crítico y cómo lo validaremos?"]
  ], pitchFields: [
    "Cobramos", "por", "Proyectamos vender", "unidades y generar $", "Para cubrir la operación necesitamos", "Nuestro supuesto crítico es", "y lo validaremos mediante"
  ], synthesis: ["Pitch · 30 segundos", "Cobramos ______ por ______. Proyectamos vender ______ unidades y generar $______ el primer año. Para cubrir la operación necesitamos ______. Nuestro supuesto crítico es ______ y lo validaremos mediante ______."], tip: "En modelos mixtos, calcula P × Q por cada fuente y presenta el punto de equilibrio en ingresos." },
  { title: "Definición del precio: P", eyebrow: "Business Model Canvas · Taller 3IE", subtitle: "Define y justifica tu precio inicial considerando costos, mercado y valor para el cliente.", section: "Analicen y justifiquen", cards: [
    ["Desde los costos", "Con el Q estimado, ¿cuánto cuesta cada unidad? ¿Qué pasaría con ese costo si vendemos menos?"],
    ["Desde el mercado", "¿Qué cobran dos o tres alternativas comparables? ¿Qué justificaría cobrar más, igual o menos?"],
    ["Valor y contexto", "¿Qué beneficio valora el cliente? ¿Cómo influyen su urgencia y presupuesto en lo que pagaría?"],
    ["Nuestro precio inicial", "¿Qué precio elegimos y por qué? ¿Cubre el costo por unidad y cuánto queda por encima?"]
  ], synthesis: ["Síntesis", "Cobraremos ______ por ______, porque ______________________________."], tip: "Distingue lo que sabes de lo que supones. El precio inicial se pone a prueba con clientes." },
  { title: "Template de relación", eyebrow: "Business Model Canvas · Profundización", subtitle: "La mayoría de los equipos en etapa temprana no tienen todo — sean honestos en el paso 3.", section: "Sigan la cadena", cards: [
    ["Actividad clave", "Una tarea esencial para entregar su propuesta de valor."],
    ["Recurso que esa actividad necesita", "Físico, intelectual, humano o financiero. Sean específicos."],
    ["¿Lo tienen, lo pueden construir, o no?", "Sean honestos: la mayoría de los equipos en etapa temprana no tienen todo."],
    ["Si no lo tienen: ¿quién sería el socio clave?", "Nombren un tipo de actor real, no una categoría abstracta."]
  ], synthesis: ["Síntesis de la cadena", "La actividad __________________ requiere __________________; si no lo tenemos, __________________ lo aporta."], tip: "Actividad concreta · recurso específico · honestidad en el diagnóstico · socio realista" },
  { title: "Template de ventaja injusta", eyebrow: "Lean Canvas · Taller 3IE", subtitle: "“Ventaja injusta” no es hacer algo poco ético — es algo difícil de copiar rápido, aunque un competidor quiera.", section: "Identifiquen su ventaja", cards: [
    ["Activo o capacidad", "Datos, comunidad, confianza, acceso, conocimiento especializado o una integración difícil."],
    ["Valor que crea para el cliente", "Conecten con rapidez, precisión, reducción de riesgo, acceso o costo."],
    ["Por qué es difícil de copiar", "Qué necesitaría un competidor: tiempo, relaciones, permisos, datos o escala."],
    ["Acción de 90 días para fortalecerla", "Un paso concreto que empiece a acumular esta ventaja desde ahora."]
  ], synthesis: ["Hipótesis de ventaja", "Consideraremos que __________________ es una ventaja injusta si en __________________ logramos __________________ y eso genera un valor que la competencia no puede copiar."], tip: "Crea valor real · difícil de copiar · mejora con el uso · acción concreta de 90 días", final: true },
  { title: "Template integrado BMC", eyebrow: "Business Model Canvas · Taller 3IE", subtitle: "Un bloque nuevo por fila, partiendo siempre de lo que ya construyeron en el Lean Canvas.", section: "Completen los cuatro bloques", cards: [
    ["Recursos clave", "A partir del MVP: ¿qué recurso necesitan construir o conseguir para operar a escala?"],
    ["Actividades clave", "A partir de su métrica principal: ¿qué proceso repetible produce ese resultado día a día?"],
    ["Socios clave", "A partir de su ventaja injusta: ¿qué alianza la protege o la acelera?"],
    ["Relación con clientes", "A partir del ABC del problema: ¿alto contacto o autoservicio?"]
  ], synthesis: ["Síntesis del modelo", "Nuestro modelo funciona si __________________ sostiene __________________, __________________ cubre lo que no tenemos, y la relación con el cliente es de tipo __________________."], tip: "Cada bloque parte de algo ya definido · recursos y actividades conectados · socio identificado · relación coherente con el problema." },
  { title: "Template de canal y métrica", eyebrow: "Lean Canvas · Taller 3IE", subtitle: "Un canal sirve si el cliente elegido realmente está ahí. Una métrica sirve si cambia una decisión del equipo.", section: "Definan el canal y la métrica", cards: [
    ["Cliente (ya definido)", "El segmento específico del bloque de Cliente — no lo redefinan aquí."],
    ["Canal elegido", "Propio, pagado o aliado. Elijan solo uno."],
    ["Decisión que cambiará con este dato", "Qué harán distinto según el resultado: mantener, ajustar o descartar."],
    ["Métrica principal", "Qué se mide + unidad + período. Ej.: % de leads convertidos semanalmente."]
  ], synthesis: ["Hipótesis de canal y métrica", "Probaremos __________________ con __________________, midiendo __________________ para decidir __________________."], tip: "Cliente específico · canal elegido · métrica ligada a una decisión · sin acción de campo requerida", duplicate: true },
  { title: "Template de venta injusta", eyebrow: "Lean Canvas · Taller 3IE", subtitle: "Una ventaja sostenible se construye con un activo propio, valor para el cliente y una acción que la vuelva más difícil de copiar.", section: "Identifiquen su ventaja", cards: [
    ["Activo o capacidad", "Datos, comunidad, confianza, acceso, conocimiento especializado o una integración difícil."],
    ["Valor que crea para el cliente", "Conecten con rapidez, precisión, reducción de riesgo, acceso o costo."],
    ["Por qué es difícil de copiar", "Qué necesitaría un competidor: tiempo, relaciones, permisos, datos o escala."],
    ["Acción de 90 días para fortalecerla", "Un paso concreto que empiece a acumular esta ventaja desde ahora."]
  ], synthesis: ["Hipótesis de ventaja", "Consideraremos que __________________ es una ventaja injusta si en __________________ logramos __________________ y eso genera un valor que la competencia no puede copiar."], tip: "Crea valor real · difícil de copiar · mejora con el uso · acción concreta de 90 días", final: true }
];

// Orden de trabajo solicitado: 121212, 111111, 101010 ... 222, 111.
pages = [0, 8, 2, 1, 7, 6, 5, 4, 3, 9, 10, 11].map(index => pages[index]);

const state = { current: 0, answers: JSON.parse(localStorage.getItem("lean-canvas-answers") || "{}") };
const $ = (selector) => document.querySelector(selector);
const pageContainer = $("#page-container");

const groupTitles = {
  "Definición del canal y métrica": [["Definan el canal y la métrica", "Esto se responde con lo que ya saben — no requiere ejecutar nada todavía."]],
  "Template de ventaja injusta": [["Identifiquen su ventaja", "Si hoy no tienen una, describan cómo la construirían."]],
  "Definición del problema": [["Construyan el ABC del problema", "Sean específicos: no describan todavía la solución."], ["Fundamenten la relevancia", "Apoyen el problema con contexto, evidencia y alternativas actuales."], ["¿Vale la pena resolverlo?", "Marquen de 1 (bajo) a 5 (alto)."]],
  "Segmento de clientes": [["Definan el modelo y los roles", "Primero definan si venden a personas u organizaciones y quién cumple cada rol."], ["Delimiten el segmento prioritario", "Elijan un grupo que comparta el problema, la urgencia y una forma similar de comprar."], ["Dimensionen el mercado", "Usen una fuente o expliciten el supuesto para estimar TAM, SAM y SOM."], ["Redacción del segmento", "Escriban una frase específica y comprobable."]],
  "Template de relación": [["Sigan la cadena", "Partan de una Actividad Clave que ya identificaron."]],
  "Definición del precio: P": [["Analicen y justifiquen", "Consideren costos, mercado y valor para el cliente."]],
  "Cierre económico y pitch": [["Analicen y concluyan", "Concluyan si la proyección cubre la operación y qué supuesto deben validar."], ["Pitch · 30 segundos", "Presenten la propuesta económica de forma clara y concreta."]],
  "Mapa de ingresos y costos": [["Identifiquen los cuatro bloques", "Analicen su modelo de negocios e identifiquen ingresos, costos e inversión."]],
  "Cantidad de ventas: Q": [["Analicen y justifiquen", "Definan cuánto esperan vender en unidades y expliquen los supuestos que sostienen esa cantidad."], ["Síntesis", "Conecten la cantidad estimada con el horizonte y la capacidad mensual."]],
  "Template integrado BMC": [["Completen los cuatro bloques", "Cada bloque se deriva de algo que ya definieron."]],
  "Template de canal y métrica": [["Definan el canal y la métrica", "Un canal sirve si el cliente elegido realmente está ahí; una métrica sirve si cambia una decisión."]],
  "Template de venta injusta": [["Identifiquen su ventaja", "Una ventaja injusta es difícil de copiar rápido, aunque un competidor quiera."]]
};

function saveAnswer(key, value) {
  state.answers[key] = value;
  localStorage.setItem("lean-canvas-answers", JSON.stringify(state.answers));
}

function cardMarkup(card, index, pageIndex, displayIndex = index) {
  const key = `${pageIndex}-card-${index}`;
  return `<article class="card ${card[2] || ""} ${index === 3 && pages[pageIndex].final ? "orange-card" : ""}">
    <div class="card-top"><span class="card-number">${displayIndex + 1}</span><h3>${card[0]}</h3></div>
    <p>${card[1]}</p>
    <textarea data-key="${key}" aria-label="${card[0]}" placeholder="Escribe tu respuesta aquí...">${state.answers[key] || ""}</textarea>
  </article>`;
}

function sectionMarkup(section, sectionIndex, pageIndex) {
  const description = section.description ? `<p class="instruction">${section.description}</p>` : "";
  if (section.rating) {
    const criteria = ["Relevancia", "Frecuencia", "Intensidad", "Urgencia", "Insatisfacción actual", "Disposición a actuar"];
    return `<section class="form-section rating-section">
      <h2 class="section-heading"><span class="badge">${sectionIndex + 1}</span>${section.title}</h2>
      ${description}
      <div class="rating-panel">
        <div class="rating-total">TOTAL <strong id="rating-total">0 / 30</strong></div>
        <div class="rating-list">${criteria.map((criterion, index) => {
          const key = `${pageIndex}-rating-${index}`;
          const selected = Number(state.answers[key] || 0);
          return `<div class="rating-row"><span>${criterion}</span><div class="rating-options">${[1, 2, 3, 4, 5].map(value => `<label class="${selected === value ? "selected" : ""}"><input type="radio" name="rating-${pageIndex}-${index}" value="${value}" data-rating-key="${key}" ${selected === value ? "checked" : ""}><span>${value}</span></label>`).join("")}</div></div>`;
        }).join("")}</div>
      </div>
    </section>`;
  }
  return `<section class="form-section">
    <h2 class="section-heading"><span class="badge">${sectionIndex + 1}</span>${section.title}</h2>
    ${description}
    <div class="cards ${section.cards.length === 3 ? "three" : ""}">${section.cards.map((card, i) => cardMarkup(card, `${sectionIndex}-${i}`, pageIndex, i)).join("")}</div>
  </section>`;
}

function pitchMarkup(pageIndex) {
  const fields = pages[state.current].pitchFields;
  return `<div class="pitch-form">${fields.map((label, index) => {
    const key = `${pageIndex}-pitch-${index}`;
    return `<label class="pitch-field"><span>${label}</span><input data-key="${key}" aria-label="${label}" value="${state.answers[key] || ""}" placeholder=""></label>`;
  }).join("")}</div>`;
}

function synthesisMarkup(page, pageIndex) {
  if (page.pitchFields) return pitchMarkup(pageIndex);
  const sentence = page.synthesis[1];
  let blankIndex = 0;
  const content = sentence.split(/(_+|\[[^\]]+\])/).map(part => {
    if (!/^_+$/.test(part) && !/^\[[^\]]+\]$/.test(part)) return part;
    const key = `${pageIndex}-synthesis-${blankIndex}`;
    const token = /^\[[^\]]+\]$/.test(part) ? part.slice(1, -1) : `Respuesta ${blankIndex + 1}`;
    blankIndex += 1;
    const placeholder = /^\[[^\]]+\]$/.test(part) ? token : "";
    return `<input class="inline-answer" data-key="${key}" aria-label="${token}" value="${state.answers[key] || ""}" placeholder="${placeholder}">`;
  }).join("");
  return `<div class="synthesis-sentence">${content}</div>`;
}

function updateRatingTotal() {
  const total = Array.from(document.querySelectorAll("[data-rating-key]:checked")).reduce((sum, input) => sum + Number(input.value), 0);
  const totalElement = $("#rating-total");
  if (totalElement) totalElement.textContent = `${total} / 30`;
}

function renderNav() {
  $("#page-nav").innerHTML = pages.map((page, i) => `<button class="nav-item ${i === state.current ? "active" : ""}" data-page="${i}"><span class="nav-number">${i + 1}</span><span>${page.title}</span></button>`).join("");
  document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => {
    state.current = Number(button.dataset.page); render(); closeMenu();
  }));
}

function render() {
  const page = pages[state.current];
  const titles = groupTitles[page.title] || [[page.section, "Completa cada tarjeta con información concreta y verificable de tu proyecto."]];
  const synthesisBadge = page.title === "Segmento de clientes" ? 4 : page.sections ? page.sections.length + 1 : 2;
  const progress = ((state.current + 1) / pages.length) * 100;
  $("#progress-text").textContent = `${state.current + 1} de ${pages.length}`;
  $("#progress-bar").style.width = `${progress}%`;
  $("#mobile-counter").textContent = `${state.current + 1}/${pages.length}`;
  $("#prev-button").disabled = state.current === 0;
  $("#next-button").innerHTML = state.current === pages.length - 1 ? "Finalizar ✓" : "Siguiente <span>→</span>";
  const sectionsMarkup = page.sections
    ? page.sections.map((section, index) => sectionMarkup({ ...section, title: titles[index]?.[0] || section.title, description: titles[index]?.[1] || "" }, index, state.current)).join("")
    : `<section class="form-section"><h2 class="section-heading"><span class="badge">1</span>${titles[0][0]}</h2>
      <p class="instruction">${titles[0][1]}</p>
      <div class="cards ${page.cards.length === 3 ? "three" : ""}">${page.cards.map((card, i) => cardMarkup(card, i, state.current)).join("")}</div>
      ${page.extra && page.title !== "Segmento de clientes" ? `<div class="extra-grid">${page.extra.map((card, i) => `<article class="card compact"><div class="card-top"><h3>${card[0]}</h3></div><p>${card[1]}</p><textarea data-key="${state.current}-extra-${i}" aria-label="${card[0]}" placeholder="Escribe tu respuesta aquí...">${state.answers[`${state.current}-extra-${i}`] || ""}</textarea></article>`).join("")}</div>` : ""}</section>
      ${page.title === "Segmento de clientes" ? `<section class="form-section"><h2 class="section-heading"><span class="badge">2</span>${titles[1][0]}</h2><p class="instruction">${titles[1][1]}</p><div class="extra-grid">${page.extra.map((card, i) => `<article class="card compact"><div class="card-top"><h3>${card[0]}</h3></div><p>${card[1]}</p><textarea data-key="${state.current}-extra-${i}" aria-label="${card[0]}" placeholder="Escribe tu respuesta aquí...">${state.answers[`${state.current}-extra-${i}`] || ""}</textarea></article>`).join("")}</div></section><section class="form-section"><h2 class="section-heading"><span class="badge">3</span>${titles[2][0]}</h2><p class="instruction">${titles[2][1]}</p><div class="market-grid"><article class="market-card"><h3>TAM · Mercado total</h3><p>Todos los clientes que podrían necesitar la solución.</p><label>Cantidad<input data-key="${state.current}-tam-quantity" aria-label="TAM cantidad" placeholder="Cantidad" value="${state.answers[`${state.current}-tam-quantity`] || ""}"></label><label>Fuente<input data-key="${state.current}-tam-source" aria-label="TAM fuente" placeholder="Fuente" value="${state.answers[`${state.current}-tam-source`] || ""}"></label></article><article class="market-card"><h3>SAM · Mercado atendible</h3><p>Parte del TAM que podemos servir por foco y capacidad.</p><label>Cantidad<input data-key="${state.current}-sam-quantity" aria-label="SAM cantidad" placeholder="Cantidad" value="${state.answers[`${state.current}-sam-quantity`] || ""}"></label><label>Criterio<input data-key="${state.current}-sam-source" aria-label="SAM criterio" placeholder="Fuente o criterio" value="${state.answers[`${state.current}-sam-source`] || ""}"></label></article><article class="market-card"><h3>SOM · Mercado alcanzable</h3><p>Clientes que podemos captar de manera realista al inicio.</p><label>Cantidad<input data-key="${state.current}-som-quantity" aria-label="SOM cantidad" placeholder="Cantidad" value="${state.answers[`${state.current}-som-quantity`] || ""}"></label><label>Horizonte<input data-key="${state.current}-som-source" aria-label="SOM horizonte" placeholder="Fuente o meses" value="${state.answers[`${state.current}-som-source`] || ""}"></label></article></div></section>` : ""}`;
  pageContainer.innerHTML = `<section class="page">
    <header class="page-header"><p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="subtitle">${page.subtitle}</p></header>
    <div class="page-body">
      ${sectionsMarkup}
      <div class="synthesis"><div class="synthesis-label"><span class="badge">${synthesisBadge}</span> ${page.synthesis[0] || titles[titles.length - 1][0]}</div><div class="synthesis-content">${synthesisMarkup(page, state.current)}</div></div>
      <p class="tip"><strong>TIP / CHECK · </strong>${page.tip}</p>
    </div>
  </section>`;
  document.querySelectorAll("textarea, input[data-key]").forEach(field => field.addEventListener("input", e => saveAnswer(e.target.dataset.key, e.target.value)));
  document.querySelectorAll("[data-rating-key]").forEach(input => input.addEventListener("change", e => {
    saveAnswer(e.target.dataset.ratingKey, e.target.value);
    e.target.closest(".rating-options").querySelectorAll("label").forEach(label => label.classList.toggle("selected", label.contains(e.target) || label.querySelector("input").checked));
    updateRatingTotal();
  }));
  updateRatingTotal();
  renderNav();
}

function closeMenu() { $(".sidebar").classList.remove("open"); $("#sidebar-overlay").classList.remove("open"); }
$("#prev-button").addEventListener("click", () => { if (state.current > 0) { state.current--; render(); window.scrollTo({ top: 0, behavior: "smooth" }); } });
$("#next-button").addEventListener("click", () => { if (state.current < pages.length - 1) { state.current++; render(); window.scrollTo({ top: 0, behavior: "smooth" }); } else { alert("¡Completaste todas las plantillas! Tus respuestas quedaron guardadas en este navegador."); } });
$("#menu-button").addEventListener("click", () => { $(".sidebar").classList.add("open"); $("#sidebar-overlay").classList.add("open"); });
$("#sidebar-overlay").addEventListener("click", closeMenu);
render();
