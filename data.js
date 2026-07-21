const V='1.2.0',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],J=(k,d)=>{try{const raw=localStorage.getItem(k);return raw===null?d:JSON.parse(raw)}catch{localStorage.removeItem(k);return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const G={Proteínas:[['yogur','Yogur griego alto en proteína'],['huevo','Huevos'],['claras','Claras de huevo'],['pollo','Pollo'],['pescado','Pescado'],['atun','Atún'],['carne','Carne magra'],['cottage','Cottage o requesón'],['frijol','Frijoles'],['lenteja','Lentejas']],Lácteos:[['leche','Leche deslactosada'],['soya','Bebida de soya sin azúcar']],Frutas:[['platano','Plátano'],['manzana','Manzana'],['guayaba','Guayaba'],['mamey','Mamey'],['mango','Mango'],['pina','Piña'],['frutos','Frutos rojos']],Verduras:[['espinaca','Espinaca'],['pepino','Pepino'],['jicama','Jícama'],['zanahoria','Zanahoria'],['nopales','Nopales'],['ensalada','Ensalada'],['tomate','Tomate'],['cebolla','Cebolla'],['verduras','Verduras variadas'],['pico','Pico de gallo']],Carbohidratos:[['avena','Avena'],['tortilla','Tortillas'],['arroz','Arroz'],['papa','Papa o camote'],['tostada','Tostadas horneadas']],Grasas:[['chia','Chía o linaza'],['aguacate','Aguacate'],['almendra','Almendras'],['aceite','Aceite de oliva'],['cacao','Cacao sin azúcar']]};
const R=[
['Licuado chocolate y plátano','Desayuno',['yogur','leche','platano','avena','chia','cacao'],33,460,'200 g yogur + 250 ml leche deslactosada + ½ plátano + 30 g avena + 10 g chía + cacao.'],
['Licuado manzana y canela','Desayuno',['yogur','leche','manzana','avena','chia'],32,450,'200 g yogur + 250 ml leche + manzana + 30 g avena + chía.'],
['Licuado tropical','Desayuno',['yogur','leche','mango','pina','zanahoria','avena','chia'],31,480,'200 g yogur + leche + ½ taza mango + ½ taza piña + zanahoria + avena + chía.'],
['Huevos con nopales','Desayuno',['huevo','claras','nopales','tortilla'],35,480,'3 huevos + 150 g claras + nopales + 2 tortillas.'],
['Yogur con fruta y avena','Desayuno',['yogur','avena','manzana','chia'],27,410,'300 g yogur + manzana + 30 g avena + chía.'],
['Licuado de plátano y avena','Desayuno',['yogur','leche','platano','avena'],31,445,'200 g yogur + 250 ml leche + ½ plátano + 30 g avena + canela.'],
['Licuado de guayaba y avena','Desayuno',['yogur','leche','guayaba','avena'],32,440,'200 g yogur + 250 ml leche + 2 guayabas + 30 g avena + canela.'],
['Licuado de mamey y avena','Desayuno',['yogur','leche','mamey','avena'],31,465,'200 g yogur + 250 ml leche + ½ taza de mamey + 30 g avena + canela.'],
['Huevos con verduras y tortillas','Desayuno',['huevo','verduras','tortilla'],25,470,'3 huevos con verduras variadas + 2 tortillas.'],
['Huevos con espinaca y frijoles','Desayuno',['huevo','espinaca','frijol','tortilla'],31,510,'3 huevos con espinaca + ½ taza de frijoles + 2 tortillas.'],
['Yogur con plátano y avena','Desayuno',['yogur','platano','avena'],29,420,'300 g yogur + ½ plátano + 30 g avena + canela.'],
['Yogur con guayaba y avena','Desayuno',['yogur','guayaba','avena'],30,410,'300 g yogur + 2 guayabas + 30 g avena + canela.'],
['Yogur con mamey y avena','Desayuno',['yogur','mamey','avena'],29,445,'300 g yogur + ½ taza de mamey + 30 g avena + canela.'],
['Pollo, arroz, frijoles y ensalada','Comida',['pollo','arroz','frijol','ensalada','tomate','aguacate'],50,680,'180 g pollo + ¾ taza arroz + ½ taza frijoles + ensalada + ¼ aguacate.'],
['�M�����k�w��z0 8px 24px rgba(17,75,48,.08)
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:var(--bg);color:var(--ink);line-height:1.45}
    header{background:linear-gradient(135deg,#124f35,#1f8057);color:#fff;padding:22px 16px 18px}
    header .wrap,main,footer{max-width:1000px;margin:auto}
    h1{font-size:1.55rem;margin:0 0 4px}
    h2{font-size:1.2rem;margin:0 0 12px}
    h3{font-size:1rem;margin:16px 0 8px}
    p{margin:8px 0}
    main{padding:12px}
    nav{display:flex;gap:8px;overflow-x:auto;position:sticky;top:0;z-index:10;background:rgba(243,247,244,.96);backdrop-filter:blur(8px);padding:8px 0 10px}
    .tab{white-space:nowrap;width:auto;border:1px solid var(--line);background:#fff;color:var(--ink);padding:9px 13px;border-radius:999px;font-weight:750}
    .tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
    .panel{display:none}.panel.active{display:block}
    .card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;margin-bottom:13px;box-shadow:var(--shadow)}
    .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
    .metric{padding:12px;border-radius:12px;background:var(--accent2)}
    .metric strong{display:block;font-size:1.3rem}
    .small{font-size:.88rem;color:var(--muted)}
    button,input,select{font:inherit}
    button{border:1px solid var(--line);border-radius:11px;padding:10px 13px;background:#fff;color:var(--ink);font-weight:750;cursor:pointer}
    button.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
    button.secondary{background:var(--accent2);border-color:#baddc9;color:#135537}
    button.danger{color:#942929;border-color:#e5b5b5}
    button:disabled{opacity:.55;cursor:not-allowed}
    label{font-weight:700;font-size:.9rem}
    input,select{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px;background:#fff;color:var(--ink)}
    input[type=checkbox]{width:20px;height:20px;accent-color:var(--accent)}
    .check{display:flex;align-items:flex-start;gap:9px;padding:9px 0;border-bottom:1px solid #edf2ef}
    .check:last-child{border-bottom:0}
    .check label{font-weight:600;flex:1}
    .pill{display:inline-block;background:var(--accent2);padding:5px 9px;border-radius:999px;font-size:.82rem;font-weight:750;margin:3px}
    .notice{background:var(--warn);border-radius:12px;padding:12px}
    .dangerbox{background:var(--danger);border-radius:12px;padding:12px}
    .meal{border-left:5px solid var(--accent);background:#fbfdfb;border-radius:10px;padding:12px;margin:10px 0}
    .meal.unavailable{border-left-color:#b9c2bd;opacity:.75}
    .meal-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}
    .tag{font-size:.78rem;padding:4px 7px;border-radius:999px;background:var(--accent2);font-weight:750}
    .missing{font-size:.86rem;color:#8c3434}
    .actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}
    .table-wrap{overflow:auto}
    table{width:100%;border-collapse:collapse;font-size:.9rem}
    th,td{padding:9px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap}
    th{background:#eef5f1}
    canvas{width:100%;height:220px;background:#fff;border:1px solid var(--line);border-radius:12px}
    #installBanner{display:none;background:#fff;border:1px solid #baddc9;border-radius:14px;padding:12px;margin-bottom:12px}
    #updateBanner{display:none;background:var(--warn);border-radius:14px;padding:12px;margin-bottom:12px}
    footer{padding:16px 14px 40px;color:var(--muted);font-size:.82rem}
    .status-good{color:#176b46;font-weight:800}.status-warn{color:#8c6120;font-weight:800}
    @media(max-width:680px){.grid,.grid3,.actions{grid-template-columns:1fr}h1{font-size:1.35rem}}
    @media print{nav,button,#installBanner,#updateBanner{display:none!important}.panel{display:block!important}.card{box-shadow:none;break-inside:avoid}}
  </style>
</head>
<body>
<header>
  <div class="wrap">
    <h1>Dieta Alex</h1>
    <p id="profileHeader">Plan de alta saciedad, compras dinámicas, ejercicio y seguimiento.</p>
  </div>
</header>

<main>
  <div id="installBanner">
    <strong>Instalar Dieta Alex</strong>
    <p class="small">Se abrirá como una aplicación y seguirá funcionando sin conexión.</p>
    <button class="primary" id="installBtn">Instalar aplicación</button>
  </div>
  <div id="updateBanner">
    <strong>Hay una actualización disponible.</strong>
    <button class="primary" id="reloadBtn">Actualizar ahora</button>
  </div>

  <nav>
    <button class="tab active" data-tab="inicio">Inicio</button>
    <button class="tab" data-tab="compras">Compras</button>
    <button class="tab" data-tab="menu">Mi menú</button>
    <button class="tab" data-tab="licuados">Licuados</button>
    <button class="tab" data-tab="ejercicio">Ejercicio</button>
    <button class="tab" data-tab="progreso">Progreso</button>
  </nav>

  <section class="panel active" id="inicio">
    <div class="card">
      <h2>Mi perfil privado</h2>
      <p class="small">Estos datos se guardan únicamente en este dispositivo y no forman parte del sitio público.</p>
      <div class="grid3">
        <label>Nombre<input id="profileName" placeholder="Ej. Alex"></label>
        <label>Edad<input id="profileAge" type="number" min="18" max="100"></label>
        <label>Estatura (cm)<input id="profileHeight" type="number" min="140" max="220"></label>
        <label>Peso actual (kg)<input id="profileWeight" type="number" step="0.1"></label>
        <label>Cintura (cm)<input id="profileWaist" type="number" step="0.1"></label>
        <label>Meta de peso (kg)<input id="profileGoal" type="number" step="0.1"></label>
        <label>Actividad
          <select id="profileActivity">
            <option value="1.25">Poco activo</option>
            <option value="1.4" selected>Actividad ligera</option>
            <option value="1.55">Entreno 3–5 días</option>
            <option value="1.7">Muy activo</option>
          </select>
        </label>
      </div>
      <button class="primary" id="saveProfile" style="margin-top:12px">Guardar perfil</button>
      <div class="grid3" style="margin-top:12px">
        <div class="metric"><span class="small">Ingesta inicial estimada</span><strong id="targetCalories">Completa el perfil</strong><span class="small">Déficit pequeño para reducir hambre</span></div>
        <div class="metric"><span class="small">Proteína estimada</span><strong id="targetProtein">—</strong><span class="small">Repartida en 4–5 tomas</span></div>
        <div class="metric"><span class="small">Relación cintura/estatura</span><strong id="waistRatio">—</strong><span class="small">Meta práctica: menos de 0.50</span></div>
      </div>
      <h3>Metas de cintura sugeridas</h3>
      <div id="waistGoals"><span class="pill">Completa tu perfil</span></div>
    </div>

    <div class="card">
      <h2>Protocolo para no pasar hambre</h2>
      <p>No es realista garantizar ausencia total de apetito. La regla es no soportar hambre intensa ni llegar desesperado a una comida.</p>
      <div class="notice">
        <strong>Hambre 0–4:</strong> sigue el plan.<br>
        <strong>Hambre 5–6:</strong> adelanta la comida o toma una colación proteica.<br>
        <strong>Hambre 7–10:</strong> come una opción de rescate y aumenta 150–250 kcal al día siguiente.
      </div>
      <h3>Opciones de rescate</h3>
      <span class="pill">200 g yogur griego</span><span class="pill">2 huevos + pepino</span>
      <span class="pill">Atún + jícama</span><span class="pill">200 g cottage</span>
      <span class="pill">Frijoles + pico de gallo</span>
    </div>

    <div class="card">
      <h2>Cómo funciona el menú</h2>
      <p>En <strong>Compras</strong>, marca solamente lo que realmente tienes. Después pulsa <strong>Generar menú con mis compras</strong>. La sección <strong>Mi menú</strong> excluirá recetas que necesiten ingredientes no comprados.</p>
      <p class="small">Sal, pimienta, limón, agua, canela, vainilla, hielo y especias básicas se consideran disponibles.</p>
    </div>
  </section>

  <section class="panel" id="compras">
    <div class="card">
      <h2>Selecciona lo que compraste</h2>
      <p class="small">Tus selecciones se guardan en este celular. Puedes modificarlas en cualquier momento y regenerar el menú.</p>
      <div id="shoppingGroups"></div>
      <div class="actions">
        <button class="primary" id="generateMenu">Generar menú con mis compras</button>
        <button id="selectRecommended">Seleccionar mis compras actuales</button>
        <button id="clearShopping" class="danger">Desmarcar todo</button>
        <button id="copyShopping">Copiar lista marcada</button>
      </div>
      <div id="shoppingStatus" class="notice" style="margin-top:12px"></div>
    </div>
  </section>

  <section class="panel" id="menu">
    <div class="card">
      <div class="meal-head">
        <div>
          <h2>Menú generado con tus compras</h2>
          <p class="small" id="menuSummary"></p>
        </div>
        <button class="secondary" id="regenerateMenu">Regenerar</button>
      </div>
      <div id="menuOutput"></div>
      <div id="menuWarning" class="dangerbox" style="display:none"></div>
    </div>
  </section>

  <section class="panel" id="licuados">
    <div class="card">
      <h2>Licuados dulces y completos</h2>
      <p>La app mostrará en verde los que puedes preparar con lo comprado. Chía, linaza, cacao y almendras son complementos opcionales: no necesitas comprarlos para tener un licuado completo.</p>
      <div id="smoothieOutput"></div>
      <div class="notice">
        No cueles el licuado. No combines varias frutas, miel, dátiles y crema de cacahuate en la misma preparación. La proteína y la fibra son las que ayudan a que llene.
      </div>
    </div>
  </section>

  <section class="panel" id="ejercicio">
    <div class="card">
      <h2>Plan semanal</h2>
      <div class="check"><input type="checkbox" class="work" data-id="fuerza-a1"><label><strong>Lunes — Fuerza A</strong><br>Sentadilla, press o lagartijas, remo, peso muerto rumano y plancha. 3 × 8–12.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="cardio1"><label><strong>Martes — Cardio</strong><br>Correr suave 30 minutos o caminar rápido 50–60 minutos.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="fuerza-b"><label><strong>Miércoles — Fuerza B</strong><br>Desplantes, press inclinado, jalón/remo, hip thrust y plancha lateral.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="walk"><label><strong>Jueves — Caminata</strong><br>45–60 minutos a paso rápido.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="fuerza-a2"><label><strong>Viernes — Fuerza A</strong><br>Repite y aumenta ligeramente repeticiones o carga.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="sport"><label><strong>Sábado — Deporte</strong><br>30–45 minutos de una actividad que disfrutes.</label></div>
      <div class="check"><input type="checkbox" class="work" data-id="rest"><label><strong>Domingo — Recuperación</strong><br>Descanso o caminata suave.</label></div>
      <p><strong>Pasos:</strong> aumenta gradualmente hasta 8,000–10,000 diarios si lo toleras bien.</p>
    </div>
  </section>

  <section class="panel" id="progreso">
    <div class="card">
      <h2>Nueva medición</h2>
      <div class="grid3">
        <label>Fecha<input id="logDate" type="date"></label>
        <label>Peso (kg)<input id="logWeight" type="number" step="0.1"></label>
        <label>Cintura (cm)<input id="logWaist" type="number" step="0.1"></label>
        <label>Grasa RENPHO (%)<input id="logFat" type="number" step="0.1"></label>
        <label>Masa muscular RENPHO<input id="logMuscle" type="number" step="0.1"></label>
        <label>Grasa visceral<input id="logVisceral" type="number" step="0.1"></label>
        <label>Hambre promedio 0–10<input id="logHunger" type="number" min="0" max="10"></label>
      </div>
      <div class="actions">
        <button class="primary" id="saveLog">Guardar medición</button>
        <button class="secondary" id="copySummary">Copiar resumen para ChatGPT</button>
        <button id="exportData">Exportar respaldo</button>
        <button id="importData">Importar respaldo</button>
      </div>
      <input type="file" id="importFile" accept=".json" hidden>
    </div>
    <div class="card">
      <h2>Tendencia de peso</h2>
      <canvas id="chart" width="900" height="300"></canvas>
      <p id="trend" class="small"></p>
    </div>
    <div class="card">
      <h2>Historial</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Fecha</th><th>Peso</th><th>Cintura</th><th>Grasa</th><th>Músculo</th><th>Visceral</th><th>Hambre</th></tr></thead>
          <tbody id="logRows"></tbody>
        </table>
      </div>
    </div>
  </section>
</main>

<footer>
  El perfil, las compras y las mediciones se guardan localmente en este dispositivo. Las mediciones de composición corporal de RENPHO se usan como tendencia, no como diagnóstico. Consulta a un profesional antes de hacer cambios importantes si tienes diabetes tratada, enfermedad renal, hepática, digestiva relevante o antecedentes de trastorno alimentario.<br>
  <span id="versionText">Versión 1.0.0</span>
</footer>

<script src="./data.js"></script>
<script src="./app.js"></script>
</body>
</html>
