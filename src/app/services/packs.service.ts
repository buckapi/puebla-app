import {Pack} from '@interfaces/pack';

// export interface Pack {
//   name: string;
//   valid: number; // Cambio de entradas a valid
//   location: string;
//   description: string;
//   shortDescription: string;
//   promocionado: boolean;
//   duration: string; // Nuevo campo de duración
//   cost: string; // Nuevo campo de costo
//   images: string[];
// }

export const PACKS: Pack[] = [
  {
    name: "Package 'visit'",
    valid: 5, 
    location: "Puebla",
    description: "Transportation CDMX airport or Puebla Airport - Puebla Hotel round trip.\n\nTranslator and Historian in every moment.\n\nVisit Cholula and Tehotihuacan pyramids.\n\nVisit 20 relevant spots of Puebla.\n\nPoint of myths and legends.\n\nValid for up to: 5 people.\n\nDuration: 4 days.\n\nIncludes: transportation service with driver, translator and guide during the 4 days.\n\nMeals, drinks and lodging NOT included.\n\nCost: 2000 USD$.",
    shortDescription: "Transportation CDMX-Puebla Package. Visit Cholula and Tehotihuacan pyramids, 20 relevant spots of Puebla, and points of myths and legends.",
    promocionado: false,
    duration: "4 days", 
    cost: "2000 USD$",
    images: ["assets/assetspuebla/images/city/sydney.jpg"]
  },
  {
    name: "Puebla Package ",
    valid: 5, 
    location: "Puebla",
    description: "Transportation CDMX airport or Puebla Airport - Puebla Hotel round trip.\n\nTranslator and Historian in every moment.\n\nVisit Cholula and Tehotihuacan pyramids.\n\nVisit 20 relevant spots of Puebla.\n\nPoint of myths and legends.\n\nValid for up to: 5 people.\n\nDuration: 4 days.\n\nIncludes: transportation service with driver, translator and guide during the 4 days.\n\nMeals, drinks and lodging NOT included.\n\nCost: 2000 USD$.",
    shortDescription: "Visit 50 relevant spots of Puebla. Visit Africam Safari. Visit Magical Towns. Gastronomic Tour (More than 20 dishes), Museums and famous spots.",
    promocionado: false,
    duration: "4 days", 
    cost: "2000 USD$", 
    images: ["assets/assetspuebla/images/city/singapo.jpg"]
  },
  {
    name: "Services",
    valid: 10, // Cambio de entradas a valid
    location: "Puebla",
    description: "Transportation CDMX or Puebla Airport - Hotel 'Puebla' round trip.\n\nTranslator and Historian in every moment.\n\nVisit Cholula and Tehotihuacan pyramids.\n\nVisit 50 relevant spots of Puebla.\n\nVisit Africam Safari.\n\nVisit Magical Towns.\n\nGastronomic Tour (More than 20 dishes).\n\nWine tasting.\n\nMexican Ethnic Culture Tour.\n\nMuseums and famous spots.\n\nSpot of myths and legends.\n\n'7 days of total immersion in the poblano culture, you will eat, drink and live a total poblano experience'.\n\nValid for up to: 5 people.\n\nDuration: 7 days.\n\nIncludes: transportation service with driver, translator and guide during the 7 days.\n\nMeals, drinks and lodging NOT included.\n\nCost: 3 500 USD",
    shortDescription: "Translator and Historian in every moment. Visit Cholula and Tehotihuacan pyramids, 50 relevant spots of Puebla, Africam Safari, Magical Towns, Gastronomic Tour, Wine tasting, Mexican Ethnic Culture Tour, Museums and famous spots, and points of myths and legends. '7 days of total immersion in the poblano culture'.",
    promocionado: false,
    duration: "7 days", // Nueva duración para el Puebla Package
    cost: "3 500 USD", // Nuevo costo para el Puebla Package
    images: ["assets/assetspuebla/images/city/tokyo.jpeg"],
    
  },
  // Agrega aquí otros paquetes que desees mantener en la estructura.
];



