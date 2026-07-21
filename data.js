const V='1.3.0',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],J=(k,d)=>{try{const raw=localStorage.getItem(k);return raw===null?d:JSON.parse(raw)}catch{localStorage.removeItem(k);return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

const G={
  Proteínas:[['yogur','Yogur griego alto en proteína'],['huevo','Huevos'],['claras','Claras de huevo'],['pollo','Pollo'],['pescado','Pescado'],['atun','Atún'],['carne','Carne magra'],['cottage','Cottage o requesón'],['frijol','Frijoles'],['lenteja','Lentejas']],
  Lácteos:[['leche','Leche deslactosada'],['soya','Bebida de soya sin azúcar'],['queso','Queso panela, Oaxaca o similar']],
  Frutas:[['platano','Plátano'],['manzana','Manzana'],['guayaba','Guayaba'],['mamey','Mamey'],['mango','Mango'],['pina','Piña'],['frutos','Frutos rojos'],['papaya','Papaya'],['pera','Pera'],['naranja','Naranja o mandarina'],['durazno','Durazno']],
  Verduras:[['espinaca','Espinaca'],['pepino','Pepino'],['jicama','Jícama'],['zanahoria','Zanahoria'],['nopales','Nopales'],['ensalada','Ensalada'],['tomate','Tomate'],['cebolla','Cebolla'],['verduras','Verduras variadas'],['pico','Pico de gallo']],
  Carbohidratos:[['avena','Avena'],['tortilla','Tortillas'],['arroz','Arroz'],['papa','Papa o camote'],['tostada','Tostadas horneadas'],['pan','Pan integral']],
  Grasas:[['chia','Chía o linaza'],['aguacate','Aguacate'],['almendra','Almendras'],['aceite','Aceite de oliva'],['cacao','Cacao sin azúcar'],['cacahuate','Crema de cacahuate sin azúcar']]
};

const FRUTAS=['platano','manzana','guayaba','mamey','mango','pina','frutos','papaya','pera','naranja','durazno'];
const VERDURAS=['espinaca','pepino','zanahoria','nopales','ensalada','tomate','cebolla','verduras','pico'];

const R=[
  ['Licuado flexible de fruta y avena','Desayuno',['yogur','avena'],31,445,'200 g de yogur + 250 ml de {leche} + 1 porción de {fruta} + 30 g de avena + canela. Chía, linaza y cacao son opcionales.',[['leche','soya'],FRUTAS],'smoothie'],
  ['Licuado de plátano y avena','Desayuno',['yogur','platano','avena'],31,445,'200 g de yogur + 250 ml de {leche} + ½ plátano + 30 g de avena + canela.',[['leche','soya']],'smoothie'],
  ['Licuado de guayaba y avena','Desayuno',['yogur','guayaba','avena'],32,440,'200 g de yogur + 250 ml de {leche} + 2 guayabas + 30 g de avena + canela.',[['leche','soya']],'smoothie'],
  ['Licuado de mamey y avena','Desayuno',['yogur','mamey','avena'],31,465,'200 g de yogur + 250 ml de {leche} + ½ taza de mamey + 30 g de avena + canela.',[['leche','soya']],'smoothie'],
  ['Licuado de manzana y canela','Desayuno',['yogur','manzana','avena'],32,450,'200 g de yogur + 250 ml de {leche} + manzana + 30 g de avena + canela.',[['leche','soya']],'smoothie'],
  ['Licuado de plátano con cacao opcional','Desayuno',['yogur','platano','avena'],33,460,'200 g de yogur + 250 ml de {leche} + ½ plátano + 30 g de avena. Agrega cacao solo cuando lo tengas.',[['leche','soya']],'smoothie'],
  ['Licuado tropical','Desayuno',['yogur','pina','zanahoria','avena'],31,470,'200 g de yogur + 250 ml de {leche} + piña + zanahoria + avena. Mango y chía son opcionales.',[['leche','soya']],'smoothie'],
  ['Yogur flexible con fruta y avena','Desayuno',['yogur','avena'],29,425,'300 g de yogur + 1 porción de {fruta} + 30 g de avena + canela.',[FRUTAS],'bowl'],
  ['Huevos con verduras y tortillas','Desayuno',['huevo','tortilla'],25,470,'3 huevos con {verdura} + 2 tortillas.',[VERDURAS],'eggs'],
  ['Huevos con tomate, cebolla y tortillas','Desayuno',['huevo','tomate','cebolla','tortilla'],26,475,'3 huevos con tomate y cebolla + 2 tortillas.'],
  ['Huevos con espinaca y frijoles','Desayuno',['huevo','espinaca','frijol','tortilla'],31,510,'3 huevos con espinaca + ½ taza de frijoles + 2 tortillas.'],
  ['Tacos de huevo con frijoles','Desayuno',['huevo','frijol','tortilla'],30,500,'3 huevos + ½ taza de frijoles + 2 tortillas. Agrega tomate o cebolla si los tienes.'],
  ['Avena con yogur y plátano','Desayuno',['yogur','avena','platano'],29,420,'300 g de yogur + ½ plátano + 30 g de avena + canela.'],
  ['Avena con yogur y guayaba','Desayuno',['yogur','avena','guayaba'],30,410,'300 g de yogur + 2 guayabas + 30 g de avena + canela.'],
  ['Avena con yogur y mamey','Desayuno',['yogur','avena','mamey'],29,445,'300 g de yogur + ½ taza de mamey + 30 g de avena + canela.'],

  ['Pollo, arroz, frijoles y ensalada','Comida',['pollo','arroz','frijol','ensalada','tomate','aguacate'],50,680,'180 g de pollo + ¾ taza de arroz + ½ taza de frijoles + ensalada + ¼ de aguacate.'],
  ['Pollo con papa y verduras','Comida',['pollo','papa','verduras','aceite'],48,640,'190 g de pollo + 300 g de papa o camote + verduras + 1 cucharadita de aceite.'],
  ['Pescado con papa y ensalada','Comida',['pescado','papa','ensalada','tomate','aguacate'],44,620,'200 g de pescado + papa + ensalada grande + ¼ de aguacate.'],
  ['Fajitas de pollo','Comida',['pollo','verduras','cebolla','tortilla','aguacate'],46,650,'180 g de pollo con verduras + 3 tortillas + ¼ de aguacate.'],
  ['Carne magra con frijoles','Comida',['carne','frijol','tortilla','ensalada'],47,670,'170 g de carne + ¾ taza de frijoles + 2 tortillas + ensalada. Pico de gallo opcional.'],
  ['Bowl de atún y arroz','Comida',['atun','arroz','pepino','tomate','aguacate'],39,590,'1½ latas de atún + arroz + pepino + tomate + ¼ de aguacate.'],
  ['Lentejas con pollo','Comida',['lenteja','pollo','verduras','tomate'],48,650,'Sopa espesa de lentejas con verduras y 150 g de pollo.'],

  ['Omelette con verduras','Cena',['huevo','tortilla'],29,500,'3 huevos con {verdura} + 2 tortillas. Las claras son opcionales.',[VERDURAS]],
  ['Tostadas de atún','Cena',['atun','tostada','pepino','tomate','aguacate'],37,510,'1½ latas de atún + 3 tostadas + pepino + tomate + aguacate.'],
  ['Ensalada grande con pollo','Cena',['pollo','ensalada','tomate','pepino','papa'],45,560,'170 g de pollo + ensalada muy grande + 200 g de papa.'],
  ['Sopa de pollo y frijoles','Cena',['pollo','frijol','verduras','tomate'],42,550,'Sopa abundante con pollo, frijoles y verduras.'],
  ['Huevos con frijoles y tortillas','Cena',['huevo','frijol','tortilla'],30,510,'3 huevos + ½ taza de frijoles + 2 tortillas.'],
  ['Quesadillas de frijol','Cena',['tortilla','queso','frijol'],32,540,'3 tortillas con queso y frijoles. Pico de gallo opcional.'],
  ['Cottage con piña y huevos','Cena',['cottage','huevo','pina'],38,500,'250 g de cottage con piña + 2 huevos.'],

  ['Yogur con fruta','Colación',['yogur'],20,220,'200 g de yogur + 1 porción de {fruta}.',[FRUTAS]],
  ['Huevos con pepino','Colación',['huevo','pepino'],13,180,'2 huevos + pepino libre.'],
  ['Atún con pepino','Colación',['atun','pepino'],26,180,'1 lata de atún + pepino.'],
  ['Frijoles con tomate','Colación',['frijol','tomate'],12,230,'1 taza de frijoles + tomate, cebolla o limón al gusto.'],
  ['Cottage con piña','Colación',['cottage','pina'],24,230,'200 g de cottage + piña.'],
  ['Manzana con almendras','Colación',['manzana','almendra'],4,190,'Manzana + 15 almendras.']
].map(x=>({name:x[0],type:x[1],req:x[2],protein:x[3],kcal:x[4],detail:x[5],any:x[6]||[],kind:x[7]||''}));
