let clients = [
  {
    nameClient: 'Michelangelo',
    srcClient: 'assets/img/cliente/cliente-tortuga.png',
    namePizza: 'Pepperonni',
    time: 100,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'mozarella', 'salami'],
    clues: {
      easyClues: ['A falta de Pepperonni siempre es bueno el salami Picante', 'Sal, aceite... y 3 ingredientes más', 'El tomate frito o la salsa de tomate nunca debe faltar'],
      hardClues: ['Origen Napolitano', 'Siempre la comía en todos los episodios', 'Nos encanta a las torugas Ninja', 'Sal y ninguna especias más'],
    },
  },
  {
    nameClient: 'Vivaldi',
    srcClient: 'assets/img/cliente/cliente-vivaldi.png',
    namePizza: 'Cuatro Estaciones',
    time: 120,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'tomate', 'mozarella', 'alcachofas', 'aceitunas-negras', 'jamon', 'setas', 'pimienta-negra'],
    clues:{
      easyClues: ['Tiene alimentos de las 4 estaciones', 'Cuatro Estaciones como mi grupo de conciertos', 'Ni pescado ni fruta por favor', 'Los ingredientes como las estaciones, no se mezclan al completo', 'Como buena Pizza hay que empezar con los básicos', 'Las aceitunas verdes no le pegan demasiado'],
      hardClues: ['Si estás indeciso, está es tu pizza', 'Es perfecta para cualquier estación', 'No te olvides de darle un poco de sazón', 'Si sabes quien soy, el nombre de la Pizza te será fácil adivinar'],
    },
  },
  {
    nameClient: 'Moana',
    srcClient: 'assets/img/cliente/cliente-moana.png',
    namePizza: 'Hawaiana',
    time: 150,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pina', 'queso-rallado', 'jamon', 'oregano'],
    clues: {
      easyClues: ['Se creo en Canadá pero todos piensan que son de mi tierra', 'Se piensa que son de Hawai', 'Hawaiana como yo'],
      hardClues: ['Se le adjudica al cocinero Sam Panopoulos', 'Se creó en Satelli Restaurant en Ontario, Canadá', 'Se creo en 1962', 'Muy oidada o muy querida, no deja indiferente a nadie'],
    },
  },
  {
    nameClient: 'Daisy',
    srcClient: 'assets/img/cliente/cliente-daisy.png',
    namePizza: 'Margherita',
    time: 60,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'tomate', 'ajo', 'mozarella', 'albahaca', 'pimienta-negra', 'oregano'],
    clues: {
      easyClues: ['Se llama así por la reina Margherita di Savoia', 'Sus ingredientes representan los colores de la bandera italiana', 'Margherita es su nombre', 'Sin especias no me convences', 'No te la pediría nunca un vámpiro'],
      hardClues: ['Origen Napolitano', 'Clásica Pizza Italiana', 'Es la pizza de las reinas', 'Surgio en 1889 en el Palacio de Capodimonte', 'Se le atribuye al cocinero Raffaele Esposito', 'La favorita de los niños', 'En lo simple está la perfección'],
    },
  },
  {
    nameClient: 'Heidi',
    srcClient: 'assets/img/cliente/cliente-heidi.png',
    namePizza: 'Primavera',
    time: 90,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pimiento', 'maiz', 'queso', 'tomate', 'oregano', 'huevo-duro'],
    clues: {
      easyClues: ['Verano, Otoño, Invierno y...', 'Las gallinas nos ayudan con un ingrediente', 'La encontrarás en los restaurantes como Primavera', 'Un ingrediente amarillo encaja en está Pizza muy bien'],
      hardClues: ['Muy tradicional', 'Evoca los colores primaverales'],
    },
  },
  {
    nameClient: 'Mario Bros',
    srcClient: 'assets/img/cliente/cliente-mario.png',
    namePizza: 'Funghi',
    time: 50,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'queso', 'setas', 'jamon', 'mozarella', 'oregano'],
    clues: {
      easyClues: ['Su protagonista son las setas', 'Su nombre significa hongos', 'Su ingrediente especial me hace crecer mucho más', 'La llaman Funghi', 'Si la comiese Toad sería un caníval'],
      hardClues: ['Me recuerda a Otoño', 'Es de origen Napolitano', 'Para paladares con devoción por los sabores auténticos', 'No es 100% vegetariana'],
    },
  },
  {
    nameClient: 'Speedy Gonzales',
    srcClient: 'assets/img/cliente/cliente-gonzalez.png',
    namePizza: 'Diavola',
    time: 90,
    ingredients: ['sal', 'aceite', 'mozarella', 'salami', 'tomate-frito', 'tomate', 'albahaca', 'oregano'],
    clues: {
      easyClues: ['El picante es su toque especial', 'A veces se usa Chorizo pero muy picante', 'Me encanta la pizza picante', 'Diavola es su nombre', 'No te olvides del sazón'],
      hardClues: ['Es la típica pizza italiana', 'No es apta para todo el mundo', 'Nos gusta a los Méxicanos','Es una de las pizzas más vendidas en latinoámerica y Países Bajos'],
    },
  },
  {
    nameClient: 'Paris Hilton',
    srcClient: 'assets/img/cliente/cliente-hilton.png',
    namePizza: 'Caprichosa',
    time: 80,
    ingredients: ['sal', 'aceite', 'mozarella', 'huevo-duro', 'anchoas','aceitunas-negras', 'albahaca', 'setas', 'alcachofas'],
    clues: {
      easyClues: ['Es una pizza Caprichosa, como yo', 'Un ingrediente viene del mar'],
      hardClues: ['Pizza para gente exigente','Es una explosión de sabores'],
    },
  },
]