// export const PACKS: Pack[] = [
//   {
//     "name": "Capilla del Rosario",
//     "entradas": 2,
//     "location": "Puebla",
//     "description": "La Capilla del Rosario es una joya arquitectónica ubicada en Puebla. Su impresionante diseño y ornamentación barroca la convierten en una visita obligada para los amantes del arte y la historia. Admira los detalles tallados a mano, los frescos coloridos y la atmósfera de serenidad que rodea este lugar sagrado.",
//     "shortDescription": "Impresionante capilla barroca en Puebla. Detalles tallados a mano y frescos coloridos.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/tokyo.jpeg"
//     ]
//   },
//   {
//     "name": "Zócalo de Puebla",
//     "entradas": 24,
//     "location": "Puebla",
//     "description": "El Zócalo de Puebla es el corazón histórico y cultural de la ciudad. Rodeado de impresionantes edificios coloniales, este lugar emblemático ofrece una atmósfera vibrante llena de tiendas, restaurantes y actividades culturales. Disfruta de un paseo por sus calles adoquinadas, visita la Catedral y admira la belleza arquitectónica que lo rodea.",
//     "shortDescription": "Corazón histórico y cultural de Puebla. Edificios coloniales y vibrante ambiente.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/barca.jpeg"
//     ]
//   },
//   {
//     "name": "Catedral Basílica de Puebla",
//     "entradas": 28,
//     "location": "Puebla",
//     "description": "La Catedral Basílica de Puebla es una obra maestra del estilo arquitectónico barroco. Sus imponentes torres y fachadas detalladas te dejarán maravillado. Explora el interior y admira sus altares dorados, hermosos vitrales y la tranquilidad que se respira en este lugar de culto.",
//     "shortDescription": "Imponente catedral barroca en Puebla. Altares dorados y hermosos vitrales.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/newyork.jpg"
//     ]
//   },
//   {
//     "name": "Museo Amparo",
//     "entradas": 24,
//     "location": "Puebla",
//     "description": "El Museo Amparo es uno de los principales destinos culturales en Puebla. Aquí encontrarás una impresionante colección de arte y artefactos históricos que te sumergirán en la rica historia y cultura de la región. Explora las exhibiciones permanentes y temporales, participa en actividades educativas y disfruta de la belleza de este museo.",
//     "shortDescription": "Destino cultural en Puebla. Colección de arte e historia.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/paris.jpg"
//     ]
//   },
//   {
//     "name": "Callejón de los Sapos",
//     "entradas": 24,
//     "location": "Puebla",
//     "description": "El Callejón de los Sapos es un encantador rincón de Puebla lleno de vida y cultura. Aquí encontrarás tiendas de antigüedades, galerías de arte y cafés acogedores. Da un paseo por sus coloridas calles empedradas, admira las fachadas de los edificios coloniales y sumérgete en la atmósfera bohemia de este lugar único.",
//     "shortDescription": "Encantador rincón lleno de vida y cultura en Puebla. Tiendas de antigüedades y galerías de arte.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/amsterdam.jpg"
//     ]
//   },
//   {
//     "name": "Mercado el Parian",
//     "entradas": 28,
//     "location": "Puebla",
//     "description": "El Mercado el Parian es un lugar animado y bullicioso donde puedes disfrutar de la auténtica experiencia de compra en Puebla. Aquí encontrarás una gran variedad de productos locales, desde artesanías y textiles hasta alimentos tradicionales. Sumérgete en los aromas, colores y sabores de este mercado tradicional y llévate a casa recuerdos únicos.",
//     "shortDescription": "Mercado animado y bullicioso en Puebla. Productos locales y tradicionales.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/singapo.jpg"
//     ]
//   },
//   {
//     "name": "Fuertes de Loreto",
//     "entradas": 24,
//     "location": "Puebla",
//     "description": "Los Fuertes de Loreto son un conjunto de fortificaciones históricas ubicadas en Puebla. Estos fuertes tienen una gran importancia histórica y cultural, ya que fueron escenario de importantes eventos durante la Batalla de Puebla. Explora los museos y exhibiciones dentro de los fuertes, admira las vistas panorámicas de la ciudad y sumérgete en la historia de México.",
//     "shortDescription": "Conjunto de fortificaciones históricas en Puebla. Importancia histórica y cultural.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/sydney.jpg"
//     ]
//   },
//   {
//     "name": "Biblioteca Palafoxiana",
//     "entradas": 24,
//     "location": "Puebla",
//     "description": "La Biblioteca Palafoxiana es una de las bibliotecas más antiguas y hermosas de América. Fundada en el siglo XVII, alberga una valiosa colección de libros y manuscritos históricos. Admira su arquitectura colonial, explora sus estanterías llenas de tesoros literarios y sumérgete en la historia que se respira en este lugar único.",
//     "shortDescription": "Biblioteca histórica en Puebla. Colección de libros y manuscritos.",
//     "promocionado": true,
//     "images": [
//       "assets/assetspuebla/images/city/angeles.jpeg"
//     ]
//   }
// ];