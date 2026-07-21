const V='1.1.0',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],J=(k,d)=>{try{const raw=localStorage.getItem(k);return raw===null?d:JSON.parse(raw)}catch{localStorage.removeItem(k);return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const G={Proteínas:[['yogur','Yogur griego alto en proteína'],['huevo','Huevos'],['claras','Claras de huevo'],['pollo','Pollo'],['pescado','Pescado'],['atun','Atún'],['carne','Carne magra'],['cottage','Cottage o requesón'],['frijol','Frijoles'],['lenteja','Lentejas']],Lácteos:[['leche','Leche deslactosada'],['soya','Bebida de soya sin azúcar']],Frutas:[['platano','Plátano'],['manzana','Manzana'],['mango','Mango'],['pina','Piña'],['frutos','Frutos rojos']],Verduras:[['espinaca','Espinaca'],['pepino','Pepino'],['jicama','Jícama'],['zanahoria','Zanahoria'],['nopales','Nopales'],['ensalada','Ensalada'],['tomate','Tomate'],['cebolla','Cebolla'],['verduras','Verduras variadas'],['pico','Pico de gallo']],Carbohidratos:[['avena','Avena'],['tortilla','Tortillas'],['arroz','Arroz'],['papa','Papa o camote'],['tostada','Tostadas horneadas']],Grasas:[['chia','Chía o linaza'],['aguacate','Aguacate'],['almendra','Almendras'],['aceite','Aceite de oliva'],['cacao','Cacao sin azúcar']]};
const R=[
['Licuado chocolate y plátano','Desayuno',['yogur','leche','platano','avena','chia','cacao'],33,460,'200 g yogur + 250 ml leche deslactosada + ½ plátano + 30 g avena + 10 g chía + cacao.'],
['Licuado manzana y canela','Desayuno',['yogur','leche','manzana','avena','chia'],32,450,'200 g yogur + 250 ml leche + manzana + 30 g avena + chía.'],
['Licuado tropical','Desayuno',['yogur','leche','mango','pina','zanahoria','avena','chia'],31,480,'200 g yogur + leche + ½ taza mango + ½ taza piña + zanahoria + avena + chía.'],
['Huevos con nopales','Desayuno',['huevo','claras','nopales','tortilla'],35,480,'3 huevos + 150 g claras + nopales + 2 tortillas.'],
['Yogur con fruta y avena','Desayuno',['yogur','avena','manzana','chia'],27,410,'300 g yogur + manzana + 30 g avena + chía.'],
['Pollo, arroz, frijoles y ensalada','Comida',['pollo','arroz','frijol','ensalada','tomate','aguacate'],50,680,'180 g pollo + ¾ taza arroz + ½ taza frijoles + ensalada + ¼ aguacate.'],
['Pollo con papa y verduras','Comida',['pollo','papa','verduras','aceite'],48,640,'190 g pollo + 300 g papa/camote + verduras + 1 cucharadita aceite.'],
['Pescado con papa y ensalada','Comida',['pescado','papa','ensalada','tomate','aguacate'],44,620,'200 g pescado + papa + ensalada grande + ¼ aguacate.'],
['Fajitas de pollo','Comida',['pollo','verduras','cebolla','tortilla','aguacate'],46,650,'180 g pollo con verduras + 3 tortillas + ¼ aguacate.'],
['Carne magra con frijoles','Comida',['carne','frijol','pico','tortilla','ensalada'],47,670,'170 g carne + ¾ taza frijoles + pico + 2 tortillas + ensalada.'],
['Bowl de atún y arroz','Comida',['atun','arroz','pepino','tomate','aguacate'],39,590,'1½ latas atún + arroz + pepino + tomate + ¼ aguacate.'],
['Lentejas con pollo','Comida',['lenteja','pollo','verduras','tomate'],48,650,'Sopa espesa de lentejas con verduras y 150 g pollo.'],
['Omelette alto en proteína','Cena',['huevo','claras','verduras','tortilla'],38,520,'3 huevos + 150 g claras + verduras + 2 tortillas.'],
['Tostadas de atún','Cena',['atun','tostada','pepino','tomate','aguacate'],37,510,'1½ latas atún + 3 tostadas + pepino + tomate + aguacate.'],
['Ensalada grande con pollo','Cena',['pollo','ensalada','tomate','pepino','papa'],45,560,'170 g pollo + ensalada muy grande + 200 g papa.'],
['Sopa de pollo y frijoles','Cena',['pollo','frijol','verduras','tomate'],42,550,'Sopa abundante con pollo, frijoles y verduras.'],
['Cottage con piña y huevos','Cena',['cottage','huevo','pina'],38,500,'250 g cottage con piña + 2 huevos.'],
['Quesadillas de frijol','Cena',['tortilla','cottage','frijol','pico'],32,540,'3 tortillas con cottage y frijoles + pico.'],
['Yogur y fruta','Colación',['yogur','manzana'],20,220,'200 g yogur + manzana.'],
['Huevos con pepino','Colación',['huevo','pepino'],13,180,'2 huevos + pepino libre.'],
['Atún con jícama','Colación',['atun','jicama'],26,180,'1 lata atún + jícama.'],
['Cottage con piña','Colación',['cottage','pina'],24,230,'200 g cottage + piña.'],
['Manzana con almendras','Colación',['manzana','almendra'],4,190,'Manzana + 15 almendras.'],
['Frijoles con pico','Colación',['frijol','pico'],12,230,'1 taza frijoles + pico de gallo.']
].map(x=>({name:x[0],type:x[1],req:x[2],protein:x[3],kcal:x[4],detail:x[5]}));
