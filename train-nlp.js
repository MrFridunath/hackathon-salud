const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
  
  // VALE
  manager.addDocument('es', 'vale', 'ok_ES');
  manager.addDocument('en', 'ok', 'ok_ES');
  manager.addDocument('en', 'perfect', 'ok_ES');
  //manager.addAnswer('es', 'ok_ES', "");
  //manager.addAnswer('en', 'ok_ES', "");  

  
  // HOLA
  manager.addDocument('es', 'hola', 'hello_ES');
  manager.addDocument('en', 'hello', 'hello_ES');
  manager.addAnswer('es', 'hello_ES', String.fromCodePoint(0x1F44B));
  manager.addAnswer('en', 'hello_ES', String.fromCodePoint(0x1F44B));
  
  // ADIÓS
  manager.addDocument('es', 'adios', 'bye_ES');
  manager.addDocument('es', 'chao', 'bye_ES');
  manager.addDocument('es', 'hasta luego', 'bye_ES');
  manager.addDocument('en', 'bye', 'bye_ES');
  manager.addAnswer('es', 'bye_ES', String.fromCodePoint(0x1F44B));
  manager.addAnswer('en', 'bye_ES', String.fromCodePoint(0x1F44B));
  
  // GRACIAS
  manager.addDocument('es', 'gracias', 'thanks_ES');
  manager.addDocument('en', 'thanks', 'thanks_ES');
  manager.addDocument('en', 'thank you', 'thanks_ES');
  manager.addAnswer('es', 'thanks_ES', String.fromCodePoint(0x1F44C));
  manager.addAnswer('es', 'thanks_ES', String.fromCodePoint(0x1F919));
  manager.addAnswer('es', 'thanks_ES', String.fromCodePoint(0x1F44D));
  manager.addAnswer('es', 'thanks_ES', String.fromCodePoint(0x1F618));
  manager.addAnswer('en', 'thanks_ES', String.fromCodePoint(0x1F44B));
  manager.addAnswer('en', 'thanks_ES', String.fromCodePoint(0x1F919));
  manager.addAnswer('en', 'thanks_ES', String.fromCodePoint(0x1F44D));
  manager.addAnswer('en', 'thanks_ES', String.fromCodePoint(0x1F618));
  
  // INSULTOS
  manager.addDocument('es', 'tonto', 'lol_ES');
  manager.addDocument('es', 'idiota', 'lol_ES');
  manager.addDocument('es', 'cabrón', 'lol_ES');
  manager.addDocument('es', 'gilipollas', 'lol_ES');
  manager.addDocument('es', 'eres un mierdas', 'lol_ES');
  manager.addDocument('es', 'puta mierda', 'lol_ES');
  manager.addDocument('es', 'mal, no sirves para nada', 'lol_ES');
  manager.addDocument('es', 'que asco das', 'lol_ES');
  manager.addAnswer('es', 'lol_ES', String.fromCodePoint(0x1F62D));
 
  // FUNNY
  manager.addDocument('es', 'haha', 'fun_ES');
  manager.addDocument('es', 'lol', 'fun_ES');
  manager.addDocument('es', 'jaja', 'fun_ES');
  manager.addDocument('es', 'xD', 'fun_ES');
  manager.addAnswer('es', 'fun_ES', String.fromCodePoint(0x1F605));
 
  
  // ESPAÑOL

  // MEDICAMENTOS PARA EL TDAH
  
  manager.addDocument('es', 'medicamentos para el tdah', 'diagnostic1_medicaments_ES');
  manager.addDocument('es', 'tiene déficit de atención, ¿qué me recomiendas?', 'diagnostic1_medicaments_ES');
  manager.addDocument('es', 'medicamentos para impulsividad y déficit de atención', 'diagnostic1_medicaments_ES');
  manager.addDocument('es', 'que toma un tdah', 'diagnostic1_medicaments_ES');
  manager.addDocument('es', 'que puede tomar alguien con tdah', 'diagnostic1_medicaments_ES');

  manager.addAnswer('es', 'diagnostic1_medicaments_ES', 'Algunos medicamentos recomendados para el **TDAH** o el **ADD** son:\n**Ritalin®**\n**Concerta®**\n**Daytrana®**\n**Focalin®**\n\nEl principio activo de estos medicamentos es el: **METILFENIDATO [CAS: 113-45-1]**\n\nEstos medicamentos necesitan receta. Se recomienda un diagnóstico médico '+ String.fromCodePoint(0x1F468));
  manager.addAnswer('es', 'diagnostic1_medicaments_ES', 'Algunos medicamentos recomendados para el **TDAH** o el **ADD** son:\n**Ritalin®**\n**Concerta®**\n**Daytrana®**\n**Focalin®**\n\nEl principio activo de estos medicamentos es el: **METILFENIDATO [CAS: 113-45-1]**\n\nEstos medicamentos necesitan receta. Se recomienda un diagnóstico médico '+ String.fromCodePoint(0x1F469));

  // EMBARAZADA CON TRATAMIENTO POR DERMATITIS
  
  manager.addDocument('es', 'se ha quedado embarazada y está tomando dacortin', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('es', '¿una embarazada puede tomar dacortin?', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('es', 'se ha quedado embarazada y está tomando zamene', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('es', '¿una embarazada puede tomar zamene?', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('es', 'se ha quedado embarazada y está tomando estilsona', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('es', '¿una embarazada puede tomar estilson?', 'diagnostic2_warnings_principe1_ES');

  manager.addDocument('es', 'embarazada con tratamiento para dermatitis', 'diagnostic2_possibilty_principe1_ES');
  manager.addDocument('es', 'tratamiento para la dermatosis y está embarazada', 'diagnostic2_possibilty_principe1_ES');
  manager.addDocument('es', 'tratamiento con piel atópica y está embarazada', 'diagnostic2_possibilty_principe1_ES');

  manager.addAnswer('es', 'diagnostic2_warnings_principe1_ES', '**¡ADVERTENCIA!**\n\nEl medicamento indicado contiene el principio activo **CORTISONA [CAS: 53-06-5]**.\n\nEste principio activo, puede ser perjudicial para una embarazada.\n\nSe recomienda atención médica ' + String.fromCodePoint(0x1F468));
  manager.addAnswer('es', 'diagnostic2_warnings_principe1_ES', '**¡ADVERTENCIA!**\n\nEl medicamento indicado contiene el principio activo **CORTISONA [CAS: 53-06-5]**.\n\nEste principio activo, puede ser perjudicial para una embarazada.\n\nSe recomienda atención médica ' + String.fromCodePoint(0x1F469));
  
  manager.addAnswer('es', 'diagnostic2_possibilty_principe1_ES', '**¡ADVERTENCIA!**\nEs posible que el tratamiento contenga el principio activo **CORTISONA [CAS: 53-06-5]**.\n\nEste principio activo, puede ser perjudicial para una embarazada.\n\nSe recomienda atención médica ' + String.fromCodePoint(0x1F469));
  
  // MEDICAMENTOS PARA LA DIABETES
  
  manager.addDocument('es', 'medicamentos para la diabetes', 'diagnostic3_medicaments_ES');
  manager.addDocument('es', 'tiene diabetes, ¿qué me recomiendas?', 'diagnostic3_medicaments_ES');
  manager.addDocument('es', 'medicamentos para diabético', 'diagnostic3_medicaments_ES');
  manager.addDocument('es', 'que toma un diabético', 'diagnostic3_medicaments_ES');
  manager.addDocument('es', 'que puede tomar alguien con diabetes', 'diagnostic3_medicaments_ES');

  manager.addAnswer('es', 'diagnostic3_medicaments_ES', 'Algunos medicamentos comunes para la **DIABETES** son:\n**Lantus®**\n**Januvia®**\n**NovoLog®**\n**Humalog®**\n\nSe recomienda un diagnóstico médico ' + String.fromCodePoint(0x1F468));
  manager.addAnswer('es', 'diagnostic3_medicaments_ES', 'Algunos medicamentos comunes para la **DIABETES** son:\n**Lantus®**\n**Januvia®**\n**NovoLog®**\n**Humalog®**\n\nSe recomienda un diagnóstico médico ' + String.fromCodePoint(0x1F469));

  // ENGLISH
  
  // MEDICATIONS FOR TDAH
  
  manager.addDocument('en', 'medications for tdah', 'diagnostic1_medicaments_ES');
  manager.addDocument('en', 'he has attention deficit disorder, what do you recomend me?', 'diagnostic1_medicaments_ES');
  manager.addDocument('en', 'medicines for impulsivity and attention deficit', 'diagnostic1_medicaments_ES');
  manager.addDocument('en', 'what takes a tdah', 'diagnostic1_medicaments_ES');
  manager.addDocument('en', 'what can take someone with tdah', 'diagnostic1_medicaments_ES');

  manager.addAnswer('en', 'diagnostic1_medicaments_ES', 'Some recommended medications for **TDAH** or **ADD** are:\n**Ritalin®**\n**Concerta®**\n**Daytrana®**\n**Focalin®**\n\nThe active ingredient of these medicaments are: **METHYLPHENIDATE [CAS: 113-45-1]**\n\nThese medications need prescription. A medical diagnosis is recommended '+ String.fromCodePoint(0x1F468));
  manager.addAnswer('en', 'diagnostic1_medicaments_ES', 'Some recommended medications for **TDAH** or **ADD** are:\n**Ritalin®**\n**Concerta®**\n**Daytrana®**\n**Focalin®**\n\nThe active ingredient of these medicaments are: **METHYLPHENIDATE [CAS: 113-45-1]**\n\nThese medications need prescription. A medical diagnosis is recommended '+ String.fromCodePoint(0x1F469));

  // TREATMENT FOR PREGNANT WITH DERMATITIS
  
  manager.addDocument('en', 'she has become pregnant and is taking dacortin', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('en', 'can a pregnant woman take dacortin?', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('en', 'she has become pregnant and is taking zamene', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('en', 'can a pregnant woman take zamene?', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('en', 'she has become pregnant and is taking estilsona', 'diagnostic2_warnings_principe1_ES');
  manager.addDocument('en', 'can a pregnant woman take estilson?', 'diagnostic2_warnings_principe1_ES');

  manager.addDocument('en', 'pregnant with a treatment for dermatitis', 'diagnostic2_possibilty_principe1_ES');
  manager.addDocument('en', 'treatment for dermatitis and is pregnant', 'diagnostic2_possibilty_principe1_ES');
  manager.addDocument('en', 'treatment for atopic skin and is pregnant', 'diagnostic2_possibilty_principe1_ES');

  manager.addAnswer('en', 'diagnostic2_warnings_principe1_ES', '**WARNING!**\n\nThe indicated medication contains the active substance **CORTISONE [CAS: 53-06-5]**.\n\nThis active ingredient can be harmful to a pregnant woman.\n\nMedical care is recommended ' + String.fromCodePoint(0x1F468));
  manager.addAnswer('en', 'diagnostic2_warnings_principe1_ES', '**WARNING!**\n\nThe indicated medication contains the active substance **CORTISONE [CAS: 53-06-5]**.\n\nThis active ingredient can be harmful to a pregnant woman.\n\nMedical care is recommended ' + String.fromCodePoint(0x1F469));
  
  manager.addAnswer('en', 'diagnostic2_possibilty_principe1_ES', '**WARNING!**\n\nThe indicated medication could contain the active substance **CORTISONE [CAS: 53-06-5]**.\n\nThis active ingredient can be harmful to a pregnant woman.\n\nMedical care is recommended ' + String.fromCodePoint(0x1F468));
  manager.addAnswer('en', 'diagnostic2_possibilty_principe1_ES', '**WARNING!**\n\nThe indicated medication could contain the active substance **CORTISONE [CAS: 53-06-5]**.\n\nThis active ingredient can be harmful to a pregnant woman.\n\nMedical care is recommended ' + String.fromCodePoint(0x1F469));
  
  // MEDICINES FOR DIABETES
  
  manager.addDocument('en', 'medicines for diabetes', 'diagnostic3_medicaments_ES');
  manager.addDocument('en', 'he has diabetes, what do you recommend?', 'diagnostic3_medicaments_ES');
  manager.addDocument('en', 'medicines for diabetic', 'diagnostic3_medicaments_ES');
  manager.addDocument('en', 'whath does takes a diabetic?', 'diagnostic3_medicaments_ES');
  manager.addDocument('en', 'what medicines can take a diabetic?', 'diagnostic3_medicaments_ES');

  manager.addAnswer('en', 'diagnostic3_medicaments_ES', 'Some common medications for **DIABETES** are:\n**Lantus®**\n**Januvia®**\n**NovoLog®**\n**Humalog®**\n\nA medical diagnosis is recommended ' + String.fromCodePoint(0x1F468));
  manager.addAnswer('en', 'diagnostic3_medicaments_ES', 'Some common medications for **DIABETES** are:\n**Lantus®**\n**Januvia®**\n**NovoLog®**\n**Humalog®**\n\nA medical diagnosis is recommended ' + String.fromCodePoint(0x1F469));  

  // Accidente
  /*manager.addDocument('es', 'he tenido un accidente', 'accidents');
  manager.addDocument('es', 'se ha roto el coche', 'accidents');
  manager.addDocument('es', 'se ha roto la moto', 'accidents');
  manager.addDocument('es', 'el coche está estropeado', 'accidents');
  manager.addDocument('es', 'la moto está estropeada', 'accidents');
  manager.addDocument('es', 'se ha roto la moto', 'accidents');
  manager.addDocument('es', 'el coche no arranca', 'accidents');
  manager.addDocument('es', 'la moto no arranca', 'accidents');
  manager.addDocument('es', 'no funciona el coche', 'accidents');
  manager.addDocument('es', 'el coche tiene una avería', 'accidents');
  manager.addDocument('es', 'la moto tiene una avería', 'accidents');
  manager.addDocument('es', 'el coche está averiado', 'accidents');
  manager.addDocument('es', 'la moto no arranca', 'accidents');
  manager.addDocument('es', 'he recibido un golpe', 'accidents');
  manager.addDocument('es', 'me he golpeado en el coche', 'accidents');
  manager.addDocument('es', 'he tenido un problema con mi coche', 'accidents'); 
  manager.addDocument('es', 'he tenido un problema con mi moto', 'accidents');
  manager.addDocument('es', 'me he caido en moto', 'accidents');
  manager.addDocument('es', 'me he caido en coche', 'accidents');
  manager.addDocument('es', 'mi vehivulo ha tenido un accidente', 'accidents');
  manager.addDocument('es', 'mi coche ha tenido un accidente', 'accidents');
  manager.addDocument('es', 'se han chocado conmigo', 'accidents');
  manager.addDocument('es', 'mi moto se ha hecho trizas', 'accidents');
  manager.addDocument('es', 'mi coche se ha hecho trizas', 'accidents');
  manager.addDocument('es', 'me he golpeado en el coche', 'accidents');
  manager.addDocument('es', 'ayuda, he tenido un problema', 'accidents');
  manager.addDocument('es', 'ayuda, me he chocado', 'accidents');
  manager.addDocument('es', 'ayuda, me he caido con la moto', 'accidents');
  manager.addDocument('es', 'me he chocado con el coche', 'accidents');

  manager.addAnswer('es', 'accidents', 'JO que faena la verdad, vamos a ver que podemos hacer');
  manager.addAnswer('es', 'accidents', 'Jopetas eso es un problema. Danos tus datos y nosotros nos encargamos');
  manager.addAnswer('es', 'accidents', 'Vamos a gestionar el accidente, por favor, rellene el siguiente formulario y NO SE MUEVA:');
 
  // Nuevo seguro
  manager.addDocument('es', 'quiero contratar un seguro de un vehículo', 'seguro');
  manager.addDocument('es', 'me he comprado un coche', 'seguro');
  manager.addDocument('es', 'me he comprado una moto', 'seguro');
  manager.addDocument('es', 'darme de alta con el coche', 'seguro');
  manager.addDocument('es', 'crear nuevo seguro de vehículo', 'seguro');
  manager.addDocument('es', 'quiero un seguro de coche', 'seguro');
  manager.addDocument('es', 'nuevo seguro de coche', 'seguro');
  manager.addDocument('es', 'me gustaria un nuevo seguro de moto', 'seguro');
  manager.addDocument('es', 'me gustaria un nuevo seguro', 'seguro');
  manager.addDocument('es', 'nuevo seguro para mi vehiculo', 'seguro');
  manager.addDocument('es', 'contratar seguro', 'seguro');
  manager.addDocument('es', 'nueva poliza de moto', 'seguro');
  manager.addDocument('es', 'nueva poliza para mi moto', 'seguro');
  manager.addDocument('es', 'nueva poliza coche', 'seguro');
  manager.addDocument('es', 'poliza nueva', 'seguro');
  
  manager.addAnswer('es', 'seguro', 'Perfecto $$ vamos a $$ gestionar $$ su nuevo seguro');
  manager.addAnswer('es', 'seguro', 'Muy bien, gracias por confiar en AXA :)');
  manager.addAnswer('es', 'seguro', 'Muchas gracias. Estamos encantados de que confie en AXA-bot');

  // Accidente traducido al inglés
  manager.addDocument('en', 'Ive had an accident', 'accidents2');
  manager.addDocument('en', 'My car broke', 'accidents2');
  manager.addDocument('en', 'My motorcycle broke', 'accidents2');
  manager.addDocument('en', 'My car is broken', 'accidents2');
  manager.addDocument('en', 'My motorcycle is broken', 'accidents2');
  manager.addDocument('en', 'My motor broke', 'accidents2');
  manager.addDocument('en', 'My car doesn\'t start' , 'accidents2');
  manager.addDocument('en', 'Motorcycle doesn\'t start', 'accidents2');
  manager.addDocument('en', 'My car is not working', 'accidents2');
  manager.addDocument('en', 'My car has a problem', 'accidents2');
  manager.addDocument('en', 'My motorcycle has a problem', 'accidents2');
  manager.addDocument('en', 'The car is broken', 'accidents2');
  manager.addDocument('en', 'I crashed', 'accidents2');
  manager.addDocument('en', 'I crashed with my car', 'accidents2');
  manager.addDocument('en', 'I had a problem with my car', 'accidents2'); 
  manager.addDocument('en', 'I crashed with my motorcycle', 'accidents2');
  manager.addDocument('en', 'I fell from my motorcycle', 'accidents2');
  manager.addDocument('en', 'I fell from my car', 'accidents2');
  manager.addDocument('en', 'My car got smashed', 'accidents2');
  manager.addDocument('en', 'My motorcycle got smashed', 'accidents2');

  manager.addAnswer('en', 'accidents', 'WAOH thats a petty, lets see what can we do');
  manager.addAnswer('en', 'accidents', 'Thats a real problem, fill the following form and let us do the hard work');
  manager.addAnswer('en', 'accidents', 'We will process your information, please DONT MOVE! Oh wait... you cant :)');
  */
  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');
  manager.save('./model.nlp', true);
};