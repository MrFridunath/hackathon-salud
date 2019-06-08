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
  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');
  manager.save('./model.nlp', true);
};