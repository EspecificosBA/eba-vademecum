'use strict';

var products = {
  "Protección Intensiva": [{
    "category": ["Protección Intensiva"],
    "shortDesc": "Potente acción antioxidante, un magnífico aporte de firmeza y elasticidad que mejora el color, la luminosidad y la hidratación de la piel retrasando el envejecimiento cutáneo. ",
    "fullDesc": "Crema antioxidante, humecto  nutritiva, potenciada por la acción de una micro alga, Espirulina, que contiene los veinte aminoácidos en perfecto balance, minerales y proteínas. Textura suave, fluida. Indicada para pieles normales, deshidratadas, menopausia.",
    "application": "Tras limpiar y tonificar rostro, cuello y escote, aplicar mañana y noche con un suave masaje.",
    "actives": ["Vitamina A", "Vitamina C", "Vitamina E", "Espirulina"],
    "ph": "",
    "variants": [{
      "code": 1001,
      "content": "60 ml",
      "price": 250,
      "sellPrice": 500
    }, {
      "code": 2001,
      "content": "250 ml.",
      "price": 398,
      "sellPrice": ""
    }],
    "name": "Complex Bio Vitamins A+E+C"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Una textura única, enriquecida con ingredientes capaces de activar signos claves de la juventud de la piel. Las arrugas se suavizan visiblemente. La piel recupera su luminosidad y turgencia",
    "fullDesc": "Formulada específicamente para cubrir las necesidades de las pieles más secas. Dota a la piel de una nueva capacidad de autorregeneración y autodefensa. Fórmula rica y exclusiva, perfectamente equilibrada, de alto poder antioxidante. Reduce la profundidad y longitud de las arrugas y previene su aparición prematura. Reafirmante.",
    "application": "Tras limpiar y tonificar rostro, cuello y escote, aplicar diariamente por la noche. Dependiendo de las necesidades de la piel, se combinará la Crema Sublime Uvit",
    "actives": ["Polifenoles de pepitas de uva", "Salvia, Tocoferol", "Aceite de Jojoba"],
    "ph": "",
    "variants": [{
      "code": 1002,
      "content": "60 ml.",
      "price": 250,
      "sellPrice": 500
    }, {
      "code": 2002,
      "content": "250 ml.",
      "price": 398,
      "sellPrice": ""
    }],
    "name": "Sublime Uvit - Crema Reparadora"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Acción altamente hidratante y regeneradora en pieles desvitalizadas. Promueve la formación de colágeno, Ayuda a evitar la pérdida de agua transepidérmica, estimula la liberación de citoquinas. Efecto luminoso en pieles secas, con necesidades. Compensa las carencias de la piel. Ayuda a disminuir estrías y cicatrices.",
    "fullDesc": "Piel más confortable y aparece revitalizada. Incluso al final del día, la piel se siente nutrida e hidratada. Los signos de cansancio y de la edad parecen reducidos. La piel visiblemente reparada, con toda la luminosidad recuperada. Su textura rica y densa combate las arrugas y líneas de expresión y proporciona el confort que las pieles secas necesitan. Se absorbe con rapidez sin restos grasos.",
    "application": "Aplicar en rostro, cuello y escote, luego de la crema Sublime Uvit. Aplicar en estrías y cicatrices con suave masaje circular.",
    "actives": ["Acido Glicólico ( 7%)", "Extracto de algas"],
    "ph": "",
    "variants": [{
      "code": 1003,
      "content": "50 ml.",
      "price": 250,
      "sellPrice": 500
    }, {
      "code": 2003,
      "content": "120 ml.",
      "price": 380,
      "sellPrice": ""
    }],
    "name": "Audace - Glico Activo"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Mejora la textura, la elasticidad, la tonicidad y la firmeza. Reduce la flacidez. ",
    "fullDesc": "Mejora el proceso de renovación celular, ayuda a normalizar la queratinización, afinando y eliminando imperfecciones, mejora el sostén. Disminuye la profundidad de las arrugas, los signos visibles de cansancio, disminuye el contraste de manchas. Tono de piel mas uniforme y elástica, efecto matificante. Indicado para piel normal, cutis graso, de más de treinta años. Puede utilizarse en verano",
    "application": "",
    "actives": ["Retinol", "Aloe Barbadensis extract"],
    "ph": "",
    "variants": [{
      "code": 1004,
      "content": "50 ml.",
      "price": 210,
      "sellPrice": 420
    }, {
      "code": 2004,
      "content": "120 ml.",
      "price": 350,
      "sellPrice": ""
    }],
    "name": "Bisome Retinol - Fluido Facial"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Una mirada más joven, las ojeras y los signos de cansancio disminuyen. Piel más fresca, clara y luminosa.",
    "fullDesc": "Crema activa, formulada específicamente para ayudar a recuperar las funciones principales de la piel y mejorar la comunicación intercelular. Mejora la micro circulación palpebral, disminuye la hiperpigmentación, aumenta la firmeza. Protección activa frente al crono y foto envejecimiento. Testeadodermatológicamente.",
    "application": "Aplicar diariamente, por la mañana.",
    "actives": ["Polifenoles de pepitas de uva", "Citopeptinas", "Vitamina C", "Alfabisabolol", "FPS"],
    "ph": "",
    "variants": [{
      "code": 1006,
      "content": "30 ml.",
      "price": 280,
      "sellPrice": 560
    }],
    "name": "Repair Eye Contour"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Un tratamiento para impulsar las defensas naturales de la piel y hacerla más resistente a los efectos del estrés diario. Los signos de cansancio acumulado desaparecen, piel confortable y aliviada.",
    "fullDesc": "Suero antioxidante intensivo, específicamente formulado para proteger a la piel de la acción medioambiental. Efecto relax en líneas de expresión. Reafirmante. Piel de seda. Indicado para todo tipo de piel. Testeado dermatológicamente.",
    "application": "Tratamiento de peeling: Dejar actuar diez minutos, sin retirar aplicar RefreshingMask durante diez minutos, retirar con esponja y agua. Permeación de activos: Aplicar peeling Bio Regulador, dejar actuar durante tres minutos, retirar, aplicar activos concentrados del 1 al 7 de acuerdo al tratamiento a realizar",
    "actives": ["Polifenoles de pepitas de uva", "Citopeptinas", "Vitamina C", "FPS"],
    "ph": "5,5",
    "variants": [{
      "code": 1007,
      "content": "50 ml.",
      "price": 220,
      "sellPrice": 440
    }, {
      "code": 2007,
      "content": "120 ml.",
      "price": 380,
      "sellPrice": ""
    }],
    "name": "Uvit Serum Defense"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Innovadora fórmula desarrollada con un vehículo especializado, que no solo mejora la apariencia de la piel, sino que también actúa frente a las causas que generan el acné",
    "fullDesc": "Específicamente formulado para actuar frente a las causas que generan el acné. Normaliza el PH de la piel, antiséptico, antinflamatorio, anti pruriginoso. Evita la deshidratación de la piel. FPS. Puede combinarse con peeling Biorregulador y Refreshing Mask en tratamiento en gabinete profesional",
    "application": "Acné: tres aplicaciones diarias, mañana, tarde y noche. No retirar. Piel seborreica: Aplicar por la mañana. No retirar.",
    "actives": ["Acido Salicílico", "Retinol, Resorcina", "FPS"],
    "ph": "4,5",
    "variants": [{
      "code": 1011,
      "content": "50 ml.",
      "price": 180,
      "sellPrice": 360
    }, {
      "code": 2011,
      "content": "200 ml.",
      "price": 320,
      "sellPrice": ""
    }],
    "name": "Acne Skin Cleans"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Crema de tratamiento anti-edad inteligente, ayuda a proteger a la piel frente al paso del tiempo. La piel infunde con un desarrollado cóctel de embellecimiento. No sólo corrige, protege su piel de las agresiones externas.",
    "fullDesc": "Un todo dinámico y simultáneo que protege las barreras de la piel para prevenir la pérdida de humedad, compensar, estimular y equilibrar la tonalidad, dejando la piel iluminada y naturalmente magnífica. Anti-envejecimiento . Hidratatante. Minimiza los poros. Minimiza Imperfecciones. Reduce Enrojecimiento. Mejora la tonalidad. Ilumina. Estimula las defensas. Mejora la vitalidad. Reafirma. Estimula la tonalidad. Estimula la tonallidad en forma pareja.",
    "application": "Aplicar con la piel limpia por la mañana.",
    "actives": ["Rosa Mosqueta", "Gluconolactona", "Sésamo", "Beta Caroteno", "Filtro Solar"],
    "ph": "",
    "variants": [{
      "code": 1039,
      "content": "50 ml.",
      "price": 230,
      "sellPrice": 460
    }],
    "name": "DD Cream"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Su fórmula rica en despigmentantes, con características anti- envejecimiento, anti-inflamatorios, actúa en un todo dinámico y simultáneo.",
    "fullDesc": "Estimula los mecanismos de defensa, disminuye el estrés oxidativo, ayudando a disminuir los mecanismos de hiperpigmentación propios de la cascada pigmentaria. Marcada acción anti-envejecimiento, descongestiva- purificante. No contiene parabenos. Despigmentante. Homogeneizante. Anti-envejecimiento. Antioxidante. Descongestiva. Purificante. Foto-protectora.",
    "application": "Aplicar diariamente por la noche, en las zonas hiperpigmentadas, dejar actuar durante 2 minutos, y extender a todo el rostro. Se puede potenciar el tratamiento con la aplicación de ampollas SKIN-DOSE.",
    "actives": ["Skin Biolight", "Uva Ursi", "Regaliz", "Filtro solar"],
    "ph": "",
    "variants": [{
      "code": 1040,
      "content": "50 ml.",
      "price": 200,
      "sellPrice": 400
    }, {
      "code": 2040,
      "content": "200 ml",
      "price": 340,
      "sellPrice": ""
    }],
    "name": "Whitening Cream"
  }, {
    "category": ["Protección Intensiva"],
    "shortDesc": "Crema de tratamiento específicamente formulada para el cuidado de la piel sensible, rica en ácidos grasos insaturados, tocoferoles, beta-glucanos, minerales, oligoelementos y vitaminas que ayudan a calmar y proteger a la piel, frente a la acción medioambiental. Triple acción protectora del colágeno. Regeneradora.",
    "fullDesc": "Equilibrante - reafirmante - antioxidante. Efecto voluminizante en lineas dinámicas. Disminuye la inflamacion. Hidrata la piel. Estimula la formación de colágeno. Estimula las defensas. Elimina bacterias. Reduce el enrojecimiento .",
    "application": "Aplicar diariamente por la mañana Sensitive Skin, el tratamiento puede potenciarse con Monodosis-Vitamina F aplicadas durante la noche.",
    "actives": ["Argán Oil", "Sepilifth DPHP", "Avena Sativa", "Filtro solar"],
    "ph": "",
    "variants": [{
      "code": 1041,
      "content": "50 ml.",
      "price": 200,
      "sellPrice": 400
    }, {
      "code": 2041,
      "content": "200 ml",
      "price": 340,
      "sellPrice": ""
    }],
    "name": "Sensitive Cream"
  }],
  "Higiene": [{
    "category": ["Higiene"],
    "shortDesc": "Emulsión de limpieza, demaquillante, de PH neutro, hipoalergénica. Indicada para todo tipo de piel, aún las más sensibles.",
    "fullDesc": "Limpia profundamente la epidermis, se equilibra el pH de la piel. Elimina suavemente las impurezas sin dañar la humedad y el equilibrio natural. Prepara, purificará y acondiciona a la piel para recibir los beneficios óptimos de los mejores cuidados. La piel está lista para recibir los productos propios de la Fase de Tratamiento.",
    "application": "Aplicar con suaves maniobras, retirar",
    "actives": ["Matricaria chamomilla"],
    "ph": "7",
    "variants": [{
      "code": 1005,
      "content": "120 ml.",
      "price": 160,
      "sellPrice": 320
    }, {
      "code": 2005,
      "content": "500 ml.",
      "price": 290,
      "sellPrice": ""
    }],
    "name": "Emulsión de Higiene"
  }, {
    "category": ["Higiene"],
    "shortDesc": "Piel fresca, descongestiva y limpia. Prepara a la piel para recibir el tratamiento posterior",
    "fullDesc": "Suspensión de micro gránulos de silicatos naturales de tamaño heterogéneo. Indicado para exfoliación manual, aún en pieles sensibles. Hipoalergénico. Facial y corporal",
    "application": "Aplicar sobre la piel, humedecer con agua y trabajar en forma suave y circular de tres a cinco minutos. Retirar con esponja y agua.",
    "actives": ["Silicatos naturales"],
    "ph": "",
    "variants": [{
      "code": 2008,
      "content": "250 ml.",
      "price": 290,
      "sellPrice": ""
    }],
    "name": "Exfoliating Scrub"
  }],
  "Máscaras": [{
    "category": ["Máscaras"],
    "shortDesc": "Los ácidos Linoleico y Linolénico, aportan mayor protección a las células de Langerhans, mejorando notablemente la protección de la piel",
    "fullDesc": "Máscara activa. Ayuda a aumentar los mecanismos de defensa de la piel, aportando beneficios en tratamientos de rosácea, acné, cutis graso, manchas cutáneas y pieles desvitalizadas. Aporta ácidos grasos insaturados esenciales, disminuye la inflamación, ayuda a normalizar la piel",
    "application": "Aplicar con la piel limpia, luego de retirar Exfoliating Scrub, percibirá un suave picor durante un minuto al llegar a las zonas más profundas de la piel. Dejar actuar durante 20 minutos, observará al retirar una piel suave, limpia y fresca, aún en las instancias más sensibles. Puede combinarse en métodos sinérgicos con Micropeeling o Peeling Biorregulador",
    "actives": ["Acido Linoleico", "Acido Linolénico", "Avena Sativa", "Malva", "Matricaria Chamomilla"],
    "ph": "5,5",
    "variants": [{
      "code": 2009,
      "content": "250 ml.",
      "price": 330,
      "sellPrice": ""
    }],
    "name": "Refreshing Mask"
  }, {
    "category": ["Máscaras"],
    "shortDesc": "SpecificMask aporta máxima tecnología en renovación celular, disminuye las arrugas más profundas de la piel otorgando firmeza y radiante apariencia. Piel más lisa que recupera la belleza y juventud",
    "fullDesc": "Evita la pérdida de agua transepidérmica. Disminuye arrugas dinámicas. Puede aplicarse sobre labios y párpados, aún en pieles sensibles. Aplicar en combinación con Monodosis Específicas o Micropeeling en tratamientos intensivos anti-envejecimiento.",
    "application": "Aplicar en rostro, cuello y escote, dejar actuar durante veinte minutos, retirar mediante esponja y agua",
    "actives": ["Vitamina A", "Vitamina E", "Acido Glicólico", "Acido Salicílico"],
    "ph": "5,5",
    "variants": [{
      "code": 2010,
      "content": "250 ml.",
      "price": 350,
      "sellPrice": ""
    }],
    "name": "Specific Mask"
  }],
  "Peeling": [{
    "category": ["Peeling"],
    "shortDesc": "Fórmula de alto desarrollo con doble función: tratamientos de peeling y aumento en la penetrabilidad de activos, mejorando la renovación celular.",
    "fullDesc": "Fórmula de alto desarrollo con doble función: tratamientos de peeling, y aumento de penetrabilidad de activos, mejorando la recuperación celular. Indicado para Acné, piel seborreica, cutis graso, disminuir líneas de expresión.",
    "application": "Tratamiento de peeling: Dejar actuar diez minutos, sin retirar aplicar Refreshing Mask durante diez minutos, retirar. Permeación de activos: Aplicar peeling Bio Regulador, dejar actuar durante tres minutos, retirar, aplicar Monodosis específicas o activos concentrados del 1 al 7 de acuerdo al tratamiento a realizar",
    "actives": ["Acido Salicílico", "Acido Láctico", "Resorcina"],
    "ph": "3,5",
    "variants": [{
      "code": 2012,
      "content": "30 ml.",
      "price": 165,
      "sellPrice": ""
    }],
    "name": "Peeling Bio Regulador"
  }, {
    "category": ["Peeling"],
    "shortDesc": "Peeling de efecto regenerativo de la piel. Ayuda a regular la melanogénesis actuando como blanqueador",
    "fullDesc": "Peeling de efecto regenerativo de la piel. Ayuda a regular la melanogénesis, actuando como blanqueador. Ayuda a disminuir las imperfecciones de la piel, manchas cutáneas y de manos. Indicado para todo tipo de piel.",
    "application": "Aplicar sobre piel limpia, luego de retirar ExfoliatingScrub, trabajar las zonas de manchas cutáneas en forma suave y circular durante tres a cinco minutos, extender a toda la piel del rostro y cuello. Dejar actuar durante cinco minutos y sin retirar aplicar SpecificMasck. Dejar actuar quince minutos y retirar mediante esponja y agua.",
    "actives": ["Acido Glicólico", "Acido Fítico", "Acido Ascórbico"],
    "ph": "3,5 / 10 %",
    "variants": [{
      "code": 2013,
      "content": "30 ml.",
      "price": 170,
      "sellPrice": ""
    }],
    "name": "Micropeeling"
  }],
  "Ácido Hialurónico": [{
    "category": ["Ácido Hialurónico"],
    "shortDesc": "Microdermolift activa de forma inteligente los mecanismos propios de la piel, mediante la acción sinérgica del ácido hialurónico de máxima pureza y vehículos especializados.",
    "fullDesc": "Piel hidratada con intensidad lisa y luminosa por más tiempo. Un contorno de ojos que alivia para reducir bolsas palpebrales y los signos de fatiga. Especialmente formulado para tratar la delicada zona del contorno de los ojos, esta única textura, reduce líneas de expresión y arrugas con una sensación aterciopelada",
    "application": "Aplicar en la zona del contorno de los ojos y líneas de expresión",
    "actives": ["Acido Hialurónico"],
    "ph": "5,5",
    "variants": [{
      "code": 1016,
      "content": "20 ml.",
      "price": 260,
      "sellPrice": 520
    }],
    "name": "Microdermo Lift"
  }, {
    "category": ["Ácido Hialurónico"],
    "shortDesc": "Serum multi-acción intensivo, disminuye manchas cutáneas y evita el efecto rebote post-estacional. Aporta una intensa hidratación y resultados de suavidad incomparables",
    "fullDesc": "Piel más firme, suave y elástica. Mejora visiblemente la luminosidad, coloración e hidratación profunda de la piel. Indicado para piel normal, manchas cutáneas, piel deshidratada. ",
    "application": "Aplicar por la mañana",
    "actives": ["Acido Hialurónico", "Acido Láctico", "FPS"],
    "ph": "5,5",
    "variants": [{
      "code": 1017,
      "content": "50 ml.",
      "price": 220,
      "sellPrice": 440
    }, {
      "code": 2017,
      "content": "120 ml.",
      "price": 380,
      "sellPrice": ""
    }],
    "name": "Hydra Intensive Serum"
  }, {
    "category": ["Ácido Hialurónico"],
    "shortDesc": "Resblece la hidratación, mejora la renovación celular, suavidad, elasticidad y firmeza, prolongando la juventud de la piel.",
    "fullDesc": "Fórmula intensiva de acción sinérgica combinada, ayuda a reforzar la barrera protectora de la piel, para lograr una piel hidratada y re-nutrida. Protege a la piel del stress medioambiental. Aporta compensación intensa, inmediata, continua y calma las pieles sensibles.",
    "application": "Aplicar por la mañana",
    "actives": ["Acido Hialurónico", "Azuleno", "NMF", "FPS"],
    "ph": "5,5",
    "variants": [{
      "code": 1018,
      "content": "50 ml.",
      "price": 210,
      "sellPrice": 420
    }, {
      "code": 2018,
      "content": "120 ml.",
      "price": 320,
      "sellPrice": ""
    }],
    "name": "Hydra Intensive Tonico"
  }],
  "Hombres": [{
    "category": ["Hombres"],
    "shortDesc": "Crema facial ultra ligera y elástica, específicamente formulada para la piel del hombre",
    "fullDesc": "Piel lisa y firme. Disminuye líneas de expresión y arrugas. Indicado para piel con tendencia a seca",
    "application": "aplicar por la mañana y por la noche",
    "actives": ["retinol"],
    "ph": "5",
    "variants": [{
      "code": 1020,
      "content": "50 ml.",
      "price": 210,
      "sellPrice": 420
    }],
    "name": "RENOVATIO Retinol For Men"
  }, {
    "category": ["Hombres"],
    "shortDesc": "Serum intensivo formulado específicamente para la piel del hombre con filtro solar.",
    "fullDesc": "Disminuye líneas de expresión y arrugas.",
    "application": "Aplicar después de afeitar, por la mañana y por la noche",
    "actives": ["polifenoles de pepitas de uva", "Vitamina C", "FPS"],
    "ph": "5,5",
    "variants": [{
      "code": 1021,
      "content": "50 ml.",
      "price": 210,
      "sellPrice": 420
    }],
    "name": "RENOVATIO Serum For Men"
  }, {
    "category": ["Hombres"],
    "shortDesc": "Crema facial ultra ligera y elástica formulada específicamente para la piel del hombre.",
    "fullDesc": "Favorece el normal desarrollo de la piel, disminuye la oleosidad, aspecto saludable, uniforme y matificante de la piel. Indicado para cutis graso",
    "application": "Aplicar después de afeitar, por la mañana y por la noche.",
    "actives": ["Acido Salicílico", "Resorcina", "FPS"],
    "ph": "",
    "variants": [{
      "code": 1022,
      "content": "50 ml.",
      "price": 210,
      "sellPrice": 420
    }],
    "name": "RENOVATIO Skin Control For Men"
  }],
  "Activos Concentrados": [{
    "category": ["Activos Concentrados"],
    "shortDesc": "Fórmula de tecnología innovadora, que ayuda a enriquecer, estimular y proteger a la piel de la acción de los radicales libres, compensando las carencias de la piel. Facial y corporal.",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Vitamina C Liposomada"],
    "ph": "",
    "variants": [{
      "code": 2023,
      "content": "130 ml.",
      "price": 210,
      "sellPrice": ""
    }],
    "name": "1 Vitamina C Liposomada"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Concentrado activo antioxidante, ayuda a mejorar la firmeza y tonicidad de los tejidos, disminuye el fotoenvejecimieto de la piel. Facial y corporal.",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Acido Lipoico"],
    "ph": "",
    "variants": [{
      "code": 2024,
      "content": "130 ml.",
      "price": 200,
      "sellPrice": ""
    }],
    "name": "2 Acido Lipoico"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Serum concentrado activo, específicamente formulado para compensar las carencias de la piel involutiva, mediante la acción sinérgica de oligoelementos marinos y minerales. Facial y corporal",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Oligoelementos marinos", "Zinc", "Cobre"],
    "ph": "",
    "variants": [{
      "code": 2025,
      "content": "130 ml.",
      "price": 190,
      "sellPrice": ""
    }],
    "name": "3 Oligoelementos Marinos +Zn+Cu"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Lipolítico. Específicamente formulado para el tratamiento de adiposidad localizada en abdomen, cintura y flancos, caderas, glúteos, parte interna de muslos, rodillas y brazos",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Fosfatidilcolina"],
    "ph": "",
    "variants": [{
      "code": 2026,
      "content": "130 ml.",
      "price": 210,
      "sellPrice": ""
    }],
    "name": "4 Fosfatidilcolina"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Celu active concentrado, específicamente formulado para ayudar a disminuir la celulitis, reafirmar y modelar, en el tratamiento corporal.",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Centella Asiática"],
    "variants": [{
      "code": 2027,
      "content": "130 ml.",
      "price": 200,
      "sellPrice": ""
    }],
    "name": "5 Centella Asiatica"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Concentrado activo rico en algas azules. Contiene los veinte aminoácidos esenciales en perfecto balance + proteínas. Reafirmante, reequilibrante. Facial y corporal",
    "fullDesc": "Puede combinarse con aparatología específica para cada tratamiento en particular",
    "application": "Indicada para el tratamiento profesional.",
    "actives": ["Espirulina"],
    "ph": "",
    "variants": [{
      "code": 2028,
      "content": "130 ml.",
      "price": 190,
      "sellPrice": ""
    }],
    "name": "6 Espirulina"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Tratamiento reafirmante con alto poder nutritivo que, por su composición rica en activos compensadores, mejora en firmeza y elasticidad de la piel, recuperando toda su vitalidad y energía.",
    "fullDesc": "Espuma corporal, específicamente formulada para potenciar el tratamiento reductor, anticelulítico y tonificante corporal. Ayuda a eliminar el aspecto visible de la celulitis, mejora la tonicidad de los tejidos, disminuye la sensación de piernas cansadas. Reequilibra a la piel en oligoelementos, minerales, aminoácidos y proteínas. Piel más lisa, firme, elástica, suave y luminosa. Puede utilizarse también como apoyo domiciliario",
    "application": "Apoyo domiciliario: Aplicar antes de hacer ejercicio y después de ducharse. Indicada para todo tipo de piel",
    "actives": ["Cafeína", "Centella asiática", "Acido Lipoico", "Fosfatidilcolina", "Espirulina", "Vitamina C liposomada", "Oligoelementos marinos + Zn + CU"],
    "ph": "",
    "variants": [{
      "code": 2029,
      "content": "130 ml.",
      "price": 200,
      "sellPrice": ""
    }],
    "name": "7 Cafeina"
  }, {
    "category": ["Activos Concentrados"],
    "shortDesc": "Tratamiento reafirmante con alto poder nutritivo que, por su composición rica en activos compensadores, mejora en firmeza y elasticidad de la piel, recuperando toda su vitalidad y energía",
    "fullDesc": "Espuma corporal, específicamente formulada para potenciar el tratamiento reductor, anticelulítico y tonificante corporal. Ayuda a eliminar el aspecto visible de la celulitis, mejora la tonicidad de los tejidos, disminuye la sensación de piernas cansadas. Reequilibra a la piel en oligoelementos, minerales, aminoácidos y proteínas. Piel más lisa, firme, elástica, suave y luminosa. Puede utilizarse también como apoyo domiciliario",
    "actives": ["Cafeína", "Centella Asiática", "Acido Lipoico", "Fosfatidilcolina", "Espirulina", "Vitamina C Liposomada", "Oligoelementos marinos + Zn + CU"],
    "application": "En gabinete, aplicar luego del Scrub, en sinergia con activos concentrados, Centella Asiática, Cafeina, Fosfatidilcolina. Puede combinarse con aparatología. Apoyo domiciliario: Aplicar antes de hacer ejercicio y después de ducharse. Indicada para todo tipo de piel.",
    "variants": [{
      "code": 1049,
      "content": "160 ml.",
      "price": 290,
      "sellPrice": 580
    }],
    "name": "Espuma ACTIVE 7"
  }],
  "Monodosis": [{
    "category": ["Monodosis"],
    "shortDesc": "Shock hidratante - antioxidante de acción sinérgica: Ayudan a hidratar profundamente la piel y protegerla de la acción medioambiental, revitalizando su resistencia y luminosidad",
    "fullDesc": "Refuerzan la barrera protectora. Constituyen humectantes antioxidantes con propiedades anti envejecimiento. Indicadas para: Alta hidratación, pacientes con acné, rosácea, piel sensible, hiperqueratosis, psoriasis. Pacientes bajo tratamientos tópicos o sistémicos que resecan la piel.",
    "application": "Aplicar con la piel limpia, por la mañana y por la noche.",
    "actives": ["Gluconolactona", "Pentaglicanos"],
    "ph": "",
    "variants": [{
      "code": 1030,
      "content": "6 x 5 ml.",
      "price": 540,
      "sellPrice": 1080
    }],
    "name": "Hydroviton - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Ayudan a reafirmar la piel al mismo tiempo que proporcionan protección de alto nivel frente al impacto medioambiental",
    "fullDesc": "Estimulan las defensas cutáneas y el metabolismo celular. Protectoras de células de Langerhans. Protectoras del sistema inmunitoario de la piel. Indicadas para: el cuidado de la piel sensible, roseacea o afectada por el estrés.",
    "application": "Aplicar por la mañana y por la noche.",
    "actives": ["Vitamina C"],
    "ph": "",
    "variants": [{
      "code": 1031,
      "content": "6 x 5 ml.",
      "price": 515,
      "sellPrice": 1030
    }],
    "name": "Vitamina F Pure - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Shock sinérgico combinado, monodosis indicadas para el tratamiento de manchas cutáneas, e irregularidades de la pigmentación",
    "fullDesc": "Promueven la regulación del ciclo celular. Promueven la sobrevivencia celular. Resistencia al estrés y anti-envejecimiento. Activan la producción de sirtuinas acudiendo al rescate y reparando las células dañadas. Indicadas para: tratamiento de manchas cutaneas, anti-envejecimiento ",
    "application": "Aplicación: trabajar en forma circular en las manchas o tratar zonas con irregularidades pigmentarias, luego extender a toda la piel.",
    "actives": ["Grosella", "Reservatrol"],
    "ph": "",
    "variants": [{
      "code": 1032,
      "content": "6 x 5 ml.",
      "price": 583,
      "sellPrice": 1166
    }],
    "name": "Skin Dose - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Shock antioxidante-antiglicación sinérgico combinado de formulación avanzada.",
    "fullDesc": "Ayudan a combatir la acción de los radicales libres, restableciendo en la piel su natural belleza y luminosidad desde las primeras aplicaciones. Mejoran el rejuvenecimiento celular. ",
    "application": "aplicar por la mañana y por la noche",
    "actives": ["Blueberry", "Mulberry", "Cranberry"],
    "ph": "",
    "variants": [{
      "code": 1033,
      "content": "6 x 5 ml.",
      "price": 500,
      "sellPrice": 1000
    }],
    "name": "Bio Dose - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Tratamiento reparador nocturno de contorno de ojos.",
    "fullDesc": "Calmante, actúa como un escudo frente a las agresiones medioambientales. Fuente de Ácidos Grasos Esenciales, antioxidantes, proteínas, aminoácidos, vitaminas y minerales zinc-selenio- cobre. Las Monodosis HSP- 20, ayudan a restaurar y preservar la apariencia juvenil de la delicada piel de la zona más expresiva del rostro.",
    "application": "Aplicar por la noche en la zona de contorno de ojos.",
    "actives": ["Chía", "Sepicalm"],
    "ph": "",
    "variants": [{
      "code": 1034,
      "content": "6 x 5 ml.",
      "price": 590,
      "sellPrice": 1180
    }],
    "name": "HSP - 20 - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Avanzado tratamiento anti- envejecimiento. Combinan péptidos y proteínas activas que proporcionan un tratamiento efectivo para mantener la cantidad y calidad del colágeno.",
    "fullDesc": "Indicadas para contorno de labios y líneas de expresión. Disminuyen líneas de expresión y arrugas, al mismo tiempo que mejoran y reafirman. Anti-Glicación, evitan la formación de los AGEs, subproductos de la glicación cuya acumulación induce irreversiblemente a la pérdida de elasticidad. Piel más descansada, suave y radiante desde el momento de la aplicación.",
    "application": "Aplicar por la mañana y por la noche",
    "actives": ["Trylagen"],
    "ph": "",
    "variants": [{
      "code": 1035,
      "content": "6 x 5 ml.",
      "price": 630,
      "sellPrice": 1260
    }],
    "name": "Complex AM 40 - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Refuerza los mecanismos de regeneración y recuperación de la piel, mediante múltiples modos de acción frente a los marcadores de envejecimiento de la piel.",
    "fullDesc": "Tratamiento reparador nocturno. Ricas en aminoácidos. Contienen propiedades reequilibrantes, antiinflamatorias, descongestivas, nutritivas, remineralizantes y re-oxigenantes. Estimulan intercambios celulares. Triple acción reafirmante: Antioxidantes: trampas de exceso de radicales libres en una etapa temprana. Estimulan la contracción de las fibras de colágeno y protegen el tejido de soporte de la piel. Efecto relleno.",
    "application": "Aplicar todos los días, por la noche en el rostro, cuello y escote",
    "actives": ["Sepilifth", "Algas azules"],
    "ph": "",
    "variants": [{
      "code": 1036,
      "content": "6 x 5 ml.",
      "price": 610,
      "sellPrice": 1220
    }],
    "name": "Complex AM 45 - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Ampollas de máxima tecnología, a base de Vitamina C específicamente estabilizada.",
    "fullDesc": "Ayudan a combatir el oxígeno reactivo, aportando mayor protección a las células madre de piel Propiedades antioxidantes. ",
    "application": "Aplicar diariamente por la mañana.",
    "actives": ["Vitamina C"],
    "ph": "",
    "variants": [{
      "code": 1037,
      "content": "6 x 5 ml.",
      "price": 600,
      "sellPrice": 1200
    }],
    "name": "Vitamina C - Monodosis"
  }, {
    "category": ["Monodosis"],
    "shortDesc": "Las ampollas ARGAN BIO+ combinan las propiedades únicas del Aceite de Argán, procedente del suroeste de Marruecos, con vehículos específicamente desarrollados",
    "fullDesc": "Ayudan a retrasar el envejecimiento celular, disminuir estrías y cicatrices. Aportan protección a las células dérmicas. Regeneran la piel y combaten el envejecimiento. Reestructurador y renovador celular. Eliminan tanto las impurezas como las marcas de la edad o del acné. Evitan la inflamación, generan tonicidad.",
    "application": "Aplicar diariamente. Cuando se traten estrías y cicatrices, aplicar dos veces por día",
    "actives": ["Argan Oil"],
    "ph": "",
    "variants": [{
      "code": 1038,
      "content": "6 x 5 ml.",
      "price": 630,
      "sellPrice": 1260
    }],
    "name": "Argan Bio + - Monodosis"
  }],
  "Protección Solar": [{
    "category": ["Protección Solar"],
    "shortDesc": "Fluido Facial con color. Protección reforzada frente a los rayos UVA y UVB, gracias a un sistema filtrante óptimo Específico, combinado con Acido Hialurónico, hidratante protector de la piel.",
    "fullDesc": "Ayuda a prevenir intolerancias solares y daño celular provocado por la acción de rayos UV. Textura fluida, no grasa. Acabado imperceptible. Sin perfume. Sin parabenos, con color",
    "application": "Aplicar la crema antes de salir a la playa o la piscina, y como mínimo 30 minutos antes de exponerse al sol. Extender PROTECTION TIME 50+ sobre la piel bien seca. Utilizar protección solar aunque esté nublado. Reaplicar cuando sea necesario de acuerdo a cada fototipo cutáneo. Se recomienda cada dos horas para mantener la protección, especialmente después de un baño o nadar",
    "actives": ["Ácido Hialurónico"],
    "variants": [{
      "code": 1044,
      "content": "40 ml",
      "price": 290,
      "sellPrice": 580
    }],
    "name": "PROTECTION TIME  Color  Ác Hialurónico"
  }, {
    "category": ["Protección Solar"],
    "shortDesc": "Fluído facial. Protección reforzada frente a los rayos UVA y UVB, gracias a un sistema filtrante óptimo Específico, combinado con Sepicalm S, biovector aminoácido con minerales, mejorando el confort cutáneo.",
    "fullDesc": "Ayuda a prevenir intolerancias solares. Textura fluida, no graso. Acabado imperceptible. Sin perfume. Sin parabenos. Testeados en USA bajo normas FDA-COLIPA",
    "application": "Aplicar la crema antes de salir a la playa o la piscina, y como mínimo 30 minutos antes de exponerse al sol. Extender PROTECTION TIME 50+ sobre la piel bien seca. Utilizar protección solar aunque esté nublado. Reaplicar cuando sea necesario de acuerdo a cada fototipo cutáneo. Se recomienda cada dos horas para mantener la protección, especialmente después de un baño o nadar",
    "actives": ["Sepicalm V.G"],
    "ph": "",
    "variants": [{
      "code": 1045,
      "content": "40 ml",
      "price": 280,
      "sellPrice": 560
    }],
    "name": "PROTECTION TIME Sepicalm V.G."
  }, {
    "category": ["Protección Solar"],
    "shortDesc": "Protección reforzada frente a los rayos UVA y UVB, gracias a un sistema filtrante óptimo Específico, combinado con Grosella, antioxidante protector de la piel.",
    "fullDesc": "Ayuda a prevenir intolerancias solares, manchas pigmentarias foto-inducidas y daño celular provocado por la acción de los radicales libres y rayos UV. Textura fluida, no grasa, acabado imperceptible. Sin perfume. Sin parabenos, con color.",
    "application": "Aplicar la crema antes de salir a la playa o la piscina, y como mínimo 30 minutos antes de exponerse al sol. Extender PROTECTION TIME 50+ sobre la piel bien seca. Utilizar protección solar aunque esté nublado. Reaplicar cuando sea necesario de acuerdo a cada fototipo cutáneo. Se recomienda cada dos horas para mantener la protección, especialmente después de un baño o nadar",
    "actives": ["Grosella"],
    "variants": [{
      "code": 2044,
      "content": "200 ml",
      "price": 610,
      "sellPrice": 1220
    }],
    "name": "PROTECTION TIME  Color Grosella"
  }, {
    "category": ["Protección Solar"],
    "shortDesc": "Protección reforzada frente a los rayos UVA y UVB, gracias a un sistema filtrante óptimo Específico, combinado con Aceite de Sésamo, rico en ácidos grasos esenciales, coadyuvante en la protección.",
    "fullDesc": "Ayuda a prevenir intolerancias solares, manchas pigmentarias foto-inducidas y daño celular provocado por la acción de rayos UV. Textura ultra fluida, no grasa, no deja marcas blancas. Acabado imperceptible. Sin perfume. Sin parabenos",
    "application": "Aplicar la crema antes de salir a la playa o la piscina, y como mínimo 30 minutos antes de exponerse al sol. Extender PROTECTION TIME 50+ sobre la piel bien seca. Utilizar protección solar aunque esté nublado. Reaplicar cuando sea necesario de acuerdo a cada fototipo cutáneo. Se recomienda cada dos horas para mantener la protección, especialmente después de un baño o nadar",
    "actives": ["Aceite de Sésamo"],
    "variants": [{
      "code": 2045,
      "content": "200 ml",
      "price": 600,
      "sellPrice": 1200
    }],
    "name": "PROTECTION TIME  Aceite de Sésamo"
  }],
  "Corporales": [{
    "category": ["Corporales"],
    "shortDesc": "Crema antioxidante corporal, específicamente formulada para proteger a la piel de la acción de los radicales libres",
    "fullDesc": "Aportando mayor beneficio mediante la protección de la acción solar. Evita el fotoenvejecimiento de la piel. Tonificante, Mejora la hidratación y elasticidad. Piel de seda.",
    "application": "",
    "actives": ["Polifenoles de pepitas de uva", "Tocoferol", "FPS"],
    "ph": "",
    "variants": [{
      "code": 1046,
      "content": "200ml.",
      "price": 190,
      "sellPrice": 380
    }, {
      "code": 2046,
      "content": "500 ml.",
      "price": 370,
      "sellPrice": ""
    }],
    "name": "Crema Antioxidante Corporal"
  }, {
    "category": ["Corporales"],
    "shortDesc": "",
    "fullDesc": "Strialess Cell2Cell prevención y corrección, ayuda a reforzar la elasticidad. Renovación celular y flexibilidad. Mejora el aspecto visible de la piel",
    "actives": ["Cell2Cell", "DermCom"],
    "variants": [{
      "code": 1050,
      "content": "160 ml.",
      "price": 300,
      "sellPrice": 600
    }],
    "name": "Espuma Strialess"
  }, {
    "category": ["Corporales"],
    "shortDesc": "",
    "fullDesc": "Booster shot corporal, programa intensivo. Indicado para ayudar a reducir las acumulaciones grasas, donde mas lo necesitas, procurando el bienestar",
    "actives": ["Adiposlim", "Garcinia Cambogia"],
    "variants": [{
      "code": 1051,
      "content": "160ml.",
      "price": 300,
      "sellPrice": 600
    }],
    "name": "S.O.S Sculpt"
  }, {
    "category": ["Corporales"],
    "shortDesc": "",
    "fullDesc": "Booster shot corporal. Complejo de activación global que ayuda a reducir y evitar nuevos almacenamientos. Previene y protege",
    "actives": ["Adopoless", "Cafe Verde"],
    "variants": [{
      "code": 1052,
      "content": "160 ml.",
      "price": 300,
      "sellPrice": 600
    }],
    "name": "S.O.S Extreme"
  }]
};
var dom = React.createElement;
var categories = ["Higiene", "Máscaras", "Ácido Hialurónico", "Peeling", "Corporales", "Hombres", "Protección Intensiva", "Monodosis", "Activos Concentrados", "Protección Solar"];

var Section = function Section(title, paragraph) {
  return dom("div", null, dom("h4", {
    className: "section-name"
  }, title), dom("p", {
    className: "section-body"
  }, paragraph));
};

var Product = function Product(product, key) {
  return dom('div', {
    key: key,
    className: 'product-container'
  }, dom('h3', {
    className: 'product-name'
  }, product.name), dom('div', {
    className: 'product-body'
  }, dom('p', {
    className: 'product-short-desc'
  }, product.shortDesc), Section('Descripción', product.fullDesc), Section('Aplicación', product.application)));
};

var Category = function Category(categoryName, products) {
  return dom('div', {
    className: 'category-container'
  }, dom('div', {
    className: 'category-title',
    id: categoryName.toLowerCase().replace(' ', '-')
  }, dom('h2', {
    className: 'category-name'
  }, categoryName)), products.map(function (p, i) {
    return Product(p, i);
  }));
};

var Vademecum = function Vademecum() {
  return categories.map(function (categoryName, i) {
    return dom('div', {
      key: i
    }, Category(categoryName, products[categoryName]));
  });
};

var domContainer = document.querySelector('#vademecum');
ReactDOM.render(dom('div', {
  className: ''
}, Vademecum()), domContainer);