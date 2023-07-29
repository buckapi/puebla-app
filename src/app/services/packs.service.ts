import {Pack} from '@interfaces/pack';

export const PACKS: Pack[] = [
  {
    name: "Package Visit",
    valid: 5, 
    location: "Puebla",
    description: "Transportation CDMX airport or Puebla Airport - Puebla Hotel round trip.",
    shortDescription: "Transportation CDMX-Puebla Package. Visit Cholula and Tehotihuacan pyramids, 20 relevant spots of Puebla, and points of myths and legends.",
    items:[
      "Translator and Historian in every moment",
      "Visit Cholula and Tehotihuacan pyramids",
      "Visit 20 relevant spots of Puebla",
      "Point of myths and legends"  
    ],
    promocionado: false,
    duration: "4 days", 
    cost: "2000 USD$",
    Includes: " transportation service with driver, translator and guide during the 4 days. Meals, drinks and lodging NOT included. ",
    images: ["assets/assetspuebla/images/city/sydney.jpg"],
    listerings:[],
  },
  {
    name: "Puebla Package ",
    valid: 5, 
    location: "Puebla",
    description: "Transportation CDMX or Puebla Airport - Hotel PUEBLA round trip. Translator and Historian in every moment. ",
    shortDescription: "Visit 50 relevant spots of Puebla. Visit Africam Safari. Visit Magical Towns. Gastronomic Tour (More than 20 dishes), Museums and famous spots.",
    items:[
      "Visit Cholula and Tehotihuacan pyramids.",
      "Visit 50 relevant spots of Puebla.",
      "Visit Africam Safari.",
      "Visit Magical Towns."
     ],
    promocionado: false,
    duration: "7 days", 
    cost: "3500 USD$", 
    Includes:" transportation service with driver, translator and guide during the 7 days, Meals, drinks and lodging NOT included.",
    images: ["assets/assetspuebla/images/city/singapo.jpg"],
    listerings: [
      "Gastronomic Tour (More than 20 dishes).    Wine tasting.    Mexican Ethnic Culture Tour.",
      "Museums and famous spots   Spot of myths and legends. 7 days of total immersion in the poblano culture, you will eat, drink and live a total poblano experience"
    ],
   
  },
  // {
  //   name: "Services",
  //   valid: 10, // Cambio de entradas a valid
  //   location: "Puebla",
  //   description: "Transportation CDMX or Puebla Airport - Hotel 'Puebla' round trip.\n\nTranslator and Historian in every moment.\n\nVisit Cholula and Tehotihuacan pyramids.\n\nVisit 50 relevant spots of Puebla.\n\nVisit Africam Safari.\n\nVisit Magical Towns.\n\nGastronomic Tour (More than 20 dishes).\n\nWine tasting.\n\nMexican Ethnic Culture Tour.\n\nMuseums and famous spots.\n\nSpot of myths and legends.\n\n'7 days of total immersion in the poblano culture, you will eat, drink and live a total poblano experience'.\n\nValid for up to: 5 people.\n\nDuration: 7 days.\n\nIncludes: transportation service with driver, translator and guide during the 7 days.\n\nMeals, drinks and lodging NOT included.\n\nCost: 3 500 USD",
  //   shortDescription: "Translator and Historian in every moment. Visit Cholula and Tehotihuacan pyramids, 50 relevant spots of Puebla, Africam Safari, Magical Towns, Gastronomic Tour, Wine tasting, Mexican Ethnic Culture Tour, Museums and famous spots, and points of myths and legends. '7 days of total immersion in the poblano culture'.",
  //   items1:"",
  //   items2:"",
  //   items3:"",
  //   items4:"",
  //   promocionado: false,
  //   duration: "7 days", // Nueva duración para el Puebla Package
  //   cost: "3 500 USD", // Nuevo costo para el Puebla Package
  //   images: ["assets/assetspuebla/images/city/tokyo.jpeg"],
  //   listering:"",
  //   listering1:"",
  //   Includes:""    
  // },
  
];
